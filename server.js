const next = require('next');
const express = require('express');

const server = express();
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    server.use(express.json());
    
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if(err) {
        throw err;
      }
      console.log(`Server listening on http://localhost:${PORT}`);
    })
  })
  .catch(console.error)