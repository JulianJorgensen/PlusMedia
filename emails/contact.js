let sendMail = require('./sendMail');

// send alert to admin
let send = function(body) {
  let promise = new Promise(function(resolve, reject){
    let {name, email, company, message} = body;

    let mailOptions = {
      from: {name: 'PlusMedia Robot', address: email},
      to: {name: 'PlusMedia Admin', address: 'contact@plusme.com'},
      subject: `Email from ${name}`,
      template: {
        name: `./emails/templates/contact.pug`,
        engine: 'pug',
        context: {
          title: `Email from ${name}`,
          name,
          email,
          company,
          message
        }
      }
    };

    sendMail(mailOptions).then(() => {
      resolve();
    }).catch((err) => {
      console.log('Error: Something went wrong when sending the admin alert email...', err);
    });
  }).catch((err) => {
    console('Error: ', err);
  });
  return promise;
};

module.exports.send = send;
