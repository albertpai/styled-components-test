import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Blend from './Blend';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld/>
                <Counter/>
                <Blend/>
            </div>
        );
    }
}
