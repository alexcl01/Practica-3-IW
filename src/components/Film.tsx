import React, {FC, useEffect, useState} from "react";
import{IFilm} from "./types";
import {Container,Card} from "react-bootstrap";


const Film:FC<{f:IFilm }> = ({f}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fi, setfilm] = useState<IFilm>(f);
        return (
            <div>
    
                    Title:      {fi.title}
            </div>
        )
   // }) 
}
  


/* 
    
    const getFilm = async (texto: string) => {
            try {
                
                const response = await fetch(texto);
                const data = await response.json();
                setfilm(data.results);
                
            }catch(e){
                    console.error(e);
                }
    }


{Object.keys(film.name).lenght === 0 && <div>loading</div>}
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
                 <div>Created:   {per.created}</div>
                    </Card.Text>
            </Card.Body>
            </Card>

<div>Films:{per.films.map(film =>
                    <Film fil = {film}  />
                )}</div>
                */
export default Film;
