import {
	GET_CONTACT_FAIL,
	GET_CONTACT_REQUEST,
	GET_CONTACT_SUCESS,
	USER_CONTACT_FAIL,
	USER_CONTACT_REQUEST,
	USER_CONTACT_SUCCESS,
} from "../constants/contactConstants";

export const contactmeReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_CONTACT_REQUEST:
			return { loading: true };
		case USER_CONTACT_SUCCESS:
			return { loading: false, contactInfo: action.payload };
		case USER_CONTACT_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};


export const getcontactReducer = (state = {getcontactinfo:[]}, action) => {
	switch (action.type) {
		case GET_CONTACT_REQUEST:
			return { loading: true };
		case GET_CONTACT_SUCESS:
			return { loading: false, getcontactinfo: action.payload };
		case GET_CONTACT_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};


