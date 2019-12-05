import React from "react";
import styled from "styled-components";

const ButtonContain = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ButtonStyle = styled.button`
    width: 20%;
    padding: 5px;
    border-radius: 5px;
    background-color: green;
    color: white;
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