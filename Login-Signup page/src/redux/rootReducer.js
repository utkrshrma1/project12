import {combineReducers} from "redux";
import * as userReducer from './user/user.reducer'

const rootReducer = combineReducers({
    [userReducer.userReducerFeatureKey]: userReducer.reducer,
   
});
export {rootReducer}