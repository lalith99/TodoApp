import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './TodoList'
import todosData from './todosData';
import { render } from 'react-dom';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
  }

render(){

 const todoscomp = this.state.todos.map(function(item){
    return(
      <Todolist key = {item.id} item={item}/>
    )
  })

  return (
    <div>
        {todoscomp}
          </div>
        
        
     
  )
}
}
export default App;
