from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from hashlib import sha256

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
            password TEXT
        )
    ''')
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password) VALUES (1, 'admin', ?)", (sha256('admin123'.encode()).hexdigest(),))
    cursor.execute("INSERT OR IGNORE INTO users (id, username, password) VALUES (2, 'user', ?)", (sha256('user123'.encode()).hexdigest(),))
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

# Broken Authentication Demo
@app.route('/brokenauthdemo', methods=['POST'])
def broken_auth_demo():
    data = request.get_json()
    username = data.get('username', '')
    password = data.get('password', '')

    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()

    # Vulnerable query (broken auth: no session or token handling)
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

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Flask Application!"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
