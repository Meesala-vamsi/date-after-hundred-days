const expressServer = require("express");
var addDays = require("date-fns/addDays");

const server = expressServer();

server.get("/", (request, response) => {
  let dateAfterHundredDays = addDays(new Date(), 100);
  let date = `${dateAfterHundredDays.getDate()}/${
    dateAfterHundredDays.getMonth() + 1
  }/${dateAfterHundredDays.getFullYear()}`;
  response.send(date);
});

server.listen(3000);

module.exports = server;
