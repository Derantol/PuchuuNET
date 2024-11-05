module.exports = (sequelize, DataTypes) => {
    const perks = sequelize.define('perks', {
        ability: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        action: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        cost: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        assist: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'perks',
        timestamps: false,
    });
    perks.associate = (models) => {
        // associations go here
    };
    return perks;
};