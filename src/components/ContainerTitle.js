import dayjs from 'dayjs';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import {TitleWrapper, Title, AddButton, Subtitle} from '../styles/TitleWrapper';
require('dayjs/locale/pt-br');

export default function ContainerTitle({screen, title}) {
    const { addIsVisible, setAddIsVisible, habitsToday, percentageHabitsDone, setPercentageHabitsDone } = useContext(UserContext);

    const habitsDone = habitsToday.length === 0 ? [] : habitsToday.map(habit => habit.done).filter(done => done === true);
    setPercentageHabitsDone(Math.floor(((habitsDone.length)/(habitsToday.length))*100));

    const data = dayjs().locale('pt-br').format('dddd, DD/MM');
    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <TitleWrapper screen={screen}>
            <Title>
                {screen==='Habits'||screen==="History" ? title : data}
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