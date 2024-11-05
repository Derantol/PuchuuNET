module.exports = (sequelize, DataTypes) => {
    const weaponEnhancements = sequelize.define('weapon-enhancements', {
        enhancement: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'weapon-enhancements',
        timestamps: false,
    });
    weaponEnhancements.associate = (models) => {
        // associations go here
    };
    return weaponEnhancements;
};