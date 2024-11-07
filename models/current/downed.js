module.exports = (sequelize, DataTypes) => {
    const downed = sequelize.define('downed', {
        name: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'downed',
        timestamps: false,
    });
    downed.associate = (models) => {
        // associations go here
    };
    return downed;
};