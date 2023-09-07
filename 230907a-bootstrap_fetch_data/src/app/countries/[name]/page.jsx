export default function CountryPage({params}){
    console.log(params);
    return(
        <div>
            <div>This page is for show one country details</div>
            <hr />
            <h1>The Country is : {params.name}</h1>
        </div>
    )
}