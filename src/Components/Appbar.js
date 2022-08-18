import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authenStore, usernameStore } from "../Stores/Authen";

function Appbar() {
  const isLogin = useRecoilValue(authenStore);
  const userName = useRecoilValue(usernameStore);
  const setLogin = useSetRecoilState(authenStore);
  const logOut = () => {
    setLogin(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Chatbot
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/users">
              Users
            </Link>
            <Link className="nav-link" to="/groups">
              Groups
            </Link>
          </Nav>
          <Nav>
            {!isLogin ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <>
                <Nav.Link className="nav-link">{userName}</Nav.Link>
                <Nav.Link className="nav-link" onClick={logOut}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
