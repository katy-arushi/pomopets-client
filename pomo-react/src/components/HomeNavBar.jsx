import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { SessionsContext } from "../context/SessionsContext";

export default function HomeNavBar(props) {
  const [session, setSession] = useContext(SessionsContext);
  const { user } = props;

  // useEffect(() => {
  //   console.log('session', session);
  // },[session?.state.email]);

  return (
    <Navbar className="main-navbar" bg="light" expand="lg">
      <Container>
        <Link className="nav-link nav-main-link" to="/">
          PomoPets
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/pets">
              Pets
            </Link>
            <Link className="nav-link" to="/timers">
              Timers
            </Link>
            {session?.state.username ? (
              <Link className="nav-link" to="/statistics">
                Statistics
              </Link>
            ) : null}
            <Link className="nav-link" to="/about">
              About Pomodoro
            </Link>{" "}
            {session?.state.username ? (
              <NavDropdown
                title={`${session?.state.username}'s Account`}
                id="basic-nav-dropdown"
              >
                <Link className="logout-nav nav-link" to="/editUser">Edit User</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : null}
            <div className="button-div">
              {session?.state.email ? (
                ""
              ) : (
                <Link className="login-button" to="/login">
                  &nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;
                </Link>
              )}
              {session?.state.email ? (
                ""
              ) : (
                <Link
                  className="register-button"
                  id="register-nav"
                  to="/register"
                >
                  &nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
