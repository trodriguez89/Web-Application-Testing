import React from "react";
import styled from "styled-components";

const DisplayContain = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    border: 2px solid blue;
`
const Container = styled.div`
    display: flex;
    width: 50%;
    border: 2px solid red;
    align-items: center;
    justify-content: center;
`

const Display = (props) => {
    return (
        <DisplayContain>
            <Container>
                <h2>Strikes: {props.strikes}</h2>
            </Container>
            <Container>
            <h2>Balls: {props.balls}</h2>
            </Container>
        </DisplayContain>
    )
}

export default Display;