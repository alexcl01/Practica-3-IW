import React, {FC, useState} from "react";

const Character:FC<{name: string}> = ({name}) => {
    const [nombre, setNombre] = useState<string>(name);
    return <div onClick={() => {
        setNombre(nombre.toUpperCase());
    }}>
        {nombre}
    </div>
}

export default Character;