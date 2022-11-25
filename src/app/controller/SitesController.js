const Course = require("../models/Course");
const { multipleMongooseObject } = require("../../ulti/mongoose");

class SiteController {
  // GET /home
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseObject(courses),
        });
      })
      .catch(next);
  }
  //GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
