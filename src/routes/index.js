const newRouter = require("./new.js");
const siteRouter = require("./site.js");

function router(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
}

module.exports = router;
