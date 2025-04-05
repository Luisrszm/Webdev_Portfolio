
function Nav({ links }) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Luis Reséndez</a>
                <ul className="navbar-nav">
                    {links.map((link) => link)}
                </ul>
            </div>
        </nav>
);
}

export default Nav;