import React, { Component } from 'react';
import { Jumbotron,Grid,Row,Col,Image,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import HomePageLogo from '../assets/HomePage.jpg'

class Home extends Component {
  render() {
    return (
      <Image src={HomePageLogo}  responsive/>
    );
  }
}

export default Home;
