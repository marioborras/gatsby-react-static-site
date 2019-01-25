import React from 'react';
import ChildTree from './../../public/img/child-tree.jpg';
import ChildFloor from './../../public/img/child-floor.jpg';
import ChildToys from './../../public/img/child-toys.jpg';
import Link from 'gatsby-link';
const OffersTab = () => (
  <div className="container tab-widget p-5">
    <div className="text-center p-5">
      <h1 className="text-capitalize">what we offer</h1>
    </div>
    <div className="nav flex-column text-center" id="nav-tab" role="tablist">
      <a
        className="nav-item widget-tab-top nav-link active"
        id="nav-home-tab"
        data-toggle="tab"
        href="#nav-home"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
      >
        Programs
      </a>
      <a
        className="nav-item nav-link"
        id="nav-profile-tab"
        data-toggle="tab"
        href="#nav-profile"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
      >
        Curriculum
      </a>
      <a
        className="nav-item nav-link"
        id="nav-contact-tab"
        data-toggle="tab"
        href="#nav-contact"
        role="tab"
        aria-controls="nav-contact"
        aria-selected="false"
      >
        Staff
      </a>
    </div>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active p-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div>
          <img src={ChildTree} className="img-fluid" alt="child by a tree" />
        </div>
        <div className="mt-5">
          <h3 className="text-title">Our Programs</h3>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque voluptas. Perspiciatis dolorum vitae
            recusandae ea tempore ipsum enim mollitia esse repudiandae, possimus quae neque quia laborum corporis,
            quaerat sed?
          </p>
        </div>
        <div>
          <Link to="/">Learn More</Link>
        </div>
      </div>
      <div className="tab-pane fade p-5" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div>
          <img src={ChildFloor} className="img-fluid" alt="kids coloring on the floor" />
        </div>
        <div className="mt-5">
          <h3 className="text-title">Our Curriculum</h3>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque voluptas. Perspiciatis dolorum vitae
            recusandae ea tempore ipsum enim mollitia esse repudiandae, possimus quae neque quia laborum corporis,
            quaerat sed?
          </p>
        </div>
        <div>
          <Link to="/">Learn More</Link>
        </div>
      </div>
      <div className="tab-pane fade p-5" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <div>
          <img src={ChildToys} className="img-fluid" alt="children's toy" />
        </div>
        <div className="mt-5">
          <h3 className="text-title">Staff</h3>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque voluptas. Perspiciatis dolorum vitae
            recusandae ea tempore ipsum enim mollitia esse repudiandae, possimus quae neque quia laborum corporis,
            quaerat sed?
          </p>
        </div>
        <div>
          <Link to="/">Learn More</Link>
        </div>
      </div>
    </div>
  </div>
);
export default OffersTab;
