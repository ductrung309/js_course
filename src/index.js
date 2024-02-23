import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import routes from "./routes/index.js";

import nodemailer from "nodemailer";

const app = express();
const port = process.env.port || 3000;

app.use(express.static("./src/public"));

//HTTPS LOGGER
app.use(morgan("combined"));

//Templates engine

//https logger
app.use(morgan("combined"));

//templates engine

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

routes(app);

//router
app.get("/", (req, res) => {
  res.render("home", { layout: "./main" });
});

//Mail send
const tranSporter = nodemailer.createTransport({
  service: "gmail",
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "anhlatrung5c@gmail.com",
    pass: "aztb fnaw hrms chth",
  },
});

const mailOptions = {
  from: "anhlatrung5c@gmail.com",
  to: "longthancongviec1@gmail.com",
  subject: "Tron dang iu wa troi ne!!",
  text: "Dai dang iu hon ne!",
};

tranSporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { tranSporter, mailOptions };
