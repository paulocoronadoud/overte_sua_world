(function() {
    this.preload = function(entityID) {
        print("DEBUG: Script cargado. Esperando colisiones en: " + entityID);
    };

    // Este es el nombre real del método en el API de Overte
    this.collisionWithEntity = function(myID, otherID, collision) {
        
        // El motor nos da el ID de lo que nos golpeó (otherID)
        // Podemos verificar si ese ID pertenece a un avatar
        var properties = Entities.getEntityProperties(otherID, ["type"]);
        
        // Si el 'otherID' no devuelve propiedades de entidad, 
        // es muy probable que sea un Avatar (o podemos usar AvatarList)
        print("¡MENSAJE: Me empujaron! ID del agresor: " + otherID);
    };
});
