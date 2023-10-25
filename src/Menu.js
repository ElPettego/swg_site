import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    render () {
        let items = ["dev", "eng", "music", "sport"]
        
        return (
            <div className='wrapperMenu'>
                <div className='wheel'>
                    <div className='wheelItem' id="wh1">DEV</div>
                    <div className='wheelItem' id="wh2">ENG</div>
                    <div className='wheelItem' id="wh3">MUSIC</div>
                    <div className='wheelItem' id="wh4">SPORT</div>
                </div>
                <div className='wheelHome'></div>
            </div>
        );

    }
    
}

export default Menu;