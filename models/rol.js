const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Rol_has_user = require("./user_has_rol");
class Rol extends Model {}
Rol.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "rol"
});

Rol.hasMany(Rol_has_user, {
    foreignKey: "rol_idrol"
});



sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables rol created!`)
    })
    .then(() => {
    });

module.exports = Rol;