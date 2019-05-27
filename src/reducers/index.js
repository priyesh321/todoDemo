import { combineReducers } from 'redux';
import todos from './reducer'

const reducer = combineReducers({
    todos,
});

export default reducer;
