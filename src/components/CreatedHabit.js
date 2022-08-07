import DisplayWeekdays from "./DisplayWeekdays";
import { HabitContainer, HabitName, Dump } from "../styles/HabitContainer";
import { deleteHabit, getHabits } from "../api/API";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function CreatedHabit({screen, id, name, days}) {

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
            <DisplayWeekdays days={days} container={screen} />
        </HabitContainer>
    )
}