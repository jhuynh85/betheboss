import React from 'react';
import { UncontrolledCarousel, Container } from 'reactstrap';

const items = [
  {
    src: require('../../images/be-the-boss-passion.jpg'),
    caption: 'Be The Boss'
  },
  {
    src: require('../../images/be-the-boss-ideas.jpg'),
    caption: 'Be The Boss'
  },
  {
    src: require('../../images/be-the-boss-graduate.jpg'),
    caption: 'Be The Boss'
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