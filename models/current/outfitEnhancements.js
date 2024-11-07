module.exports = (sequelize, DataTypes) => {
    const outfitEnhancements = sequelize.define('outfit-enhancements', {
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
        tableName: 'outfit-enhancements',
        timestamps: false,
    });
    outfitEnhancements.associate = (models) => {
        // associations go here
    };
    return outfitEnhancements;
};