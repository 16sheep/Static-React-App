import React, { Component }from 'react';
import './style.css'

export default class Header extends Component {
    render() {
        return(
            <header>
                <h1>Page Header</h1>
                <a className="toggle open" href="#nav">open</a>
            </header>
        )
    }
}