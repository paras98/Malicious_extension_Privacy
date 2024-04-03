const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3045;

app.use(express.json());

app.post('/track', (req, res) => {
    const { userId, url } = req.body;
    console.log(userId,' : ',url)
    fs.appendFileSync('urls.csv', `${userId},${url}\n`);
    res.status(200).send('URL recorded');
  })

  app.get('/urls', (req, res) => {
    fs.readFile('urls.csv', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading CSV file');
      }
      const formattedData = data.split('\n').filter(row => row).join(', ');
      res.send(`<p>${formattedData}</p>`);
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
