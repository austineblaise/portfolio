import axios from "axios";
import {
	GET_CONTACT_FAIL,
	GET_CONTACT_REQUEST,
	GET_CONTACT_SUCESS,
	USER_CONTACT_FAIL,
	USER_CONTACT_REQUEST,
	USER_CONTACT_SUCCESS,
} from "../constants/contactConstants";

export const contact = (name, email, phoneNumber, message) => async (
	dispatch
) => {
	dispatch({
		type: USER_CONTACT_REQUEST,
		payload: { name, email, phoneNumber, message },
	});
	try {
		const { data } = await axios.post("/api/contact/contact", {
			name,
			email,
			phoneNumber,
			message,
		});
		dispatch({ type: USER_CONTACT_SUCCESS, payload: data });
		// localStorage.setItem("contactMe", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_CONTACT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};








export const getContact = () => async (dispatch) => {
	dispatch({
		type: GET_CONTACT_REQUEST,
	});
	try {
		const { data } = await axios.get("/api/contact/contact");
		dispatch({ type: GET_CONTACT_SUCESS, payload: data });
		// localStorage.setItem("portfolio", JSON.stringify(data));
	} catch (error) {
		dispatch({ type: GET_CONTACT_FAIL, payload: error.response && error.response.data.message
			? error.response.data.message
			: error.message });
	}
};
