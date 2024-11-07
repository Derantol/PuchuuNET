module.exports = (sequelize, DataTypes) => {
    const actions = sequelize.define('actions', {
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
        tableName: 'actions',
        timestamps: false,
    });
    actions.associate = (models) => {
        // associations go here
    };
    return actions;
};