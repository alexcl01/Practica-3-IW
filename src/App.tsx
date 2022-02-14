import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

const App:FC = () => {
  const a:string = "Hola";
  const arr:string[] = ["Hola", "Pedro", "Que tal"];
  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;
