import Navbar from './Navbar';
import ContainerTitle from './ContainerTitle';
import AddHabit from './AddHabit';
import AlertText from './AlertText';
import HabitsList from './HabitsList';
import Menu from './Menu';

import Wrapper from '../styles/Wrapper';

export default function Habits() {
    return (
        <Wrapper>
            <Navbar />
            <ContainerTitle />
            <AddHabit />
            <AlertText />
            <HabitsList />
            <Menu />
        </Wrapper>
    )
}