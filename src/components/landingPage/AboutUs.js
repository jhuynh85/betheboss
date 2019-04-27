import React from 'react';
import PhotoSlider from './PhotoSlider'
import Passion from '../../images/be-the-boss-passion.jpg';

const AboutUs = () => {
  return (
    <div className="mt-3">
      <h3 className="text-center">Our Be the Boss Internship Program</h3>
      <p>Our team of professional leaders and community mentors transform youth and young adults (ages 16-24) into confident and successful entrepreneurs.</p>

      <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
      <br />
      <div className="text-center">
        <PhotoSlider />
      </div>
    </div>
  );
};

export default AboutUs;