export const GET_MONSTERS = 'GET_MONSTERS';
export const GET_MONSTERS_SUCCESS = 'GET_MONSTERS_SUCCESS';
export const GET_MONSTERS_FAILURE = 'GET_MONSTERS_FAILURE';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

// Redux action creators that return an action
export const getMonsters = () => ({
  type: GET_MONSTERS,
});

export const getMonstersSuccess = (monsters) => ({
  type: GET_MONSTERS_SUCCESS,
  payload: monsters,
});

export const getMonstersFailure = () => ({
  type: GET_MONSTERS_FAILURE,
});

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// Combine all action creators in this asynchronous thunk
export function fetchMonsters() {
  return async (dispatch) => {
    dispatch(getMonsters());
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      dispatch(getMonstersSuccess(data));
    } catch (error) {
      dispatch(getMonstersFailure());
    }
  };
}
