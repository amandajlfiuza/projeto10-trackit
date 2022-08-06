import Habit from "./Habit";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { getHabits } from "../api/API";
import AlertText from "./AlertText";

export default function HabitsList({screen}) {
    const { token, habitsList, setHabitsList } = useContext(UserContext);

    useEffect(() => {
        getHabits(token).then((resp) => {
            setHabitsList(resp.data);
        });
    }, []);

    return (
        <>
            {habitsList.length == 0 && screen === "Habits" 
                ? <AlertText text="Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!" /> 
                : habitsList.map(habit => <Habit key={habit.id} screen={screen} name={habit.name} days={habit.days} />)
            }
        </>
    )
}