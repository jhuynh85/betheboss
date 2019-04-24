import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Container,
  InnerDiv,
  InternalLink
} from "./styles"

const Footer = () => (
  <Container>
    <StaticQuery
      query={query}
      render={({ footer }) => (
        <InnerDiv>
          <InternalLink to="/code-of-conduct">
            Code of Conduct
          </InternalLink>

          <Link to="/">
            <Img fluid={footer.childImageSharp.fluid} style={{ width: "7rem" }} />
          </Link>
        </InnerDiv>
      )}
    />
  </Container>
)

const query = graphql`
  query FOOTER_QUERY {
    footer: file(relativePath: { eq: "bethebossicon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Footer
