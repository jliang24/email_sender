const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2> Please give us your input! </h2>
          <h3> ${survey.body} </h3> 
          <div> 
            <a style="font-size: 14px" href="${
              keys.redirectDomain
            }/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
      </body>
    </html>
  `;
};
