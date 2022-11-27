const {
	PORTFOLIO_LIST_REQUEST,
	PORTFOLIO_LIST_SUCCESS,
    PORTFOLIO_LIST_FAIL,
} = require("../constants/portfolioConstants");

export const portfolioListReducer = (state = {loading: true, portfolio: []}, action) => {
	switch (action.type) {
		case PORTFOLIO_LIST_REQUEST:
			return { loading: true };
		case PORTFOLIO_LIST_SUCCESS:
            return { loading: false, portfolio: action.payload };
        case PORTFOLIO_LIST_FAIL:
            return { loading: false, error: action.payload}
		default:
			return state;
	}
};
