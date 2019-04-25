import React from 'react';
import { Card } from 'reactstrap';

const AboutUs = () => {
  return (
    <div>
      <Card>
        <div className="card-header text-center">
          <h4>About Us:</h4>
        </div>
        <div className="card-body">
          <p>Our team of professional leaders and community mentors transform youth and young adults (ages 16-24) into confident and successful entrepreneurs.</p>
          
          <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  );
};

export default AboutUs;