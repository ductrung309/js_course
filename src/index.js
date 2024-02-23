import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { mail } from "./config/mail.js";

const app = express();
const port = process.env.port || 3000;

//static file
app.use(express.static("./src/public"));

//https logger
app.use(morgan("combined"));

//templates engine

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("home", { layout: "./main" });
});

//send code
mail("Nhớ cổ wa đi à", Math.floor(Math.random() * 1000000));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
