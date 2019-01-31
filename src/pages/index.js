import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../src/app.css';
import Header from '../components/Header';
import CarouselComponent from '../components/Carousel';
import Link from 'gatsby-link';
import Ages from '../components/Ages';
import Info from '../components/Info';
import OffersTab from '../components/OffersTab';
import Footer from '../components/Footer';

export default () => (
  <div>
    <Header />
    <div className="carousel-wrapper">
      <CarouselComponent className="carousel" />
    </div>
    <div className="container">
      <div className="container mt-5 d-md-inline-flex">
        <div className="container location-block p-5 text-center">
          <h2 className="text-capitalize text-title">location</h2>
          <p className="py-4">25 North Middletown Road Media, PA 19063</p>
          <p>
            The Children’s Academy is located on route 352 across from the Granite Run Mall. The
            school is conveniently located for quick access onto Route 1 and public transportation.
          </p>
          <a
            href="https://goo.gl/maps/rVvMVDCHXgF2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-capitalize text-center text-light"
          >
            get direction
          </a>
        </div>
        <div className="container operation-block text-center p-5">
          <h2 className="text-capitalize text-title">hours of operation</h2>
          <p className="p-5">
            Open from 7AM to 6PM, Monday through Friday 6 different programs are available for all
            age groups
          </p>
          <Link to="/" className="text-capitalize text-center text-light">
            view different programs
          </Link>
        </div>
      </div>
    </div>
    <Ages />
    <Info />
    <OffersTab />
    <Footer />
  </div>
);
