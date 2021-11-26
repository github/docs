Cuando habilitas una o más características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos:

- Todos los repositorios existentes tendrán la configuración seleccionada.
- Los repositorios nuevos seguirán la configuración seleccionada si habilitaste la casilla de verificación para estos.{% ifversion fpt or ghec %}
- Utilizamos los permisos para escanear en busca de archivos de manifiesto para aplicar los servicios relevantes.
- Si se habilita, verás la información de dependencias en la gráfica de dependencias.
- If enabled, {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies.{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- If enabled, {% data variables.product.prodname_dependabot %} security updates will create pull requests to upgrade vulnerable dependencies when {% data variables.product.prodname_dependabot_alerts %} are triggered.{% endif %}
