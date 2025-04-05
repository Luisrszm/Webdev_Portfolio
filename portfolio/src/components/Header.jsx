import Nav from './Nav.jsx'
import { Link } from 'react-router-dom';


function Header() {

    return (
        <header>
            <Nav
                links={[
                    <Link key={1} className="nav-link text-light" to="/">
                        AboutMe
                    </Link>
                ]}
            />
        </header>
    );
}

export default Header