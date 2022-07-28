    const dbConfig = require("../config/db.config.js");
    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });
    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.boats = require("./Boats.js")(sequelize, Sequelize);
    db.categories= require("./Categories.js")(sequelize, Sequelize);
    db.images= require("./Images.js")(sequelize, Sequelize);
    db.boatImages= require("./BoatImages")(sequelize, Sequelize);

    db.categories.hasMany(db.boats);
    db.boats.belongsTo( db.categories);

    db.boats.hasMany(db.boatImages);
    db.boatImages.belongsTo(db.boats);

    db.images.hasMany(db.boatImages);
    db.boatImages.belongsTo(db.images);

    module.exports = db;