const redux = require('redux')
const createStore = redux.createStore
const initialState = {
    loading: false,
    user: [],
    error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    };
};

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURe,
        payload: error,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            };
    }
};

const store = createStore(reducer)