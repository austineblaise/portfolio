
import axios from "axios";
import {
	PORTFOLIO_LIST_FAIL,
	PORTFOLIO_LIST_REQUEST,
	PORTFOLIO_LIST_SUCCESS,
} from "../constants/portfolioConstants";

export const portfolioList = () => async (dispatch) => {
	dispatch({
		type: PORTFOLIO_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get("/api/portfolio");
		dispatch({ type: PORTFOLIO_LIST_SUCCESS, payload: data });
		// localStorage.setItem("portfolio", JSON.stringify(data));
	} catch (error) {
		dispatch({ type: PORTFOLIO_LIST_FAIL, payload: error.response && error.response.data.message
			? error.response.data.message
			: error.message });
	}
};
