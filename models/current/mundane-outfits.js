module.exports = (sequelize, DataTypes) => {
    const mundaneOutfits = sequelize.define('mundane-outfits', {
        outfit: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        durability: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'mundane-outfits',
        timestamps: false,
    });
    mundaneOutfits.associate = (models) => {
        // associations go here
    };
    return mundaneOutfits;
};