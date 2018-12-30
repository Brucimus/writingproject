var db = require("../db/models");

module.exports = function(app) {

    //create one project
    app.post(":userid/newproject", function(req, res) {
        db.Project.Create({
            userId: req.body.input_userID,
            projectTitle: req.body.input_projectTitle,
            projectRating: req.body.input_projectRating,
            projectVisibility: req.body.input_projectVisibility,
            projectSummary: req.body.input_projectSummary,
            projectImage: req.body.input_projectImage
        })
    })

    //find one project
    app.get(":userid/:projectid", function(req, res) {
        db.Project.FindOne({
            where: {
                userId: req.params.userid,
                projectId: req.params.projectid
            }
        })
    })

    //find all projects
    app.get(":userid/projects", function(req, res) {
        db.Project.FindAll({
            where: {
                userId: req.params.userid
            }
        })
    })

    //update one project

    //delete one project
}