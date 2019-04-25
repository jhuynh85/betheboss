import React from 'react'
import { Button } from 'reactstrap';
import styled from 'styled-components'

const BusinessResourceLink = () => {
  return (
    <Bar>
      For updates and to support our work
      <SignUpButton className="btn font-weight-bolder">Subscribe Here</SignUpButton>
    </Bar>
  )
}

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

export default BusinessResourceLink;
