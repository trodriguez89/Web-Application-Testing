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
const NumberStyle = styled.div`
    border: 1px solid black;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
`
const H2Style = styled.h2`
    font-weight: bold;
    font-size: 30px;
    font-family: 'Indie Flower', cursive;
`
const Display = (props) => {
    return (
        <DisplayContain>
            <Container>
                <H2Style>Strikes</H2Style>
                <NumberStyle>{props.strikes}</NumberStyle>
            </Container>
            <Container>
                <H2Style>Balls</H2Style>
                <NumberStyle>{props.balls}</NumberStyle>
            </Container>
        </DisplayContain>
    )
}

export default Display;