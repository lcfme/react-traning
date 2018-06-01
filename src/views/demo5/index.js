import React, { Component } from 'react';
import loginAuth from '../../HOComponents/auth';

class Main extends Component {
    render() {
        return (
            <div>
                I'm Logged in.
            </div>
        )
    }
}

export default loginAuth(Main);