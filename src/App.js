import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Verbs from './components/verbs';
// import Cards from './components/Cards';
function App() {
  return (
    <div className="App min-vh-100">
      <div className="container">
        <div className="text-center">
          <img src={logo} className="App-logo w-25 text-center" alt="logo" />
          <h1>Hello, Juan Sebastian</h1>
        </div>
        <Verbs/>
        {/* <Cards/> */}
      </div>
    </div>
  );
}

export default App;
