import React, {  useState } from "react";
export const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    /**
     * 
     * @returns 
     */
    const handleAddTodo = () => {
        if (!todo.trim()) return;
        setTodos(prev => [
            ...prev,
            {
                id: Date.now(),
                text: todo,
                completed: false
            }
        ]);
        setTodo("");
    }
    /**
     * 
     * @param {*} id 
     */
    const handleDeleteTodo = (id) => {
        setTodos(prev => prev.filter(a => a.id !== id));
    }
    /**
     * 
     * @param {*} id 
     */
    const handleToggleTodo = (id) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }
    return (
        <div>
            <h1>TodoApp</h1>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter Todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            {todos.map(a => (
                <div key={a.id} style={{ cursor: "pointer", textDecoration: a.completed ? "line-through" : "none" }} onClick={() => handleToggleTodo(a.id)}>
                    <p>{a.text}<span onClick={(e) => { e.stopPropagation(); handleDeleteTodo(a.id); }} style={{ color: "red", cursor: "pointer" }}>X</span></p>
                </div>
            ))}
        </div>

    )
}