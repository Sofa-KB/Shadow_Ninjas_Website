module.exports = function (sequelize, DataTypes) {
    const UserToken = sequelize.define('UserToken', {
        UserToken: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return UserToken;
}
