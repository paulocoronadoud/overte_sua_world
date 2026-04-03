(function () {
    var inside = false;

    return {
        preload: function (entityID) {
            this.entityID = entityID;
            print("[AUCH] Script cargado");
        },

        enterEntity: function (entityID) {
            if (inside) {
                return;
            }
            inside = true;
            print("[AUCH] El avatar tocó/empujó la caja");
        },

        leaveEntity: function (entityID) {
            inside = false;
            print("[AUCH] El avatar salió de la caja");
        }
    };
});
