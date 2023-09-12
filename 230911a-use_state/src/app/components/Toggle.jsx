'use client'
import { useState } from "react"

export default function Toggle(){
    const [agree, setAgree] = useState(true);
    function change_me(){
        setAgree(v => !v)
    }
    return(
        <div>
            <button onClick={change_me}>Click To change me to {agree ? 'Yes' : 'No'}</button>
        </div>
    )
}