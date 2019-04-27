import React from 'react';
import Passion from '../../images/be-the-boss-passion.jpg';
import Ideas from '../../images/be-the-boss-ideas.jpg';
import Graduate from '../../images/be-the-boss-graduate.jpg';
import { UncontrolledCarousel, Container } from 'reactstrap';

const items = [
  {
    src: Passion,
    caption: 'Passion'
  },
  {
    src: Ideas,
    caption: 'Ideas'
  },
  {
    src: Graduate,
    caption: 'Future'
  }
];

const PhotoSlider = () => {
  return (
    <Container>

      <UncontrolledCarousel items={items} />


    </Container>
  )
}

export default PhotoSlider;