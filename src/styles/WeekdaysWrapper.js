import styled from "styled-components";

const WeekdaysWrapper = styled.div`
    margin: 10px 0px 18px 0px;
    display: flex;
`;

const WeekdayContainer = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border-radius: 5px;
    border: ${props => props.isSelected ? '1px solid #CFCFCF' : '1px solid #D4D4D4'};
    background-color: ${props => props.isSelected ? '#CFCFCF' : 'white'};
    color: ${props => props.isSelected ? 'white' : '#DBDBDB'};
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => {
        if (props.container === "AddHabit") {
            return `
                margin-bottom: 50px;
            `
        }
    }}
`;

export {WeekdaysWrapper, WeekdayContainer};