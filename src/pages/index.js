import React from "react"
import { Container, Row } from 'reactstrap'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sponsors from '../components/landingPage/Sponsors'
import IntroParagraph from "../components/landingPage/IntroParagraph";
import SignUpBar from "../components/landingPage/SignUpBar";
import HeaderLogo from "../components/landingPage/HeaderLogo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <HeaderLogo />
      <SignUpBar />
      <Container>
        <Row className="my-3 p-3">
          <div className="col-lg-6">
            <IntroParagraph />
          </div>

          <div className="col-lg-6">
            <Sponsors />
          </div>
        </Row>
      </Container>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
