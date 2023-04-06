module.exports = (sequelize, dataTypes) => {
  let alias = "Actors";
  let cols = {
        id: {
              type: dataTypes.INTEGER(10).UNSIGNED,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false,
        },
        first_name: {
              type: dataTypes.STRING(100),
              allowNull: false,
        },
        last_name: {
              type: dataTypes.STRING(100),
              allowNull: false,
        },
        rating: {
              type: dataTypes.DECIMAL(3, 1),
        },
        favorite_movie_id: {
              type: dataTypes.INTEGER(10).UNSIGNED,
        },
  };
  let config = {
        tableName: "actors",
        //timestamps: false,
        createdAt: "created_at",
        updatedAt: "updated_at",
  };

  const Actor = sequelize.define(alias, cols, config);

  return Actor;
};
