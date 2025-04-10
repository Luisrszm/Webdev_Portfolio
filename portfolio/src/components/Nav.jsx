import _default from "eslint-plugin-react-refresh";

function Nav({ links }) {
    console.log(links)
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand top-link" href="/">Luis Reséndez</a>
                <div className="links-div">
                    {links.map((link) =>
                        <li key={link.key}><a className="navbar-link link" href={link.props.to}>{link.props.children}</a></li>
                    )}
                </div>
            </div>
        </nav>
);
}

export default Nav;