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
      <div className="app-card">
        <div className="app-card-header">Choose Character</div>
        <div className="app-card-body app-character-list">
          <select onChange={handleChange}>
            {characters.map((c, i) => (
              <option key={i} value={i + 1} id={i}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
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
