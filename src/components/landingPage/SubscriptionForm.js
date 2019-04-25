import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from '../../images/bethebossiconTransparent.png';

const SubscriptionForm = (props) => {
  return (
    <div>
    <center><img src={Logo} alt='logo' height="50%" width="50%"/></center>
      <Form>
        <FormGroup >
          <Label for="firstName">First Name:</Label>
          <Input type="text" id="firstName" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name:</Label>
          <Input type="text" id="lastName" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="email" id="email" />
        </FormGroup>
      </Form>
    </div>
  );
};

export default SubscriptionForm;