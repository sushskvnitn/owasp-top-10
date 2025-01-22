import React, { useState } from "react";

const InsecureDeserializationDemo = () => {
  const [picklePayload, setPicklePayload] = useState("");
  const [yamlPayload, setYamlPayload] = useState("");
  const [response, setResponse] = useState("");

  const generatePayloads = () => {
    // Simulating Python payload generation in JavaScript
    const rcePayload = btoa("pickle-generated-rce-command"); // Base64 encode a sample RCE payload
    const yamlPayload = btoa(`
!!UserData
user: attacker
language: en
access: admin
    `); // Base64 encode a YAML payload

    setPicklePayload(rcePayload);
    setYamlPayload(yamlPayload);
  };

  const handleTestPayload = async (payload, type) => {
    try {
      const res = await fetch("http://localhost:5000/deserialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload, type }),
      });
      const data = await res.json();
      setResponse(data.result || "Payload processed successfully.");
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while processing the payload.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Insecure Deserialization Demo</h1>
      <div className="mb-4">
        <button
          onClick={generatePayloads}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate Payloads
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Generated Payloads</h2>
        <p>
          <strong>Pickle Payload:</strong> {picklePayload}
        </p>
        <p>
          <strong>YAML Payload:</strong> {yamlPayload}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Test Payloads</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleTestPayload(picklePayload, "pickle")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Test Pickle Payload
          </button>
          <button
            onClick={() => handleTestPayload(yamlPayload, "yaml")}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Test YAML Payload
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Server Response:</h2>
        <div className="p-4 mt-2 border rounded bg-gray-100">{response}</div>
      </div>
    </div>
  );
};

export default InsecureDeserializationDemo;
