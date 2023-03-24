// CREATING API URL 
const base_url = "http://localhost:5000";

// THIS HANDLE THE GET METHOD FOR OUR FRONTEND APP 
const getAllTodo = async (setTodo) => {
    let result = await fetch(base_url);
    result = await result.json();
    setTodo(result);
}

// THIS HANDLE THE POST METHOD FOR OUR FRONTEND APP 
const addTodo = async (text, setText, setTodo) => {
    let result = await fetch(`${base_url}/save`, {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' }
    })

    result = await result.json();
    getAllTodo(setTodo)
    setText("")
}

// THIS HANDLE THE PUT METHOD FOR OUR FRONTEND APP 
const updateTodo = async (todoId, text, setTodo, setText, setIsUpdate) => {
    let result = await fetch(`${base_url}/update`, {
        method: "PUT",
        body: JSON.stringify({ _id: todoId, text }),
        headers: { 'Content-Type': 'application/json' }
    })

    result = await result.json();
    setText("")
    setIsUpdate(false)
    getAllTodo(setTodo)
}

// THIS HANDLE THE DELETE METHOD FOR OUR FRONTEND APP 
const deleteTodo = async (todoId, setTodo) => {
    let result = await fetch(`${base_url}/delete`, {
        method: "DELETE",
        body: JSON.stringify({ _id: todoId }),
        headers: { 'Content-Type': 'application/json' }
    })

    result = await result.json();
    getAllTodo(setTodo)
}






export { getAllTodo, addTodo, updateTodo, deleteTodo }