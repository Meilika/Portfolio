import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav>
            <div className='navLogo'>
                <h1>Meilika</h1>
            </div>
          <div
            className={'navbarMenu' +
                (navbarOpen ? " show" : " hidden")
                }
            >
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
            <button className='burger-button'
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {(!navbarOpen) ? <img src="https://img.icons8.com/material-rounded/24/menu--v1.png" alt="menu--v1"/> : <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/x.png" alt="x"/>}
            </button>
        </nav>
    )
}

export default Navbar