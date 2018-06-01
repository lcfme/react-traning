import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as authApi from '../apis/auth';

function authAdvanced(WrappedComponent) {
    class Main extends Component {
        constructor(...args) {
            super(...args);
            this.checklogin();
        }
        checklogin() {
            const userInfo = this.props.auth.userInfo;
            if (_.isPlainObject(userInfo)) {
                this.props.dispatch(authApi.verifyLogin());
            } else {
                this.props.dispatch(authApi.logout());
            }
        }
        login(e) {
            console.log(e);
            this.props.dispatch(authApi.login());
        }
        render() {
            let ViewComponent;
            if (!!this.props.auth.verifyLogin) {
                ViewComponent = <WrappedComponent />;
            } else {
                ViewComponent = (
                    <div onClick={this.login.bind(this)}>
                        登录
                    </div>
                )
            }
            return (
                <div>
                    {
                        ViewComponent
                    }
                </div>
            )
        }
    }
    return Main;
}

export default function (WrappedComponent) {
    return withRouter(connect(state => state)(authAdvanced(WrappedComponent)));
}