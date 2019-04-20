import React from "react"
import { ThemeProvider } from "styled-components"
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./header"
import Footer from "./footer"
import { Wrapper, theme } from "./style"
import "./layout.css"

const Layout = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Header />

      <Wrapper>{children}</Wrapper>

      <Footer />
    </div>
  </ThemeProvider>
)

export default Layout
