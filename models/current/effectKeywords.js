module.exports = (sequelize, DataTypes) => {
    const effectKeywords = sequelize.define('effectKeywords', {
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
        tableName: 'effectKeywords',
        timestamps: false,
    });
    effectKeywords.associate = (models) => {
        // associations go here
    };
    return effectKeywords;
};