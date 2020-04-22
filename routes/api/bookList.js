const router = require("express").Router();
const bookListController = require("../../controllers/bookListController");

router.route("/").get(bookListController.findBooks);

module.exports = router;
