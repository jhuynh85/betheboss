import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Container,
  InnerDiv,
  InternalLink
} from "./styles"

const Footer = ({ logo }) => (
  <Container className="py-2">
    <InnerDiv>
      <InternalLink to="/code-of-conduct">
        Code of Conduct
      </InternalLink>

      <Link to="/">
      <div className="mb-3">
        <Img fluid={logo} style={{ width: "9rem" }} />
        </div>
        </Link>
    </InnerDiv>
  </Container>
)

export default Footer
