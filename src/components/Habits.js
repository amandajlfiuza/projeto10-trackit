import Navbar from './Navbar';
import ContainerTitle from './ContainerTitle';
import AddHabit from './AddHabit';
import HabitsList from './HabitsList';
import Menu from './Menu';

import Wrapper from '../styles/Wrapper';

export default function Habits() {
    return (
        <Wrapper>
            <Navbar />
            <ContainerTitle screen="Habits" title="Meus hábitos" />
            <AddHabit />
            <HabitsList screen="Habits" />
            <Menu />
        </Wrapper>
    )
}