import React, {FC} from "react";

type CharacterProps = {
    url: string;
    name: string;
    planet: string;
}

const Character: FC<CharacterProps> = ({url, name, planet}) => { 
    return (
        <div>
            <img src={url}/>
            <div>Name: {name}</div>
            <div>Planet: {planet}</div>

        </div>
    )
}

export default Character;