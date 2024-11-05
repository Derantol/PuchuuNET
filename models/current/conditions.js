module.exports = (sequelize, DataTypes) => {
    const conditions = sequelize.define('conditions', {
        condition: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'conditions',
        timestamps: false,
    });
    conditions.associate = (models) => {
        // associations go here
    };
    return conditions;
};