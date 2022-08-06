import Weekdays from "./Weekdays";
import {HabitContainer, 
        HabitName, 
        Dump, 
        CurrentSequence, 
        Subtitle,
        Sequence,
        Record, 
        CheckIcon} from "../styles/HabitContainer";

export default function Habit({screen, name, days}) {
    return (
        <HabitContainer>
            <HabitName>{name}</HabitName>
            <Dump src='./assets/Dump.svg' screen={screen}></Dump>
            {screen === "Habits" ? <Weekdays days={days} container={screen} /> : ''}
            <CurrentSequence>
                <Subtitle screen={screen}>Sequência atual: </Subtitle>
                <Sequence screen={screen}>3 dias</Sequence>
            </CurrentSequence>
            <Record>
                <Subtitle screen={screen}>Seu recorde: </Subtitle>
                <Sequence screen={screen}>5 dias</Sequence>
            </Record>
            <CheckIcon screen={screen}>
                <img src='./assets/CheckIcon.svg' />
            </CheckIcon>
        </HabitContainer>
    )
}