import _default from "eslint-plugin-react-refresh";

function Nav({ links }) {
    console.log(links)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="/"><h2>Luis Reséndez</h2></a>
                <ul className="navbar-nav">
                    {links.map((link) =>
                        <li key={link.key}><a className="navbar-brand" href={link.props.to}>{link.props.children}</a></li>
                    )}
                </ul>
            </div>
        </nav>
);
}

export default Nav;