import React from 'react';

export default function SubNav() {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="info">
              <li><i className="fa fa-envelope"></i> info@company.com</li>
              <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
