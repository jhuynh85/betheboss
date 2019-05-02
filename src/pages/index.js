import React from "react"
import { Container, Row } from 'reactstrap'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sponsors from '../components/landingPage/Sponsors'
import InternCriteria from "../components/landingPage/InternCriteria";
import AboutUs from "../components/landingPage/AboutUs";
import SignUpBar from "../components/landingPage/SignupBar";
import PhotoSlider from '../components/landingPage/PhotoSlider';
import CollapseToggleForm from '../components/landingPage/CollapseToggleForm';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <PhotoSlider />
      <SignUpBar />
      <div className="py-5">
        <CollapseToggleForm />
      </div>
      <Container>
        <Row className="mt-4">
          <div className="col-lg-12">
            <AboutUs />
            <hr />
          </div>
        </Row>
        <Row className="my-3 p-3">
          <div className="col-lg-6">
            <InternCriteria />
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
