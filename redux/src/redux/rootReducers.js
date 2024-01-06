import reducer from './reducers';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    counter: reducer,
});

export default rootReducer;