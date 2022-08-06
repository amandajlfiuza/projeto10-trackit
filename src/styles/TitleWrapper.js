import styled from "styled-components";

const TitleWrapper = styled.div`
    width: 100%;
    margin: 0 auto 28px auto;

    ${props => {
        if (props.screen === 'Habits') {
            return `
            display: flex;
            justify-content: space-between;
            align-items: center;
            `
        }
    }}
`;

const Title = styled.div`
    color: #126BA5;
    font-size: 23px;
`;

const AddButton = styled.button`
    width: 40px;
    height: 35px;
    border-radius: 4.64px;
    background-color: #52B6FF;
    color: white;
    font-size: 27px;
    border: none;
    box-shadow: none;

    ${props => {
        if (props.screen === 'Today' || props.screen === 'History') {
            return `
            display: none;
            `
        }
    }}
`;

const Subtitle = styled.div`
    color: #BABABA;
    font-size: 18px;

    ${props => {
        if (props.screen === 'Habits' || props.screen === 'History') {
            return `
            display: none;
            `
        }
    }}
`;

export {TitleWrapper, Title, AddButton, Subtitle};