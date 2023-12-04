const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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