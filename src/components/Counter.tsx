import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Contador: {counter}
        </h1>
        <div className="flex justify-around">
          <button
            onClick={() => setCounter(counter + 1)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Incrementar
          </button>
          <button
            onClick={() => setCounter(counter - 1)}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
