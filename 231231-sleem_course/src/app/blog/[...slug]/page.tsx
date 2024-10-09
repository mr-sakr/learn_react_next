export default function SlugHome({params}:{params:{slug:string[]}}){
    if(params.slug.length === 1){
        return(
            <div>
                <hr />
                This is Category Home page,
                <hr />
                the link will be: domain.com/blog/categories
                <hr />
                {params.slug[0]}
            </div>
        )
    }else if(params.slug.length === 2){
        return(
            <div>
                This is Show Category page,
                <hr />
                the link will be: domain.com/blog/categories/1
                <hr />
                {params.slug[0]}
                <hr />
                {params.slug[1]}
            </div>
        )
    }else if(params.slug.length === 3){
        return(
            <div>
                This is Posts Home page,
                <hr />
                the link will be: domain.com/blog/categories/1/posts
                <hr />
                {params.slug[0]}
                <hr />
                {params.slug[1]}
                <hr />
                {params.slug[2]}
            </div>
        )
    }else if(params.slug.length === 4){
        return(
            <div>
                This is Show Post page,
                <hr />
                the link will be: domain.com/blog/categories/1/posts/7
                <hr />
                {params.slug[0]}
                <hr />
                {params.slug[1]}
                <hr />
                {params.slug[2]}
                <hr />
                {params.slug[3]}
            </div>
        )
    }
}