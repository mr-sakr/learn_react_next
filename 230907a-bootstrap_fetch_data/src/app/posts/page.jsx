import PostCard from "../components/PostCard";

export default async function PostsPage(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();

    const postsJsx = posts.map((post)=>{
        return(
            <PostCard title={post.title} description={post.body} id={post.id}/>
        )
    })
    return(
        <div>
            <h1>Posts page</h1>
            
            <div>{postsJsx}</div>

        </div>
    )
}