'use client'

import { useState } from "react"
import axios from "axios"

export default function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_r, setPassword_r] = useState('')
    const [accept, setAccept] = useState(false)
    const [emailErr, setEmailErr] = useState('')
    // const [flag, setFlag] = useState(true)
    // console.log(name);

    async function Submit(e){
        e.preventDefault();
        setAccept(true)

        let flag = true;
        if(name.length <3 || password.length < 6 || password !== password_r){
            flag = false;
            console.log('No');
        }else{
            flag = true;
            console.log('yes');
        }

        try {
            if(flag){
                let res = await axios.post('http://127.0.0.1:8000/api/register', {
                    name:name,
                    email:email,
                    password:password,
                    password_confirmation: password_r
                }).then((e)=> console.log(e));
            }
        } catch (error) {
            setEmailErr(error.response.status)
        }

        

    }

    return(
        <div>
            <form action="" onSubmit={Submit} className="bg-success-subtle p-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
                    {name.length < 3 && accept == true && <p className="text-danger">The Name must have at least 3 characters</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    {email.length < 5 && accept == true && <p className="text-danger">The Email must have at least 3 characters</p>}
                    {emailErr === 422 && accept == true && <p className="text-danger">This Email Address is Already Exist, please change it.</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    {password.length < 6 && accept == true && <p className="text-danger">The Password must have at least 6 characters</p>}

                </div>

                <div className="mb-3">
                    <label htmlFor="password_r" className="form-label">Repeat Password</label>
                    <input type="password" name="password_r" className="form-control" id="password_r" placeholder="Repeat Password" onChange={(e)=>setPassword_r(e.target.value)}/>
                    {password !== password_r && accept == true && <p className="text-danger">The 2 Passwords are not matched</p>}
                </div>

                <div className="mb-3">
                    <input type="submit" className="form-control bg-success" value="Sign Up"/>
                </div>
            </form>
        </div>
    )
}