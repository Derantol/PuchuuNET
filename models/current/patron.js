module.exports = (sequelize, DataTypes) => {
    const patron = sequelize.define('patron', {
        ability: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        action: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        cost: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        assist: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'patron',
        timestamps: false,
    });
    patron.associate = (models) => {
        // associations go here
    };
    return patron;
};