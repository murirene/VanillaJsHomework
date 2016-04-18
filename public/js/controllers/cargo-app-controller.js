define(["ajaxHelper", "validationHelper", "domHelper", "primeHelper"], function (ajaxHelper, validationHelper, domHelper, primeHelper) {
    "use strict";
    function initialize() {}

    function handleCargoResponse(response) {
            domHelper.hideEntry();
            domHelper.setResults(response.payload);
            domHelper.showResult();
    }

    function errorCargoHandler(response) {
        console.log("error");
    }

    function getCargoTable() {
        if(validationHelper.isValidEntry()) {
            var cargoOrder = {
                cargoOrder: {
                SportsCar: domHelper.getSportsCarUnformatted(),
                MiniVan: domHelper.getMiniVanUnformatted(),
                FamilyCar: domHelper.getFamilyCarUnformatted(),
                CargoVan: domHelper.getCargoVanUnformatted(),
                Cargo: domHelper.getCargoUnformatted(),
                Truck: domHelper.getTruckUnformatted()
                }
            };
            ajaxHelper.getCargoTable(cargoOrder, handleCargoResponse, errorCargoHandler);
        } else {
            console.log("validation error");
        }
    }

    function anotherCargoTable() {
            domHelper.showEntry();
            domHelper.hideResult();
    }

    function showAssignment4(){
        domHelper.showAssignment4();
    }

    return {
        initialize: initialize,
        getCargoTable: getCargoTable,
        anotherCargoTable: anotherCargoTable,
        showAssignment4: showAssignment4
    };

});
