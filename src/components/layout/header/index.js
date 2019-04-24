import {
  Container,
  Logo,
  Nav,
  StyledImg
} from "./style"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import btbLogo from "../../../images/bethebossicon.jpg"

const Header = () => (
  <Nav>
    <Container className="pt-1">
      <Logo>
        <Link to="/">
          <StyledImg className="ml-5" alt="Be The Boss" src={btbLogo} />
        </Link>
      </Logo>
      <h1 className="text-white mr-5 pt-2">Welcome!</h1>
    </Container>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
