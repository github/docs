Configura el balanceador de carga para verificar una de estas URL:
 - `https://HOSTNAME/status` si HTTPS está habilitado (por defecto)
 - `http://HOSTNAME/status` si HTTPS está inhabilitado

La verificación arrojará el código de estado `200` (OK) si el nodo es correcto y está disponible para responder a las solicitudes del usuario final.
