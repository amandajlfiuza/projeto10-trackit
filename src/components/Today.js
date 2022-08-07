import ContainerTitle from './ContainerTitle';
import HabitsToday from './HabitsToday';
import Menu from './Menu';
import Navbar from './Navbar';

import Wrapper from '../styles/Wrapper';

export default function Today() {
    return (
        <Wrapper>
            <Navbar />
            <ContainerTitle screen="Today" />
            <HabitsToday screen="Today" />
            <Menu />
        </Wrapper>
    )
}