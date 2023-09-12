'use client'
import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0)
    function increase(){
        setCounter(v => v+1)
        // setCounter(counter+1)
    }
    function decrease(){
        setCounter(v => v-1)
        // setCounter(counter-1)
    }
    return(
        <div>
            <h4>Counter</h4>
            <div>{counter}</div>
            <div>
                <button onClick={increase}>Increment ++</button>
                <button onClick={decrease}>Decrement --</button>
            </div>
        </div>
    )
}