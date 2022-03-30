---
title: Viewing and updating Dependabot alerts
intro: 'Si {% data variables.product.product_name %} descubre una dependencia vulnerable en tu proyecto, podrás verla en la pestaña de alertas del Dependabot de tu repositorio. Posteriormente, podrás actualizar tu proyecto para resolver o descartar la vulnerabilidad.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

La pestaña de {% data variables.product.prodname_dependabot_alerts %} de tu repositorio lista todas las{% data variables.product.prodname_dependabot_alerts %} abiertas y cerradas{% ifversion fpt or ghec or ghes > 3.2 %}, así como las {% data variables.product.prodname_dependabot_security_updates %} correspondientes{% endif %}. Puedes{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filtrar las alertas por paquete, ecosistema o manifiesto. Tambén puedes{% endif %} clasificar la lista de alertas y hacer clic en ellas para obtener más detalles. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
Puedes habilitar las alertas de seguridad automáticas para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

{% data reusables.repositories.dependency-review %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Acerca de las actualizaciones para las dependencias vulnerables en tu repositorio

{% data variables.product.product_name %} genera {% data variables.product.prodname_dependabot_alerts %} cuando detectamos que tu base de código está utilizando dependencias con vulnerabilidades conocidas. Para los repositorios en donde se habilitan las {% data variables.product.prodname_dependabot_security_updates %} cuando {% data variables.product.product_name %} detecta una dependencia vulnerable en la rama predeterminada, {% data variables.product.prodname_dependabot %} crea una solicitud de cambios para arreglarla. La solicitud de extracción mejorará la dependencia a la versión segura mínima que sea posible y necesaria para evitar la vulnerabilidad.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}Puedes clasificar y filtrar las {% data variables.product.prodname_dependabot_alerts %} con los menús desplegables en la pestaña de {% data variables.product.prodname_dependabot_alerts %} o tecleando filtros tales como pares de `key:value` en la barra de búsqueda. Los filtros disponibles son los de repositorio (pro ejemplo, `repo:my-repository`), paquete (por ejemplo, `package:django`), ecosistema (por ejemplo, `ecosystem:npm`), manifiesto (por ejemplo, `manifest:webwolf/pom.xml`), estado (por ejemplo, `is:open`) y si la asesoría tiene un parche (por ejemplo, `has: patch`).

Cada alerta del {% data variables.product.prodname_dependabot %} tiene un identificador numérico único y la pestaña de {% data variables.product.prodname_dependabot_alerts %} lista una alerta por cada vulnerabilidad detectada. Las {% data variables.product.prodname_dependabot_alerts %} tradicionales agrupan vulnerabilidades por dependencia y generan una sola alerta por dependencia. Si navegas a una alerta tradicional del {% data variables.product.prodname_dependabot %}, se te redirigirá a una pestaña de {% data variables.product.prodname_dependabot_alerts %} filtradas para este paquete. {% endif %}
{% endif %}

## Ver y actualizar las dependencias vulnerables

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Opcionalmente, para filtrar alertas, selecciona el menú desplegable de **Repositorio**, l **Paquete**, **Ecosistema** o **Manifiesto** y luego haz clic en el filtro que te gustaría aplicar. También puedes teclear filtros en la barra de búsqueda. Por ejemplo, `ecosystem:npm` o `has:patch`. Para ordenar las alertas, selecciona el menú desplegable **Ordenar** y luego haz clic en la opción por la cual te gustaría ordenarlas. ![Captura de pantalla del filtro y menús de clasificación en la pestaña de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters.png)
1. Haz clic en la alerta que te gustaría ver. ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list-ungrouped.png)
1. Revisa los detalles de la vulnerabilidad y, en caso de que esté disponible, la solicitud de extracción que contienen la actualización de seguridad automatizada.
1. Opcionalmente, si no existe ya una actualización de {% data variables.product.prodname_dependabot_security_updates %} para la alerta, para crear una solicitud de extracción o para resolver la vulnerabilidad, da clic en **Crear una actualización de eguridad del {% data variables.product.prodname_dependabot %}**. ![Crea un botón de actualización de seguridad del {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción. Cada solicitud de extracción que levante el {% data variables.product.prodname_dependabot %} incluye información sobre los comandos que puedes utilizar para controlar el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Adminsitrar las solicitudes de extracción para las actualizaciones de las dependencias](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% if reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

{% elsif ghes = 3.3 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Haz clic en la alerta que quieres ver. ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Revisa los detalles de la vulnerabilidad y, en caso de que esté disponible, la solicitud de extracción que contienen la actualización de seguridad automatizada.
1. Opcionalmente, si no existe ya una actualización de {% data variables.product.prodname_dependabot_security_updates %} para la alerta, para crear una solicitud de extracción o para resolver la vulnerabilidad, da clic en **Crear una actualización de eguridad del {% data variables.product.prodname_dependabot %}**. ![Crea un botón de actualización de seguridad del {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción. Cada solicitud de extracción que levante el {% data variables.product.prodname_dependabot %} incluye información sobre los comandos que puedes utilizar para controlar el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Adminsitrar las solicitudes de extracción para las actualizaciones de las dependencias](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
1. Opcionalmente, si se está arreglando la alerta, si es incorrecta o si se ubica en una sección de código sin utilizar, selecciona el menú desplegable de "Descartar" y haz clic en una razón para descartar la alerta. ![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif ghes = 3.1 or ghes = 3.2 or ghae-issue-4864 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Haz clic en la alerta que quieres ver. ![Alerta seleccionada en la lista de alertas](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. Revisa los detalles de la vulnerabilidad y determina si necesitas actualizar la dependencia o no.
1. Cuando fusionas una solicitud de cambios que actualice el archivo de manifiesto o de bloqueo a una versión segura de la dependencia, esto resolverá la alerta. Como alternativa, si decides no actualizar la dependencia, selecciona el menú desplegable **Descartar** y haz clic en una razón para descartar la alerta. ![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/enterprise/repository/dependabot-alert-dismiss-drop-down.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. Haz clic en el número de versión de la dependencia vulnerable para mostrar la información detallada. ![Información detallada de la dependencia vulnerable](/assets/images/enterprise/3.0/dependabot-alert-info.png)
1. Revisa los detalles de la vulnerabilidad y determina si necesitas actualizar la dependencia o no. Cuando fusionas una solicitud de cambios que actualice el archivo de manifiesto o de bloqueo a una versión segura de la dependencia, esto resolverá la alerta.
1. El letrero en la parte superior de la pestaña de **Dependencias** se muestra hasta que todas las dependencias vulnerables se resuelven o hasta que lo descartes. Haz clic en **Descartar** en la esquina superior derecha del letrero y selecciona una razón para descartar la alerta. ![Descartar el letrero de seguridad](/assets/images/enterprise/3.0/dependabot-alert-dismiss.png)
{% endif %}

{% if reopen-dependabot-alerts %}

## Viewing and updating closed alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**. ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png)
1. Click the alert that you would like to view or update. ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)
2. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. ![Screenshot showing the "Reopen" button](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

## Leer más

- "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)"{% endif %}
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solucionar problemas en la detección de dependencias vulnerables](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Solucionar problemas de los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
