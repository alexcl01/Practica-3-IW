import React, {FC, useState} from "react";
import styled from "@emotion/styled"


const Componente: FC = () => {
    const [colorBoton, setColorBoton] = useState<Boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");
    return (
        <div>
            <input type = "text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}/>

            <br/>
            
            <MiBoton 
            inputValue = {inputValue} 
            state = {colorBoton} 
            height = "30px" 
            onClick = {() => setColorBoton(!colorBoton)}>
            Enviar
            </MiBoton>

        </div>
    )
}

type MiBotonType = {
    width?: string;
    height?: string;
    state: Boolean;
    inputValue: string;
}

const MiBoton = styled.button<MiBotonType>`
    background-color: ${(props) => (props.state? "red": "yellow")};
    color: ${(props) => (!props.state? "red": "yellow")};
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "200px"};
    visibility: ${(props) => props.inputValue === ""?"hidden":"visible"};
`


export default Componente;