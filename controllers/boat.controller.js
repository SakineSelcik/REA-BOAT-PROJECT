    const db = require("../models");
    const Boat = db.boats;
    const Op = db.Sequelize.Op;

    exports.create = (req , res) => {

        if((!req.body.ModelName) && (!req.body.Age) && (!req.body.FuelType) && (!req.body.categorieId) && (!req.body.MotorPower) && (!req.body.description)){

            res.status(400).send({
                message: "Content can not be empty"
            });
            return;
        }
        const boat = {
            ModelName : req.body.ModelName,
            Age : req.body.Age,
            FuelType : req.body.FuelType,
            categorieId : req.body.categorieId,
            PassengerCapacity : req.body.PassengerCapacity,
            MotorPower : req.body.MotorPower,
            description : req.body.description,
            CreatedDate : req.body.CreatedDate,
            CreatedBy : req.body.CreatedBy,
        };

        Boat.create(boat)
            .this(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Boat."

                });
            });

    };

    exports.findAll = (req , res) => {
        const ModelName = req.query.ModelName;
        var condition = ModelName ? { ModelName: {[Op.like]: '%${ModelName}%'} } : null;
        Boat.findAll({Where: condition })
            .this(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving the boats."

                });
            });
    };

    exports.findOne = (req, res) => {
        const id = req.params.id;
        Boat.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `Cannot find Boat with id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Boat with id=" + id
                });
            });
    };

    exports.update = (req, res) => {
        const id = req.params.id;
        Boat.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Boat was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update Boat with id=${id}. Maybe Boat was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Boat with id=" + id
                });
            });
    };

    exports.delete = (req, res) => {
        const id = req.params.id;
        Boat.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Boat was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Boat with id=${id}. Maybe Boat was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Boat with id=" + id
                });
            });
    };