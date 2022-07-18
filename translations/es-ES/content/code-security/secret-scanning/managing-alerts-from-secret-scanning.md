---
title: Administrar las alertas del escaneo de secretos
intro: Puedes ver y cerrar las alertas para los secretos que se hayan revisado en tu repositorio.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
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

{% ifversion ghec %}
{% note %}

**Nota:** Las alertas se crean únicamente para los repositorios que tienen habilitada la {% data variables.product.prodname_secret_scanning_GHAS %}. Los secretos que se encuentran en los repositorios públicos utilizando el servicio gratuito de {% data variables.product.prodname_secret_scanning_partner%} se reportan directamente al socio, sin crear una alerta.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. En la barra lateral izquierda, haz clic en **Alertas del escaneo de secretos**.
   {% ifversion fpt or ghes or ghec %}
   ![Pestaña de "Alertas del escaneo de secretos"](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   ![Pestaña de "Alertas del escaneo de secretos"](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
1. Debajo de "Escaneo de secretos" da clic en la alerta que quieras ver.
   {% ifversion fpt or ghec %}
   ![Lista de alertas del escaneo de secretos](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% ifversion ghes %}
   ![Lista de alertas del escaneo de secretos](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![Lista de alertas del escaneo de secretos](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
1. Opcionalmente, selecciona el menú desplegable de {% ifversion fpt or ghec %}"Cerrar como"{% elsif ghes or ghae %}"Marcar como"{% endif %} y haz clic en la razón para resolver una alerta.
   {% ifversion fpt or ghec %}
   ![Menú desplegable para resolver una alerta del escaneo de secretos](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% ifversion ghes or ghae %}
   ![Menú desplegable para resolver una alerta del escaneo de secretos](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

## Asegurar los secretos en riesgo

Cuando un secreto se haya confirmado en un repositorio, deberás considerarlo en riesgo. {% data variables.product.prodname_dotcom %} recomienda tomar las siguientes acciones para los secretos puestos en riesgo:

- Para un token de acceso personal de {% data variables.product.prodname_dotcom %} comprometido, elimina el token comprometido, crea un nuevo token y actualiza todo servicio que use el token antiguo. Para obtener más información, consulta la sección "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
- Para todos los demás secretos, verifica primero que aquellos que se hayan confirmado en {% data variables.product.product_name %} sean válidos. De ser así, crea un secreto nuevo, actualiza cualquier servicio que utilice el secreto anterior, y luego bórralo.

{% ifversion ghec %}
{% note %}

**Nota:** Si se detecta un secreto en un repositorio público en {% data variables.product.prodname_dotcom_the_website %} y dicho secreto también empata con un patrón asociado, se generará una alerta y el secreto potencial se reporta al proveedor de servicios. Para obtener más detalles sobre los patrones asociados, consulta la sección "[Secretos compatibles para los patrones asociados](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)".

{% endnote %}
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4910 or ghec %}
## Configurar las notificaciones para las alertas del {% data variables.product.prodname_secret_scanning %}

Cuando se detecta un secreto nuevo, {% data variables.product.product_name %} notifica a todos los usuarios con acceso a las alertas de seguridad del repositorio de acuerdo con sus preferencias de notificación. You will receive an email notification if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, or are the author of the commit that contains the secret and are not ignoring the repository.

Para obtener más información, consulta las secciones "[Administrar la seguridad y configuración de análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" y "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}
