export const initialState = {
    data: {
        people: {},
        planets: {},
        spaceships: {},
    },
    loading: true,
};

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
    case 'loading':
        return { ...state, loading: !state.loading };
    case 'getInitialData':
        console.log('PAYLOAD', payload);
        return {
            ...state, data: { ...payload }, loading: false,
        };
    case 'getPeoplesData':
        console.log('PAYLOAD', payload);
        return {
            ...state, data: { ...state.data, people: payload }, loading: false,
        };
    case 'getSpaceShipsData':
        console.log('PAYLOAD', payload);
        return {
            ...state, data: { ...state.data, spaceships: payload }, loading: false,
        };
    case 'getPlanetsData':
        console.log('PAYLOAD', payload);
        return {
            ...state, data: { ...state.data, planets: payload }, loading: false,
        };

    default:
        return state;
    }
};
