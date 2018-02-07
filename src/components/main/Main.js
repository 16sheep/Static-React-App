import React, { Component }from 'react';
import './style.css'
import Home from './Home.js'
import Services from './Services.js'
import About from './About.js'
import { Route } from 'react-router-dom'


export default class Main extends Component {
    render() {
        return(
            <main>
                <Route exact path="/" component = {Home} />
                <Route path="/Services" component = {Services} />
                <Route path="/About" component = {About} />
            </main>
        )
    }
}
