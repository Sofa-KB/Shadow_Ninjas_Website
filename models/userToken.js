module.exports = function (sequelize, DataTypes) {
    const UserToken = sequelize.define('UserToken', {
        UserToken: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        UserName: {
            type: DataTypes.STRING,
            allowNulle: false
        }
    })
    return UserToken;
}
