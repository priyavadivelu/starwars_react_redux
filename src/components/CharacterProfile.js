import React from "react";
import { connect } from "react-redux";

const CharacterProfile = ({ profile }) => (
  <div id="character-profile" className="col-md-6">
    <div className="app-card">
      <div className="app-card-header">Profile</div>
      <div className="app-card-body"></div>
      <div className="app-card-body app-character-list">
        <ul>
          <li>{profile.name && <p>Name: {profile.name}</p>}</li>
          <li> {profile.height && <p>Height: {profile.height}cm</p>}</li>
          <li>{profile.mass && <p>Weight: {profile.mass}kg</p>}</li>
          <li> {profile.gender && <p>Gender: {profile.gender}</p>}</li>
        </ul>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ character: { profile } }) => ({
  profile,
});

export default connect(mapStateToProps)(CharacterProfile);
