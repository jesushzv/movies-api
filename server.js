const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());


app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Movies API by jesushzv");
});

app.use("/movies", require("./routes.js"));

app.listen(port, () => console.log("Server running on port " + port));
