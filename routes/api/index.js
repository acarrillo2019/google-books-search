const router = require("express").Router();
const bookListRoutes = require("./booklist");
const booksRoutes = require("./books");

// Book routes
router.use("/booklist", bookListRoutes);
router.use("/books", booksRoutes);

module.exports = router;
