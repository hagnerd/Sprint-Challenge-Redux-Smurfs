import React from "react";
import { Link } from "react-router-dom";
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
    <ul className="w-1/2 mx-auto">
      {smurfs.map(smurf => (
        <li
          className="bg-white w-full p-5 rounded-lg shadow-md my-6 hover:shadow-xl"
          key={smurf.id}
        >
          <Link to={`${smurf.id}`}>
            <Smurf {...smurf} />
          </Link>
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
