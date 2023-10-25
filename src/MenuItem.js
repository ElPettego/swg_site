import React, { Component } from 'react';
import './MenuItem.css'

class Menu extends Component {
    render (name) {
        return (
            <div className='wrapperMenuItem'>
                ${name}
            </div>
        );

    }
    
}

export default MenuItem;