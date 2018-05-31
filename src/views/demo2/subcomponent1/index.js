import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(...args) {
        super(...args);
    }
    changeValueManagedByRedux(value) {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: 'changeValueManagedByRedux',
                    payload: value,
                })
            }, 2000);
        }
    }
    render() {
        return (
            <div>
                this.props.value {JSON.stringify(this.props.value)}
                <div>
                    <input type="text" onChange={(e) => {
                        this.props.changeValue(e.target.value);
                    }} />
                    <input type="text" onChange={(e) => {
                        this.props.dispatch(this.changeValueManagedByRedux(e.target.value));
                    }} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect((({ valueManagedByRedux }) => ({ valueManagedByRedux })))(Main));