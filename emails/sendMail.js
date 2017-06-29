let nodemailer = require('nodemailer');
let mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
let auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: 'mailer.julianjorgensen.com'
  }
}

let nodemailerMailgun = nodemailer.createTransport(mg(auth));

let sendMail = (mailOptions) => {
  let promise = new Promise(function(resolve, reject){
    nodemailerMailgun.sendMail(mailOptions, function (err, response) {
      if(err) {
        console.log('Error: ' + err);
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
  return promise;
}

module.exports = sendMail;
