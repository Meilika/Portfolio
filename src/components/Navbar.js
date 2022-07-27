import './Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <div className='navLogo'>
                <h1>Meilika</h1>
            </div>
            <div className='navbarMenu'>
                <ul>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>My Project</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar