import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 4em;
    background: beige;
    text-align: center;
`;

const Label = styled.label`
    padding: 0.5em;
    margin: 0.5em;
    color: Navy;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: solid;
    border-color: orange;
    color: ${props => props.inputColor || "palevioletred"};
    font-size: ${props => props.inputFontSize || "0.8em"};
    background: ${props => props.inputBackground || "papayawhip"};
    border-radius: 5px;
`;

export default class Form extends React.Component {
    render() {
        return (
            <Wrapper>
                <form method="get">
                    <Label for="name" maxlength="5" required>Name: </Label>
                    <Input type="text" name="name"/>
                    <br />
                    <Label for="email">Email: </Label>
                    <Input type="text" name="email"/>
                    <br />
                    <Label for="password">Password: </Label>
                    <Input type="password" name="password"/>
                    <br />
                    <Input type="submit" value="Submit" inputColor="black" inputFontSize="1.1em" inputBackground="orange"></Input>
                </form>
            </Wrapper>
        )
    }
}