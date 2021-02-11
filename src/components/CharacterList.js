import React from "react";
import { connect } from "react-redux";
import {
  setCurrentCharacter,
  getCharacterProfile,
} from "../redux/character/actions";

const handleChange = (event) => {
  setCurrentCharacter(event.target.value);
  getCharacterProfile(event.target.value);
};

const CharacterList = ({ characters, setCharacter }) => (
  <div id="character-list" className="col-md-6">
    <h1>Characters</h1>
    {/* <ul>
      {characters.map((c, i) => (
        <li onClick={setCharacter(i + 1)} key={c.name}>
          {c.name}
        </li>
      ))}
    </ul> */}

    <select onChange={setCharacter}>
      {characters.map((c, i) => (
        <option key={i} value={i + 1}>
          {c.name}
        </option>
      ))}
    </select>
  </div>
);

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
    return () => {
      dispatch(setCurrentCharacter(event.target.value));
      dispatch(getCharacterProfile(event.target.value));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
