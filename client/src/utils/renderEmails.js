import React from 'react';

export default (emails, header, submitFailed = true) => {
  if (!submitFailed) return;
  return (
    <div>
      <h5> {header} </h5>
      <ul className="collection">
        {emails.map(email => {
          return (
            <li className="collection-item" key={email}>
              {email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
