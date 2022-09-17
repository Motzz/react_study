import { useState } from "react";
import "./App.css";
import shoppingIcon from "./assets/shopping-icon.svg";

function App1() {
  const [count, setCount] = useState(0); // ini itu count awal variable, setcount itu dr sononya
  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>
      <section className="container">
        <h1>test</h1>
      </section>
    </>
  );
}

export default App1;
