(function () {
    return {
        preload: function (entityID) {
            this.entityID = entityID;
            print("[AUCH] Script cargado para entidad: " + entityID);
            Messages.sendMessage("Chat", "auch");
        },

        unload: function () {
            print("[AUCH] Script descargado");
        },

        collisionWithEntity: function (thisEntityID, otherEntityID, collision) {
            print("[AUCH] Colisión detectada con: " + otherEntityID);

            if (otherEntityID === MyAvatar.sessionUUID) {
                print("[AUCH] El avatar local colisionó");
                Messages.sendMessage("Chat", "auch");
            }
        }
    };
});
