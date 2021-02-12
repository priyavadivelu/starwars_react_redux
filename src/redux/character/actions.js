import { API_URL } from "../../constants";

export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";
export const SET_CHARACTER_PROFILE = "SET_CHARACTER_PROFILE";
export const SET_CHARACTER_MOVIES = "SET_CHARACTER_MOVIES";

export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id,
  };
}

export function setCharacterProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile,
  };
}

export function getCharacterProfile(id) {
  return (dispatch) => {
    fetch(`${API_URL}/people/${id}`)
      .then((res) => {
        // console.log(`got res: ${JSON.stringify(res)}`);
        return res.json();
      })
      .then((profile) => {
        // console.log(`got profile: ${profile}`);
        dispatch(setCharacterProfile(profile));
        dispatch(getCharacterMovies(profile.films));
      })
      .catch((e) => console.log(e));
  };
}

export function setCharacterMovies(movies) {
  return {
    type: SET_CHARACTER_MOVIES,
    movies,
  };
}

export function getCharacterMovies(moviesUrls) {
  return (dispatch) =>
    Promise.all(
      moviesUrls.map((movieUrl) => fetch(movieUrl).then((res) => res.json()))
    ).then((movies) => dispatch(setCharacterMovies(movies)));
}
