
import React from "react"
import TodoList from "./TodoList"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChanged = this.handleChanged.bind(this)
    }
    
    handleChanged(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return{
                      ...todo,
                      completed : !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoList key={item.id} item={item} handleChanged={this.handleChanged}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App