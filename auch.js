(function () {
    return {
        preload: function (entityID) {
            this.entityID = entityID;
            print("[AUCH] Script cargado: " + entityID);
        },

        collisionWithEntity: function (thisEntityID, otherEntityID, collision) {
            print("[AUCH] collisionWithEntity disparado");
            print("[AUCH] thisEntityID: " + thisEntityID);
            print("[AUCH] otherEntityID: " + otherEntityID);
            print("[AUCH] MyAvatar.sessionUUID: " + MyAvatar.sessionUUID);

            if (otherEntityID === MyAvatar.sessionUUID) {
                print("[AUCH] Colisión con mi avatar");
                Messages.sendMessage("Chat", "auch");
            }
        }
    };
});
