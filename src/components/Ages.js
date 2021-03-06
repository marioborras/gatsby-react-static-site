import React from 'react';
import toddler from '../img/toddler.png';
import youngToddler from '../img/young-toddler.png';
import preschooler from '../img/preschoolers.png';
import prek from '../img/prek.png';

const Ages = () => (
  <React.Fragment>
    <div className="groups py-2 mt-5 d-md-flex">
      <div className="mx-auto py-2">
        <div className="py-4">
          <img src={toddler} alt="infants" className="d-block mx-auto" />
        </div>
        <h3 className="text-capitalize text-center">infants</h3>
        <p className="text-center">(0 months - 12 months)</p>
      </div>
      <div className="mx-auto py-2">
        <div className="py-4">
          <img src={toddler} alt="young toddlers" className="d-block mx-auto" />
        </div>
        <h3 className="text-capitalize text-center">young toddlers</h3>
        <p className="text-center">(12 months-23 months)</p>
      </div>
      <div className="mx-auto py-2">
        <div className="py-4">
          <img src={youngToddler} alt="toddlers" className="d-block mx-auto" />
        </div>
        <h3 className="text-capitalize text-center">toddlers</h3>
        <p className="text-center">(2 years old)</p>
      </div>
      <div className="mx-auto py-2">
        <div className="py-4">
          <img src={preschooler} alt="preschoolers" className="d-block mx-auto" />
        </div>
        <h3 className="text-capitalize text-center">preschoolers</h3>
        <p className="text-center">(3 years old)</p>
      </div>
      <div className="mx-auto py-2">
        <div className="py-4">
          <img src={prek} alt="Pre-K" className="d-block mx-auto" />
        </div>
        <h3 className="text-capitalize text-center">Pre-K</h3>
        <p className="text-center">(Pre-K For All)</p>
      </div>
    </div>

    <div className="ages-divider" />
  </React.Fragment>
);
export default Ages;
