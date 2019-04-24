import React from 'react';
import { Card } from 'reactstrap';
import Sdth from '../../images/san-diego-tech-hub.png';

const IntroParagraph = () => {
  return (
    <Card>
      <div className="card-body p-4">
        <p>Our Be The Boss Passionpreneurship Program transforms youth and young adults (ages 16-24) into confident and successful  entrepreneurs. </p>

        <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
      </div>
      <div className="card-footer">
        <center><img src={Sdth} alt='sdth' width="60%" height="60%" /></center>
      </div>
    </Card>
  )
}

export default IntroParagraph;
