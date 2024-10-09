import { FC } from "react"

interface HeadingProps{
    title:string,
    isCentered?:boolean
}
/* export default function Heading({ title, isCentered }: HeadingProps){
    return(
        <div>
            <div className="text-2xl font-semibold text-sky-500">{title}</div>
        </div>
    )
} */

const Heading: FC<HeadingProps> = ({title, isCentered}) =>{
    return(
        <div>
            <div className="bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 sm:text-4xl lg:text-5xl font-extrabold">{title}</div>
        </div>
    )
}
export default Heading;