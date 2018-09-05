import React from 'react';
import styled from "styled-components";

const StyledCounter = styled.div`
padding: 2em;
text-align: center;
background-color: DarkSeaGreen;
`;

const Paragraph = styled.p`
color: Indigo;
`;

const Button = styled.button`
font-size: 1em;
width: 4em;
margin: 0 10px;
`;

export default class Counter extends React.Component {
    state = {count: 0}
    increment = () => { this.setState ({count: this.state.count + 1})}
    decrement = () => { this.setState ({count: this.state.count - 1})}
    double = () => { this.setState ({count: this.state.count * 2 })}
    halve = () => { this.setState ({count: this.state.count / 2})}
    reset = () => { this.setState ({count: 0})}
    render() {
        return (
            <StyledCounter>
                <Paragraph><h2>Press buttons to increment or decrement the counter: {this.state.count}</h2></Paragraph>
                <Button onClick = {this.increment}>+</Button>
                <Button onClick = {this.decrement}>-</Button>
                <Button onClick = {this.double}>*2</Button>
                <Button onClick = {this.halve}>/2</Button>
                <br/>
                <br/>
                <Button onClick = {this.reset}>Reset</Button>
            </StyledCounter>
        )
    }
}
