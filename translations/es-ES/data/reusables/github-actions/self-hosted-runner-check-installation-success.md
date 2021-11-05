
### Revisar que tu ejecutor auto-hospedado se haya agregado exitosamente

Después de completar estos pasos para agregar un ejecutor auto-hospedado, dicho ejecutor y su estado ahora se listan bajo {% ifversion fpt or ghec %}"Ejecutores"{% elsif ghae or ghes %}"Ejecutores auto-hospedados"{% endif %}.

La aplicación del ejecutor autoalojado debe estar activa para que el ejecutor acepte trabajos. Cuando la aplicación del ejecutor está conectada a {% data variables.product.product_name %} y lista para recibir trabajos, verás el siguiente mensaje en la terminal de la máquina.

{% data reusables.github-actions.self-hosted-runner-connected-output %}

Para obtener más información, consulta la sección "[Monitorear y solucionar problemas de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".
