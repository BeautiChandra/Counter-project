import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);

  // Increase counter
  const addValue = () => {
    setCounter(counter + 1);
  };

  // Decrease counter
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Add current counter to sum
  let sumOfAddValue = () => {
    setSum(sum + counter);
  };

  const resetcount = () => {
    setCounter(0);
    setSum(0);
  };

  return (
    <div className=" h-98 w-98 bg-slate-900 rounded-2xl mx-8 my-4 text-white flex flex-col items-center justify-center gap-4 shadow-md hover:shadow-lg">
      <h1 className="text-2xl font-bold">Counter</h1>
      <p className="text-lg">Value: {counter}</p>

      <div className="flex gap-4">
        <button
          className="bg-orange-600 px-4 py-2 rounded-xl text-lg border border-transparent hover:border-white "
          onClick={addValue}
        >
          +
        </button>
        <button
          className="bg-orange-600 px-4 py-2 rounded-xl text-lg border border-transparent hover:border-white"
          onClick={removeValue}
        >
          -
        </button>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-orange-600 px-3 py-2 rounded-xl text-lg border border-transparent hover:border-white"
          onClick={sumOfAddValue}
        >
          Sum
        </button>
        <button
          className=" bg-orange-600 px-3 py-2 rounded-xl text-lg border border-transparent hover:border-white"
          onClick={resetcount}
        >
          Reset
        </button>
      </div>
      <p className="text-lg">Sum of values: {sum}</p>
    </div>
  );
}

export default App;
