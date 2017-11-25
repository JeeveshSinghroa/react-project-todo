import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
class App extends Component {

  constructor(){
    super();
    this.state={
      todos:[]
    }
  }
  getTodos(){
    this.setState({todos:[
      {
        id: uuid.v4(),
        title: 'Do the dishes'
      },
      {
        id: uuid.v4(),
        title: 'Wash clothes'
      }
    ]
    })
  }
  componentDidMount(){
    this.getTodos();
    console.log(this.state.todos);
  }
  componentWillMount(){
    this.getTodos();
  }
  handleAddTodo(todo){
    let todo1=this.state.todos;
    todo1.push(todo);
    this.setState({todos: todo1});
    console.log(todo);
  }
  handleDelete(id){
    let todo1 = this.state.todos;
    let index = todo1.findIndex(x => x.id===id);
    todo1.splice(index,1);
    this.setState({todos: todo1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to To Do App</h1>
        </header>
        <p className="App-intro">
          To get started, start adding up things in your to do list.
        </p>
        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        <Todos todos={this.state.todos} onDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
