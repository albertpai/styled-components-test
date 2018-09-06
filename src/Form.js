import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 4em;
    background: beige;
    text-align: center;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: solid;
    border-color: red;
    color: palevioletred;
    background: papayawhip;
    border-radius: 3px;
`;

const Label = styled.label`
    padding: 0.5em;
    margin: 0.5em;
    color: Navy;
`

export default class Form extends React.Component {
    render() {
        return (
            <Wrapper>
                <Label maxlength="5" required>Name: </Label>
                <Input type="text" />
                <br/>
                <Label>Email: </Label>
                <Input type="text" />
            </Wrapper>
        )
    }
}