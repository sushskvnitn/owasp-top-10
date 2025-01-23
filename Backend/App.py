from flask import Flask, request, jsonify
from flask_cors import CORS
import xml.etree.ElementTree as ET
from defusedxml.ElementTree import parse as safe_parse
import sqlite3
from hashlib import sha256
import pickle
import base64
import yaml
import binascii
app = Flask(__name__)
CORS(app)

# Database setup
def init_db():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT,
            role TEXT,
            age INTEGER,
            email TEXT
        )
    ''')
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password, role,age,email) VALUES (1, 'admin', 'admin123', 'admin', 30,'admin@gmail' )")
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password, role,age,email) VALUES (2, 'user', 'user123', 'user', 25,'user@gmail' )")
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password, role,age,email) VALUES (3, 'guest', 'guest123', 'user', 20,'guest@gmail' )")
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password, role,age,email) VALUES (4, 'test', 'test123', 'user', 22,'test@gmail' )")
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password, role,age,email) VALUES (5, 'demo', 'demo123', 'admin', 24,'demo@gmail' )")
    connection.commit()
    connection.close()

# Vulnerable endpoint (demonstrates SQL injection)
@app.route('/sql-injection-demo', methods=['POST'])
def sql_injection_demo():
    data = request.get_json()
    username = data.get('username', '')
    password = data.get('password', '')

    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()

    # Vulnerable query (SQL injection possible)
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    try:
        cursor.execute(query)
        user = cursor.fetchone()
        connection.close()

        if user:
            return jsonify({"Status": 200, "message": f"Welcome, {user[1]}!"})
        else:
            return jsonify({"Status": 404, "message": "Invalid username or password!"})
    except Exception as e:
        connection.close()
        return jsonify({"message": f"An error occurred: {e}"}), 500

# Secure endpoint (prevents SQL injection)
@app.route('/sql-injection-safe-demo', methods=['POST'])
def sql_injection_safe_demo():
    data = request.get_json()
    username = data.get('username', '')
    password = data.get('password', '')

    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()

    # Secure query using parameterized queries
    query = "SELECT * FROM users WHERE username = ? AND password = ?"
    try:
        cursor.execute(query, (username, password))
        user = cursor.fetchone()
        connection.close()

        if user:
            return jsonify({"Status": 200, "message": f"Welcome, {user[1]}!"})
        else:
            return jsonify({"Status": 404, "message": "Invalid username or password!"})
    except Exception as e:
        connection.close()
        return jsonify({"message": f"An error occurred: {e}"}), 500

# Sensitive Data Exposure: Insecure Endpoint
@app.route('/insecure-user-data', methods=['GET'])
def insecure_user_data():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    connection.close()

    # Exposing sensitive data (e.g., passwords)
    user_data = [
        {"id": user[0], "username": user[1], "password": user[2]} for user in users
    ]
    return jsonify(user_data), 200

# Sensitive Data Exposure: Secure Endpoint
@app.route('/secure-user-data', methods=['GET'])
def secure_user_data():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT id, username FROM users")
    users = cursor.fetchall()
    connection.close()

    # Only exposing non-sensitive data
    user_data = [
        {"id": user[0], "username": user[1]} for user in users
    ]
    return jsonify(user_data), 200


@app.route('/brokenauthdemo', methods=['POST'])
def broken_auth_demo():
    data = request.get_json()
    username = data.get('username', '')
    password = data.get('password', '')

    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()

    # Vulnerable query (Broken Authentication: No parameterization or session handling)
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    try:
        cursor.execute(query)
        user = cursor.fetchone()
        connection.close()

        if user:
            return jsonify({"Status": 200, "message": f"Welcome, {username}!"})
        else:
            return jsonify({"Status": 404, "message": "Invalid username or password!"})
    except Exception as e:
        connection.close()
        return jsonify({"message": f"An error occurred: {e}"}), 500

# Broken Access Control Demo
@app.route('/dashboard', methods=['GET'])
def dashboard():
    # No authentication check here, so anyone can access the dashboard (Broken Access Control)
    return jsonify({"message": "Welcome to the Dashboard!"})


@app.route('/xss-demo', methods=['POST'])
def xss_demo():
    data = request.get_json()
    user_input = data.get("input", "")
    # Simulate processing and returning unsanitized user input
    return jsonify({"message": f"Hello, {user_input}"})

class EvilObject:
    def __init__(self, data):
        self.data = data

    def __reduce__(self):
        return (os.system, ('echo "This is a malicious command";',))

        
@app.route('/deserialize', methods=['POST'])
def deserialize():
    data = request.json
    payload = data.get("payload")
    payload_type = data.get("type")

    try:
        decoded = base64.b64decode(payload)
        if payload_type == "pickle":
            result = pickle.loads(decoded)  # Insecure deserialization
        elif payload_type == "yaml":
            result = yaml.safe_load(decoded)  # Insecure YAML deserialization
        else:
            return jsonify({"error": "Invalid payload type"}), 400

        return jsonify({"result": str(result)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Vulnerable Endpoint: Demonstrates XXE
@app.route('/xxe-demo', methods=['POST'])
def xxe_demo():
    """
    Demonstrates an insecure endpoint vulnerable to XXE.
    Accepts XML input and parses it directly without protection.
    """
    try:
        # Parse the incoming XML data (Vulnerable to XXE)
        tree = ET.ElementTree(ET.fromstring(request.data))
        root = tree.getroot()

        # Extract and return the XML content as a response
        response_data = {child.tag: child.text for child in root}
        return jsonify({"status": "success", "data": response_data}), 200
    except Exception as e:
        return jsonify({"status": "error", "error": str(e)}), 400

@app.route('/securitymisconfiguration/<username>', methods=['GET'])
def security_misconfiguration(username):
    # Intentionally exposing user data without authentication
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT id, username FROM users WHERE username = ?", (username,))
    user_data = cursor.fetchone()
    connection.close()

    if user_data:
        return jsonify({"id": user_data[0], "username": user_data[1]})
    return jsonify({"error": "User  not found"}), 404
        
if __name__ == '__main__':
    init_db()
    app.run(debug=True)
