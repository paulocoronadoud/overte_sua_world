(function () {
    var lastTrigger = 0;
    var COOLDOWN_MS = 1000;

    return {
        preload: function (entityID) {
            this.entityID = entityID;
        },

        collisionWithEntity: function (thisEntityID, otherEntityID, collision) {
            var now = Date.now();
            if (now - lastTrigger < COOLDOWN_MS) {
                return;
            }

            // En Overte, si otherEntityID coincide con el sessionUUID del avatar local,
            // significa que el avatar local chocó con la entidad.
            if (otherEntityID === MyAvatar.sessionUUID) {
                Messages.sendMessage("Chat", "auch");
                lastTrigger = now;
            }
        }
    };
});
