var db = require("../db/models");

module.exports = function(app) {
    
    //create one chapter
    app.post(":userid/:projectid/:bookid/newChapter", function(req, res) {
        db.Chapter.Create({
            bookId: req.body.input_bookId,
            chapterTitle: req.body.input_chapterTitle,
            chapterRating: req.body.input_chapterRating,
            chapterVisibility: req.body.input_chapterVisibility,
            chapterSummary: req.body.input_chapterSummary,
            chapterImage: req.body.input_chapterImage,
            chapterOrder: req.body.input_chapterOrder
        })
    })

    //find one chapter
    app.get(":userid/:projectid/:bookid/:chapterid", function(req, res) {
        db.Chapter.FindAll({
            where: {
                bookId: req.params.bookid,
                chapterId: req.params.chapterid
            }
        })
    })

    //find all chapter
    app.get(":userid/:projectid/:bookid/chapters", function(req, res) {
        db.Chapter.FindAll({
            where: {
                bookId: req.params.bookid
            }
        })
    })

    //update one chapter

    //delete one chapter

}