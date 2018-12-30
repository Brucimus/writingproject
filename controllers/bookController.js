var db = require("../db/models");

module.exports = function(app) {

    //create one book
    app.post(":userid/:projectid/newbook", function(req, res) {
        db.Book.Create({
            projectID: req.body.input_projectID,
            bookTitle: req.body.input_bookTitle,
            bookRating: req.body.input_bookRating,
            bookVisibility: req.body.input_bookVisibility,
            bookSummary: req.body.input_bookInput,
            bookImage: req.body.input_bookImage,
            bookOrder: req.body.input_bookOrder
        })
    })

    //find one book
    app.get(":userid/:projectid/:bookid", function(req, res) {
        db.Book.FindOne({
            where: {
                projectId: req.params.projectid,
                bookId: req.params.bookid
            }
        })
    })

    //find all books
    app.get(":userid/:projectid/books", function(req, res) {
        db.Book.FindAll({
            where: {
                projectId: req.params.projectid
            }
        })
    })

    //update one book

    //delete one book
    
}