import React, { useEffect, useState, useMemo } from "react";
export const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    /**
     * 
     * @returns 
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, [2000]);
        return () => {
            clearTimeout(timer);
        }
    }, [search])
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
    /**
     * filtered todos
     */
    const filteredTodos = useMemo(() => {
        return todos.filter(todo => (todo.text.toLowerCase()).includes(debouncedSearch.toLowerCase()));
    }, [debouncedSearch, todos]);
    const listShown = debouncedSearch.trim() ? filteredTodos : todos;
    return (
        <div>
            <h1>TodoApp</h1>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <input
                    style={{ margin: "10px" }}
                    value={search}
                    placeholder="Enter Search.."
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <input
                    style={{ margin: "10px" }}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter Todo"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            {listShown && listShown.length > 0 ? listShown.map(a => (
                <div key={a.id} style={{ cursor: "pointer", textDecoration: a.completed ? "line-through" : "none" }} onClick={() => handleToggleTodo(a.id)}>
                    <p>{a.text}<span onClick={(e) => { e.stopPropagation(); handleDeleteTodo(a.id); }} style={{ color: "red", cursor: "pointer" }}>X</span></p>
                </div>
            )) : <div>No Results Found</div>}
        </div>

    )
}