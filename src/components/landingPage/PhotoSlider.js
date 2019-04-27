import React from 'react';
import Passion from '../../images/be-the-boss-passion.jpg';
import Ideas from '../../images/be-the-boss-ideas.jpg';
import Graduate from '../../images/be-the-boss-graduate.jpg';
import Business from '../../images/be-the-boss-business.jpg';
import Internship from '../../images/be-the-boss-internship.jpg';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: Business,
    caption: 'Mentors'
  },
  {
    src: Passion,
    caption: 'Passion'
  },
  {
    src: Internship,
    caption: 'Internship'
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

      <UncontrolledCarousel items={items} />

  )
}

export default PhotoSlider;