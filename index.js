const express = require('express');
const app = express();
//static page that express routes to. Webpack builds the new html in this dir
app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`));
app.listen(process.env.PORT, () => {
  console.log('Server running on PORT ', process.env.PORT);
});
