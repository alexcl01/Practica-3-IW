import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Character from './components/Character';

type Character = {
  url: string;
  name: string;
  planet: string;
}

const characters: Character[] = [
  {
      url: "http:/fjslgjk",
      name: "Alex",
      planet: "Tierra"
  },

  {
      url: "http:/fjslgjk",
      name: "Elsa",
      planet: "Marte"
  }
]

const App:FC = () => {
  return (
    <div>
      <Layout>
        {characters.map(char => 
                <Character 
                name = {char.name}
                planet = {char.planet}
                url = {char.url} 
                />
                )}
        </Layout>
    </div>
  );
}

export default App;
