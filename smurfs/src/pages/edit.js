import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SmurfForm from "../components/smurf-form";
import { updateSmurf } from "../actions";

function EditSmurfPage({
  smurf,
  submitting,
  error,
  updateSmurf,
  history,
  match
}) {
  const redirect = () => {
    history.push("/");
  };

  if (!smurf) {
    return <p>No Smurf with that ID! Try another.</p>;
  }

  console.log(smurf);

  return (
    <>
      <h1>Edit {smurf.name}</h1>

      <SmurfForm
        handleSubmit={payload =>
          updateSmurf(match.params.id, payload)
            .then(redirect)
            .catch(err => {
              console.error(err);
            })
        }
        submitting={submitting}
        error={error}
        submitText="Update Smurf"
        {...smurf}
      />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const smurf = state.smurfs.find(
    smurf => smurf.id === Number(ownProps.match.params.id)
  );

  return {
    submitting: state.loading,
    error: state.error,
    smurf
  };
};

const mapDisatchToProps = {
  updateSmurf
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDisatchToProps
  )(EditSmurfPage)
);
