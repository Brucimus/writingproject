var db = require("../db/models");

module.exports = function(app) {

    //create one book
    app.post(":userid/newbook", function(req, res) {
        db.Book.Create({

        })
    })

    //find one book
    app.get(":userid/:bookid", function(req, res) {
        db.Book.FindAll({

        })
    })

    //find all books
    app.get(":userid/books", function(req, res) {
        db.Book.FindAll({

        })
    })

    //update one book

    //delete one book
    
}