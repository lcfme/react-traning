import React, { Component } from 'react';


export default function (WrappedComponent) {
    return class Main extends Component {
        constructor(props, context) {
            super(props, context);
            this.store = {
                value: Math.random().toString(32).substr(2),
            }
        }
        render() {
            return (
                <div>
                    <button onClick={(e) => {
                        this.store.value = Math.random().toString(32).substr(2);
                        this.setState({...this.state});
                    }}>
                        Change Store
                    </button>
                    <WrappedComponent {...this.store} />
                </div>
            )
        }
    }
}