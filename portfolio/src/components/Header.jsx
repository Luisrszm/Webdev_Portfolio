import Nav from './Nav.jsx'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Nav
        links={[
          <Link key={1} to="/">
            About me
          </Link>,
          <Link key={2} to="/portfolio">
            Portfolio
          </Link>,
          <Link key={3} to="/resume">
            Resume
          </Link>,
          <Link key={4} to="/contact">
            Contact
          </Link>,
        ]}
      />
    </>
  );
}

export default Header