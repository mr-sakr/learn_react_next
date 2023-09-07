export default async function OnePostPage(props){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
    const post = await response.json()


    return(
        <div>
            One Post Page id is : {props.params.id}
            <h1>ID : {post.id}</h1>
            <h3>Title : {post.title}</h3>
            <p>Description : {post.body}</p>
        </div>
    )
}