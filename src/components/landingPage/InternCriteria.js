import React from 'react';
import { Card } from 'reactstrap';
import { CardHeader } from "./styles";

const IntroParagraph = () => {
  return (
    <Card className="mb-4">
      <CardHeader className="card-header text-center">
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
      </div>
    </Card>
  )
}

export default IntroParagraph;
