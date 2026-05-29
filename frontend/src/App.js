import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculateSum = async () => {
    console.log("Button clicked");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/add?a=${num1}&b=${num2}`
      );

      const data = await response.json();

      console.log("Response:", data);

      setResult(data.result);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Two Numbers</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calculateSum}>
        Calculate
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;