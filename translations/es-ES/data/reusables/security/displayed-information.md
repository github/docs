Cuando habilitas una o más características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos:

- Todos los repositorios existentes tendrán la configuración seleccionada.
- Los repositorios nuevos seguirán la configuración seleccionada si habilitaste la casilla de verificación para los repositorios nuevos.{% if currentVersion == "free-pro-team@latest" %}
- Utilizamos los permisos para escanear en busca de archivos de manifiesto para aplicar los servicios relevantes.
- Verás información en tu gráfica de dependencias.
- {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} and create pull requests{% endif %}. 
