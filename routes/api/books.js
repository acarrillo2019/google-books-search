const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.saveBooks);
router.route("/").get(booksController.findSaved);
router.route("/:id").delete(booksController.remove);

module.exports = router;
