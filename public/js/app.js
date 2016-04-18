(function () {
    'use strict';
    require(["config"], function (config) {
        require(["eventsHelper", "domApiAppController"], function (eventsHelper, domApiAppController) {
            $(document).ready(function () {
                $('select').material_select();
            });

            var app = {
                initialize: function () {
                    eventsHelper.initialize();
                    domApiAppController.initialize();
                }
            };

            app.initialize();

        });
    });
})();
