import {WeekdaysWrapper, WeekdayContainer} from '../styles/WeekdaysWrapper';

function Weekday() {
    return (
        <WeekdayContainer></WeekdayContainer>
    )
}

export default function Weekdays() {
    return (
        <WeekdaysWrapper>
            <Weekday />
        </WeekdaysWrapper>
    )
}