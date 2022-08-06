import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import {TitleWrapper, Title, AddButton, Subtitle} from '../styles/TitleWrapper';

export default function ContainerTitle({screen, title}) {
    const { addIsVisible, setAddIsVisible } = useContext(UserContext);

    return (
        <TitleWrapper screen={screen}>
            <Title>
                {screen==='Habits'||screen==="History" ? title : 'Segunda, 17/05'}
            </Title>
            <AddButton 
                screen={screen} 
                onClick={() => setAddIsVisible(!addIsVisible)}>+</AddButton>
            <Subtitle screen={screen}>Nenhum hábito concluído ainda</Subtitle>
        </TitleWrapper>
    )
}