const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.listen(9999, () => {
  // eslint-disable-next-line no-console
  console.log('Starting server on port 9999...');
});