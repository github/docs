
### Revisar que tu ejecutor auto-hospedado se haya agregado exitosamente

Después de completar estos pasos para agregar un ejecutor auto-hospedado, dicho ejecutor y su estado ahora se listan bajo {% ifversion fpt or ghec %}"Ejecutores"{% elsif ghae or ghes %}"Ejecutores auto-hospedados"{% endif %}.

La aplicación del ejecutor autoalojado debe estar activa para que el ejecutor acepte trabajos. Cuando se conecta la aplicación del ejecutor a {% data variables.product.product_name %} y está lista para recibir jobs, verás el siguiente mensaje en la terminal de la máquina.

{% data reusables.actions.self-hosted-runner-connected-output %}
