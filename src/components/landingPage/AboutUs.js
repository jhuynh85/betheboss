import React from 'react';
import PhotoSlider from './PhotoSlider'
import { Row, Col } from 'reactstrap'

const AboutUs = () => {
  return (
    <div className="mt-2 px-1">
      <h3 className="text-center">Our Be the Boss Internship Program</h3>
      <hr />
      <Row>
        <Col className="col-md-6">
          <p>Our team of professional leaders and community mentors transform youth and young adults (ages 16-24) into confident and successful entrepreneurs.</p>

          <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
        </Col>
        <Col className="col-md-6">
          <div className="text-center">
            <PhotoSlider />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;