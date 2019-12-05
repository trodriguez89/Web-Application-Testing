import React from "react";
import styled from "styled-components";

const ButtonContain = styled.div`
    border: 2px solid green;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ButtonStyle = styled.button`
    border: 1px solid pink;
    width: 20%;
`;

const Dashboard = (props) => {
    return (
        <ButtonContain>
            <ButtonStyle onClick={props.strike}>Strike!</ButtonStyle>
            <ButtonStyle onClick={props.ball}>Ball!</ButtonStyle>
            <ButtonStyle onClick={props.foul}>Foul!</ButtonStyle>
            <ButtonStyle onClick={props.hit}>Hit!</ButtonStyle>
        </ButtonContain>
    );
}

export default Dashboard;