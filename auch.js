(function () {
    return {
        preload: function (entityID) {
            print("[AUCH] Script cargado");
        },

        collisionWithEntity: function (thisEntityID, otherEntityID, collision) {
            print("[AUCH] collisionWithEntity disparado con: " + otherEntityID);
            Messages.sendMessage("Chat", "auch");
        }
    };
});
