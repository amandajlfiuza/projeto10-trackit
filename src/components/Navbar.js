import {NavbarWrapper, LogoIcon, UserIcon} from '../styles/NavbarWrapper';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Navbar() {
    const { image } = useContext(UserContext);

    return (
        <NavbarWrapper>
            <LogoIcon src='./assets/LogoIcon.svg'></LogoIcon>
            <UserIcon src={image}></UserIcon>
        </NavbarWrapper>
    )
}