import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <td style={{ width: 10 }} className="text-center">
          {this.props.index}
        </td>
        <td style={{ width: 15 }} className="text-center">
          <input
            type="checkbox"
            defaultChecked={this.props.todo.isDone}
            onChange={() => this.props.fooDoneDone(this.props.todo)}
          />
        </td>
        <td>{this.renderTodo()}</td>

        <td style={{ width: 100 }} className="text-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => this.props.fooEdit(this.props.todo)}
          >
            Edit
          </button>
        </td>
        <td style={{ width: 100 }} className="text-center">
          <button
            onClick={() => this.props.fooDelete(this.props.todo)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </React.Fragment>
    );
  }

  renderTodo() {
    if (this.props.todo.isDone) return <s>{this.props.todo.value}</s>;
    else return this.props.todo.value;
  }
}

export default Todo;
