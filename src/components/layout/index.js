import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./header"
import Footer from "./footer"
import { Wrapper, theme } from "./style"
import "./layout.css"

const Layout = ({ children, pageProps }) => (
  <StaticQuery
    query={query}
    render={({ footer }) => (
      <ThemeProvider theme={theme}>
        <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
          <Header logo={footer.childImageSharp.fluid} />

          <Wrapper>{children}</Wrapper>

          <Footer logo={footer.childImageSharp.fluid} />
        </div>
      </ThemeProvider>
    )}
  />
)

export default Layout

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
