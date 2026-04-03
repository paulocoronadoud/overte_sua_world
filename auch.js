(function () {
    var lastTrigger = 0;
    var COOLDOWN_MS = 1000;

    return {
        preload: function (entityID) {
            print("[AUCH] Script cargado...");
        },

        enterEntity: function (entityID) {
            var now = Date.now();
            if (now - lastTrigger < COOLDOWN_MS) {
                return;
            }

            Window.displayAnnouncement("auch");
            print("[AUCH] auch mostrado");
            lastTrigger = now;
        }
    };
});
