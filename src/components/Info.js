import React from 'react';
import { ButtonContainer } from './Button/Button';
const Info = () => {
  return (
    <div className="container my-5 info">
      <div className="row">
        {/*box 1 */}
        <div className="info-box info-box-pic  info-box-pic-one col-sm-12 col-md-6" />
        {/*box 2 */}
        <div className="info-box col-sm-12 col-md-6">
          <div className="text-center my-5 my-md-0 py-5">
            <h3 className="text-capitalize text-title">play. learn. grow.</h3>
            <p className="p-5">
              We pride ourselves on being able to provide a happy, safe and inclusive environment in
              which children aged zero to five years old are encouraged to explore their potential!
            </p>
            <div className="pb-4">
              <ButtonContainer className="blue-btn">Schedule a Tour</ButtonContainer>
            </div>
          </div>
        </div>
        {/*box 3 */}
        <div className="info-box col-sm-12 col-md-6">
          <div className="text-center my-5 py-5">
            <h3 className="text-capitalize text-title">Why Children's Academy?</h3>
            <p className="p-5">
              Each age grouping has a classroom specifically designed with learning centers for
              dramatic play, science, arts and crafts, blocks, reading, manipulatives, large and
              small group activities.
            </p>
            <div>
              <ButtonContainer className="orange-btn">View Our Programs</ButtonContainer>
            </div>
          </div>
        </div>
        {/*box 4 */}
        <div className="info-box info-box-pic info-box-pic-two col-sm-12 col-md-6" />
      </div>
    </div>
  );
};

export default Info;
