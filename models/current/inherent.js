/** SCS Database sheet: https://docs.google.com/spreadsheets/d/1A8SAo40aPhKr9bGO3anQly2XEXUWv0ZgjQjMaBv70VE/edit?gid=1637810358#gid=1637810358 
 * Sheets that go into this model:
 *  - Spells
 *  - Monsters
 *  - Patrons
 *  - Powers
 *  - Perks
 *  - Inherents
 *
 * Sheets that go elsewhere:
 *  - Weapon Enhancements
 *  - Outfit Enhancements
 *  - Conditions
 *  - Augments
 *  - Items
 *  - Mundane Weapons
 *  - Mundane Outfits
 *  - Linkage
 *  - Alterations
 *  - Keywords
 *  - Skills
 *
 * Sheets that go ???
 *  - Fusion Spells
 */

module.exports = (sequelize, DataTypes) => {
    const inherent = sequelize.define('inherent', {
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
        tableName: 'inherent',
        timestamps: false,
    });
    inherent.associate = (models) => {
        // associations go here
    };
    return inherent;
};