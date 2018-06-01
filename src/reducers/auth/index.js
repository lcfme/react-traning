const initState = {
    userInfo: null,
    verifyLogin: false,
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'auth/set_user_info':
            return {
                ...state,
                userInfo: { ...action.payload },
                verifyLogin: true,
            }
        case 'auth/verify_login':
            return {
                ...state,
                verifyLogin: true,
            }
        case 'auth/logout':
            return {
                ...state,
                userInfo: null,
                verifyLogin: false,
            }
        default:
            return { ...state }
    }
}