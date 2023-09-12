'use client'
import { useState } from "react"

export default function ReactState(){
    const [name, setName] = useState('Sakr');
    function changeName(){
        setName('Mahmoud');
    }
    return(
        <div>
            <h3>This is a component for using useState</h3>
            <button onClick={changeName}>Change My Name</button>
            <p>My Name Is : {name}</p>
        </div>
    )
}