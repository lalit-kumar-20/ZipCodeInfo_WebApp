import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Applogo from "../Assests/Logo .png";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";

import { AiFillStar } from "react-icons/ai";

import style from "./Navbar.Style";

const NavBaar = () => {
  return (
    <>
      <Navbar fixed="top" expand="md">
        <img style={style.NavbarlogoStyle} src={Applogo} alt="brand" />
        <Container>
          <nav
            className="navbar navbar-lg navbar-dark  "
          >
            <Button
              style={style.NavbarGithubButtonStyle}
              href="https://github.com/lalit-kumar-20"
              target="_blank"
              className="fork-btn-outer"
            >
              <>
                <div style={style.NavbarGithubIconStyle}>
                  <CgGitFork style={style.NavbarGithubIconAlignStyle} />
                  <AiFillStar style={style.NavbarGithubIconAlignStyle} />
                </div>
              </>
            </Button>
          </nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBaar;
