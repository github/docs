Cuando habilitas una o más características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos:

- Todos los repositorios existentes tendrán la configuración seleccionada.
- Los repositorios nuevos seguirán la configuración seleccionada si habilitaste la casilla de verificación para estos.{% ifversion fpt or ghec %}
- Utilizamos los permisos para escanear en busca de archivos de manifiesto para aplicar los servicios relevantes.
- Si se habilita, verás la información de dependencias en la gráfica de dependencias.
- De habilitarse, {% data variables.product.prodname_dotcom %} generará {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables o el malware.{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- Si se habilita, las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %} crearán solicitudes de cambios para actualizar las dependencias vulnerables cuando se activen las {% data variables.product.prodname_dependabot_alerts %}.{% endif %}
