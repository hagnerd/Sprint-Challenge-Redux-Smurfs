import React from "react";
import { connect } from "react-redux";
import Smurf from "./smurf";

function SmurfsList({ smurfs, fetchingSmurfs, error }) {
  console.log(smurfs);
  if (error) {
    return <p>{error}</p>;
  }

  if (fetchingSmurfs) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {smurfs.map(smurf => (
        <li key={smurf.id}>
          <Smurf {...smurf} />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps)(SmurfsList);
