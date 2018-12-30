//Project table
module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projectId: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        projectTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        projectRating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        projectVisibility: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        projectSummary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        projectImage: {
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