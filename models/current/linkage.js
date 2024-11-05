module.exports = (sequelize, DataTypes) => {
    const linkage = sequelize.define('linkage', {
        type: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'linkage',
        timestamps: false,
    });
    linkage.associate = (models) => {
        // associations go here
    };
    return linkage;
};