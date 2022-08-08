import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import {WeekdaysWrapper, WeekdayContainer} from '../styles/WeekdaysWrapper';

function Weekday({selected, dayId, weekday, container}) {
    const [isSelected, setIsSelected] = useState(selected);
    const { addHabit, setAddHabit, daysSelected } = useContext(UserContext);

    function selectWeekday() {
        if (!isSelected) {
            setAddHabit({...addHabit, days: [...addHabit.days, dayId]});
            
            daysSelected.map((value) => {
                if (value.day === dayId) {
                    value.selected = true;
                }
            });

        } else {
            let daysModified = addHabit.days.filter((day) => day !== dayId);
            setAddHabit({...addHabit, days: [...daysModified]});
            
            daysSelected.map((value) => {
                if (value.day === dayId) {
                    value.selected = false;
                }
            });
        }
    }

    return (
        <WeekdayContainer 
            container={container} 
            isSelected={isSelected}
            onClick={() => {
                if (container === "AddHabit") {
                    setIsSelected(!isSelected);
                    selectWeekday();
                }
            }}
        >{weekday}</WeekdayContainer>
    )
}

export default function AddWeekdays({container}) {
    const {daysSelected} = useContext(UserContext);

    return (
        <WeekdaysWrapper>
            {daysSelected.map((value, index) => 
                (<Weekday 
                    key={index} 
                    selected={value.selected}
                    dayId={value.day} 
                    weekday={value.weekday} 
                    container={container}
                />))}
        </WeekdaysWrapper>
    )
}