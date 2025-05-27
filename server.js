// server.js (Express Proxy)
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const targetUrl = req.query.url;
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'PUBGMOBILE/3.8.1',
        'Referer': 'https://www.pubgmobile.com/',
        'Origin': 'https://www.pubgmobile.com',
      },
    });
    const data = await response.text();
    res.send(data);
  } catch (e) {
    res.status(500).send('Proxy Error: ' + e.message);
  }
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
