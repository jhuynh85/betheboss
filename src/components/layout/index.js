import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "./header"
import { Wrapper, theme } from "./style"
import "./layout.css"

const Layout = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <Header />

        <Wrapper>{children}</Wrapper>

      </div>
  </ThemeProvider>
)

export default Layout
