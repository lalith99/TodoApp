import React from "react"

function TodoList(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChanged(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoList