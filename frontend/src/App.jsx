import React from "react";

function App() {
  return (
    <>
      <div className="div">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <p className="text-lg text-gray-600">
          This is a sample React application.
        </p>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Click Me
        </button>
        <button>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">Go to Example.com</a> 
        </button>
        <button>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">Go to Example.</a> 
        </button>
      </div>
    </>
  );
}

export default App;
