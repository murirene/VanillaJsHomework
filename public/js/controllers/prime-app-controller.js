define(["validationHelper", "domHelper", "primeHelper"], function (validationHelper, domHelper, primeHelper) {
    "use strict";
    function initialize() {}

    function getNumberOfPrimes() {
        if(validationHelper.isPrimeValidEntry()) {
            domHelper.updatePrimeResults(domHelper.getPrimeUnformatted(),
                primeHelper.getPrimes(domHelper.getPrimeUnformatted()));
        }
    }

    function showAssignment1(){
        domHelper.showAssignment1();
    }

    return {
        initialize: initialize,
        getNumberOfPrimes: getNumberOfPrimes,
        showAssignment1: showAssignment1
    };
});
