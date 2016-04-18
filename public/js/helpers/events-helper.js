define(["validationHelper", "domHelper", "appController", "primeAppController",
    "domApiAppController", "sumPairsAppController"],
    function (validationHelper, domHelper, appController, primeAppController,
              domApiAppController, sumPairsAppController) {
   "use strict";

    function eventHandler(e, handler) {
        handler();
        e.stopPropagation();
    }

    function registerCargoButton () {
        domHelper.setCargoButtonEvent("click", function (e) {
            eventHandler(e, appController.getCargoTable);
        });
    }

    function registerReturnButton () {
        domHelper.setReturnButtonEvent("click", function (e) {
            eventHandler(e, appController.anotherCargoTable);
        });
    }

    function registerPrimeButton () {
        domHelper.setPrimeButtonEvent("click", function (e) {
            primeAppController.getNumberOfPrimes();
        });
    }

    function registerDomApiButton () {
        domHelper.setDomApiButtonEvent("click", function (e) {
            domApiAppController.handleBlockQuoteRequest();
        });
    }

    function registerSumPairsButton () {
        domHelper.setSumPairsButtonEvent("click", function (e) {
           sumPairsAppController.getSumPairs();
        });
    }

    function registerShowAssignments(){
        domHelper.setShowAssignment1Event("click", function (e) {
            eventHandler(e, primeAppController.showAssignment1);
        });
        domHelper.setShowAssignment2Event("click", function (e) {
            eventHandler(e, domApiAppController.showAssignment2);
        });
        domHelper.setShowAssignment3Event("click", function (e) {
            eventHandler(e, sumPairsAppController.showAssignment3);
        });
        domHelper.setShowAssignment4Event("click", function (e) {
            eventHandler(e, appController.showAssignment4);
        });
    }

    function registerBlur() {
        domHelper.setPrimeEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidPrime);
        });

        domHelper.setSumPairsEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidSumPairsList);
        });

        domHelper.setSumPairsSumEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidSumPairSum);
        });

        domHelper.setPrimeEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidPrime);
        });

        domHelper.setSportsCarEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidSportsCar);
        });
        domHelper.setFamilyCarEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidFamilyCar);
        });
        domHelper.setTruckEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidTruck);
        });
        domHelper.setMiniVanEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidMiniVan);
        });
        domHelper.setCargoVanEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidCargoVan);
        });
        domHelper.setCargoEntryEvent("blur", function (e) {
            eventHandler(e, validationHelper.isValidCargo);
        });
    }

    function registerFocusIn() {
        domHelper.setPrimeEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedPrimeValue);
        });

        domHelper.setSumPairsSumEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedSumPairsSumValue);
        });

        domHelper.setSumPairsEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedSumPairsValue);
        });

        domHelper.setSportsCarEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedSportsCarValue);
        });
        domHelper.setFamilyCarEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedFamilyCarValue);
        });
        domHelper.setTruckEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedTruckValue);
        });
        domHelper.setMiniVanEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedMiniVanValue);
        });
        domHelper.setCargoVanEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedCargoVanValue);
        });
        domHelper.setCargoEntryEvent("focusin", function (e) {
            eventHandler(e, domHelper.setUnformattedCargoValue);
        });
    }

    function registerKeyup() {
        domHelper.setPrimeEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedPrimeValue);
        });

        domHelper.setSumPairsEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedSumPairsValue);
        });

        domHelper.setSumPairsSumEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedSumPairsSumValue);
        });

        domHelper.setSportsCarEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedSportsCarValue);
        });
        domHelper.setFamilyCarEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedFamilyCarValue);
        });
        domHelper.setTruckEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedTruckValue);
        });
        domHelper.setMiniVanEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedMiniVanValue);
        });
        domHelper.setCargoVanEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedCargoVanValue);
        });
        domHelper.setCargoEntryEvent("keyup", function (e) {
            eventHandler(e, domHelper.updateUnformattedCargoValue);
        });
    }

    function initialize() {
        //Assignment 1
        registerPrimeButton();

        //Assignment 2
        registerDomApiButton();

        //Assignment 3
        registerSumPairsButton();

        //Assignment 4
        registerCargoButton();
        registerBlur();
        registerReturnButton();
        registerFocusIn();
        registerKeyup();
        registerShowAssignments();
    }

    return {
        initialize: initialize
    };

});
