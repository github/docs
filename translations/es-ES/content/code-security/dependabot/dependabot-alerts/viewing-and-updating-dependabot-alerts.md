---
title: Viewing and updating Dependabot alerts
intro: 'Si {% data variables.product.product_name %} descubre una dependencia vulnerable en tu proyecto, podrás verla en la pestaña de alertas del Dependabot de tu repositorio. Posteriormente, podrás actualizar tu proyecto para resolver o descartar la vulnerabilidad.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
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

{% if dependabot-alerts-vulnerable-calls %}
## About the detection of calls to vulnerable functions

{% data reusables.dependabot.vulnerable-calls-beta %}

When {% data variables.product.prodname_dependabot %} tells you that your repository uses a vulnerable dependency, you need to determine what the vulnerable functions are and check whether you are using them. Once you have this information, then you can determine how urgently you need to upgrade to a secure version of the dependency.

For supported languages, {% data variables.product.prodname_dependabot %} automatically detects whether you use a vulnerable function and adds the label "Vulnerable call" to affected alerts. You can use this information in the {% data variables.product.prodname_dependabot_alerts %} view to triage and prioritize remediation work more effectively.

{% note %}

**Note:** During the beta release, this feature is available only for new Python advisories created *after* April 14, 2022, and for a subset of historical Python advisories. GitHub is working to backfill data across additional historical Python advisories, which are added on a rolling basis. Vulnerable calls are highlighted only on the {% data variables.product.prodname_dependabot_alerts %} pages.

{% endnote %}

![Screenshot showing an alert with the "Vulnerable call" label](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

You can filter the view to show only alerts where {% data variables.product.prodname_dependabot %} detected at least one call to a vulnerable function using the `has:vulnerable-calls` filter in the search field.

For alerts where vulnerable calls are detected, the alert details page shows additional information:

- A code block showing where the function is used or, where there are multiple calls, the first call to the function.
- An annotation listing the function itself, with a link to the line where the function is called.

![Screenshot showing the alert details page for an alert with a "Vulnerable call" label](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

For more information, see "[Reviewing and fixing vulnerable dependencies](#reviewing-and-fixing-vulnerable-dependencies)" below.

{% endif %}

## Viewing vulnerable dependencies

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Opcionalmente, para filtrar alertas, selecciona el menú desplegable de **Repositorio**, l **Paquete**, **Ecosistema** o **Manifiesto** y luego haz clic en el filtro que te gustaría aplicar. También puedes teclear filtros en la barra de búsqueda. Por ejemplo, `ecosystem:npm` o `has:patch`. Para ordenar las alertas, selecciona el menú desplegable **Ordenar** y luego haz clic en la opción por la cual te gustaría ordenarlas. ![Captura de pantalla del filtro y menús de clasificación en la pestaña de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters.png)
1. Haz clic en la alerta que te gustaría ver. ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list-ungrouped.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Haz clic en la alerta que quieres ver. ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Reviewing and fixing vulnerable dependencies

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When {% data variables.product.prodname_dependabot %} discovers vulnerabilities in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application.

If a patched version is available, you can generate a {% data variables.product.prodname_dependabot %} pull request to update this dependency directly from a {% data variables.product.prodname_dependabot %} alert. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, the pull request may be linked will in the Dependabot alert.

In cases where a patched version is not available, or you can’t update to the secure version, {% data variables.product.prodname_dependabot %} shares additional information to help you determine next steps. When you click through to view a {% data variables.product.prodname_dependabot %} alert, you can see the full details of the security advisory for the dependency including the affected functions. You can then check whether your code calls the impacted functions. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security vulnerability.

{% if dependabot-alerts-vulnerable-calls %}

For supported languages, {% data variables.product.prodname_dependabot %} detects calls to vulnerable functions for you. When you view an alert labeled as "Vulnerable call", the details include the name of the function and a link to the code that calls it. Often you will be able to take decisions based on this information, without exploring further.

{% endif %}

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-vulnerable-dependencies)" (above).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request. ![Crea un botón de actualización de seguridad del {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
{% elsif ghes < 3.3 or ghae %}
1. You can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to the manifest or lock file to a secure version.
{% endif %}
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción.

{% ifversion fpt or ghec or ghes > 3.2 %}
   Cada solicitud de extracción que levante el {% data variables.product.prodname_dependabot %} incluye información sobre los comandos que puedes utilizar para controlar el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Adminsitrar las solicitudes de extracción para las actualizaciones de las dependencias](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
{% endif %}

### Dismissing {% data variables.product.prodname_dependabot_alerts %}

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. Ver los detalles de una alerta. Para obtener más información, consulta la sección "[Ver las dependencias vulnerables](#viewing-vulnerable-dependencies)" (anteriormente).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% if reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

{% if reopen-dependabot-alerts %}

## Viewing and updating closed alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**. ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png)
1. Click the alert that you would like to view or update. ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)
2. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. ![Screenshot showing the "Reopen" button](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}
