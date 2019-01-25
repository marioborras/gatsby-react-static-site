import React from 'react';
import smilingChild from '../../public/img/child-smiling.jpeg';
import childCrayon from '../../public/img/child-crayons.jpeg';
import { ButtonContainer } from './Button/Button';
const Info = () => {
  return (
    <div className="container my-5 info">
      <div>
        <div>
          <img className="img-fluid" src={smilingChild} alt="kid smiling" />
        </div>
        <div className="text-center my-5">
          <h3 className="text-capitalize text-title">play. learn. grow.</h3>
          <p className="p-5">
            We pride ourselves on being able to provide a happy, safe and inclusive environment in which children aged
            zero to five years old are encouraged to explore their potential!
          </p>
          <div className="pb-4">
            <ButtonContainer className="blue-btn">Schedule a Tour</ButtonContainer>
          </div>
        </div>
        <div>
          <div className="text-center my-5">
            <h3 className="text-capitalize text-title">Why Children's Academy?</h3>
            <p className="p-5">
              Each age grouping has a classroom specifically designed with learning centers for dramatic play, science,
              arts and crafts, blocks, reading, manipulatives, large and small group activities.
            </p>
            <div>
              <ButtonContainer className="orange-btn">View Our Programs</ButtonContainer>
            </div>
            <div className="my-5">
              <img className="img-fluid" src={childCrayon} kid="kid coloring" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
