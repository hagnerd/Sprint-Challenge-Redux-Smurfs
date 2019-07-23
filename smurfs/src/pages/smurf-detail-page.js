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
    <div className="flex flex-col w-1/2 mx-auto">
      <h1 className="text-3xl text-blue-500 font-extrabold my-8 text-center">
        All About {smurf.name}
      </h1>
      <div className="p-8 bg-white rounded-lg shadow-xl mb-8">
        <Smurf {...smurf} />
      </div>
      <div className="flex w-1/2 mx-auto justify-around">
        <Link
          className="bg-green-500 rounded-lg py-3 px-5 hover:bg-green-400"
          to={`/${match.params.id}/edit`}
        >
          Edit Smurf
        </Link>
        <button
          className="bg-red-500 rounded-lg py-3 px-5 hover:bg-red-400"
          onClick={handleDelete}
        >
          Delete Smurf
        </button>
      </div>
    </div>
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
