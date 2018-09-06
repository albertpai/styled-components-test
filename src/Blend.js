import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
    padding: 2em;
    background: Plum;
    color: Brown;
    font-size: 1.5em;
    text-align: center;
`;

const StyleMessage = styled.div`
    padding: 0.5em;
`;

const Wrapper = ({ message1, message2 }) => {
    return (
        <StyledWrapper>
            <StyleMessage>
                {message1}
            </StyleMessage>
            <StyleMessage>
                {message2}
            </StyleMessage>
        </StyledWrapper>
    )
};

export default class Blend extends React.Component {
    render() {
        return (
            <Wrapper message1='This is a styled message.' message2='You can use a function to blend messages and styles!' />
        )
    }
}
