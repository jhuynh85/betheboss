import React from 'react';
import { UncontrolledCollapse, Button } from 'reactstrap';
import styled from 'styled-components'

const CollapseToggleForm = () => {
  const Bar = styled.div`
  background: #3C73B3;
  color: white;
  font-family: sans-serif;
  padding: 1rem 0;
  text-align: center;
`

const SignUpButton = styled(Button)`
  background: #FDC02F;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  margin-left: 0.8rem;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  &:hover, &:focus {
    background: #EDB01F;
  }
`

  return (
    <div>
    <Bar>
    <div className="py-3">
      Receive free business resources and learn more about our incredible intern program by signing up.

    <SignUpButton className="btn font-weight-bolder" id="toggler">Support Our Work </SignUpButton>
    </div>
  </Bar>

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
          
          // <Button id="toggler" className="btn btn-warning text-white">Support Our Work</Button>