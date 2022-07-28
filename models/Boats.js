    module.exports = (sequelize, Sequelize) => {
        const Boat = sequelize.define("boat", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNul: false
            },
            ModelName: {
                type: Sequelize.STRING,
                allowNul: false
            },
            Age: {
                type: Sequelize.INTEGER,
                allowNul: false
            },
            FuelType: {
                type: Sequelize.STRING,
                allowNul: false
            },
            categorieId: {
                type: Sequelize.UUID,
                required:true,
                allowNul: false
            },
            PassengerCapacity: {
                type: Sequelize.INTEGER,
                allowNul: false
            },
            MotorPower: {
                type: Sequelize.STRING,
                allowNul: false
            },
            description: {
                type: Sequelize.STRING,
                allowNul: false
            },
            CreatedDate: {
                type: Sequelize.DATE
            },
            CreatedBy: {
                type: Sequelize.STRING
            },
        });
       return Boat;
    };

