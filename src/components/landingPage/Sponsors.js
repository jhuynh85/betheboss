import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';

const Sponsors = () => {
  return (
    <div>
      <Card>
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
        <div className="card-footer">
          <center><h4>A Special Thank You To Our Sponsors</h4></center>
        </div>
      </Card>
    </div>
  )
}

export default Sponsors;