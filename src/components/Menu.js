import { Link } from 'react-router-dom';
import { MenuWrapper, Background, Button, Performance } from '../styles/MenuWrapper';

export default function Menu() {
    <MenuWrapper>
        <Background>
            <Link to='/habitos'>
                <Button>Hábitos</Button>
            </Link>
            <Link to='/hohe'>
                <Performance></Performance>
            </Link>
            <Link to='/historico'>
                <Button>Histórico</Button>
            </Link>
        </Background>
    </MenuWrapper>
}