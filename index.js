let express = require("express");
let articleRouter = require("./routes/articles");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
let path = require("path");
let expressLayouts = require("express-ejs-layouts");
const Contact = require("./models/contact");
const router = require("./routes/articles");

const app = (module.exports = express());

const PORT = process.env.PORT || 3000;

// connect to db
mongoose.connect("mongodb://localhost/mts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// // set parser
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// default template engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// setting views for error and 404 page
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/mentor", (req, res, next) => {
  res.render("mentor");
});

app.get("/blog", (req, res, next) => {
  res.render("blog");
});

app.use("/blog", articleRouter);

router.post("/", async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    comment: req.body.comment,
  });

  try {
    comment = await comment.save();
    res.send("done deal");
  } catch (e) {
    res.send("not a done deal");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
