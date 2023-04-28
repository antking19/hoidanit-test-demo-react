import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#home">Hoi Dan IT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/users" className="nav-link">
                                Users
                            </NavLink>
                            <NavLink to="/admins" className="nav-link">
                                Admins
                            </NavLink>
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#user">Users</Nav.Link>
                            <Nav.Link href="#admin">Admins</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <button className="btn btn-outline-dark mx-3">
                                Login
                            </button>
                            <button className="btn btn-dark">Sign Up</button>
                            {/* <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
