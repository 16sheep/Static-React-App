import React, { Component }from 'react';
import './style.css'
import {
    Link
  } from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return(
            <nav id="nav">
              <a className="toggle close" href="#">close</a>
              <div className="#" id="#">
              <ul className="nav-list">
              <li className="nav-item">
                  <Link  className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                  <Link  className="nav-link" to="/About">About</Link>
              </li>
            </ul>
            </div>
        </nav>
        )
    }
}

