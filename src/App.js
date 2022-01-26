import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Titulo from './components/ItemListContainer.js';

class App extends Component{
  render(){
      return (
      <div className="App">
        <NavBar class="navBar"></NavBar>
        <Titulo
          title='Guitar Market'
        />
      </div>
    );
  }
}

export default App;
