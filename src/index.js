import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";

const app = express();
const port = process.env.port || 3000;

app.use(express.static("./src/public"));

//HTTPS LOGGER
app.use(morgan("combined"));

//Templates engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", { layout: "./main" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
