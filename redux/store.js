import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';


const rootreducer=combineReducers({reducer});
export const store=createStore(rootreducer,applyMiddleware(thunk));