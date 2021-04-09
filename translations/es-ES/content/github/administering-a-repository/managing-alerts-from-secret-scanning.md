---
title: Administrar las alertas del escaneo de secretos
intro: Puedes ver y cerrar las alertas para los secretos que se hayan revisado en tu repositorio.
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}

### Administrar alertas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. En la barra lateral izquierda, da clic en **Secretos detectados**. ![pestaña "Secretos detectados"](/assets/images/help/repository/sidebar-secrets.png)
4. Debajo de "Escaneo de secretos" da clic en la alerta que quieras ver.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Lista de alertas del escaneo de secretos](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Lista de alertas del escaneo de secretos](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
1. Opcionalmente, utiliza el menú desplegable de "Marcar como" y da clic en la razón para resolver una alerta.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Menú desplegable para resolver una alerta del escaneo de secretos](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Menú desplegable para resolver una alerta del escaneo de secretos](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

### Asegurar los secretos en riesgo

Cuando un secreto se haya confirmado en un repositorio, deberás considerarlo en riesgo. {% data variables.product.prodname_dotcom %} recomienda tomar las siguientes acciones para los secretos puestos en riesgo:

- Para un token de acceso personal de {% data variables.product.prodname_dotcom %} comprometido, elimina el token comprometido, crea un nuevo token y actualiza todo servicio que use el token antiguo. Para obtener más información, consulta la sección "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
- Para todos los demás secretos, verifica primero que aquellos que se hayan confirmado en {% data variables.product.product_name %} sean válidos. De ser así, crea un secreto nuevo, actualiza cualquier servicio que utilice el secreto anterior, y luego bórralo.
