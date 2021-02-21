let express = require("express");
let path = require("path");
let expressLayouts = require("express-ejs-layouts");

const app = (module.exports = express());

const PORT = process.env.PORT || 3000;

// default template engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// setting views for error and 404 page
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/mentor", (req, res, next) => {
  res.render("mentor");
});

app.get("/blog", (req, res, next) => {
  res.render("blog");
});

app.get("/article", (req, res, next) => {
  res.render("article");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
