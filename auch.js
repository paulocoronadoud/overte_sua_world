(function () {
    return {
        preload: function (entityID) {
            print("[AUCH] Script cargado. entityID = " + entityID);
        },
        unload: function () {
            print("[AUCH] Script descargado.");
        }
    };
});
