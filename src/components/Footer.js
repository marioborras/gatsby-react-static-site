import React from 'react';
import logo from './../../public/img/logo.png';

const Footer = () => (
  <footer className="mt-4 footer py-3">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-xs-2">
          <h2 className="text-title text-capitalize py-4">about us</h2>
          <ul className="list-unstyled">
            <li>The Children's Academy, established in 1986,</li>
            <li>is located on a 6 acre campus with an 11,000</li>
            <li>square foot building. The school facility </li>
            <li>includes a library, an indoor playroom and 8</li>
            <li>classrooms for ages 8 weeks through prekindergarten. </li>
            <li>A small cottage adjacent tothe main building houses </li>
            <li>our full day kindergarten class.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xs-2">
          <h2 className="text-title text-capitalize py-4">quick links</h2>
          <ul className="list-unstyled">
            <li>How to Enroll</li>
            <li>Classrooms</li>
            <li>Frequently Asked Questions</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-title text-capitalize py-4">contact us</h2>
        <ul className="list-unstyled">
          <li className="pb-3">
            <i className="fas fa-map-marker-alt pr-3" />
            Media, PA 19063, United States
          </li>
          <li className="pb-3">
            <i className="fas fa-mobile-alt pr-3" />
            Call Us: 610-565-1076
          </li>
          <li className="pb-3">
            <i className="far fa-envelope pr-3" />
            tcamedia@hotmail.com
          </li>
          <li className="pb-3">
            <i className="far fa-clock pr-3" />
            Monday-Fridayday: 7:00am - 6:00 pm
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div>
      <img src={logo} alt="logo" className="img-ca mx-auto py-4 d-block" />
    </div>
  </footer>
);
export default Footer;
