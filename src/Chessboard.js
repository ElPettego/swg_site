// Chessboard.js
import React, { Component } from 'react';
import './Chessboard.css'; // Import CSS for styling

class Chessboard extends Component {

    square(loc, color) {
        let _className;
        if (color == "b") {
            _className = "blackSquare"
        }
        if (color == "w") {
            _className = "whiteSquare"
        }
        return <div className={_className} location={loc}></div>
    }

    render() {
        const board = [
            [this.square("A8", "w"), this.square("B8", "b"), this.square("C8", "w"), this.square("D8", "b"), this.square("E8", "w"), this.square("F8", "b"), this.square("G8", "w"), this.square("H8", "b")],
            [this.square("A7", "b"), this.square("B7", "w"), this.square("C7", "b"), this.square("D7", "w"), this.square("E7", "b"), this.square("F7", "w"), this.square("G7", "b"), this.square("H7", "w")],
            [this.square("A6", "w"), this.square("B6", "b"), this.square("C6", "w"), this.square("D6", "b"), this.square("E6", "w"), this.square("F6", "b"), this.square("G6", "w"), this.square("H6", "b")],
            [this.square("A5", "b"), this.square("B5", "w"), this.square("C5", "b"), this.square("D5", "w"), this.square("E5", "b"), this.square("F5", "w"), this.square("G5", "b"), this.square("H5", "w")],
            [this.square("A4", "w"), this.square("B4", "b"), this.square("C4", "w"), this.square("D4", "b"), this.square("E4", "w"), this.square("F4", "b"), this.square("G4", "w"), this.square("H4", "b")],
            [this.square("A3", "b"), this.square("B3", "w"), this.square("C3", "b"), this.square("D3", "w"), this.square("E3", "b"), this.square("F3", "w"), this.square("G3", "b"), this.square("H3", "w")],
            [this.square("A2", "w"), this.square("B2", "b"), this.square("C2", "w"), this.square("D2", "b"), this.square("E2", "w"), this.square("F2", "b"), this.square("G2", "w"), this.square("H2", "b")],
            [this.square("A1", "b"), this.square("B1", "w"), this.square("C1", "b"), this.square("D1", "w"), this.square("E1", "b"), this.square("F1", "w"), this.square("G1", "b"), this.square("H1", "w")],

        ];



        return <div className="Chessboard">{board}</div>;
    }
}

export default Chessboard;
