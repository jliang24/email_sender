import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import renderEmails from '../../utils/renderEmails';
import validateEmails from '../../utils/validateEmail';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class SurveyFormReview extends Component {
  state = { showList: false, validEmails: null };

  componentDidMount() {
    this.setState({
      validEmails: validateEmails(this.props.formValues.recipients, true)
    });
  }

  renderFields(fields, values) {
    return fields.map(({ label, name }) => {
      return (
        <div key={name}>
          <h6 style={{ color: 'grey' }}>{label}</h6>
          <div>{values[name]}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div style={{ paddingTop: '7px' }} className="card-panel">
          <h5 className="blue-text text-darken-2">
            Please confirm your entries
          </h5>
          <div>{this.renderFields(formFields, this.props.formValues)}</div>
          <button
            onClick={() =>
              this.state.showList
                ? this.setState({ showList: false })
                : this.setState({ showList: true })
            }
            className="blue btn"
            style={{ marginTop: '10px' }}
          >
            Show Recipient List
          </button>
          {this.state.showList ? renderEmails(this.state.validEmails, '') : ''}
        </div>
        <button
          className="yellow darken-3 btn-flat white-text"
          onClick={this.props.onCancel}
        >
          Back
        </button>
        <button
          onClick={() =>
            this.props.submitSurvey(this.props.formValues, this.props.history)
          }
          className="green btn-flat right white-text"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
