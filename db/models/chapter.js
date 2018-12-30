//Chapter table
module.exports = function(sequelize, DataTypes) {
    var Chapter = sequelize.define("Chapter", {
        chapterId: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chapterTitle: {
            type: DataTypes.STRING,
            allowNull: false
            },
        chapterRating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chapterVisibility: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        chapterSummary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        chapterImage: {
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