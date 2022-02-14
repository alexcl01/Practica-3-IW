import React, {FC} from "react"
import Character from "./Character"
import "./styles/Layout.css"

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

const Layout:FC = () => {
    return (
        <div className="Layout">
            {
                characters.map((char, index) => 
                <Character key = {index}
                name = {char.name}
                planet = {char.planet}
                url = {char.url} 
                />
                )
            }
        </div>
    )
}

export default Layout;