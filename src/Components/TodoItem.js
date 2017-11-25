import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {

    handleClick(id){
        this.props.onDelete(id);
    }
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todos.title}</strong>
        <button onClick={this.handleClick.bind(this,this.props.todos.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
