    module.exports = (sequelize, Sequelize) => {
        const BoatImage= sequelize.define("boatImage", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNul: false
            },
            boatId: {
                type: Sequelize.UUID,
                required:true,
                allowNul: false
            },
            imageId: {
                type: Sequelize.UUID,
                required:true,
                allowNul: false
            },

        });
        return BoatImage;
    };
