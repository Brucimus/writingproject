var db = require("../db/models");

module.exports = function(app) {
    
    //create one chapter
    app.post(":userid/:bookid/newChapter", function(req, res) {
        db.Chapter.Create({
            
        })
    })

    //find one chapter
    app.get(":userid/:bookid/:chapterid", function(req, res) {
        db.Chapter.FindAll({

        })
    })

    //find all chapter
    app.get(":userid/:bookid/chapters", function(req, res) {
        db.Chapter.FindAll({

        })
    })

    //update one chapter

    //delete one chapter

}