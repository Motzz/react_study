import { useState } from "react";
function App() {
  const [count, setCount] = useState(0); // ini itu count awal variable, setcount itu dr sononya
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      <button
        onClick={() => {
          if (count <= 0) {
            setCount(0);
          } else {
            setCount(count - 1);
          }
        }}
      >
        Kurang
      </button>
    </div>
  );
}

export default App;
