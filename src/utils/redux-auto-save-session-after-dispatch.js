export default ({ log = false, namespace }) => {
    if (typeof namespace !== 'string') throw new Error('options.namespace must be given.');
    return ({ dispatch, getState }) => next => action => {
        const _r = next(action);
        const state = getState();
        if (log) console.log(state);
        sessionStorage.setItem(namespace, JSON.stringify(state));
        return _r;
    }
}