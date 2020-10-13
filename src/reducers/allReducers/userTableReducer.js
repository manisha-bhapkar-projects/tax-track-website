import {ADD_USER_TABLE_REQUEST , ADD_USER_TABLE_SUCCESS , ADD_USER_TABLE_FAILURE }from '../../actions/type';



const initialState = {
    loading: false,
    users: [],
    error: '',
}

const UserTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_TABLE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_USER_TABLE_SUCCESS :
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case ADD_USER_TABLE_FAILURE:
            return {
                loading : false,
                users: [],
                error: action.payload
            }

           
            default: return state
    }
}
export default UserTableReducer;