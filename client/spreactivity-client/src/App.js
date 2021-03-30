import React, { Component } from 'react';
import './App.css';
import SpReactivityList from './components/list/SpReactivityList';
import './bootstrap.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpReactivityList/>
      </div>
    );
  }
}
export default App;