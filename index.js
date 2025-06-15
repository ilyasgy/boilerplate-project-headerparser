// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files (optional)
app.use(express.static('public'));

// Root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// 🔍 The /api/whoami route
app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

// Start server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port);
});
