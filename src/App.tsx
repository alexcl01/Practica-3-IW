import React, { FC } from 'react';
import logo from './logo.svg';
import {Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import { Layout } from './components/Layout';
import { Jumbo } from './components/Jumbotron';
import {BarNav} from './components/BarNav';

const App:FC = () => {
  return (
    <React.Fragment >
       <Jumbo/>
        <Layout >
        <Navigation />
         </Layout>
     </React.Fragment >
  );
}


export default App;



/*falta jumbo
   <BarNav/>
    <><Jumbo />
    <div className="layout">
      <Navigation />
    </div></>

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/