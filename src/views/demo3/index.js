import React, { Component } from 'react';
import { connect } from 'react-redux';
import componentAdvancedHandler from './componentAdvancedHandler';
import Halo from './halo';

const WrappedComponent = componentAdvancedHandler(Halo)({
    componentDidUpdate() {
        console.log('componentDidUpdate', this);
    }
})
class Main extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            count: 0,
        }
    }
    onClick() {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        });
    }
    render() {
        return (
            <div>
                demo 3 HOC
                <WrappedComponent onClick={this.onClick.bind(this)} number={this.state.count} />
            </div>
        )
    }
}

export default connect()(Main);