import Link from "next/link"
export default function CatsPage(){
    return(
        <div>
            <h1>This is Categories index page.</h1>
            <Link href="/">
                <button>Home Page</button>
            </Link>
        </div>
    )
}