import React, {Children, FC} from "react"
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

const Layout:FC = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    )
}

export default Layout;
