import Weekdays from './Weekdays';
import {HabitContainer, HabitName} from '../styles/HabitContainer';
import {Buttons, CancelButton, SaveButton} from '../styles/ButtonsAddHabit';

export default function AddHabit() {
    return (
        <HabitContainer>
            <HabitName></HabitName>
            <Weekdays />
            <Buttons>
                <CancelButton></CancelButton>
                <SaveButton></SaveButton>
            </Buttons>
        </HabitContainer>
    )
}