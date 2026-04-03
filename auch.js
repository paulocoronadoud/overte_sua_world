(function () {
    return {
        preload: function (entityID) {
            this.entityID = entityID;
            print("[AUCH] Script cargado en cubo: " + entityID);
        },

        enterEntity: function (entityID) {
            print("[AUCH] El avatar tocó el cubo");
        },

        leaveEntity: function (entityID) {
            print("[AUCH] El avatar salió del cubo");
        }
    };
});
