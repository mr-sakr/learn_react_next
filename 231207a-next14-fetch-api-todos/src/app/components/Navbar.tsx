import Link from "next/link"
export default function Header(){
    return(
        <header className="w-full bg-red-500 py-5">
            <ul className="w-full flex justify-around">
                <li className="text-amber-300 hover:text-amber-50">
                    <Link href='/'>Home</Link>
                </li>
                <li className="text-amber-300 hover:text-amber-50">
                    <Link href='todos'>ToDo</Link>
                </li>
                <li className="text-amber-300 hover:text-amber-900">
                    <Link href='#'>Contact</Link>
                </li>
            </ul>
        </header>
    )
}