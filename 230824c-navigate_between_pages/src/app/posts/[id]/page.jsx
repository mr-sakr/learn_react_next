export const metadata = {
    title: 'Page Index'
}

export default function Post(props){
    return(
        <div>
            This is Post id : {props.params.id}
        </div>
    )
}