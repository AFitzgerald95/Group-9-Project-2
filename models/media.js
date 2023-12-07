const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Types = require("./types")
const User = require("./User")
class Media extends Model {

}

Media.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Types,
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, 
                key: 'id'
            }
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        descript: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    {
        hooks: {
                // api calls to googlebooks
                // api call to watchmode
                // beforeCreate: async ()
        },
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        dateFormat: 'MM-dd-yyyy',
        freezeTableName: true,
        underscored: true,
        modelName: 'media'
    }
);

module.exports = Media