import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import styled from "styled-components";
import PhotoSlider from './PhotoSlider'

const HeaderLogo = () => {
  return (
    <Jumbotron className="JumbotronImg py-5">
    </Jumbotron>
  )
}

const Jumbotron = styled.header`
  background-image: url(${Business});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  color: white;
  display: flex;
  justify-content: flex-end;
  height: 30rem;
  text-shadow: 5px 5px 25px black;
  width: 100vw;
  `

export default HeaderLogo;


  // <Intro>
  //   <h1>BE THE BOSS</h1>
  //   <h2>Passionpreneurship Program</h2>
  // </Intro>

  // const Intro = styled.div`
  // margin-top: 9rem;
  // padding: 0.2rem 2rem;
  // text-align: center;

  // h1 {
  //   margin-bottom: 0.5rem;
  // }
  // `