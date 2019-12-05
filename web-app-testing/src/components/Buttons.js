import React from "react";

const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.strike}>Strike!</button>
            <button onClick={props.ball}>Ball!</button>
            <button onClick={props.foul}>Foul!</button>
            <button onClick={props.hit}>Hit!</button>
        </div>
    );
}

export default Buttons;