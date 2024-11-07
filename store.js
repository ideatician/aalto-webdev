let store = 0;

const setStore = (s) => store = s;

const getStore = () => {
    return store;
};

export { setStore };
export { getStore };