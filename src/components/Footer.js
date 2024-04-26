import { Link } from "react-router-dom";
//footer from bootstrap


function Footer() {
    return (
        <footer data-testid="footer-content" className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-md-4 d-flex align-items-center">
                        <Link to="/" className="me-2 text-secondary text-decoration-none">
                            <svg className="bi" width="30" height="24"></svg>
                        </Link>
                        <span className="text-secondary">© 2024 Company, Inc</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
