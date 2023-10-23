import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render () {
        return (
            <header className="header">
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-item"><a href="/">Home</a></li>
                  <li className="nav-item"><a href="/dev">Dev</a></li>
                  <li className="nav-item"><a href="/music">Music</a></li>
                  <li className="nav-item"><a href="/work">Work</a></li>
                  <li className="nav-item"><a href="/invest">Investement</a></li>
                  <li className="nav-item"><a href="/football">Football</a></li>
                  <li className="nav-item"><a href="/chess">Chess</a></li>
                  <li className="nav-item"><a href="/about">About</a></li>
                  <li className="nav-item"><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </header>
        );

    }
    
}

export default Header;