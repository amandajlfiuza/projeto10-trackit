import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import {WeekdaysWrapper, WeekdayContainer} from '../styles/WeekdaysWrapper';

function Weekday({daysSelected, dayId, weekday, container}) {
    const [isSelected, setIsSelected] = useState(false);
    const { addHabit, setAddHabit } = useContext(UserContext);

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
    const daysSelected = [
        {day: 0, weekday:'D'},
        {day: 1, weekday:'S'},
        {day: 2, weekday:'T'},
        {day: 3, weekday:'Q'},
        {day: 4, weekday:'Q'},
        {day: 5, weekday:'S'},
        {day: 6, weekday:'S'},
    ];

    return (
        <WeekdaysWrapper>
            {daysSelected.map((value, index) => 
                (<Weekday 
                    key={index} 
                    daysSelected={daysSelected}
                    dayId={value.day} 
                    weekday={value.weekday} 
                    container={container}
                />))}
        </WeekdaysWrapper>
    )
}