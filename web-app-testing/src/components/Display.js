import React from "react";
import styled from "styled-components";

const DisplayContain = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
`

const Display = (props) => {
    return (
        <DisplayContain>
            <Container>
                <h2>Strikes</h2>
                <div>{props.strikes}</div>
            </Container>
            <Container>
            <h2>Balls</h2>
            <div>{props.balls}</div>
            </Container>
        </DisplayContain>
    )
}

export default Display;