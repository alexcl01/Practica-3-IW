
import React, {FC, useState, useEffect} from "react";
import Character from "./Character";
import {Container, Col} from "react-bootstrap";
import { IPeople}from "./types";
import '../App.css';



const Navigation:FC = () => {

    const getChars = async (texto: string) => {
        try {
            if(texto.length != 0) {
                const response = await fetch(`https://swapi.dev/api/people/?search=${texto}`)
                const data = await response.json();
                //console.log(data.results);
                setChars(data.results);
            }
        }catch(e){
            console.error(e);
        }
    };
   


    const [chars, setChars] = useState<IPeople[]> ([]);

    const [valor, setValor] = useState<string> ("");
    
   useEffect(() => { 
    const response = fetch(`https://swapi.dev/api/people/`).then(async (response) => {
                const data = await response.json();
                setChars(data.results);
             }
    )
}, [])


    return (
       
    <div className = "App"> 
    
    <div className="form-group mx-sm-3 mb-2" align-items = "center">
            <input type = "text" value = {valor} onChange = {
                (e) => setValor(e.target.value)}
            ></input>
            <button className="btn btn-secondary mb-2" onClick={() => {
                setChars([]);
                getChars(valor);
            }}>Buscar</button>
    </div>
    <Container   className = "App-header">
            <div className = "Search" >
                
                {chars.length === 0 && <div>loading</div>}
               {
                   <div className="row align-items-start" >
                       { chars.map(char =>
                              <div className = "Search" >  
                                <Character pers = {char}  />
                                </div>
                                
                            )}
                </div>}
                
            </div>
            </Container>
           
    </div>
    
    )
}


export default Navigation;


/* const getFilms = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/films/?search=${texto}`)
            const data = await response.json();
            setFilms(data.results);
        }catch(e){
            console.error(e);
        }
    };
    const getPlanets = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/planets/?search=${texto}`)
            const data = await response.json();
            setPlanets(data.results);
        }catch(e){
            console.error(e);
        }
    };
    const getStarships = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/starships/?search=${texto}`)
            const data = await response.json();
            setStarships(data.results);
        }catch(e){
            console.error(e);
        }
    };
    const getVehicles = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/vehicles/?search=${texto}`)
            const data = await response.json();
            setVehicles(data.results);
        }catch(e){
            console.error(e);
        }
    };
    const getSpecies = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/species/?search=${texto}`)
            const data = await response.json();
            setSpecies(data.results);
        }catch(e){
            console.error(e);
        }
    };
        const [films, setFilms] = useState<IFilm[]> ([]);
    const [planets, setPlanets] = useState<IPlanet[]> ([]);
    const [species, setSpecies] = useState<ISpecie[]> ([]);
    const [vehicles, setVehicles] = useState<IVehicle[]> ([]);
    const [starships, setStarships] = useState<IStarship[]> ([]);
    */