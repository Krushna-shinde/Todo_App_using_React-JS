import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDo App in ReactJS</h1>
       <Todos/>
      </div>
    );
  }
}

export default App;
