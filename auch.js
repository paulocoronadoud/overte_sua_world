(function () {
    return {
        preload: function (entityID) {
            this.entityID = entityID;
            print("auchCollision.js cargado para entidad: " + entityID);
        },

        collisionWithEntity: function (thisEntityID, otherEntityID, collision) {
            print("Colisión detectada");
            if (otherEntityID === MyAvatar.sessionUUID) {
                Messages.sendMessage("Chat", "auch");
            }
        }
    };
});
