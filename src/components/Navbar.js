import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav>
            <div className='navLogo'>
                <h1>Meilika</h1>
            </div>
            <div className='navbarMenu'>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/experience">
                        <li>Experience</li>
                    </Link>
                    <Link to="/myproject">
                        <li>My Project</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar