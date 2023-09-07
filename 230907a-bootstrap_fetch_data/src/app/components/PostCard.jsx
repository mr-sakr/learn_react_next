import Link from "next/link";

export default function PostCard(params){
    return(
        <div className="card mb-2 rounded-0">
            <div className="card-header">
                {params.id}
            </div>
            <div className="card-body">
                <h5 className="card-title">{params.title}</h5>
                <p className="card-text">{params.description}</p>
                <Link href={`/posts/${params.id}`} className="btn btn-primary rounded-0">Visit The Post</Link>
            </div>
        </div>
    )
}