//Book table
module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        bookTitle: {
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