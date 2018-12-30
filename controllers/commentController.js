var db = require("../db/models");

module.exports = function(app) {
    
    //create one comment
    app.post(":userid/:projectid/:bookid/:chapterid/newComment", function(req, res) {
        db.Comments.Create({
            
        })
    })

    //find one comment
    app.get(":userid/:projectid/:bookid/:chapterid/:commentid", function(req, res) {
        db.Comments.FindAll({

        })
    })

    //find all comment
    app.get(":userid/:projectid/:bookid/:chapterid/comments", function(req, res) {
        db.Comments.FindAll({

        })
    })

    //update one comment

    //delete one comment

}