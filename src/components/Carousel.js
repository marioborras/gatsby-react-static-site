import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../../public/img/slide1.jpg';
import pic2 from '../../public/img/slide2.jpg';
import pic3 from '../../public/img/slide3.jpg';

export default class CarouselComponent extends Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={pic1} />
        </div>
        <div>
          <img src={pic2} />
        </div>
        <div>
          <img src={pic3} />
        </div>
      </Carousel>
    );
  }
}