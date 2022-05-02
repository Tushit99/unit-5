import { legacy_createStore as createStore, combineReducers } from 'redux';
import { authReducer } from './reducer';


const rootReducer = combineReducers({
    auth: authReducer,
});



export const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

// s
console.log(store.getState())





