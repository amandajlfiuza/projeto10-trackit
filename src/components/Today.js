import ContainerTitle from './ContainerTitle';
import HabitsList from './HabitsList';
import Menu from './Menu';
import Navbar from './Navbar';

import Wrapper from '../styles/Wrapper';

export default function Today() {
    return (
        <Wrapper>
            <Navbar />
            <ContainerTitle />
            <HabitsList />
            <Menu />
        </Wrapper>
    )
}