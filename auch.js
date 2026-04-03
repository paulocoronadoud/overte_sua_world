(function () {
    var _entityID = null;

    function onCollision(entityA, entityB, collision) {
        print("[AUCH] El cubo detectó una colisión");
        print("[AUCH] entityA = " + entityA);
        print("[AUCH] entityB = " + entityB);
    }

    return {
        preload: function (entityID) {
            _entityID = entityID;
            print("[AUCH] Script cargado en cubo: " + entityID);

            Script.addEventHandler(entityID, "collisionWithEntity", onCollision);
        },

        unload: function () {
            if (_entityID) {
                Script.removeEventHandler(_entityID, "collisionWithEntity", onCollision);
            }
            print("[AUCH] Script descargado");
        }
    };
});
