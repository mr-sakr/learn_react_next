import Link from "next/link"

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if(!res.ok){
        throw new Error('Failed to fetch Data')
    }
    return res.json()
}


export default async function TodoList(){
    const data = await getData()

    return(
        <div className="w-96">
            {data.map((item:any)=>(
                <Link
                key={item.id}
                href="#!"
                aria-current="true"
                className="block w-full cursor-pointer rounded-lg hover:bg-blue-200 p-4 text-primary-600">
                <div className="flex justify-between">
                    <div>#{item.id}</div>
                    <div>By :{item.userId}</div>
                </div>
                <p>{item.title}</p>
                <div>{item.completed ? 'Done' : 'Not'}</div>
            </Link>
            ))}
        </div>
    )
}