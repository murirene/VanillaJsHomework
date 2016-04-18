define([], function () {
    "use strict";
    var sportsCarSelector = "#sportsCar";
    var familyCarSelector = "#familyCar";
    var truckSelector = "#truck";
    var miniVanSelector = "#miniVan";
    var cargoVanSelector = "#cargoVan";
    var cargoSelector = "#cargo";

    var cargoBtnSelector = "#cargo-button";
    var returnBtnSelector = "#new-cargo-button";
    var entrySelector = ".entryForm";
    var resultSelector = ".resultsPanel";
    var cargoContainerSelector = "#cargoContainer";

    var assignment1Selector = "#assignment1";
    var assignment2Selector = "#assignment2";
    var assignment3Selector = "#assignment3";
    var assignment4Selector = "#assignment4";
    var assignment1ViewSelector = "#assignment1View";
    var assignment2ViewSelector = "#assignment2View";
    var assignment3ViewSelector = "#assignment3View";
    var assignment4ViewSelector = "#assignment4View";

    var views = ".view";

    var primeSetSelector ="#numberSet";
    var primeBtnSelector = "#prime-button";
    var primeResultSelector = "#prime-result";

    var domApiBtnSelector = "#dom-api-button";

    var sumPairsSetSelector="#findPairs";
    var sumPairsSumSelector="#sum";
    var sumPairsBtnSelector="#sum-pairs-button";
    var sumPairsResultSelector="#sum-pairs-result";

    function getPrimeSet() {
        return $(primeSetSelector).val();
    }

    function getPrimeUnformatted() {
        return $(primeSetSelector).attr("unformattedValue");
    }

    function setPrimeEntryEvent(event, handler) {
        setEvent(primeSetSelector, event, handler);
    }

    function setPrimeValidState() {
        setValidState(primeSetSelector);
        setUnformattedValueAttribute(primeSetSelector);
        updateValue(primeSetSelector, $(primeSetSelector).attr("unformattedValue"));
    }

    function setUnformattedPrimeValue(){
        $(primeResultSelector).addClass("hide");
        updateValue(primeSetSelector, $(primeSetSelector).attr("unformattedValue"));
    }

    function updateUnformattedPrimeValue() {
        $(primeSetSelector).attr("unformattedValue", $(primeSetSelector).val());
    }

    function setPrimeInitState() {
        setInitState(primeSetSelector);
    }

    function setPrimeInvalidState() {
        setInvalidState(primeSetSelector);
    }

    function isPrimeValid(){
        return isValidState(primeSetSelector);
    }

    function setPrimeButtonEvent(event, handler) {
        setEvent(primeBtnSelector, event, handler);
    }

    function updatePrimeResults(prime, result){
        if($(primeResultSelector).attr("set") !== prime){
            $(primeResultSelector).attr("set", prime);
            $(primeResultSelector).text(result);
        }

        $(primeResultSelector).removeClass("hide");
    }

    function setDomApiButtonEvent(event, handler) {
        setEvent(domApiBtnSelector, event, handler);
    }

    function updateDomApiBtnAttrib(attribute, value){
        $(domApiBtnSelector).attr(attribute, value);
    }

    function setDomApiBtnText(value){
        $(domApiBtnSelector).text(value);
    }

    function getDomApiBtnAttribValue(attribute) {
        return $(domApiBtnSelector).attr(attribute);
    }

    function getSumPairsSum() {
        return $(sumPairsSumSelector).val();
    }

    function getSumPairsSumUnformatted() {
        return $(sumPairsSumSelector).attr("unformattedValue");
    }

    function setSumPairsSumEntryEvent(event, handler) {
        setEvent(sumPairsSumSelector, event, handler);
    }

    function setSumPairsSumValidState() {
        setValidState(sumPairsSumSelector);
        setUnformattedValueAttribute(sumPairsSumSelector);
        updateValue(sumPairsSumSelector, $(sumPairsSumSelector).attr("unformattedValue"));
    }

    function setUnformattedSumPairsSumValue(){
        $(sumPairsResultSelector).addClass("hide");
        updateValue(sumPairsSumSelector, $(sumPairsSumSelector).attr("unformattedValue"));
    }

    function updateUnformattedSumPairsSumValue() {
        $(sumPairsSumSelector).attr("unformattedValue", $(sumPairsSumSelector).val());
    }

    function setSumPairsSumInitState() {
        setInitState(sumPairsSumSelector);
    }

    function setSumPairsSumInvalidState() {
        setInvalidState(sumPairsSumSelector);
    }

    function isSumPairsSumValid(){
        return isValidState(sumPairsSumSelector);
    }

    function getSumPairsSet() {
        return $(sumPairsSetSelector).val();
    }

    function getSumPairsUnformatted() {
        return $(sumPairsSetSelector).attr("unformattedValue");
    }

    function setSumPairsEntryEvent(event, handler) {
        setEvent(sumPairsSetSelector, event, handler);
    }

    function setSumPairsValidState() {
        setValidState(sumPairsSetSelector);
        setUnformattedValueAttribute(sumPairsSetSelector);
        updateValue(sumPairsSetSelector,
            $(sumPairsSetSelector).attr("unformattedValue"));
    }

    function setUnformattedSumPairsValue(){
        $(sumPairsResultSelector).addClass("hide");
        updateValue(sumPairsSetSelector, $(sumPairsSetSelector).attr("unformattedValue"));
    }

    function updateUnformattedSumPairsValue() {
        $(sumPairsSetSelector).attr("unformattedValue", $(sumPairsSetSelector).val());
    }

    function setSumPairsInitState() {
        setInitState(sumPairsSetSelector);
    }

    function setSumPairsInvalidState() {
        setInvalidState(sumPairsSetSelector);
    }

    function isSumPairsValid(){
        return isValidState(sumPairsSetSelector);
    }

    function setSumPairsButtonEvent(event, handler) {
        setEvent(sumPairsBtnSelector, event, handler);
    }

    function updateSumPairsResults(prime, result){
        $(sumPairsResultSelector).attr("set", prime);
        $(sumPairsResultSelector).text(result);
        $(sumPairsResultSelector).removeClass("hide");
    }

    function setEvent(element, event, handler) {
        $(element).on(event, handler);
    }

    function isValidState(selector){
        return $(selector).hasClass('valid');
    }

    function hideElement(selector){
        $(selector).addClass("hide");
    }

    function showElement(selector){
        $(selector).removeClass("hide");
    }

    function getSportsCar() {
        return $(sportsCarSelector).val();
    }

    function getFamilyCar() {
        return $(familyCarSelector).val();
    }

    function getTruck() {
        return $(truckSelector).val();
    }

    function getMiniVan() {
        return $(miniVanSelector).val();
    }

    function getCargoVan() {
        return $(cargoVanSelector).val();
    }

    function getCargo() {
        return $(cargoSelector).val();
    }

    function getSportsCarUnformatted() {
        return $(sportsCarSelector).attr("unformattedValue");
    }

    function getFamilyCarUnformatted() {
        return $(familyCarSelector).attr("unformattedValue");
    }

    function getTruckUnformatted() {
        return $(truckSelector).attr("unformattedValue");
    }

    function getMiniVanUnformatted() {
        return $(miniVanSelector).attr("unformattedValue");
    }

    function getCargoVanUnformatted() {
        return $(cargoVanSelector).attr("unformattedValue");
    }

    function getCargoUnformatted() {
        return $(cargoSelector).attr("unformattedValue");
    }

    function setSportsCarEntryEvent(event, handler) {
        setEvent(sportsCarSelector, event, handler);
    }

    function setFamilyCarEntryEvent(event, handler) {
        setEvent(familyCarSelector, event, handler);
    }

    function setTruckEntryEvent(event, handler) {
        setEvent(truckSelector, event, handler);
    }

    function setMiniVanEntryEvent(event, handler) {
        setEvent(miniVanSelector, event, handler);
    }

    function setCargoVanEntryEvent(event, handler) {
        setEvent(cargoVanSelector, event, handler);
    }

    function setCargoEntryEvent(event, handler) {
        setEvent(cargoSelector, event, handler);
    }

    function setSportsCarValidState() {
        setValidState(sportsCarSelector);
        setUnformattedValueAttribute(sportsCarSelector);
        updateValue(sportsCarSelector,
            $(sportsCarSelector).attr("unformattedValue") > 1? $(sportsCarSelector).attr("unformattedValue") + " " + $(sportsCarSelector).attr("suffix").split("|")[1]:
            $(sportsCarSelector).attr("unformattedValue") + " " + $(sportsCarSelector).attr("suffix").split("|")[0]);
    }

    function setFamilyCarValidState() {
        setValidState(familyCarSelector);
        setUnformattedValueAttribute(familyCarSelector);
        updateValue(familyCarSelector,
            $(familyCarSelector).attr("unformattedValue") > 1? $(familyCarSelector).attr("unformattedValue") + " " + $(familyCarSelector).attr("suffix").split("|")[1]:
            $(familyCarSelector).attr("unformattedValue") + " " + $(familyCarSelector).attr("suffix").split("|")[0]);
    }

    function setTruckValidState() {
        setValidState(truckSelector);
        setUnformattedValueAttribute(truckSelector);
        updateValue(truckSelector,
            $(truckSelector).attr("unformattedValue") > 1? $(truckSelector).attr("unformattedValue") + " " + $(truckSelector).attr("suffix").split("|")[1]:
            $(truckSelector).attr("unformattedValue") + " " + $(truckSelector).attr("suffix").split("|")[0]);
    }

    function setMiniVanValidState() {
        setValidState(miniVanSelector);
        setUnformattedValueAttribute(miniVanSelector);
        updateValue(miniVanSelector,
            $(miniVanSelector).attr("unformattedValue") > 1? $(miniVanSelector).attr("unformattedValue") + " " + $(miniVanSelector).attr("suffix").split("|")[0]:
            $(miniVanSelector).attr("unformattedValue") + " " + $(miniVanSelector).attr("suffix").split("|")[1]);
    }

    function setCargoVanValidState() {
        setValidState(cargoVanSelector);
        setUnformattedValueAttribute(cargoVanSelector);
        updateValue(cargoVanSelector,
            $(cargoVanSelector).attr("unformattedValue") > 1? $(cargoVanSelector).attr("unformattedValue") + " " + $(cargoVanSelector).attr("suffix").split("|")[1]:
            $(cargoVanSelector).attr("unformattedValue") + " " + $(cargoVanSelector).attr("suffix").split("|")[0]);
    }

    function setCargoValidState() {
        setValidState(cargoSelector);
        setUnformattedValueAttribute(cargoSelector);
        updateValue(cargoSelector,
            $(cargoSelector).attr("unformattedValue") > 1? $(cargoSelector).attr("unformattedValue") + " " + $(cargoSelector).attr("suffix").split("|")[1]:
            $(cargoSelector).attr("unformattedValue") + " " + $(cargoSelector).attr("suffix").split("|")[0]);
    }

    function setUnformattedSportsCarValue(){
        updateValue(sportsCarSelector, $(sportsCarSelector).attr("unformattedValue"));
    }

    function setUnformattedFamilyCarValue(){
        updateValue(familyCarSelector, $(familyCarSelector).attr("unformattedValue"));
    }

    function setUnformattedTruckValue(){
        updateValue(truckSelector, $(truckSelector).attr("unformattedValue"));
    }

    function setUnformattedMiniVanValue(){
        updateValue(miniVanSelector, $(miniVanSelector).attr("unformattedValue"));
    }

    function setUnformattedCargoVanValue(){
        updateValue(cargoVanSelector, $(cargoVanSelector).attr("unformattedValue"));
    }

    function setUnformattedCargoValue(){
        updateValue(cargoSelector, $(cargoSelector).attr("unformattedValue"));
    }

    function updateUnformattedSportsCarValue() {
        $(sportsCarSelector).attr("unformattedValue", $(sportsCarSelector).val());
    }

    function updateUnformattedFamilyCarValue() {
        $(familyCarSelector).attr("unformattedValue", $(familyCarSelector).val());
    }

    function updateUnformattedTruckValue() {
        $(truckSelector).attr("unformattedValue", $(truckSelector).val());
    }

    function updateUnformattedMiniVanValue() {
        $(miniVanSelector).attr("unformattedValue", $(miniVanSelector).val());
    }

    function updateUnformattedCargoVanValue() {
        $(cargoVanSelector).attr("unformattedValue", $(cargoVanSelector).val());
    }

    function updateUnformattedCargoValue() {
        $(cargoSelector).attr("unformattedValue", $(cargoSelector).val());
    }

    function setSportsCarInitState() {
        setInitState(sportsCarSelector);
    }

    function setFamilyCarInitState() {
        setInitState(familyCarSelector);
    }

    function setTruckInitState() {
        setInitState(truckSelector);
    }

    function setMiniVanInitState() {
        setInitState(miniVanSelector);
    }

    function setCargoVanInitState() {
        setInitState(cargoVanSelector);
    }

    function setCargoInitState() {
        setInitState(cargoSelector);
    }

    function setSportsCarInvalidState() {
        setInvalidState(sportsCarSelector);
    }

    function setFamilyCarInvalidState() {
        setInvalidState(familyCarSelector);
    }

    function setTruckInvalidState() {
        setInvalidState(truckSelector);
    }

    function setMiniVanInvalidState() {
        setInvalidState(miniVanSelector);
    }

    function setCargoVanInvalidState() {
        setInvalidState(cargoVanSelector);
    }

    function isSportsCarValid(){
        return isValidState(sportsCarSelector);
    }

    function isFamilyCarValid(){
        return isValidState(familyCarSelector);
    }

    function isTruckValid(){
        return isValidState(truckSelector);
    }

    function isMiniVanValid(){
        return isValidState(miniVanSelector);
    }

    function isCargoVanValid(){
        return isValidState(cargoVanSelector);
    }

    function setCargoInvalidState() {
        setInvalidState(cargoSelector);
    }

    function isCargoValid(){
        return isValidState(cargoSelector);
    }

    function setCargoButtonEvent(event, handler) {
        setEvent(cargoBtnSelector, event, handler);
    }

    function setReturnButtonEvent(event, handler) {
        setEvent(returnBtnSelector, event, handler);
    }

    function setInvalidState(selector) {
        $(selector).removeClass("valid");
        $(selector).addClass("invalid");
    }

    function setValidState(selector) {
        $(selector).removeClass("invalid");
        $(selector).addClass("valid");
    }

    function setInitState(selector) {
        $(selector).removeClass("invalid");
        $(selector).removeClass("valid");
    }

    function setUnformattedValueAttribute(selector) {
        $(selector).attr("unformattedValue", $(selector).val());
    }

    function updateValue(selector, value) {
        $(selector).val(value);
    }

    function hideEntry(){
        hideElement(entrySelector);
    }

    function showEntry(){
        showElement(entrySelector);
    }

    function hideResult(){
        hideElement(resultSelector);
    }

    function showResult(){
        showElement(resultSelector);
    }

    function setResults(payload){
        $(cargoContainerSelector).html(payload);
    }

    function setShowAssignment1Event(event, handler){
        setEvent(assignment1Selector, event, handler);
    }

    function setShowAssignment2Event(event, handler){
        setEvent(assignment2Selector, event, handler);
    }

    function setShowAssignment3Event(event, handler){
        setEvent(assignment3Selector, event, handler);
    }

    function setShowAssignment4Event(event, handler){
        setEvent(assignment4Selector, event, handler);
    }

    function showAssignment1() {
        hideElement(views);
        showElement(assignment1ViewSelector);
        updateLogo("Prime Numbers");
    }

    function showAssignment2() {
        hideElement(views);
        showElement(assignment2ViewSelector);
        updateLogo("DOM API");
    }

    function showAssignment3() {
        hideElement(views);
        showElement(assignment3ViewSelector);
        updateLogo("Finding Pairs");
    }

    function showAssignment4() {
        hideElement(views);
        showElement(assignment4ViewSelector);
        updateLogo("Cargo Allocation");
    }

    function updateLogo(logo){
        $(".brand-logo").text(logo);
    }

    function initialize() {}

    return {
        initialize: initialize,
        showEntry: showEntry,
        showResult: showResult,
        hideEntry: hideEntry,
        hideResult: hideResult,
        setResults: setResults,

        setShowAssignment1Event: setShowAssignment1Event,
        setShowAssignment2Event: setShowAssignment2Event,
        setShowAssignment3Event: setShowAssignment3Event,
        setShowAssignment4Event: setShowAssignment4Event,
        showAssignment1: showAssignment1,
        showAssignment2: showAssignment2,
        showAssignment3: showAssignment3,
        showAssignment4: showAssignment4,

        /* Assignment 1 - Primes */
        getPrimeUnformatted: getPrimeUnformatted,
        setPrimeEntryEvent: setPrimeEntryEvent,
        setPrimeValidState: setPrimeValidState,
        setUnformattedPrimeValue: setUnformattedPrimeValue,
        updateUnformattedPrimeValue: updateUnformattedPrimeValue,
        setPrimeInitState: setPrimeInitState,
        setPrimeInvalidState: setPrimeInvalidState,
        isPrimeValid: isPrimeValid,
        getPrimeSet: getPrimeSet,
        setPrimeButtonEvent: setPrimeButtonEvent,
        updatePrimeResults: updatePrimeResults,

        /* Assignment 2 - DOM API  */
        setDomApiButtonEvent: setDomApiButtonEvent,
        getDomApiBtnAttribValue: getDomApiBtnAttribValue,
        updateDomApiBtnAttrib: updateDomApiBtnAttrib,
        setDomApiBtnText: setDomApiBtnText,

        /* Assignment 3 - Sum Pairs */
        getSumPairsSet: getSumPairsSet,
        getSumPairsUnformatted: getSumPairsUnformatted,
        setSumPairsEntryEvent: setSumPairsEntryEvent,
        setSumPairsValidState: setSumPairsValidState,
        setUnformattedSumPairsValue: setUnformattedSumPairsValue,
        updateUnformattedSumPairsValue: updateUnformattedSumPairsValue,
        setSumPairsInitState: setSumPairsInitState,
        setSumPairsInvalidState: setSumPairsInvalidState,
        isSumPairsValid: isSumPairsValid,
        setSumPairsButtonEvent: setSumPairsButtonEvent,
        updateSumPairsResults: updateSumPairsResults,
        getSumPairsSum: getSumPairsSum,
        getSumPairsSumUnformatted: getSumPairsSumUnformatted,
        setSumPairsSumEntryEvent: setSumPairsSumEntryEvent,
        setSumPairsSumValidState: setSumPairsSumValidState,
        setUnformattedSumPairsSumValue: setUnformattedSumPairsSumValue,
        updateUnformattedSumPairsSumValue: updateUnformattedSumPairsSumValue,
        setSumPairsSumInitState: setSumPairsSumInitState,
        setSumPairsSumInvalidState: setSumPairsSumInvalidState,
        isSumPairsSumValid: isSumPairsSumValid,

        /* Assignment 4 - Cargo Allocation  */
        getSportsCar: getSportsCar,
        getSportsCarUnformatted: getSportsCarUnformatted,
        setSportsCarEntryEvent: setSportsCarEntryEvent,
        setSportsCarInvalidState: setSportsCarInvalidState,
        setSportsCarValidState: setSportsCarValidState,
        setUnformattedSportsCarValue: setUnformattedSportsCarValue,
        updateUnformattedSportsCarValue: updateUnformattedSportsCarValue,
        setSportsCarInitState: setSportsCarInitState,
        isSportsCarValid: isSportsCarValid,
        getFamilyCar: getFamilyCar,
        getFamilyCarUnformatted: getFamilyCarUnformatted,
        setFamilyCarEntryEvent: setFamilyCarEntryEvent,
        setFamilyCarInvalidState: setFamilyCarInvalidState,
        setFamilyCarValidState: setFamilyCarValidState,
        setUnformattedFamilyCarValue: setUnformattedFamilyCarValue,
        updateUnformattedFamilyCarValue: updateUnformattedFamilyCarValue,
        setFamilyCarInitState: setFamilyCarInitState,
        isFamilyCarValid: isFamilyCarValid,
        getTruck: getTruck,
        getTruckUnformatted: getTruckUnformatted,
        setTruckEntryEvent: setTruckEntryEvent,
        setTruckInvalidState: setTruckInvalidState,
        setTruckValidState: setTruckValidState,
        setUnformattedTruckValue: setUnformattedTruckValue,
        updateUnformattedTruckValue: updateUnformattedTruckValue,
        setTruckInitState: setTruckInitState,
        isTruckValid: isTruckValid,
        getMiniVan: getMiniVan,
        getMiniVanUnformatted: getMiniVanUnformatted,
        setMiniVanEntryEvent: setMiniVanEntryEvent,
        setMiniVanInvalidState: setMiniVanInvalidState,
        setMiniVanValidState: setMiniVanValidState,
        setUnformattedMiniVanValue: setUnformattedMiniVanValue,
        updateUnformattedMiniVanValue: updateUnformattedMiniVanValue,
        setMiniVanInitState: setMiniVanInitState,
        isMiniVanValid: isMiniVanValid,
        getCargoVan: getCargoVan,
        getCargoVanUnformatted: getCargoVanUnformatted,
        setCargoVanEntryEvent: setCargoVanEntryEvent,
        setCargoVanInvalidState: setCargoVanInvalidState,
        setCargoVanValidState: setCargoVanValidState,
        setUnformattedCargoVanValue: setUnformattedCargoVanValue,
        updateUnformattedCargoVanValue: updateUnformattedCargoVanValue,
        setCargoVanInitState: setCargoVanInitState,
        isCargoVanValid: isCargoVanValid,
        getCargo: getCargo,
        getCargoUnformatted: getCargoUnformatted,
        setCargoEntryEvent: setCargoEntryEvent,
        setCargoInvalidState: setCargoInvalidState,
        setCargoValidState: setCargoValidState,
        setUnformattedCargoValue: setUnformattedCargoValue,
        updateUnformattedCargoValue: updateUnformattedCargoValue,
        setCargoInitState: setCargoInitState,
        isCargoValid: isCargoValid,
        setCargoButtonEvent: setCargoButtonEvent,
        setReturnButtonEvent: setReturnButtonEvent
    };
});
