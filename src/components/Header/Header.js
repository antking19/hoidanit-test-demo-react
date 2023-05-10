import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">Hỏi Dân IT</Navbar.Brand> */}
                <NavLink to="/" className="navbar-brand">
                    Hỏi Dân IT
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/users" className="nav-link">
                            User
                        </NavLink>
                        <NavLink to="/admins" className="nav-link">
                            Admin
                        </NavLink>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#user">Users</Nav.Link>
                            <Nav.Link href="#admin">Admin</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <div>
                            <button
                                className="btn btn-outline-dark mx-3 btn-login"
                                onClick={() => handleLogin()}
                            >
                                Login
                            </button>
                            <button className="btn btn-dark btn-signup">
                                Sign Up
                            </button>
                        </div>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Sign in
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
