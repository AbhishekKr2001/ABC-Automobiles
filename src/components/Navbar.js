import { Link } from "react-router-dom"

//displaying Navbar from bootstrap
function Navbar() {
    return (
        <>
            <nav data-testid="menu-content" class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">ABC-Automobiles</Link>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/About">About</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/vehicles">Vehicles</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="contact">ContactUs</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;