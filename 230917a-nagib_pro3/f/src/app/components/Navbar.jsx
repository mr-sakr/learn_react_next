import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex jsutify-content between">
                <div className="item-nav">
                    <Link href="/" className="nav-link">Home</Link>
                </div>

                <div className="d-flex">
                    <Link href="login" className="nav-link">Login</Link>
                    <Link href="signup" className="nav-link">Sign Up</Link>
                </div>
            </div>

            <style>{`
                .nav-link{
                    color:red;
                    width: 100px;
                }
            `}</style>
        </nav>
    )
}