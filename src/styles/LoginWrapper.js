import styled from "styled-components";

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
`;

const LoginWrapper = styled.div`
    width: 85%;
    margin: 68px auto 0px auto;
    display: flex;
    flex-direction: column;

    a {
        margin: 0 auto;
    }
`;

const Logo = styled.img`
    width: 180px;
    margin: 0px auto 33px auto;
`;

const Forms = styled.form`
    width: 100%;
    margin: 0px auto 25px auto;
    display: flex;
    flex-direction: column;

    button {
        width:100%;
        height: 45px;
        border-radius: 5px;
        border: none;
        box-shadow: none;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Input = styled.input`
    width:100%;
    height: 45px;
    padding: 10px;
    margin-bottom: 6px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    display: flex;
    align-items: center;
    background-color: ${props => props.disabled ? '#F2F2F2' : 'white'};

    &::placeholder {
        color: ${props => props.disabled ? '#AFAFAF' : '#DBDBDB'};
        font-weight: 400;
        font-size: 20px;
    }
`;

const ButtonLogin = styled.button`
    background-color: white;
    box-shadow: none;
    border: none;
    text-align: center;
    text-decoration: underline;
    color: #52B6FF;
    font-size: 14px;
`;

export {Body, LoginWrapper, Logo, Forms, Input, ButtonLogin};