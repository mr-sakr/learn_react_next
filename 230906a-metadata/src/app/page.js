import Link from "next/link"
import Script from "next/script"

export default function Home() {
  return (
    <main>
          <h1>This is : Home Page</h1>
          <h2>
              <Link href="/contact">Contact Page</Link>
          </h2>
    </main>
  )
}
