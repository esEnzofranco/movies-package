import themeReducer from './Reducers/Theme';
import languageReducer from './Reducers/Language';
import apiLanguage from './Reducers/apiLanguage';
import pageReducer from './Reducers/PageReducer';
import { createStore, combineReducers } from "redux";

const mainReducer = combineReducers({
    themeReducer,
    languageReducer,
    apiLanguage,
    pageReducer
})

export const store = createStore(
    mainReducer
    ); 

export default mainReducer;