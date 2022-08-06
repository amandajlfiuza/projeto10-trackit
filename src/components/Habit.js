import DisplayWeekdays from "./DisplayWeekdays";
import {HabitContainer, 
        HabitName, 
        Dump, 
        CurrentSequence, 
        Subtitle,
        Sequence,
        Record, 
        CheckIcon} from "../styles/HabitContainer";
import { deleteHabit, getHabits } from "../api/API";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Habit({screen, id, name, days}) {

    const { token, setHabitsList } = useContext(UserContext);

    function deleteThis() {
        const response = window.confirm("Deseja mesmo apagar este hábito?");
        if (response === true) {
            deleteHabit(id, token).then(() => {
                getHabits(token).then((resp) => {
                    setHabitsList(resp.data);
                });
            });
        }
    }

    return (
        <HabitContainer>
            <HabitName>{name}</HabitName>
            <Dump src='./assets/Dump.svg' screen={screen} onClick={deleteThis}></Dump>
            {screen === "Habits" ? <DisplayWeekdays days={days} container={screen} /> : ''}
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