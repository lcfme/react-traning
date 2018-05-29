export default (state, action) => {
    switch (action.type) {
        case 'changeValueManagedByRedux':
            return {
                ...state,
                valueManagedByRedux: action.payload
            }
        default:
            return state;
    }
}