import React, {Component} from 'react'

class Todoitem extends Component {
  render () {
    let {text} = this.props
    return (
      <div>
      {text}
      </div>
    )
  }
}

export default Todoitem
