import { handlePagination } from '../utils';

export const initialState = {
    data: {
        people: {},
        planets: {
        },
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
        return {
            ...state, data: { ...payload }, loading: false,
        };
    case 'getPeoplesData':
        return {
            ...state, data: { ...state.data, people: { ...payload, pagination: handlePagination(payload) } }, loading: false,
        };
    case 'getSpaceShipsData':
        return {
            ...state, data: { ...state.data, spaceships: { ...payload, pagination: handlePagination(payload) } }, loading: false,
        };
    case 'getPlanetsData':
        return {
            ...state, data: { ...state.data, planets: { ...payload, pagination: handlePagination(payload) } }, loading: false,
        };

    default:
        return state;
    }
};
