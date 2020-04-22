const db = require("../models");
//const axios = require("axios");
const axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findBooks: function(req, res) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: { q: req.query, maxResults: 10 }
      })
      .then(booklist => {
        let id_arr = booklist.data.items.map(item => item.id);
        db.Book.find({ google_id: { $in: id_arr } })
          .then(dbArr => {
            let dbMap = dbArr.map(function(doc) {
              return doc.google_id;
            });
            booklist.data.items.map(item => {
              dbMap.includes(item.id)
                ? (item.dbsaved = true)
                : (item.dbsaved = false);
            });
            res.json(booklist.data.items);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err)); //.catch(err => res.status(422).json(err)); for production
  }
};
