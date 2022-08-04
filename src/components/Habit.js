import Weekdays from "./Weekdays";
import {HabitContainer, 
        HabitName, 
        Dump, 
        CurrentSequence, 
        Subtitle,
        Sequence,
        Record, 
        CheckIcon} from "../styles/HabitContainer";

export default function Habit() {
    return (
        <HabitContainer>
            <HabitName>Ler 1 capítulo de livro</HabitName>
            <Dump src='./assets/Dump.svg'></Dump>
            <Weekdays />
            <CurrentSequence>
                <Subtitle>Sequência atual: </Subtitle>
                <Sequence>3 dias</Sequence>
            </CurrentSequence>
            <Record>
                <Subtitle>Seu recorde: </Subtitle>
                <Sequence>5 dias</Sequence>
            </Record>
            <CheckIcon>
                <img src='./assets/CheckIcon.svg' />
            </CheckIcon>
        </HabitContainer>
    )
}