import React from 'react';
import './styles/footer.css';

const Footer = () => {
    return (
      <footer className="bg-dark">
        <div className="row" id="inner">
          <div className="col-md-3 col-sm-6">
            <h3>About Us</h3>
            <p>
              Sendly is a parcel/courier service that delivers orders perfectly
              with utmost speed
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>Office Address</h3>
            <p>Lekki phase 1, Lagos State Nigeria</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>Working Hours</h3>
            <p>
              Weekdays: 8am - 6pm
              <br />
              Weekends: 10am - 4pm
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>More Info</h3>
            <p>
              Teams
              <br /> Locations <br />
              Privacy <br /> Terms
            </p>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;