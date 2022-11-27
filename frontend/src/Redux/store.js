import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { contactmeReducer, getcontactReducer } from "./reducers/contactReducer";

import { portfolioListReducer } from "./reducers/portfolioReducers";
import { userSigninReducer } from "./reducers/userReducers";

const initialState = {
	userSignin: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},

	// portfolioList: {
	// 	userInfo: localStorage.getItem("portfolio")
	// 		? JSON.parse(localStorage.getItem("portfolio"))
	// 		: [],
	// },
};
const reducer = combineReducers({
	portfolioList: portfolioListReducer,
	userSignin: userSigninReducer,
	contactMe: contactmeReducer,
	contactDetails: getcontactReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
