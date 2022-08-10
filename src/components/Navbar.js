import './Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <div className='navLogo'>
                <h1>Meilika</h1>
            </div>
            <div className='navbarMenu'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    {/* <li>Experience</li> */}
                    <li><a href="#myProject">My Project</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar