---
title: Administrar las alertas del escaneo de secretos
intro: Puedes ver y cerrar las alertas para los secretos que se hayan revisado en tu repositorio.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Administrar las alertas de los secretos
---

{% data reusables.secret-scanning.beta %}

## Administrar las alertas del {% data variables.product.prodname_secret_scanning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. En la barra lateral izquierda, haz clic en **Alertas del escaneo de secretos**.
   {% ifversion fpt or ghes > 2.22 %}
   ![Pestaña de "Alertas del escaneo de secretos"](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   ![Pestaña de "Alertas del escaneo de secretos"](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
4. Debajo de "Escaneo de secretos" da clic en la alerta que quieras ver.
   {% ifversion fpt %}
   ![Lista de alertas del escaneo de secretos](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% ifversion ghes > 2.22 %}
   ![Lista de alertas del escaneo de secretos](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![Lista de alertas del escaneo de secretos](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
5. Opcionalmente, utiliza el menú desplegable de "Marcar como" y da clic en la razón para resolver una alerta.
   {% ifversion fpt %}
   ![Menú desplegable para resolver una alerta del escaneo de secretos](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% ifversion ghes > 2.22 or ghae %}
   ![Menú desplegable para resolver una alerta del escaneo de secretos](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

## Asegurar los secretos en riesgo

Cuando un secreto se haya confirmado en un repositorio, deberás considerarlo en riesgo. {% data variables.product.prodname_dotcom %} recomienda tomar las siguientes acciones para los secretos puestos en riesgo:

- Para un token de acceso personal de {% data variables.product.prodname_dotcom %} comprometido, elimina el token comprometido, crea un nuevo token y actualiza todo servicio que use el token antiguo. Para obtener más información, consulta la sección "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
- Para todos los demás secretos, verifica primero que aquellos que se hayan confirmado en {% data variables.product.product_name %} sean válidos. De ser así, crea un secreto nuevo, actualiza cualquier servicio que utilice el secreto anterior, y luego bórralo.

{% ifversion fpt or ghes > 3.1 or ghae-issue-4910 %}
## Configurar las notificaciones para las alertas del {% data variables.product.prodname_secret_scanning %}

Cuando se detecta un secreto nuevo, {% data variables.product.product_name %} notifica a todos los usuarios con acceso a las alertas de seguridad del repositorio de acuerdo con sus preferencias de notificación. You will receive alerts if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, are the author of the commit that contains the secret and are not ignoring the repository.

Para obtener más información, consulta las secciones "[Administrar la seguridad y configuración de análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" y "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}
