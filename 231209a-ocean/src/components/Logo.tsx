import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href='/' className="flex items-end gap-2">
            <Image src='/logo.png' alt="Logo" width={30} height={30}/>
            <div className="relative">
                <h1 className="capitalize">Ocean</h1>
                <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700"></div>
            </div>
        </Link>
    )
}