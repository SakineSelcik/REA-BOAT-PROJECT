    module.exports = (sequelize, Sequelize) => {
        const Categorie = sequelize.define("categorie", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNul: false
            },
            CategoryName: {
                type: Sequelize.STRING,
                allowNul: false
            },
            Rank: {
                type: Sequelize.INTEGER,
                allowNul: false
            },
            CategoryDate: {
                type: Sequelize.DATE
            },
            CategoryBy: {
                type: Sequelize.STRING
            },


        });
        return Categorie;
    };
