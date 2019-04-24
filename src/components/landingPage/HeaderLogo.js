import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5 mt-0">
      <div className=' row mx-5 px-5'>
        <div className="col-md-6 p-5">
          <img className="idea" src={Business} alt='icon' width="100%" height="100%" />
        </div>
        <div className="col-md-6 pt-5 pr-5">
          <div className="text-white text-center">
            <h1 >BE THE BOSS</h1>
            <h3>Passionpreneurship Program</h3>

          </div>
        </div>
      </div>
    </div>
  )
}



export default HeaderLogo;
