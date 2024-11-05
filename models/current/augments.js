module.exports = (sequelize, DataTypes) => {
    const augments = sequelize.define('augments', {
        augment: {
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
        tableName: 'augments',
        timestamps: false,
    });
    augments.associate = (models) => {
        // associations go here
    };
    return augments;
};