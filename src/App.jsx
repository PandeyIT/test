import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BotFrame from './Components/Bot';
import  './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="App">
          <Header />
          <Route exact path= "/test/" component={Home} />
          <Route path='/about' component={About} />
          <BotFrame />
          <Footer />
        </div>
        </Router>
    );
  }
}

export default App;
