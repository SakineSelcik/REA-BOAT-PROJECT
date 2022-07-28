
    module.exports = (sequelize, Sequelize) => {
        const Image = sequelize.define("image", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNul: false
            },
            Name: {
                type: Sequelize.STRING,
                allowNul: false
            },
            Url: {
                type: Sequelize.STRING,
                allowNul: false
            },
            CreateBy: {
                type: Sequelize.STRING
            },
            CreateDate: {
                type: Sequelize.DATE
            },
            IsMain: {
                type: Sequelize.BOOLEAN,
                allowNul: false
            }

        });
        return Image;
    };
