import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'
import {todos} from './todos.json';
import { render } from '@testing-library/react';



class App extends Component {
  constructor() {
    super();
    this.state = {
      todos:todos
    }
  }

}
render() {
  return(
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          Tasks
        </a>
      </nav>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <Navigation title="Home" />
//       <Navigation title="Who we are" />
//       <img src={logo} className="App-logo" alt="logo" />
//     </div>
//   );
// }

export default App;
