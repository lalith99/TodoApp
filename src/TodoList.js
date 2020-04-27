import React from 'react'
 
function TodoList(props){
    return(
        <div>
        <input type="checkbox" checked = {props.item.completed} onChange = {() => console.log("changed")}/>
        <p>{props.item.text}</p>
        </div>
    )

}
export default TodoList