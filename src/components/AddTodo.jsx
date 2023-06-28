import { Component } from "react";

class AddTodo extends Component {
  state = {
    defaultValue: "",
    value: this.props.addTodoValue,
  };

  handleChange = (e) => {
    //Updating local component state
    this.setState({
      value: e.target.value,
    });
  };

  clearInput = () => {
    //Updating local component state
    this.setState({ value: "" });
  };

  addTodo = (e) => {
    e.preventDefault();
    //Call method reference in Todos component using props
    this.props.fooAddTodo(this.state.value);
    this.clearInput();
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="todoValue"
            placeholder="ToDo"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2"
            >
              Add New ToDo
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
