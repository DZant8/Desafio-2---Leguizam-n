import React, {Component} from 'react';
import './App.css';
import './components/ItemListContainer.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';


class App extends Component{
  render(){
      return (
      <div className="App">
        <NavBar class="navBar"></NavBar>
        <ItemListContainer title='Bienvenido a Guitar Market'/>
      </div>
    );
  }
}

export default App;