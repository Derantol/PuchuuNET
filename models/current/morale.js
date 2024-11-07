module.exports = (sequelize, DataTypes) => {
    const morale = sequelize.define('morale', {
        range: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'morale',
        timestamps: false,
    });
    morale.associate = (models) => {
        // associations go here
    };
    return morale;
};