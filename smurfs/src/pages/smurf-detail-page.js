import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Smurf from "../components/smurf";

function SmurfDetailPage({ smurf, loading, match }) {
  if (loading) {
    return <p>Tracking down that little bugger...</p>;
  }

  if (!smurf) {
    return <p>There is no Smurf with that ID. Try another one.</p>;
  }

  return (
    <>
      <h1>All About {smurf.name}</h1>
      <Smurf {...smurf} />
      <div>
        <Link to={`/${match.params.id}/edit`}>Edit Smurf</Link>
      </div>
      {/* TODO: Add an Edit, and a Delete button */}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const smurf = state.smurfs.find(
    smurf => smurf.id === Number(ownProps.match.params.id)
  );

  return {
    loading: state.loading,
    smurf
  };
};

export default connect(mapStateToProps)(SmurfDetailPage);
