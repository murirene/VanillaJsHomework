requirejs.config({
    "paths": {
        ajaxHelper: "helpers/ajax-helper",
        validationHelper: "helpers/validation-helper",
        appController: "controllers/cargo-app-controller",
        domHelper: "helpers/dom-helper",
        eventsHelper: "helpers/events-helper",
        primeHelper: "helpers/prime-helper",
        sumPairsHelper: "helpers/sum-pair-helper",
        primeAppController: "controllers/prime-app-controller",
        domApiAppController: "controllers/dom-api-app-controller",
        sumPairsAppController: "controllers/sum-pair-app-controller"
    },
    shim: {
        'eventsHelper': {
            deps: ['validationHelper', 'domHelper', 'appController']
        },
        'appController': {
            deps: ['validationHelper', 'ajaxHelper', 'domHelper']
        }
    }
});
