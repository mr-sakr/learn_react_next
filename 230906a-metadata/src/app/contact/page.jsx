import Link from "next/link";

export const metadata = {
    title: 'Contact Page',
    description: 'Contact Us we are here',
}

export default function ContactPage(){
    
    return(
        <>
            <h1>This is : Contact Page</h1>
            <h2>
                <Link href="/">← Back to Home Page</Link>
            </h2>
        </>
    )
}