import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Header = ({ logo }) => (
  <Nav className="pl-5 py-2">
    <Link to="/">
      <Img fluid={logo} style={{ width: "9rem" }} />
    </Link>
  </Nav>
)

const Nav = styled.nav`
  align-items: center;
  background: #183882;
  display: flex;
  padding: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export default Header
