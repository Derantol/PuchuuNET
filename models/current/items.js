module.exports = (sequelize, DataTypes) => {
    const items = sequelize.define('items', {
        item: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        cost: { // note: in copper coins, on sheets as '2c'
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'items',
        timestamps: false,
    });
    items.associate = (models) => {
        // associations go here
    };
    return items;
};