module.exports = (sequelize, DataTypes) => {
    const abilityTypes = sequelize.define('abilityTypes', {
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
        tableName: 'abilityTypes',
        timestamps: false,
    });
    abilityTypes.associate = (models) => {
        // associations go here
    };
    return abilityTypes;
};