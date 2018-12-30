//Book table
module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        bookId: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        projectID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false
            },
        bookRating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookVisibility: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        bookSummary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bookImage: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bookOrder: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    Book.associate = function(models) {
        // We're saying that a Book should belong to an Project
        // A Book can't be created without a Project due to the foreign key constraint
        Book.belongsTo(models.Project, {
            foreignKey: {
            allowNull: false
            }
        });
    };
    return Book;
  };