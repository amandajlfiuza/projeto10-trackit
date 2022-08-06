import styled from "styled-components";

const HabitInput = styled.input`
    width: 100%;
    height: 45px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    display: flex;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
    font-size: 20px;
    outline: none;

    &::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }
`;

const Buttons = styled.div`
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
`;

const CancelButton = styled.button`
    margin-right: 23px;
    color: #52B6FF;
    font-size: 16px;
    background-color: white;
    box-shadow: none;
    border: none;
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    box-shadow: none;
    background-color: #52B6FF;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { HabitInput, Buttons, CancelButton, SaveButton };