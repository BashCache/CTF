const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./models/routes');
// const checkAuth  = require('./middleware/check-auth');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', router);
 
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });

module.exports = router;