import { Component } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default class Todos extends Component {
  //Component state with default values
  state = {
    addTodoValue: "",
    editTodo: {},
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  };

  //Local helper method to get date
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  //method called from Todo component
  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== todo.id;
    });
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleDone = (todo) => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //method called from AddTodo component
  addNewTodo = (value) => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push({
        id: this.getTime(),
        value: value,
        isDone: false,
      });
      this.setState({ addTodoValue: "", todos });
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      alert("Please add a value");
    }
  };

  editTodo = (todo) => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.value = todo.value;
      }
      return t;
    });
    this.setState({ editTodo: {} });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  setEditValue = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };

  render() {
    return (
      <div>
        {this.state.todos?.length <= 0 && (
          <div className="alert alert-info text-center" role="alert">
            <b>No Todos Added</b>
          </div>
        )}
        <table className="table">
          <tbody>
            {this.state.todos.map((todo, index) => (
              <tr key={todo.id}>
                <Todo
                  index={index + 1}
                  todo={todo}
                  fooDelete={this.handleDelete}
                  fooDoneDone={this.handleDone}
                  fooEdit={this.setEditValue}
                />
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-center">
                <AddTodo
                  fooAddTodo={this.addNewTodo}
                  addTodoValue={this.state.addTodoValue}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Todo Value
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.editTodo(this.state.editTodo);
                  }}
                >
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Value:
                    </label>
                    {this.state.editTodo?.value && (
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.editTodo.value}
                        onChange={(e) =>
                          this.setState({
                            ...this.state,
                            editTodo: {
                              ...this.state.editTodo,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
