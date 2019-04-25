import React from "react"
import { Container, Row } from 'reactstrap'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sponsors from '../components/landingPage/Sponsors'
import InternCriteria from "../components/landingPage/InternCriteria";
import AboutUs from "../components/landingPage/AboutUs";
import SignUpBar from "../components/landingPage/SignupBar";
import HeaderLogo from "../components/landingPage/HeaderLogo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <HeaderLogo />
      <SignUpBar />
      <Container>
      <Row className="text-center mt-4">
      <div className="col-lg-12">
      <h3>Our Be the Boss Internship Program</h3>
      <hr/>
      </div>
      </Row>
        <Row className="my-3 p-3">
        <div className="col-lg-4">
            <AboutUs />
          </div>  
        <div className="col-lg-4">
            <InternCriteria />
          </div>
          <div className="col-lg-4">
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
