module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('User', {
 
        userId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userEmail: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        first_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
 
        last_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        }

    });

    User.associate = function(models) {
        // Associating User with Van, VanList, and VanGroup
        // When an User is deleted, also delete any associated Van, VanList, and VanGroup
        User.hasMany(models.VanList, {
          onDelete: "cascade"
        });

        User.hasMany(models.Van, {
            onDelete: "cascade"
        });

        User.hasMany(models.VanGroup, {
            onDelete: "cascade",
            foreignKey: "passenger_ID"
        });

        //associating user to vantripgroup 
        User.hasMany(models.VanTripGroup, {
            onDelete: "cascade",
            foreignKey: "passenger_ID"
        });

      };

    return User;
 
}