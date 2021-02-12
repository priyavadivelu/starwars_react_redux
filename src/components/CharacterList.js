import React from "react";
import { connect } from "react-redux";
import {
  setCurrentCharacter,
  getCharacterProfile,
} from "../redux/character/actions";

const CharacterList = ({ characters, setCharacter }) => {
  const handleChange = (event) => {
    setCharacter(event);
  };

  return (
    <div id="character-list" className="col-md-6">
      <h1>Characters</h1>
      {/* <ul>
        {characters.map((c, i) => (
          <li onClick={setCharacter(i + 1)} key={c.name}>
            {c.name}
          </li>
        ))}
      </ul> */}

      <select onChange={handleChange}>
        {characters.map((c, i) => (
          <option key={i} value={i + 1} id={i}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = (dispatch) => ({
  // setCharacter(event) {
  //   return () => {
  //     dispatch(setCurrentCharacter(event.target.value));
  //     dispatch(getCharacterProfile(event.target.value));
  //   };
  // },
  setCharacter(event) {
    setCurrentCharacter(event.target.value);
    dispatch(getCharacterProfile(event.target.value));
    return () => {
      dispatch(setCurrentCharacter(event.target.value));
      dispatch(getCharacterProfile(event.target.value));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
