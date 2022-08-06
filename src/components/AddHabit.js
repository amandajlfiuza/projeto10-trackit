import Weekdays from './Weekdays';
import { HabitContainer } from '../styles/HabitContainer';
import { HabitInput, Buttons, CancelButton, SaveButton } from '../styles/FormsAddHabit';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { postHabit, getHabits } from '../api/API';
import { ThreeDots } from 'react-loader-spinner';

export default function AddHabit() {
    const { addIsVisible, setAddIsVisible, addHabit, setAddHabit, token, setHabitsList, setDaysSelected } = useContext(UserContext);
    const [isDisabled, setIsDisabled] = useState(false);

    function handleName(e) {
        setAddHabit({
            ...addHabit, 
            [e.target.name]: e.target.value,
        })
    }

    function submitHabit(e) {
        if (addHabit.days.length !== 0) {
            e.preventDefault();

            setIsDisabled(true);
    
            postHabit(addHabit, token).then(() => {
                setAddIsVisible(false);
                getHabits(token).then((resp) => {
                    setHabitsList(resp.data);
                });
                setAddHabit({name: '', days: []});
                setDaysSelected([
                    {day: 1, selected:false},
                    {day: 2, selected:false},
                    {day: 3, selected:false},
                    {day: 4, selected:false},
                    {day: 5, selected:false},
                    {day: 6, selected:false},
                    {day: 7, selected:false},
                  ]);
                setIsDisabled(false);
            }).catch(() => {
                alert("Por favor, defina um título para o seu hábito.");
                setIsDisabled(false);
            });

        } else {
            e.preventDefault();
            alert("Por favor, selecione os dias para o hábito.");
        }
        
    }

    function cancelHabit(e) {
        e.preventDefault();
        setAddIsVisible(false);
    }

    return (
        addIsVisible ?
        <HabitContainer>
            <HabitInput 
                name='name' 
                value={addHabit.name} required 
                placeholder='nome do hábito'
                onChange={handleName}
                disabled={isDisabled}></HabitInput>
            <Weekdays container="AddHabit" />
            <Buttons>
                <CancelButton onClick={cancelHabit}>Cancelar</CancelButton>
                <SaveButton onClick={submitHabit}>
                    {isDisabled ? <ThreeDots color='white' height={11} width={43} /> : 'Salvar'}
                </SaveButton>
            </Buttons>
        </HabitContainer>
        : ''
    )
}