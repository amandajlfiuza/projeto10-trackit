import styled from "styled-components";

const MenuWrapper = styled.div`
    width: 100%;
    height: 101px;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const Background = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    padding-left: 35px;
    padding-right: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;

    a {
        text-decoration: none;
    }
`;

const Button = styled.div`
    color: #52B6FF;
    font-size: 18px;
`;

const Performance = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 45.5px);
    z-index: 2;
`;

export {MenuWrapper, Background, Button, Performance};