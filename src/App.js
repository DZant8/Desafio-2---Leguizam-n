import React, {Component} from 'react';
import './App.css';
import './components/ItemListContainer.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';

class App extends Component{
  render(){
      return (
      <div className="App">
        <NavBar class="navBar"></NavBar>
        <ItemListContainer title='Bienvenido a Guitar Market'/>
        <ItemCount/>
      </div>
    );
  }
}

export default App;