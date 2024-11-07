module.exports = (sequelize, DataTypes) => {
    const mundaneWeapons = sequelize.define('mundane-weapons', {
        weapon: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        type: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        durability: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        amplitude: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'mundane-weapons',
        timestamps: false,
    });
    mundaneWeapons.associate = (models) => {
        // associations go here
    };
    return mundaneWeapons;
};