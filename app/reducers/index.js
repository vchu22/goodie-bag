const initialState = {
  candies: [],
};
const GET_CANDIES = 'GET_CANDIES';
const getCandies = candies => ({
  type: GET_CANDIES,
  candies,
});
export const fetchCandies = () => {
  return async dispatch => {
    const response = await axios.get('/api/candies');
    const candies = response.data;
    console.log(candies);
    const action = getCandies(candies);
    dispatch(action);
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
