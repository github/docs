{% tip %}

**Tip:** Si recibes notificaciones tanto por web como por correo electrónico, puedes sincronizar automáticamente el estado de leído o no leído de las mismas para que las notificaciones web se marquen automaticamente como leídas una vez que las leas en tu correo electrónico correspondiente. Para habilitar esta sincronización, tu cliente de correo electrónico debe ser capaz de ver imágenes de {% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %}la dirección de correo electrónico de `no-reply` {% if currentVersion == "github-ae@latest" %}para tu nombre de host de {% data variables.product.product_name %}{% elsif enterpriseServerVersions contains currentVersion %}para {% data variables.product.product_location %}, el cual configura tu administrador de sitio{% endif %}{% endif %}.

{% endtip %}
