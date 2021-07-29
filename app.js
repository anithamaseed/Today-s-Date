const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const todaysDate = new Date();
  response.send(
    `${todaysDate.getDate()}-${
      todaysDate.getMonth() + 1
    }-${todaysDate.getFullYear()}`
  );
});
module.exports = app;
