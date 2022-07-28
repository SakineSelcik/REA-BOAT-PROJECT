  module.exports = app => {
        const boats = require("../controllers/boat.controller");

        var router = require("express").Router();

        router.post("/", boats.create);

        router.get("/", boats.findAll);

        router.get("/:id", boats.findOne);

       router.put("/:id", boats.update);

       router.delete("/:id", boats.delete);

        app.use('/boats', router);

    };