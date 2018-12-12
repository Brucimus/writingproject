//Chapter table
module.exports = function(sequelize, DataTypes) {
    var Chapter = sequelize.define("Chapter", {
        chapterTitle: {
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
        },
        chapterOrder: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    Chapter.associate = function(models) {
      // We're saying that a Chapter should belong to an Book
      // A Chapter can't be created without a Book due to the foreign key constraint
      Chapter.belongsTo(models.Book, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Chapter;
  };