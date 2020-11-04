import axios from 'axios'

export const FETCH_CHARACTER_START = 'FETCH_MISSIONS_START'
export const FETCH_CHARACTER_SUCCESS ='FETCH_MISSIONS_SUCCESS'
export const FETCH_CHARACTER_FAILURE = 'FETCH_MISSIONS_FAILURE'

export const fetchCharacter = () => {
    return (dispatch) => {
      // do async actions here
      dispatch({ type: FETCH_CHARACTER_START });
  
      // fetch data
      axios
        .get("https://api.jikan.moe/v3/character/13")
        .then((res) => {
          dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          // console.log(err.message);
          dispatch({ type: FETCH_CHARACTER_FAILURE, payload: err.message });
        });
    };
  };
  