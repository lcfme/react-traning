import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

class Main extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            tips: 'click to go to /demo1/sub',
        }
    }
    render() {
        return (
            <div>
                Hello Demo1
                <div onClick={() => {
                    if (this.props.history.location.pathname !== '/demo1/sub') {
                        this.props.history.push('/demo1/sub');
                        this.setState({
                            ...this.state,
                            tips: 'click to go to /demo1/sub',
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            tips: 'click to go back',
                        });
                        this.props.history.goBack();
                    }
                }}>
                    {this.state.tips}
                </div>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

export default connect()(Main);