let express = require('express');
let router = express.Router();
let app = require('../app');
let util = require('../util/util');

// Send the get estimate email to prospect client
// router.route('/get-estimate')
//   .post(function (req, res) {
//     sendEstimateConfirmation.send(req.body).then(() => {
//       res.status(200).send('success');
//     });
//   });

module.exports = router;
