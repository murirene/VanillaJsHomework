define([], function () {
    "use strict";

    function ajaxRequestHandler(response, textStatus, jqXHR, handler, error) {
        if(jqXHR.status === 200 && textStatus === "success") {
            return handler(response);
        }
        error();
    }

    function getCargoTable (cargoOrder, callback, error) {
        var url = "/cargo-table";

        $.ajax({
            type: "POST",
            url: url,
            data: cargoOrder,
            success: function (response, textStatus, jqXHR) {
                ajaxRequestHandler(response, textStatus, jqXHR, callback, error);
            },
            fail: function (response, textStatus, jqXHR) {
                ajaxRequestHandler(response, textStatus, jqXHR, callback, error);
            }
        });
    }
    function initialize() {}

    return {
        initialize: initialize,
        getCargoTable: getCargoTable
    };
});
