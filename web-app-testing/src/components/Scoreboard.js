import React from "react";

const Scoreboard = (props) => {
    return (
        <div>
            <div>
                <h2>Strikes: {props.strikes}</h2>
            </div>
            <div>
            <h2>Balls: {props.balls}</h2>
            </div>
        </div>
    )
}

export default Scoreboard;