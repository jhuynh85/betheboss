import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <div className='row mt-5 pt-5'>
        <div className="col-md-6 text-center">
          <img className="idea" src={Business} alt='icon' width="80%" height="80%" />
        </div>
        <div className="col-md-6 my-5">
          <div className="text-left mt-5 pl-5">
            <h1 className="text-warning">BE THE BOSS</h1>
            <h3 className="text-white">Passionpreneurship Program</h3>
          </div>
        </div>
      </div>
    </div>
  )
}



export default HeaderLogo;
