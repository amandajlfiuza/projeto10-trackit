import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import {WeekdaysWrapper, WeekdayContainer} from '../styles/WeekdaysWrapper';

function Weekday({weekday, isSelected, container}) {
    return (
        <WeekdayContainer container={container} isSelected={isSelected}>{weekday}</WeekdayContainer>
    )
}


export default function DisplayWeekdays({days, container}) {
    const { daysSelected } = useContext(UserContext);

    return (
        <WeekdaysWrapper>
            {daysSelected.map((value, index) => 
                (<Weekday 
                    key={index}
                    weekday={value.weekday} 
                    isSelected={days.filter((day) => day == value.day).length !== 0 ? true : false}
                    container={container}
                />))}
        </WeekdaysWrapper>
    )
}