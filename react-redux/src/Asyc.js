import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'



const initialState = {
    loading: false,
    users: [],
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
        type: FETCH_USER_FAILURE,
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
        default:
            return state;
    }
};
const fetchUser = ()=>{
    dispatchEvent(fetchUserRequest)
    return function(dispatch){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const users = response.data.map((user)=>user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            //error
            dispatch(fetchUserFailure(error.message))
        })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUser)

