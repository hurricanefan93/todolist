import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import Todoitem from './Todoitem'

  class App extends Component {

    constructor (props) {
      super(props)
      this.state = {
        todoItems: []
      }
      this.addTodo = this.addTodo.bind(this)
    }

    addTodo(newTodo) {
      this.setState({
        todoItems: this.state.todoItems.concat([newTodo])
      })
    }
  render () {
    let {todoItems} = this.state
    return <div className='App'>
    <header>
      <h1> TO-DO LIST </h1>
    </header>
      <main>
        <div className='input'>
          <ToDoList items={todoItems} />
          <ToDoInput onAddTodo={this.addTodo} />
        </div>
      </main>
    </div>
  }
}

export default App;
