'use client'
import { useState } from "react"

export default function Star(){
    const [color, setColor] = useState(true)
    function change_color(){
        setColor(v => !v)
    }
    return(
        <div>
            <h4>Star</h4>
            <p>Change The Star Color from green to red, and back to the origin once clicking again</p>
            <h1 onClick={change_color} style={{color: color? 'green':'red'}}>★</h1>
            {/* <h1 onClick={()=>setColor(v => !v)} style={{color: color? 'green':'red'}}>★</h1> */}
        </div>
    )
}