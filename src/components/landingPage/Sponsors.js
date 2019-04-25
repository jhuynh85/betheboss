import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';
import { CardHeader } from "./styles"
import Sdth from '../../images/san-diego-tech-hub.png'

const Sponsors = () => {
  return (
    <div>
      <Card>
        <CardHeader className="card-header text-center">
          <h4>A Special Thank You To Our Sponsors:</h4>
        </CardHeader>
        <div className="card-body">
          <Row className="mb-5">
            <Col className="col-sm-12 text-center">
              <img src={Sdth} alt='sdth' width="60%" height="60%" />
              <p>San Diego Tech Hub</p>
            </Col>
          </Row>
          <Row className="py-2 mr-2">
            <Col className="col-sm-6 text-center">
              <img src={Vus} alt='vus' width="60%" height="60%" />
              <p>Vista Unified School District</p>
            </Col>
            <Col className="col-sm-6 text-center">
              <img src={SdWf} alt='sdwf' height="60%" width="60%" />
              <p>San Diego Workforce</p>
            </Col>
          </Row>
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  )
}

export default Sponsors;
