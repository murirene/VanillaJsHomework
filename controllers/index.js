"use strict";
var async = require("async");

module.exports = function (router) {
    router.get("/", function (req, res) {
        res.render("index", {});
    });

    router.post("/cargo-table", function (req, res) {
        // jshint maxstatements:33
        function Transporter() {
        }

        Transporter.prototype.move = function (load) {
            var moves = [];

            moves.push({type: this.name, weight: (load >= this.capacity ? this.capacity : load)});

            load -= (load >= this.capacity ? this.capacity : load);

            if (this.nextMover) {
                moves.push.apply(moves, this.nextMover.move(load));
            } else {
                if (load > 0) {
                    moves.push({leftover: load, isleftover: true});
                }
            }

            return moves;
        };

        Transporter.prototype.nextMover = undefined;
        function FamilyCar() {}
        FamilyCar.prototype = new Transporter();
        FamilyCar.prototype.constructor = FamilyCar;
        FamilyCar.prototype.name = "Family Car";
        FamilyCar.prototype.capacity = 300;

        function SportsCar() {}
        SportsCar.prototype = new Transporter();
        SportsCar.prototype.constructor = SportsCar;
        SportsCar.prototype.name = "Sports Car";
        SportsCar.prototype.capacity = 100;

        function Truck() {}
        Truck.prototype = new Transporter();
        Truck.prototype.constructor = Truck;
        Truck.prototype.name = "Truck";
        Truck.prototype.capacity = 1500;

        function MiniVan() {}
        MiniVan.prototype = new Transporter();
        MiniVan.prototype.constructor = MiniVan;
        MiniVan.prototype.name = "Mini Van";
        MiniVan.prototype.capacity = 200;

        function CargoVan() {}
        CargoVan.prototype = new Transporter();
        CargoVan.prototype.constructor = CargoVan;
        CargoVan.prototype.name = "Cargo Van";
        CargoVan.prototype.capacity = 200;

        function chainOfResponsibility(cargoOrder) {
            // jshint maxcomplexity:30
            var startOfSequence = [];
            for (var i = 0; i < cargoOrder.SportsCar; i++) {
                startOfSequence.push(new SportsCar());
            }
            for (i = 0; i < cargoOrder.MiniVan; i++) {
                startOfSequence.push(new MiniVan());
            }
            for (i = 0; i < cargoOrder.FamilyCar; i++) {
                startOfSequence.push(new FamilyCar());
            }
            for (i = 0; i < cargoOrder.CargoVan; i++) {
                startOfSequence.push(new CargoVan());
            }
            for (i = 0; i < cargoOrder.Truck; i++) {
                startOfSequence.push(new Truck());
            }

            for (i = 0; i < startOfSequence.length; i++) {
                startOfSequence[i].nextMover = (i < (startOfSequence.length - 1)) ? startOfSequence[i + 1] : undefined;
            }

            return {
                cargoOrder: cargoOrder,
                moves: startOfSequence[0].move(cargoOrder.Cargo)
            };
        }

        function renderResult(data, next) {
            res.render("partials/cargo", data, next);
        }

        function sendResult(data, next) {
            res.send({status: "success", payload: data});
            next(null, "success");
        }

        async.waterfall([
            renderResult.bind(null, {
                cargoItems: chainOfResponsibility(req.body.cargoOrder)
            }),
            sendResult], function () {
        });
    });
};
