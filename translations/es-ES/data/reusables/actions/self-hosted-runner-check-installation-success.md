
### Revisar que tu ejecutor auto-hospedado se haya agregado exitosamente

Después de completar estos pasos para agregar un ejecutor auto-hospedado, dicho ejecutor y su estado ahora se listan bajo {% ifversion fpt or ghec %}"Ejecutores"{% elsif ghae or ghes %}"Ejecutores auto-hospedados"{% endif %}.

La aplicación del ejecutor autoalojado debe estar activa para que el ejecutor acepte trabajos. When the runner application is connected to {% data variables.product.product_name %} and ready to receive jobs, you will see the following message on the machine's terminal.

{% data reusables.actions.self-hosted-runner-connected-output %}
