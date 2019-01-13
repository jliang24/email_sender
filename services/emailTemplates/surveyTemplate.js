const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2> I'd like your input! </h2>
          <h3> Please answer the following question: </h3>
          <h4> ${survey.body} </h4> 
          <div> 
            <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
      </body>
    </html>
  `;
};
