import React from 'react';
import { Card } from 'reactstrap';
import Sdth from '../../images/san-diego-tech-hub.png';
import { CardHeader } from "./styles";

const IntroParagraph = () => {
  return (
    <Card>
      <CardHeader className="card-header">
        <h4>Intern Criteria for the BE THE BOSS program:</h4>
      </CardHeader>
      <div className="card-body p-4">
        <ul>
          <li>Between 16-24 years old</li>
          <li>Qualify as low to moderate income</li>
          <li>Part of a demographic group underrepresented in entrepreneurship including women and minorities</li>
          <li>Does not have access to a computer at home</li>
          <li>Does not have access to entrepreneurial resources from a family network</li>
        </ul>
      </div>

      <div className="card-footer text-center">
        <h4>Brought To You By:</h4>
        <center><img src={Sdth} alt='sdth' width="80%" height="80%" /></center>
      </div>
    </Card>
  )
}

export default IntroParagraph;
