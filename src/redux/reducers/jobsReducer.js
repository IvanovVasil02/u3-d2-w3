import { GET_QUERY_ERROR_0N, GET_QUERY_ERROR_0FF, GET_QUERY_RESULT, IS_LOADING_0N, IS_LOADING_0FF } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorRes: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY_RESULT:
      return {
        ...state,
        content: action.payload,
      };

    case IS_LOADING_0N:
      return {
        ...state,
        isLoading: true,
      };

    case IS_LOADING_0FF:
      return {
        ...state,
        isLoading: false,
      };

    case GET_QUERY_ERROR_0N:
      return {
        ...state,
        hasError: true,
        errorRes: action.payload,
      };

    case GET_QUERY_ERROR_0FF:
      return {
        ...state,
        hasError: false,
        errorRes: "",
      };

    default:
      return state;
  }
};

export default jobsReducer;
