//Project table
module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projectTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Visibility: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Summary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    Project.associate = function(models) {
        // We're saying that a Project should belong to an User
        // A Project can't be created without a User due to the foreign key constraint
        Project.belongsTo(models.User, {
            foreignKey: {
            allowNull: false
            }
        });
    };
    return Project;
  };