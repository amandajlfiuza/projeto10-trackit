import {WeekdaysWrapper, WeekdayContainer} from '../styles/WeekdaysWrapper';

function Weekday({weekday, isSelected, container}) {
    return (
        <WeekdayContainer container={container} isSelected={isSelected}>{weekday}</WeekdayContainer>
    )
}

export default function DisplayWeekdays({days, container}) {
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
                    weekday={value.weekday} 
                    isSelected={days.filter((day) => day == value.day).length !== 0 ? true : false}
                    container={container}
                />))}
        </WeekdaysWrapper>
    )
}