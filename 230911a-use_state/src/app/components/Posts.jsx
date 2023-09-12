'use client'
import { useEffect, useState } from "react"

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').
        then((res)=>res.json()).
        then((data)=>setPosts(data.map((el)=>el.title)))
    }, []);
    return(
        <>
            <div>Posts Index</div>
            <p>{posts}</p>
        </>
    )
}