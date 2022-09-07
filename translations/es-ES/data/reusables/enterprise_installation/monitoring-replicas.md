Puedes verificar la disponibilidad del {% data variables.product.prodname_ghe_server %} al controlar el código de estado que devuelve la URL `https://HOSTNAME/status`. Un aparato que puede servir el tráfico de usuario devolverá un código de estado de `200` (OK). Un aparato puede devolver un `503` (Servicio no disponible) por distintas razones:
 - El aparato es una réplica pasiva, como la réplica en una configuración de disponibilidad alta de dos nodos.
 - El aparato está en modo de mantenimiento.
 - El aparato es parte de una configuración de replicación geográfica, pero es una réplica inactiva.

También puedes utilizar el Tablero de resumen de replicación disponible en:

`https://HOSTNAME/setup/replication`
