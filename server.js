const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
  /* eslint no-console: 0 */
  console.log(`Listening to ${PORT}!`);
});
