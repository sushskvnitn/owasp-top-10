import React, { useState, useEffect } from "react";

const XSSDemo = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/xss-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput }),
      });
      const data = await res.json();
      setResponse(data.message); // Set response as raw HTML
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred.");
    }
  };

  useEffect(() => {
    // Find script tags and execute them
    const container = document.getElementById("xss-container");
    if (container) {
      const scripts = container.getElementsByTagName("script");
      for (let script of scripts) {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
        document.body.removeChild(newScript);
      }
    }
  }, [response]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">XSS Demo</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block text-gray-700 mb-2">
          Enter some text (potentially malicious):
        </label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Server Response:</h2>
        <div
          id="xss-container"
          className="p-4 mt-2 border rounded bg-gray-100"
          dangerouslySetInnerHTML={{ __html: response }}
        ></div>
      </div>
    </div>
  );
};

export default XSSDemo;
