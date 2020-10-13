
import { combineReducers } from 'redux';
import userTablereducer from './allReducers/userTableReducer';


const rootReducer = combineReducers({
    
    user: userTablereducer
})

export default rootReducer;