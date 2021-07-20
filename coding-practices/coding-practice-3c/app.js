const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  console.log(dateTime);
  response.send(
    `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`
  );
});

app.listen(3001, () => {
  console.log("Server Running....");
});
module.exports = app;
