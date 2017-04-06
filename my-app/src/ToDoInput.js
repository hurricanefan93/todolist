import React, {Component} from 'react'


class ToDoInput extends Component {

  constructor (props) {
    super(props)
    this.state = {
      newTodo: ''
    }
    this.addClicked = this.addClicked.bind(this)
  }

  addClicked () {
    let {onAddTodo} = this.props
    onAddTodo(this.state.newTodo)
    this.setState({
      newTodo: ''
    })
  }

  render () {
    let {newTodo} = this.state
    return (
      <div>
        <input value={newTodo} onChange={(e) => this.setState({ newTodo: e.target.value })} />
        <button onClick={this.addClicked}>Add</button>
      </div>
    )
  }
}

export default ToDoInput
