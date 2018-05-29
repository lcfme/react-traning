
let store;
try {
    store = JSON.parse(sessionStorage.getItem('__GLOBAL_STORE__'));
} catch(err) {
    store = {}
}
store = {
    valueManagedByRedux: 'init value',
    ...store,
}

export default store;