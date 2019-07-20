import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Smurf from "../components/smurf";
import { deleteSmurf } from "../actions";

function SmurfDetailPage({ smurf, loading, match, history, deleteSmurf }) {
  if (loading) {
    return <p>Tracking down that little bugger...</p>;
  }

  if (!smurf) {
    return <p>There is no Smurf with that ID. Try another one.</p>;
  }

  const handleDelete = () => {
    deleteSmurf(smurf.id)
      .then(() => history.push("/"))
      .catch(err => console.error(err));
  };

  return (
    <>
      <h1>All About {smurf.name}</h1>
      <Smurf {...smurf} />
      <div>
        <Link to={`/${match.params.id}/edit`}>Edit Smurf</Link>
        <button onClick={handleDelete}>Delete Smurf</button>
      </div>
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

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(SmurfDetailPage);
