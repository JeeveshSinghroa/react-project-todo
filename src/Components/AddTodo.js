import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

class AddTodo extends Component {

    constructor(){
        super();
        this.state={
            newTodo: {}
        }
    }
    handleSubmit(e){
        if(this.refs.title.value===""){
            alert('Task is required.');
        }
        else{
            this.setState({newTodo:{
                    id: uuid.v4(),
                    title: this.refs.title.value
                }
            }, function(){
                this.props.addTodo(this.state.newTodo);
            });
        }
        e.preventDefault();
    }
  render() {
      return(
        <div>
            <h3>Add Task</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Task</label><br/>
                    <input type="text"  ref="title" />
                </div><br/>
                <input type="submit" value="Add" />
            </form>
        </div>
      );
  }
}
export default AddTodo;