import React from 'react';
import styled from "styled-components";

const StyledCounter = styled.div`/* ... */`;
const Paragraph = styled.p`/* ... */`;
const Button = styled.button`/* ... */`;

export default class Counter extends React.Component {
    state = {/* ... */ }
    increment = () => {/* ... */ }
    decrement = () => {/* ... */ }
    render() {
        return (
            <StyledCounter>
                <Paragraph>{this.state.count}</Paragraph>
                <Button>+</Button>
                <Button>-</Button>
            </StyledCounter>
        )
    }
}
