import { useState } from "react";
import "./App.css";
// // import shoppingIcon from "./assets/shopping-icon.svg";
// import plusIcon from "./assets/plus-icon.svg";
// import minusIcon from "./assets/minus-icon.svg";

import Navbar from "./components/navbar";
import Container from "./components/container";
import Input from "./components/search";
import Info from "./components/info";
import Todos from "./components/todo";
import Empty from "./components/empty";
function App1() {
  const [count, setCount] = useState(0); // count itu awal variable, setcount itu dr sononya
  const [value, setValue] = useState(""); // value itu awal variable, setcount itu dr sononya
  const [todos, setTodos] = useState([
    { title: "susu ultra", count: 1 },
    { title: "tahu sumedang", count: 1 },
    { title: "semangka", count: 1 },
  ]);
  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubs = (index) => {
    const subsTodos = [...todos];
    if (subsTodos[index].count <= 0) {
      //ini hapus todo berdasarkan index
      subsTodos.splice(index, 1); //param 2 jumlah data yang ingin dihapus
    } else {
      subsTodos[index].count = subsTodos[index].count - 1;
    }
    setTodos(subsTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //mencegah browser refresh??
    if (!value) {
      alert("isikan sek");
      return;
    } else {
      const addTodo = [
        ...todos,
        {
          title: value,
          count: 1,
        },
      ];
      setTodos(addTodo);
      setValue("");
    }
  };

  const getTotalCounts = () => {
    const totalCount = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCount;
  };
  return (
    <>
      <Navbar />
      <Container>
        <Input
          onSubmit={handleSubmit}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <Info todosLength={`Total List: ${todos.length}`} totalCounts={`Total Counts: ${getTotalCounts()}`} onDelete={() => setTodos([])} />
        {/* <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeHolder="List"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          ></input>
          <button className="add-button" type="submit">
            add
          </button>
        </form> */}
        {/* <div className="info">
          <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
          </div>
          <div className="info-total">
            <p>{`Total Counts: ${getTotalCounts()}`}</p>
          </div>
          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete all List
          </button>
        </div> */}
        {todos.length > 0 ? (
          // <div className="todos">
          //   {/* untuk loop array?? */}
          //   {todos.map((parameterNamaTodo, index, arr) => {
          //     // selema length ga sama sama index maka true misal length 3 != 0+1 kan false, begitu seterusnya
          //     return (
          //       <div key={index} className={`todo ${arr.length != index + 1 && "todo-divider"}`}>
          //         {parameterNamaTodo.title}
          //         <div className="todo-icon-wrapper">
          //           <div className="todo-count">{parameterNamaTodo.count}</div>
          //           <button className="todo-action-button" onClick={() => handleSubs(index)}>
          //             <img src={minusIcon} alt="minus icon"></img>
          //           </button>
          //           <button className="todo-action-button" onClick={() => handleAdditionCount(index)}>
          //             <img src={plusIcon} alt="plus icon"></img>
          //           </button>
          //         </div>
          //       </div>
          //     );
          //   })}
          // </div>
          <Todos todos={todos} onSubs={(index) => handleSubs(index)} onAdd={(index) => handleAdditionCount(index)} />
        ) : (
          <Empty />
          // <div>Kosong</div>
        )}
      </Container>
    </>
  );
}

export default App1;
