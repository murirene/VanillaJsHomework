define(["validationHelper", "domHelper", "sumPairsHelper"], function (validationHelper, domHelper, sumPairsHelper) {
    "use strict";
    function initialize() {}

    function getSumPairs() {
        if (validationHelper.isSumPairListValid() && validationHelper.isSumPairSumValidEntry()) {
            domHelper.updateSumPairsResults(domHelper.getSumPairsUnformatted(),
                sumPairsHelper.getSumPairs(domHelper.getSumPairsUnformatted(), domHelper.getSumPairsSumUnformatted()));
        }
    }

    function showAssignment3(){
        domHelper.showAssignment3();
    }

    return {
        initialize: initialize,
        getSumPairs: getSumPairs,
        showAssignment3: showAssignment3
    };
});
