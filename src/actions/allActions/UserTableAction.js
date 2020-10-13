import { ADD_USER_TABLE_REQUEST, ADD_USER_TABLE_SUCCESS, ADD_USER_TABLE_FAILURE } from '../type';

import axios from 'axios';

export const addUserTableRequest = () => {
    return {
        type: ADD_USER_TABLE_REQUEST
    }
}


export const addUserTableSuccess = users => {
    return {
        type: ADD_USER_TABLE_SUCCESS,
        payload: users
    }
}


export const addUserTableFailure = errorMsg => {
    return {
        type: ADD_USER_TABLE_FAILURE,
        payload: errorMsg
    }
}

export const fetchUserTable = () => {
    return (dispatch) => {
        dispatch(addUserTableRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                const users = response.data
                dispatch(addUserTableSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(addUserTableFailure(errorMsg))
            })

    }
}