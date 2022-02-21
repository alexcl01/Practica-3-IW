import React, {FC, useState, useEffect} from "react";
import Character from "./Character";

type TCharacter = {
    name: string,
    id: string,
}

const Contador:FC = () => {

    const getChars = async (texto: string) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`)
            const data = await response.json();
            setChars(data.results);
        }catch(e){
            console.error(e);
        }
    };

    const [chars, setChars] = useState<TCharacter[]> ([]);
    const [valor, setValor] = useState<string> ("");
    
    useEffect(() => { 
        const response = fetch(`https://rickandmortyapi.com/api/character`).then(async (response) => {
        const data = await response.json();
        setChars(data.results);
    }
    );
}, [])


    return (
        <div>
            <input type = "text" value = {valor} onChange = {
                (e) => setValor(e.target.value)}
            ></input>
            <button onClick={() => {
                getChars(valor);
            }}>Buscar</button>

            <div>
                {chars.length === 0 && <div>loading</div>}
               {chars.map(char =>
                    <Character key = {char.id} name = {char.name} />
                )}
                
            </div>
        </div>
    )
}


export default Contador;