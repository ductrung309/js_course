import router from "./home";

export function routes(app) {
  app.use("/news", router);
}
