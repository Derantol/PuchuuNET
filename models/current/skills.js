module.exports = (sequelize, DataTypes) => {
    const skills = sequelize.define('skills', {
        skill: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        effect: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'skills',
        timestamps: false,
    });
    skills.associate = (models) => {
        // associations go here
    };
    return skills;
};