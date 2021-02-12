{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. De manera opcional, para obtener un enlace a una línea específica de los registros, haz clic en el número de línea del paso. Ahora podrás copiar el enlace de la barra de direcciones de tu buscador web.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Botón para copiar enlace](/assets/images/help/repository/copy-link-button-updated-2.png)
  {% else %}
  ![Botón para copiar enlace](/assets/images/help/repository/copy-link-button-updated.png)
  {% endif %}
{% else %}
1. De manera opcional, para obtener un enlace a una línea específica de los registros, haz clic en el número de línea del paso. Ahora podrás copiar el enlace de la barra de direcciones de tu buscador web. ![Botón para copiar enlace](/assets/images/help/repository/copy-link-button.png)
{% endif %}