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
    <Container>
      <Logo>
        <Link to="/">
          <StyledImg alt="Be The Boss" src={btbLogo} />
        </Link>
      </Logo>
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
