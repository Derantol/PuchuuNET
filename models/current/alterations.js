module.exports = (sequelize, DataTypes) => {
    const alterations = sequelize.define('alterations', {
        alteration: {
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
        ap: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'alterations',
        timestamps: false,
    });
    alterations.associate = (models) => {
        // associations go here
    };
    return alterations;
};