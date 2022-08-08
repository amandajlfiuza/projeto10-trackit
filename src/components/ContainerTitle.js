import dayjs from 'dayjs';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import {TitleWrapper, Title, AddButton, Subtitle} from '../styles/TitleWrapper';
import renderFullDate from '../utils/functions';

export default function ContainerTitle({screen, title}) {
    const { addIsVisible, setAddIsVisible, habitsToday, percentageHabitsDone, setPercentageHabitsDone } = useContext(UserContext);

    const habitsDone = habitsToday.length === 0 ? [] : habitsToday.map(habit => habit.done).filter(done => done === true);
    setPercentageHabitsDone(Math.floor(((habitsDone.length)/(habitsToday.length))*100));

    let weekday = dayjs().locale('pt-br').format('dddd');
    const date = dayjs().locale('pt-br').format('DD/MM');

    let fullDate = renderFullDate(weekday, date);

    return (
        <TitleWrapper screen={screen}>
            <Title>
                {screen==='Habits'||screen==="History" ? title : fullDate}
            </Title>
            <AddButton 
                screen={screen} 
                onClick={() => setAddIsVisible(!addIsVisible)}>+</AddButton>
            <Subtitle 
                screen={screen} 
                done={habitsDone.length > 0 ? true : false}
            >{habitsDone.length === 0 ? 'Nenhum hábito concluído ainda' : `${percentageHabitsDone}% dos hábitos concluídos`}
            </Subtitle>
        </TitleWrapper>
    )
}