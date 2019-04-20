import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import styled from "styled-components";

const HeaderLogo = () => {
  return (
    <Jumbotron className="JumbotronImg py-5">
      <Intro>
        <h1 className="text-warning">BE THE BOSS</h1>
        <h3>Passionpreneurship Program</h3>
      </Intro>
    </Jumbotron>
  )
}

const Intro = styled.div`
  padding: 0.2rem 2rem;
  text-align: center;

  h1 {
    margin-bottom: 0.5rem;
  }
`

const Jumbotron = styled.header`
  background-image: url(${Business});
  background-size: cover;
  color: white;
  display: flex;
  justify-content: flex-end;
  height: 30rem;
  text-shadow: 5px 5px 25px black;
  width: 100vw;
`

export default HeaderLogo;
