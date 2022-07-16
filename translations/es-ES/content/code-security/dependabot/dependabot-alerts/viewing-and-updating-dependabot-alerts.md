---
title: Viewing and updating Dependabot alerts
intro: 'If {% data variables.product.product_name %} discovers insecure dependencies in your project, you can view details on the Dependabot alerts tab of your repository. Luego, puedes actualizar tu proyecto para resolver o descartar la alerta.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: Ver las alertas del Dependabot
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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

La pestaña de {% data variables.product.prodname_dependabot_alerts %} de tu repositorio lista todas las{% data variables.product.prodname_dependabot_alerts %} abiertas y cerradas{% ifversion fpt or ghec or ghes > 3.2 %}, así como las {% data variables.product.prodname_dependabot_security_updates %} correspondientes{% endif %}. Puedes{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filtrar las alertas por paquete, ecosistema o manifiesto. Puedes {% endif %} ordenar la lista de alertas y hacer clic en aquellas específicas para ver más detalles. {% ifversion dependabot-bulk-alerts %}También puedes descartar o volver a abrir las alertas, ya sea una por una o seleccionando alertas múltiples a la vez.{% else %}También puedes descartar o volver a abrir las alertas. {% endif %} Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
Puedes habilitar las alertas de seguridad automáticas para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Acerca de las actualizaciones para las dependencias vulnerables en tu repositorio

{% data variables.product.product_name %} genera {% data variables.product.prodname_dependabot_alerts %} cuando detectamos que tu base de còdigo està utilizando dependencias con riesgos de seguridad conocidos. Para los repositorios en donde se habilitan las {% data variables.product.prodname_dependabot_security_updates %} cuando {% data variables.product.product_name %} detecta una dependencia vulnerable en la rama predeterminada, {% data variables.product.prodname_dependabot %} crea una solicitud de cambios para arreglarla. La solicitud de extracción mejorará la dependencia a la versión segura mínima que sea posible y necesaria para evitar la vulnerabilidad.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}Puedes clasificar y filtrar las {% data variables.product.prodname_dependabot_alerts %} con los menús desplegables en la pestaña de {% data variables.product.prodname_dependabot_alerts %} o tecleando filtros tales como pares de `key:value` en la barra de búsqueda. Los filtros disonibles son repositorio (por ejemplo, `repo:my-repository`), paquete (por ejemplo, `package:django`), ecosistema (por ejemplo, `ecosystem:npm`), manifiesto (por ejemplo, `manifest:webwolf/pom.xml`), estado (por ejemplo, `is:open`) y ya sea si una asesorìa tiene un parche o no (por ejemplo, `has: patch`).{% ifversion dependabot-alerts-development-label %} También puedes filtrar las alertas con datos de alcance de dependencias utilizando `scope`, por ejemplo: `scope:development` o `scope:runtime`. Con `scope:development`, la lista de alertas solo mostrará a las dependencias que se utilizaron durante el desarrolo y no durante la producción.{% endif %}

Cada alerta del {% data variables.product.prodname_dependabot %} tiene un identificador numérico único y la pestaña de {% data variables.product.prodname_dependabot_alerts %} lista una alerta por cada vulnerabilidad detectada. Las {% data variables.product.prodname_dependabot_alerts %} tradicionales agrupan vulnerabilidades por dependencia y generan una sola alerta por dependencia. Si navegas a una alerta tradicional del {% data variables.product.prodname_dependabot %}, se te redirigirá a una pestaña de {% data variables.product.prodname_dependabot_alerts %} filtradas para este paquete. {% endif %}
{% endif %}

{% ifversion dependabot-alerts-development-label %}
## Ecosistemas y manifiestos compatibles para el alcance de las dependencias

<!-- TODO: for now we'd have this table and heading as they are, but we're planning to replace this with at a later date a new heading containing all the available filters in one or more tables -->
{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Las alertas para los paquetes que se listan como dependencias de desarrollo se marcan con la etiqueta `Development` en la página de {% data variables.product.prodname_dependabot_alerts %} y también están disponibles para filtrarse mediante el filtro `scope`. ![Captura de pantalla que muestra la etiqueta "Development" en la lista de alertas](/assets/images/help/repository/dependabot-alerts-development-label.png)

La página de detalles de la alerta en los pquetes con alcance de desarrollo muestra una sección de "Etiquetas" que contiene una etiqueta de `Development`. ![Captura de pantalla que muestra la sección "Tags" en la página de detalles de la alerta](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## Acerca de la detección de llamadas a las funciones vulnerables

{% data reusables.dependabot.vulnerable-calls-beta %}

Cuando el {% data variables.product.prodname_dependabot %} te dice que tu repositorio utiliza una dependencia vulnerable, necesitas determinar cuáles son las funciones vulnerables y verificar si las estás utilizando. Una vez que tengas esta información, podrás determinar qué tan urgentemente debes actualizarte a una versión segura de la dependencia.

Para ver los lenguajes compatibles, el {% data variables.product.prodname_dependabot %} detecta automáticamente si utilzias una función vulnerable y agrega la etiqueta "Llamada vulnerable" a las alertas afectadas. Puedes utilizar esta información en la vista de {% data variables.product.prodname_dependabot_alerts %} para ordenar y priorizar el trabajo de remediación de forma más efectiva.

{% note %}

**Nota:** Durante el lanzamiento beta, esta característica está disponible únicamente para las asesorías nuevas de Python creadas *después* del 14 de abril de 2022 y para un subconjunto de asesorías de Python históricas. {% data variables.product.prodname_dotcom %} está trabajando para rellenar los datos a lo largo de las asesorías históricas adicionales de Python, las cuale se agregan continuamente. Las llamadas vulnerables se resaltan únicamente en las páginas de las {% data variables.product.prodname_dependabot_alerts %}.

{% endnote %}

![Captura de pantalla que muestr auna alerta con la etiqueta "Llamada vulnerable"](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Puedes filtrar la vista para que solo muestre alertas en donde el {% data variables.product.prodname_dependabot %} detectó por o menos una llamada a una función vulnerable utilizando el filtro `has:vulnerable-calls` en el campo de búsqueda.

Para las alertas en donde se detectan llamadas vulnerables, la página de detalles de la alerta muestra información adicional:

- Uno o más bloques de código muestran en dónde se utiliza la función.
- Una anotación que lista la función misma, con un enlace a la línea en donde se llama a dicha función.

![Captura de pantalla que muestra la página de detalles de la alerta para una alerta con la etiqueta "Vulnerable call"](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Para obtener más información, consulta la sección "[revisar y corregir las alertas](#reviewing-and-fixing-alerts)" a continuación.

{% endif %}

## Ver las {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Opcionalmente, para filtrar alertas, selecciona el menú desplegable de **Repositorio**, l **Paquete**, **Ecosistema** o **Manifiesto** y luego haz clic en el filtro que te gustaría aplicar. También puedes teclear filtros en la barra de búsqueda. Por ejemplo, `ecosystem:npm`{% ifversion ghes < 3.7 or ghae-issue-5638 %} o `has:patch`{% endif %}{% ifversion dependabot-alerts-development-label %}, `has:patch` o `scope:development`{% endif %}. Para ordenar las alertas, selecciona el menú desplegable **Ordenar** y luego haz clic en la opción por la cual te gustaría ordenarlas.

   También puedes hacer clic en una etiqueta de una alerta para que solo muestre las alertas de ese tipo.{% ifversion dependabot-alerts-development-label %} Por ejemplo, el hacer clic en la etiqueta `Development` en la lista de alertas solo mostrará aquellas que se relacionen con las dependencias que se utilizan en desarrollo y no en producción. Para obtener más información sobre la lista de ecosistemas compatibles, consulta la sección "[Ecosistemas y manifiestos compatibles para el alcance de dependencias ](#supported-ecosystems-and-manifests-for-dependency-scope)".

{% endif %}
{%- ifversion dependabot-bulk-alerts %}
  ![Captura de pantalla del filtro y menús de clasificación en la pestaña de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %}
   ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Haz clic en la alerta que te gustaría ver.{% ifversion dependabot-bulk-alerts %} ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %}
![Alert selected in list of alerts](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Haz clic en la alerta que quieres ver. ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Revisar y corregir las alertas

Es importante garantizar que todas tus dependencias estén libres de cualquier debilidad de seguridad. Cuando el {% data variables.product.prodname_dependabot %} descubre vulnerabilidades {% ifversion GH-advisory-db-supports-malware %}o malware{% endif %} en tus dependencias, deberías evaluar el nivel de exposición de tu proyecto y determinar qué pasos de remediación tomar para asegurar tu aplicación.

Si una versión parchada de la dependencia está disponible, peudes generar una solicitud de cambios del {% data variables.product.prodname_dependabot %} para actualizar esta dependencia directamente desde una alerta del {% data variables.product.prodname_dependabot %}. Si tienes habilitadas las {% data variables.product.prodname_dependabot_security_updates %}, la solicitud de cambios podría estar vinculada en la alerta del Dependabot.

En los casos en donde no está disponible una versión parchada o en donde no puedes actualizar a la versión segura, el {% data variables.product.prodname_dependabot %} comparte información adicional para ayudarte a determinar los siguientes pasos. Cuando haces clilc para ver una alerta del {% data variables.product.prodname_dependabot %}, puedes ver todos los detalles de la asesoría de seguridad para la dependencia, incluyendo las funciones afectadas. Entonces, pudes verificar si tu código llama a dichas funciones impactadas. Esta información puede ayudarte a valorar más profundamente tu nivel de riesgo y determinar las soluciones alternas o a saber si tienes que aceptar el riesgo que representa la asesoría de seguridad.

{% ifversion dependabot-alerts-vulnerable-calls %}

Para los lenguajes compatibles, el {% data variables.product.prodname_dependabot %} detecta llamadas a las funciones vulnerables por ti. When you view an alert labeled as "Vulnerable call", the details include the name of the function and a link to the code that calls it. Often you will be able to take decisions based on this information, without exploring further.

{% endif %}

### Fixing vulnerable dependencies

1. Ver los detalles de una alerta. For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (above).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request. ![Create {% data variables.product.prodname_dependabot %} security update button](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
{% elsif ghes < 3.3 or ghae %}
1. You can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to the manifest or lock file to a secure version.
{% endif %}
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción.

{% ifversion fpt or ghec or ghes > 3.2 %}
   Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
{% endif %}

## Dismissing {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Tip:** You can only dismiss open alerts.
{% endtip %}

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. Ver los detalles de una alerta. For more information, see "[Viewing vulnerable dependencies](#viewing-dependabot-alerts)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% ifversion reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)
{% ifversion dependabot-bulk-alerts %}

### Descartar varias alertas al mismo tiempo

1. View the open {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Optionally, filter the list of alerts by selecting a dropdown menu, then clicking the filter that you would like to apply. También puedes teclear filtros en la barra de búsqueda.
3. To the left of each alert title, select the alerts that you want to dismiss. ![Screenshot of open alerts with checkboxes emphasized](/assets/images/help/graphs/select-multiple-alerts.png)
4. Optionally, at the top of the list of alerts, select all alerts on the page. ![Screenshot of all open alerts selected](/assets/images/help/graphs/select-all-alerts.png)
5. Select the "Dismiss alerts" dropdown, and click a reason for dismissing the alerts. ![Screenshot of open alerts page with "Dismiss alerts" drop-down emphasized](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Viewing and updating closed alerts

{% tip %}

**Tip:** You can only reopen alerts that have been previously dismissed. Closed alerts that have already been fixed cannot be reopened.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para solo ver las alertas cerradas, haz clic en **Cerrada**.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){% else %}
![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png){% endif %}
1. Haz clic en la alerta que te gustaría ver o actualizar.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){% else %}
![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){% endif %}
2. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. Alerts that have already been fixed cannot be reopened. ![Screenshot showing the "Reopen" button](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reopening multiple alerts at once

1. View the closed {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Viewing and updating closed alerts](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (above).
2. To the left of each alert title, select the alerts that you want to reopen. ![Screenshot of closed alerts with checkboxes emphasized](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Optionally, at the top of the list of alerts, select all closed alerts on the page. ![Screenshot of closed alerts with all alerts selected](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Click **Reopen** to reopen the alerts. Alerts that have already been fixed cannot be reopened. ![Screenshot of closed alerts with "Reopen" button emphasized](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
