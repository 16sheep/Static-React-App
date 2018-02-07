import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav.js'
import Aside from './components/aside/Aside.js'
import Footer from './components/footer/Footer.js'
import Main from './components/main/Main.js'



class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <Main />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default App;
