import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer class="footer-bs">
      <div class="row">
        <div class="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu </h4>
            <div class="col-md-6">
                  <ul class="list">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contacts</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                  </ul>
              </div>
          </div>
        <div class="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">RSS</a></li>
              </ul>
          </div>
          <div class="col-md-4 footer-social animated fadeInDown">
            <h4>© Copyright RTech IT Soltuions 2018</h4>
          </div>
      </div>
  </footer>
    );
  }
}

export default Footer;
