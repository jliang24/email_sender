import React from 'react';
import renderEmails from '../../utils/renderEmails';

export default ({ input, label, meta: { error, touched, submitFailed } }) => {
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: '5px' }} {...input} />
      <div className="red-text" style={{ marginBottom: '10px' }}>
        {Array.isArray(error)
          ? renderEmails(error, 'Invalid Emails:', submitFailed)
          : touched && error}
      </div>
    </div>
  );
};
