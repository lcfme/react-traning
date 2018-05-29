import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div>
                {this.props.valueManagedByRedux}
            </div>
        )
    }
}

export default connect((({ valueManagedByRedux }) => ({valueManagedByRedux})))(Main);