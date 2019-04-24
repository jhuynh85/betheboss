import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import { Row, Col } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <img className="idea" src={Business} alt='icon' width="40%" height="90%" />
    </div>
  )
}



export default HeaderLogo;
