import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const CollapseToggleForm = () => {
  return (
    <div>
      <Button id="toggler" className="btn btn-block btn-danger text white">Click Here</Button>
      <UncontrolledCollapse toggler="#toggler">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIj25U0pLgLsuud0JWSAxQs_3mkcLI0PCC0pdAmePZb-o1Xg/viewform" width="100%" height="2600px" />
      </UncontrolledCollapse>
    </div>
  )
}

export default CollapseToggleForm;

// import React, { Component } from 'react';
// import { Container, Collapse, Button } from 'reactstrap';

// class CollapseToggleForm extends Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }

//   toggle() {
//     this.setState(state => ({ collapse: !state.collapse }));
//   }

//   render() {
//     return (
//       <Container className="bg-primary py-5">

//         <Button onCLick={this.toggle} className="btn btn-block btn-danger text-white">Test</Button>

//         <Collapse isOpen={this.state.collapse}>
//           <iframe className="my-1 py-1" src="https://docs.google.com/forms/d/e/1FAIpQLSeIj25U0pLgLsuud0JWSAxQs_3mkcLI0PCC0pdAmePZb-o1Xg/viewform" width="100%" height="100%" />
//         </Collapse>

//       </Container>
//     )
//   }
// };

// export default CollapseToggleForm;
