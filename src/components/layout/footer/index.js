import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Container,
  InnerDiv,
  InternalLink
} from "./styles"

const Footer = ({ logo }) => (
  <Container>
    <InnerDiv>
      <InternalLink to="/code-of-conduct">
        Code of Conduct
      </InternalLink>

      <Link to="/">
        <Img fluid={logo} style={{ width: "7rem" }} />
      </Link>
    </InnerDiv>
  </Container>
)

export default Footer
