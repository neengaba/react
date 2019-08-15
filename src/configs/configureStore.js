import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {ReducerPruebas} from '../reducers/reducerPrueba'

// Se utiliza combineRedicers para separar las funcionalidades de los reducers
 export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducerPrueba:ReducerPruebas
        })
    ,applyMiddleware(thunk));
    return store;
}; 
