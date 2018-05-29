import React, { Component } from 'react';
export default (WrapedComponent) => (options = {}) => (
    class Main extends Component {
        constructor(...args) {
            super(...args);
        }
        componentDidUpdate(props) {
            typeof options.componentDidUpdate === 'function' && options.componentDidUpdate.bind(this)(props);
        }
        render() {
            return (
                <div onClick={() => { typeof this.props.onClick === 'function' && this.props.onClick() }}>
                    <WrapedComponent {...this.props} />
                </div>
            )
        }
    }
)