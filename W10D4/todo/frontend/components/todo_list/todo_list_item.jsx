import React from 'react';

export class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: this.props.todo.done
    }

    console.log(this.state);
    this.updateDone = this.updateDone.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
  }

  updateDone(e) {
    e.preventDefault();
    const toggleTodo = Object.assign({}, this.props.todo, {done: !this.props.todo.done});
    this.props.receiveTodo(toggleTodo);
  }

  render() {
    return (
      <li key={this.props.todo.id}>
        {this.props.todo.title}
        <button onClick={this.updateDone}>{this.props.todo.done ? 'Undo' : 'Done'}</button>
        <button onClick={this.props.removeTodo}>Delete</button>
      </li>
    )
  }
} 