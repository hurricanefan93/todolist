import React, {Component} from 'react'
import Todoitem from './Todoitem'

class ToDoList extends Component {
  render () {
    let {items} = this.props
    return (
      <div>
        <ul>
          {items.map((todo, i) => <li>< Todoitem key={i} text={todo} /></li>)}
        </ul>
      </div>
    )
  }
}

export default ToDoList
