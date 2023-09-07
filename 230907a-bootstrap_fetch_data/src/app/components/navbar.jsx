import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link">Contact Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Countries
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link href="/countries/egypt" className="dropdown-item">Egypt</Link></li>
                            <li><Link href="/countries/ksa" className="dropdown-item">Saudi Arabia</Link></li>
                            <li><Link href="/countries/uae" className="dropdown-item">Emirates</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link href="/countries/turkey" className="dropdown-item">Turkey</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="/posts" className="nav-link">Posts</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}