let express = require('express');
let router = express.Router();
let app = require('../app');
let contentful = require('contentful');

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const accessTokenPreview = process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW;

const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken
});

const clientPreview = contentful.createClient({
  space: spaceId,
  accessToken: accessTokenPreview,
  host: 'preview.contentful.com'
});

router.route('/getAllContent')
  .get(function (req, res) {
    client.getEntries({
      order: 'sys.createdAt'
    })
    .then((response) => res.status(200).send(response.items))
    .catch(console.error);
  });

router.route('/getAllContent/preview')
  .get(function (req, res) {
    clientPreview.getEntries()
    .then((response) => console.log(response.items))
    .catch(console.error);
  });

module.exports = router;
