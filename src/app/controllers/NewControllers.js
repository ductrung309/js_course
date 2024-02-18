class NewControllers {
  index(req, res) {
    res.render("home");
  }
}

const newControllers = new NewControllers();
export default newControllers;
