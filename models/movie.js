'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Movie.belongsTo(models.User, {
        foreignKey: 'userId'
      })

      Movie.hasMany(models.Review, {
        foreignKey: 'movieId'
      })
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      releaseDate: DataTypes.INTEGER,
      synopsis: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Movie',
      tableName: 'movies'
    }
  )
  return Movie
}
