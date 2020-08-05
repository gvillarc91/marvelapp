import { GET_DASHBOARD_REQUEST, GET_DASHBOARD_FAILURE, GET_DASHBOARD_SUCCESS } from './types';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://gateway.marvel.com/v1/public';

const getChractersAction = async () => {
  const response = await fetch(`${BASE_URL}/characters?apikey=${API_KEY}`, { method: 'GET' });
  const data = response.json();
  return data;
};

export const getDashboard = () => async (dispatch) => {
  dispatch({ type: GET_DASHBOARD_REQUEST });
  try {
    const response = (await getChractersAction()).data.results;
    dispatch({ type: GET_DASHBOARD_SUCCESS, data: { characters: response } });
  } catch (err) {
    dispatch({ type: GET_DASHBOARD_FAILURE, payload: { message: err.message } });
  }
};
