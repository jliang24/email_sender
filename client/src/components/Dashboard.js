import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const DashBoard = props => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red pulse">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
