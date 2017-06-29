let express = require('express');
let router = express.Router();
let app = require('../app');
let contactEmail = require('../emails/contact');

// Send contact email
router.route('/send')
  .post(function (req, res) {
    contactEmail.send(req.body).then(() => {
      res.status(200).send('success');
    });
  });

module.exports = router;
