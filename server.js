const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3456;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`>>> Server is running on PORT: ${PORT}`);
});
