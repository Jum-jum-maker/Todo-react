import React, { useState } from "react";

function MyTodo() {
    const [textInput, setTextInput] = useState("");
    const [todos, setTodos] = useState([]);

    const textHandler = (event) => {
        setTextInput(event.target.value);
    };

    const handleSubmit = () => {
        if(textInput === ""){
            window.prompt("input youur task")
        }
        if (textInput.trim() !== "") {
            setTodos([...todos, textInput]);
            setTextInput(""); // Clear input field after adding todo
            
        }
    };

    return (
        <>
            <h1>My To-Do App</h1>
            <input
                type="text"
                name=""
                id="taskInput"
                placeholder="Input tasks"
                value={textInput}
                onChange={textHandler}
            />
            <button onClick={handleSubmit}>SUBMIT</button>
            <ol id="taskList">

                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ol>
        </>
    );
}

export default MyTodo;
