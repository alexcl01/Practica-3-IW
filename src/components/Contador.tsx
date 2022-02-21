import React, {FC, useState} from "react";
import Character from "./Character";

type TCharacter = {
    name: string,
}

const Contador:FC = () => {

    const getChars = async (texto: string) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`)
        const data = await response.json();
        setChars(data.results);
    }

    const [chars, setChars] = useState<TCharacter[]> ([]);
    const [valor, setValor] = useState<string> ("");

    return (
        <div>
            <input type = "text" value = {valor} onChange = {
                (e) => setValor(e.target.value)}
            ></input>
            <button onClick={() => {
                getChars(valor);
            }}>Buscar</button>

            <div>
               {chars.map(char =>
                    <Character name = {char.name} />
                )}
                
            </div>
        </div>
    )
}

export default Contador;