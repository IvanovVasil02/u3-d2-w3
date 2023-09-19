export const GET_QUERY_RESULT = "GET_QUERY_RESULT";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITE";
export const IS_LOADING_0N = "IS_LOADING_0N";
export const IS_LOADING_0FF = "IS_LOADING_OFF";
export const GET_QUERY_ERROR_0N = "GET_QUERY_ERROR_0N";
export const GET_QUERY_ERROR_0FF = "GET_QUERY_ERROR_0FF";

export const getQueryResult = (data) => ({ type: GET_QUERY_RESULT, payload: data });
export const addToFavorites = (company) => ({ type: ADD_TO_FAVORITES, payload: company });
export const removoreFromFavorites = (company) => ({ type: REMOVE_FROM_FAVORITES, payload: company });

export const getJobsData = (queryType, query) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?" + queryType + "=";
    try {
      dispatch({ type: IS_LOADING_0N });

      const response = await fetch(baseEndpoint + query);

      if (response.ok) {
        console.log(response);
        const { data } = await response.json();

        dispatch({ type: GET_QUERY_ERROR_0FF });
        dispatch({ type: GET_QUERY_RESULT, payload: data });
      } else {
        throw new Error("Oops c'è stato un'errore nel referimento dei dati!");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_QUERY_ERROR_0N, payload: error.message });
    } finally {
      dispatch({ type: IS_LOADING_0FF });
    }
  };
};
