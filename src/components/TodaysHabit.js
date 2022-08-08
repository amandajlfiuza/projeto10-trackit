import {HabitContainer, 
    HabitName, 
    CurrentSequence, 
    Subtitle,
    Sequence,
    Record, 
    CheckIcon} from "../styles/HabitContainer";
import { postCheckHabit, postUncheckHabit } from "../api/API";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function TodaysHabit({screen, id, name, done, currentSequence, highestSequence}) {

    const { token, setHabitsToday } = useContext(UserContext);

    function checkHabit() {
        if (!done) {
            postCheckHabit(id, token).then((resp) => {
                setHabitsToday(resp.data);
            })
            .catch((error) => {
                postUncheckHabit(id, token).then((resp) => {
                    setHabitsToday(resp.data);
                })
            })
        } else {
            postUncheckHabit(id, token).then((resp) => {
                setHabitsToday(resp.data);
            })
        }
    }

    return (
        <HabitContainer onClick={checkHabit}>
            <HabitName>{name}</HabitName>
            <CurrentSequence>
                <Subtitle screen={screen}>Sequência atual: </Subtitle>
                <Sequence screen={screen} done={done}>{`${currentSequence} dias`}</Sequence>
            </CurrentSequence>
            <Record>
                <Subtitle screen={screen}>Seu recorde: </Subtitle>
                <Sequence 
                    screen={screen} 
                    done={highestSequence >= currentSequence ? done : ''}
                >{`${highestSequence} dias`}</Sequence>
            </Record>
            <CheckIcon screen={screen} done={done}>
                <img src='./assets/CheckIcon.svg' />
            </CheckIcon>
        </HabitContainer>
    )
}