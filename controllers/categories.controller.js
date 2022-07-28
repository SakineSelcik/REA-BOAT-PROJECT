    const db = require("../models");
    const Categorie = db.categories;
    const Op = db.Sequelize.Op;

    exports.create = (req , res) => {

        if((!req.body.CategoryName) && (!req.body.Rank) ){

            res.status(400).send({
                message: "Content can not be empty"
            });
            return;
        }
        const categorie = {
            CategoryName: req.body.CategoryName,
            Rank: req.body.Rank,
            CategoryDate: req.body.CategoryDate,
            CategoryBy: req.body. CategoryBy,
        };

        Categorie.create(categorie)
            .this(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Categorie."

                });
            });

    };

    exports.findAll = (req , res) => {
        const CategoryName = req.query.CategoryName;
        var condition = CategoryName ? { CategoryName: {[Op.like]: '%${CategoryName}%'} } : null;
        Categorie.findAll({Where: condition })
            .this(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving the categories."

                });
            });
    };

    exports.findOne = (req, res) => {
        const id = req.params.id;
        Categorie.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `Cannot find Categorie with id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Categorie with id=" + id
                });
            });
    };

    exports.update = (req, res) => {
        const id = req.params.id;
        Categorie.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Categorie was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update Categorie with id=${id}. Maybe Categorie was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Categorie with id=" + id
                });
            });
    };

    exports.delete = (req, res) => {
        const id = req.params.id;
        Categorie.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Categorie was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Categorie with id=${id}. Maybe Categorie was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Categorie with id=" + id
                });
            });
    };