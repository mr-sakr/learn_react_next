'use client'

import { useState } from "react"
import axios from "axios"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function Submit(e){
        e.preventDefault();

        try {
            let res = await axios.post('http://127.0.0.1:8000/api/login', {
                email:email,
                password:password,
            }).then((e)=> console.log(e));
        } catch (error) {
            console.log(error);
        }

        

    }

    return(
        <div>
            <form action="" onSubmit={Submit} className="bg-success-subtle p-5">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <input type="submit" className="form-control bg-success" value="Sign Up"/>
                </div>
            </form>

            <style>{`
                form{
                    border: 1px solid gray;
                }
            `}</style>
        </div>
    )
}