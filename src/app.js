const express = require("express");
const bodyParser = require("body-parser");

const bad = require("./bad");
const good = require("./good");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    type: "application/json",
  })
);

const PORT = 3000;

app.post("/bad/orders", bad.create);
app.get("/bad/orders", bad.get);
app.post("/good/orders", good.create);
app.get("/good/orders", good.get);

app.listen(PORT, () => {
  console.log(`Service available at http://localhost:${PORT}`);
});
