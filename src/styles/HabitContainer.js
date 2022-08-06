import styled from 'styled-components';

const HabitContainer = styled.div`
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: white;
    position: relative;
`;

const HabitName = styled.div`
    color: #666666;
    font-size: 20px;
`;

const Dump = styled.img`
    width: 13px;
    height: 15px;
    position: absolute;
    right: 15px;
    top: 15px;

    ${props => {
        if (props.screen !== "Habits") {
            return `
            display: none;
            `
        }
    }}
`;

const CurrentSequence = styled.div`

`;

const Subtitle = styled.span`
    color: #666666;
    font-size: 13px;

    ${props => {
        if (props.screen !== "Today") {
            return `
            display: none;
            `
        }
    }}
`;

const Sequence = styled.span`
    color: #666666;
    font-size: 13px;

    ${props => {
        if (props.screen !== "Today") {
            return `
            display: none;
            `
        }
    }}
`;

const Record = styled.div`

`;

const CheckIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background-color: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 15px;

    ${props => {
        if (props.screen !== "Today") {
            return `
            display: none;
            `
        }
    }}
`;

export {HabitContainer, HabitName, Dump, CurrentSequence, Subtitle, Sequence, Record, CheckIcon};