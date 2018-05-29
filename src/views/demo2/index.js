import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubComponent1 from './subcomponent1';
import Subcomponent2 from './subcomponent2';

class Main extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            value1: 'value1 will be changed by subcomponent',
        }
    }
    changeValue1(value) {
        this.setState({
            ...this.state,
            value1: value,
        });
    }
    render() {
        return (
            <div>
                Demo2
                <SubComponent1 value={this.state.value1} changeValue={this.changeValue1.bind(this)} />
                <Subcomponent2 />
            </div>
        )
    }
}

export default connect()(Main);