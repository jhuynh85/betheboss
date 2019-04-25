import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';
import { CardHeader } from "./styles"
import Ideas from '../../images/be-the-boss-ideas.jpg'

const Sponsors = () => {
  return (
    <div>
      <Card>
        <CardHeader className="card-header text-center">
          <h4>A Special Thank You To Our Sponsors:</h4>
        </CardHeader>
        <div className="card-body">
          <Row className="py-2 mr-2">
            <Col className="col-sm-6">
              <center><img src={Vus} alt='vus' width="55%" height="90%" /></center>
            </Col>
            <Col className="col-sm-6">
              <img src={SdWf} alt='sdwf' height="70%" width="100%" />
            </Col>
          </Row>
        </div>
        <div className="card-footer"></div>
      </Card>
      <div className="mt-5 text-center">
        <img src={Ideas} alt="ideas" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Sponsors;
