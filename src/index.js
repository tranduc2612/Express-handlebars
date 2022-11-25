const express = require("express");
const morgan = require("morgan");
const expats = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const routes = require("./routes");
const db = require("./config/db");

// connect DB
db.connect();

app.use(
  express.urlencoded({
    extend: true,
  })
);

//static file
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));
// template engine

app.engine(
  ".hbs",
  expats.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

routes(app); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
