---
title: Enlazar una solicitud de extracción a un informe de problemas
intro: 'Puedes enlazar una solicitud de extracción a un informe de problemas para que {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} muestre si existe un arreglo en curso y para {% endif %} cerrar dicho informe automáticamente cuando se fusione la solicitud de extracción.'
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de enlazar informes de problemas y solicitudes de extracción

Puedes enlazar un informe de problemas a una solicitud de extracción {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} manualmente o {% endif %}utilizando una palabra clave compatible en la descripción de esta solicitud.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Cuando enlazas una solicitud de extracción al informe de problemas al que ésta hace referencia, los colaboradores pueden ver si alguien está trabajando en dicho informe.
{% if currentVersion ver_lt "enterprise-server@2.21" %}Si la solicitud de extracción y el informe de problemas se encuentran en repositorios diferentes, {% data variables.product.product_name %} mostrará el enlace después de que se fusione esta solicitud, si en caso de que la persona que fusiona la solicitud también tiene permiso de cerrar el informe de problemas.{% endif %}{% endif %}

Cuando fusionas una solicitud de extracción que se ha enlazado y se encuentra en la rama predeterminada de un repositorio, su informe de problemas enlazado se cierra automáticamente. Para obtener más información acerca de la rama predeterminada, consulta la sección "[Configurar la rama predeterminada](/github/administering-a-repository/setting-the-default-branch)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
### Enlazar una solicitud de extracción a un informe de problemas manualmente

Cualquiera con permisos de escritura en un repositorio puede enlazar una solicitud de extracción a un problema manualmente.

Puedes enlazar hasta diez informes de problemas a cada solicitud de extracción manualmente. El informe de problemas y la solicitud de extracción deberán encontrarse en el mismo repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. En la lista de solicitudes de extracción, da clic en aquella que quieras enlazar a un informe de problemas.
4. En la barra lateral derecha, da clic en **Informes de problemas relacionados**. ![Informes de problemas enlazados en la barra lateral derecha](/assets/images/help/pull_requests/linked-issues.png)
5. Da clic en el informe de problemas que quieras enlazar a la solicitud de extracción. ![Menú desplegable para enlazar un informe de problemas](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

### Enlazar una solicitud de extracción a un informe de problemas utilizando una palabra clave

Puedes enlazar una solicitud de extracción a un informe de problemas si utilizas una palabra clave compatible en la descripción de la solicitud.

* close
* closes
* closed
* fix
* fixes
* fixed
* resolver
* resolves
* resolved

La sintaxis para palabras clave de cierre dependerá de si el informe de problemas se encuentra en el mismo repositorio que la solicitud de extracción.

| Informe enlazado                      | Sintaxis                                                          | Ejemplo                                                        |
| ------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| Propuesta en el mismo repositorio     | Closes #10                                                        | `Closes #10`                                                   |
| Propuesta en un repositorio diferente | *PALABRA CLAVE* *PROPIETARIO*/*Repositorio*#*NÚMERO DE PROPUESTA* | `Fixes octo-org/octo-repo#100`                                 |
| Múltiples propuestas                  | Utilizar la sintaxis completa para cada informe                   | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Solo las solicitudes de extracción enlazadas manualmente se podrán desenlazar de la misma forma. Para desenlazar un informe de problemas que hayas enlazado previamente utilizando una palabra clave, deberás editar la descripción de la solicitud de extracción y así poder eliminar la palabra clave.{% endif %}

También puedes utilizar palabras clave de cierre en un mensaje de confirmación. El informe de problemas se cerrará cuando fusiones la confirmación de cambios en la rama predeterminada {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, pero la solicitud de extracción que contenga dicha confirmación no se listará como una solicitud de extracción enlazada{% endif %}.

### Leer más

- "[URL y referencias auto-enlazadas](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
