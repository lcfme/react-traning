import _ from 'lodash';

function login({ username, password } = {}) {
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: 'auth/set_user_info',
                payload: {
                    token: '123456',
                    username: 'Gou',
                }
            })
        }, 1000);
    }
}

function verifyLogin() {
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: 'auth/verify_login',
            })
        }, 500);
    }
}

function logout(userInfo = null) {
    return function (dispatch) {
        if (_.isPlainObject(userInfo) && typeof userInfo.token === 'string') {
            dispatch({
                type: 'auth/logout'
            });
        }
        setTimeout(function () {
            dispatch({
                type: 'auth/logout',
            });
        }, 500);
    }
}


export { login, verifyLogin, logout }