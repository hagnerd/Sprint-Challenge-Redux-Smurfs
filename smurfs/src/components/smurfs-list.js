import React from "react";
import { connect } from "react-redux";
import Smurf from "./smurf";

function SmurfsList({ smurfs, loading, error }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
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
    loading: state.loading,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps)(SmurfsList);
