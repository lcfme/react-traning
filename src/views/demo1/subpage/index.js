import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div>
                Hello Demo1 Sub
            </div>
        )
    }
}

export default connect()(Main);