import ContainerTitle from './ContainerTitle';
import AlertText from './AlertText';
import Menu from './Menu';
import Navbar from './Navbar';

import Wrapper from '../styles/Wrapper';

export default function Today() {
    return (
        <Wrapper>
            <Navbar />
            <ContainerTitle screen="History" title="Histórico" />
            <AlertText />
            <Menu />
        </Wrapper>
    )
}