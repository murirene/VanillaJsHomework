define(["domHelper"], function (domHelper) {
    "use strict";

    function isValidEntry() {
        check(domHelper.isSportsCarValid, domHelper.setSportsCarInvalidState);
        check(domHelper.isFamilyCarValid, domHelper.setFamilyCarInvalidState);
        check(domHelper.isTruckValid, domHelper.setTruckInvalidState);
        check(domHelper.isMiniVanValid, domHelper.setMiniVanInvalidState);
        check(domHelper.isCargoVanValid, domHelper.setCargoVanInvalidState);
        check(domHelper.isCargoValid, domHelper.setCargoInvalidState);

        if(domHelper.getCargoUnformatted() == 0){
            domHelper.setCargoInvalidState();
            return false;
        }

        if(domHelper.isSportsCarValid({}) && domHelper.isFamilyCarValid() && domHelper.isTruckValid() &&
            domHelper.isMiniVanValid() && domHelper.isCargoVanValid() && domHelper.isCargoValid()) {
            if(domHelper.getSportsCarUnformatted() == 0 &&
                domHelper.getFamilyCarUnformatted() == 0 &&
                domHelper.getTruckUnformatted()  == 0 &&
                domHelper.getMiniVanUnformatted()  == 0 &&
                domHelper.getCargoVanUnformatted()) {
                domHelper.setSportsCarInvalidState();
                domHelper.setFamilyCarInvalidState();
                domHelper.setTruckInvalidState();
                domHelper.setMiniVanInvalidState();
                domHelper.setCargoVanInvalidState();

                return false;
            }
            return true;
        }

        return false;
    }

    function isValidSportsCar() {
        return validateEntry(domHelper.getSportsCarUnformatted(), validateIntEntry, domHelper.setSportsCarInitState,
            domHelper.setSportsCarValidState, domHelper.setSportsCarInvalidState);
    }

    function isValidFamilyCar() {
        return validateEntry(domHelper.getFamilyCarUnformatted(), validateIntEntry, domHelper.setFamilyCarInitState,
            domHelper.setFamilyCarValidState, domHelper.setFamilyCarInvalidState);
    }

    function isValidTruck() {
        return validateEntry(domHelper.getTruckUnformatted(), validateIntEntry, domHelper.setTruckInitState,
            domHelper.setTruckValidState, domHelper.setTruckInvalidState);
    }

    function isValidMiniVan() {
        return validateEntry(domHelper.getMiniVanUnformatted(), validateIntEntry, domHelper.setMiniVanInitState,
            domHelper.setMiniVanValidState, domHelper.setMiniVanInvalidState);
    }

    function isValidCargoVan() {
        return validateEntry(domHelper.getCargoVanUnformatted(), validateIntEntry, domHelper.setCargoVanInitState,
            domHelper.setCargoVanValidState, domHelper.setCargoVanInvalidState);
    }

    function isValidCargo() {
        return validateEntry(domHelper.getCargoUnformatted(), validateIntEntry, domHelper.setCargoInitState,
            domHelper.setCargoValidState, domHelper.setCargoInvalidState);
    }

    function isValidPrime(){
        return validateEntry(domHelper.getPrimeUnformatted(), validateIntEntry, domHelper.setPrimeInitState,
            domHelper.setPrimeValidState, domHelper.setPrimeInvalidState);
    }

    function isValidSumPairsList(){
        return validateEntry(domHelper.getSumPairsUnformatted(), validateListEntry, domHelper.setSumPairsInitState,
            domHelper.setSumPairsValidState, domHelper.setSumPairsInvalidState);
    }

    function isValidSumPairSum(){
        return validateEntry(domHelper.getSumPairsSumUnformatted(), validateIntEntry, domHelper.setSumPairsSumInitState,
            domHelper.setSumPairsSumValidState, domHelper.setSumPairsSumInvalidState);
    }

    function validateEntry(entry, isValid, setInitState, setValidState, setInvalidState) {
        if(entry) {
            entry = entry.trim()
        }

        var result = isValid(entry);

        if( result === undefined) {
            setInitState();
            return undefined;
        }

        if (!result) {
            setInvalidState();
            return false;
        }

        setValidState();
        return true;
    }


    function validateListEntry(list) {
        if(list === "" || list === undefined) {
            return undefined;
        }

        var regEx = /^(([0-9]+)(,(?=[0-9]))?)+$/;

        return regEx.test(domHelper.getSumPairsUnformatted().replace(/\s/g,''));
    }

    function validateIntEntry(term) {
        if(term === "") {
            return undefined;
        }

        if(isInteger(term)) {
            return (parseInt(term) >= 0);
        }

        return false;
    }

    function isInteger(value) {
        var regEx = /^[0-9]+$/;

        return regEx.test(value);
    }

    function check(isValid, setInvalidState){
        if(!isValid()){
            setInvalidState();
        }
    }

    function isPrimeValidEntry(){
        check(domHelper.isPrimeValid, domHelper.setPrimeInvalidState);

        if(domHelper.getPrimeUnformatted() == 0){
            domHelper.setPrimeInvalidState();
            return false;
        }

        return domHelper.isPrimeValid();
    }

    function isSumPairSumValidEntry(){
        check(domHelper.isSumPairsSumValid, domHelper.setSumPairsSumInvalidState);

        if(domHelper.getSumPairsSumUnformatted() == 0){
            domHelper.setSumPairsSumInvalidState();
            return false;
        }

        return domHelper.isSumPairsSumValid();
    }

    function isSumPairListValid(){
        check(domHelper.isSumPairsValid, domHelper.setSumPairsInvalidState);

        var regEx = /^(([0-9]+)(,(?=[0-9]))?)+$/;
        var x = domHelper.getSumPairsUnformatted();
        if (domHelper.getSumPairsUnformatted() === undefined){
            return false;
        }
        return regEx.test(domHelper.getSumPairsUnformatted().replace(/\s/g,''));
    }

    function initialize() {}
    return {
        initialize: initialize,
        isValidSportsCar: isValidSportsCar,
        isValidFamilyCar: isValidFamilyCar,
        isValidTruck: isValidTruck,
        isValidMiniVan: isValidMiniVan,
        isValidCargoVan: isValidCargoVan,
        isValidCargo: isValidCargo,
        isValidEntry: isValidEntry,
        isSumPairListValid: isSumPairListValid,
        isValidSumPairsList: isValidSumPairsList,
        isPrimeValidEntry: isPrimeValidEntry,
        isValidPrime: isValidPrime,
        isValidSumPairSum: isValidSumPairSum,
        isSumPairSumValidEntry: isSumPairSumValidEntry

    };
});
