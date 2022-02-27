import React, {FC, useState} from "react";
import{IPeople} from "./types";
import {Row, Col,Card} from "react-bootstrap";
import '../App.css';
import Film from "./Film";


const Character:FC<{pers:IPeople}> = ({pers}) => {
    const [per, setChar] = useState<IPeople>(pers);
    const [show, setshow] = useState<boolean>(false);

   

    if(show == true) {
        return(
                    <div>
            
            <Card >
            <Card.Header>{per.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                <div>Birth Year:   {per.birth_year}</div>
                <div>Eye Color:    {per.eye_color}</div>
                
                 

                <div>Gender:  {per.gender}</div>
                <div>Hair Color:  {per.hair_color}</div>
                <div>Height:  {per.height}</div>
                <div>Mass:   {per.mass}</div>
                <div>Skin Color:   {per.skin_color}</div>


                


                    </Card.Text>
            </Card.Body>
            </Card>

        </div>
                )
        
    }
    return (
        <div>
            <Card >
                
                <div className="cursor" onClick={() => {
                 setshow(true);
                }}>{per.name}</div>
                </Card>
               
        </div>
    )

}

export default Character;





/*    

{films.length === 0 && <div>loading</div>}
               {
                   <div className="row align-items-start" >
                       Films: [   

                       { 
                        films.map(film =>{
                                
                                <Film f = {film}  />
                            
                            
                        } 
                        
                        )   
                            }

                       ]
                </div>
                }

<div>Species:   <Specie/></div>

    const getFilms = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/films/`)
            const data = await response.json();
            setFilms(data.results);
        }catch(e){
            console.error(e);
        }
    };
    per.films.map(film =>{
              getFilms(film);                                           
                                
    } 
    
    )

<div>Films:{per.films.map(film =>
                    <Film fil = {film}  />
                )}</div>
                */

