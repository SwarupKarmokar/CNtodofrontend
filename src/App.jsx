import React, { useEffect, useState } from "react"
import Todo from "./components/Todo"

// IMPORTING FUNCTIONALITY FROM CUSTOM-API FILE 
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

function App() {

  // USING THE USESTATE-HOOK FOR MANAGING THE STATE 
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");

  // USING THE USE-EFFECT HOOK FOR FETCHING ALL DATA ONCE FOR MY APP  
  useEffect(() => {
    getAllTodo(setTodo);
  }, [])

  // CREATING A FUNCTION WHICH PASS TODO-ID IN TODO COMPONENT 
  const updateMode = (_id, text) => {
    setIsUpdate(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input type="text" placeholder="Add Todos" value={text} onChange={(e) => setText(e.target.value)} />
          {/* USING CONTIONAL RENDERING TOGGLE THE ADD OR UPDATE MODE  */}
          <button onClick={isUpdate ? () => updateTodo(todoId, text, setTodo, setText, setIsUpdate) : () => addTodo(text, setText, setTodo)}>
            {
              isUpdate ? "Update" : "Add"
            }
          </button>
        </div>

        <div className="list">
          {/* USING MAP METHOD WE CAN RENDER THE DB'S DATA AND PASS THE DATA AS PROPS IN OUR TODO COMPONENT */}

          {
            todo.map(item => <Todo key={item._id} text={item.text} updateMode={() => updateMode(item._id, item.text)} deleteTodo={() => deleteTodo(item._id, setTodo)} />)
          }
        </div>
      </div>
    </>
  )
}

export default App
