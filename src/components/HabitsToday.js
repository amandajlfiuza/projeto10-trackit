import TodaysHabit from "./TodaysHabit";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { getHabitsToday } from "../api/API";

export default function HabitsToday({screen}) {
    const { token, habitsToday, setHabitsToday } = useContext(UserContext);

    useEffect(() => {
        getHabitsToday(token).then((resp) => {
            setHabitsToday(resp.data);
        });
    }, [habitsToday]);

    return (
        <>
            {habitsToday.length !== 0 
                ? habitsToday.map(habit => <TodaysHabit 
                                                key={habit.id} 
                                                screen={screen} 
                                                id={habit.id} 
                                                name={habit.name} 
                                                done={habit.done} 
                                                currentSequence={habit.currentSequence}
                                                highestSequence={habit.highestSequence}
                                            />)
                : ''
            }
        </>
    )
}