const express = require('express');
const app = express();
const linkPreviewGenerator = require("link-preview-generator");
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/getPreviewData', async function (req, res) {
  const previewData = [];
  for(var i= 0; i < req.body.length; i++) {
   const data = await linkPreviewGenerator(
      req.body[i]
    )
    previewData.push(data);
  }
  res.send(JSON.stringify(previewData));
});
 
app.listen(4000, () => {
  console.log('Listening');
}); 