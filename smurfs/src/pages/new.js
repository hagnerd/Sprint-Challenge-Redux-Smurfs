import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SmurfForm from "../components/smurf-form";
import { addSmurf } from "../actions";

function NewSmurfPage({ submitting, error, addSmurf, history }) {
  const redirect = () => {
    history.push("/");
  };

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold text-blue-500 my-8">
        Create a New Smurf
      </h1>

      <SmurfForm
        handleSubmit={payload =>
          addSmurf(payload)
            .then(redirect)
            .catch(err => {
              console.error(err);
            })
        }
        submitting={submitting}
        error={error}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    submitting: state.loading,
    error: state.error
  };
};

const mapDisatchToProps = {
  addSmurf
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDisatchToProps
  )(NewSmurfPage)
);
