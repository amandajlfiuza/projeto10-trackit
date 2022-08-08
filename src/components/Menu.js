import { Link } from 'react-router-dom';
import { MenuWrapper, Background, Button, Performance } from '../styles/MenuWrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Menu() {
    const {percentageHabitsDone} = useContext(UserContext);

    return (
        <MenuWrapper>
            <Background>
                <Link to='/habitos'>
                    <Button>Hábitos</Button>
                </Link>
                <Link to='/historico'>
                    <Button>Histórico</Button>
                </Link>
            </Background>
            <Link to='/hoje'>
                <Performance>
                    <CircularProgressbar 
                        value={percentageHabitsDone} 
                        styles={{
                            path: {
                                stroke: 'white',
                                strokeLinecap: 'round',
                            },
                            text: {
                                fontSize: '18px',
                            }
                        }}
                    />
                    <div>Hoje</div>
                </Performance>
            </Link>
        </MenuWrapper>
    )
}