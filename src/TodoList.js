import React from "react"

function TodoList(props){
const completedStyle = {
fontStyle :"italic",
color: "#cdcdcd",
textDecoration: "line-through"

} 
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChanged(props.item.id)}
            />
            <p style = {props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoList