import React from 'react';
import uniqueId from '../utility';

class TodoForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    }
    console.log(this.state.id);

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
    console.log(e.target.value);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
    console.log(e.target.value);
  }

  updateDone(e) {
    if (e.target.checked) this.setState({ done: true});
    else this.setState({done : false});
    console.log(e.target);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.receiveTodo(this.state);

    this.setState({
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    })
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Add Todo Item</h1>
          <label>Title:
            <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
          </label>
          <label>Body:
            <input type="text" value={this.state.body} onChange={this.updateBody}></input>
          </label>
          <label>Done?
            <input type="checkbox" value={this.state.done} onClick={this.updateDone}></input>
          </label>
          <button>Add Todo Item</button>
        </form>
      )
  }
}

export default TodoForm;