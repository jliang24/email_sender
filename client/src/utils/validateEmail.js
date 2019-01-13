const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails, valid = false) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => {
      if (!email) return false;
      return re.test(email) === valid;
    });

  if (invalidEmails.length) {
    return invalidEmails.map(email => email);
  }

  return;
};
