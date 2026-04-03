(function() {
    // Esta función se ejecuta automáticamente cuando un avatar toca la entidad
    this.collisionWithAvatar = function(entityID, avatarID, collision) {
        
        // 'collision' contiene datos del impacto (fuerza, punto de contacto, etc.)
        // Pero para tu requerimiento, solo imprimiremos el mensaje:
        print("me empujaron");
        
        // Opcional: Si quieres saber quién fue:
        // print("Me empujó el avatar con ID: " + avatarID);
    };
});
