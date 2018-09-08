import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    padding: 5em;
    background: lightblue;
`;

const Button = styled.button`
    /* Adapt the colours based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export default class Props extends React.Component {
    render() {
        return (
            <Wrapper>
                <Button>Normal</Button>
                <Button primary>Primary</Button>
            </Wrapper>
        )
    }
}