module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define('Event', {
        creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        event_time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_style: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        player_count: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    })
    return Event;
}