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
          <Row className="mb-1">
            <Col className="col-sm-12">
              <center>
                <img src={Sdth} alt='sdth' width="100%" height="100%" />
              </center>
            </Col>
          </Row>
          <Row className="py-2 mr-2">
            <Col className="col-sm-6 text-center">
              <center>
                <img src={Vus} alt='vus' width="70%" height="70%" />
              </center>
            </Col>
            <Col className="col-sm-6 text-center">
              <center>
                <img src={SdWf} alt='sdwf' height="70%" width="100%" />
              </center>
            </Col>
          </Row>
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  )
}

export default Sponsors;
