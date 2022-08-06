import styled from "styled-components";

const NavbarWrapper = styled.div`
    width:100%;
    height: 70px;
    padding: 10px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 5px 5px #CFCFCF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`;

const LogoIcon = styled.img`
    width: 97px;
    height: 49px;
`;

const UserIcon = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
`;

export {NavbarWrapper, LogoIcon, UserIcon};