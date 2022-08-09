---
title: Ver y actualizar las alertas del Dependabot
intro: 'Si {% data variables.product.product_name %} descubre dependencias inseguras en tu proyecto, puedes ver los detalles en la pestaña de alertas del Dependabot de tu repositorio. Luego, puedes actualizar tu proyecto para resolver o descartar la alerta.'
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

{% ifversion dependabot-most-important-sort-option %} Predeterminadamente, las {% data variables.product.prodname_dependabot_alerts %} se muestran en la pestaña de {% data variables.product.prodname_dependabot_alerts %} según su importancia, pero puedes ordenarlas por otros criterios. {% endif %}{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}Puedes ordenar y filtrar las {% data variables.product.prodname_dependabot_alerts %} con los menús desplegables en la pestaña de {% data variables.product.prodname_dependabot_alerts %} o escribiendo filtros como pares de `key:value` en la barra de búsqueda. Los filtros disonibles son repositorio (por ejemplo, `repo:my-repository`), paquete (por ejemplo, `package:django`), ecosistema (por ejemplo, `ecosystem:npm`), manifiesto (por ejemplo, `manifest:webwolf/pom.xml`), estado (por ejemplo, `is:open`) y ya sea si una asesorìa tiene un parche o no (por ejemplo, `has: patch`).{% ifversion dependabot-alerts-development-label %} También puedes filtrar las alertas con datos de alcance de dependencias utilizando `scope`, por ejemplo: `scope:development` o `scope:runtime`. Con `scope:development`, la lista de alertas solo mostrará a las dependencias que se utilizaron durante el desarrolo y no durante la producción.{% endif %}

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
1. Opcionalmente, para filtrar alertas, selecciona el menú desplegable de **Repositorio**, l **Paquete**, **Ecosistema** o **Manifiesto** y luego haz clic en el filtro que te gustaría aplicar. También puedes teclear filtros en la barra de búsqueda. Por ejemplo, `ecosystem:npm`{% ifversion ghes < 3.7 or ghae-issue-5638 %} o `has:patch`{% endif %}{% ifversion dependabot-alerts-development-label %}, `has:patch` o `scope:development`{% endif %}. Para ordenar las alertas, selecciona el menú desplegable de **Ordenar** y luego haz clic en la opción por la cual te gustaría ordenarlas o escribe `sort:` en la barra de búsqueda y elige una opción de entre las sugerencias (por ejemplo, `sort:newest`).

   {% ifversion dependabot-most-important-sort-option %}
   {% note %}

   **Nota:** Predeterminadamente, las {% data variables.product.prodname_dependabot_alerts %} se ordenan por importancia. El ordenar por "Más importante" te permite priorizar en qué {% data variables.product.prodname_dependabot_alerts %} te enfocarás primero. Las alertas se clasifican con base en su impacto potencial, capacidad de acción y relevancia. Nuestro cálculo de priorización se está mejorando constantemente e incluye factores como la puntuación de CVSS, alcance de dependencia y si las llamadas a la función vulnerable se encuentran en la alerta.
   {% endnote %}

   ![Captura de pantalla del menú desplegable de clasificación con una clasificación de "Más importante"](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png)
   {% endif %}

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

Para los lenguajes compatibles, el {% data variables.product.prodname_dependabot %} detecta llamadas a las funciones vulnerables por ti. Cuando ves una alerta etiquetada como "Llamada vulnerable", los detalles incluyen el nombre de la función y un enlace al código que lo llama. A menudo, podrás tomar decisiones con base en esta información sin hacer una exploración más profunda.

{% endif %}

### Fijar las dependencias vulnerables

1. Ver los detalles de una alerta. Para obtener más información, consulta la sección "[Ver las {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (anteriormente).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. Si tienes habilitadas las {% data variables.product.prodname_dependabot_security_updates %}, podrìa haber un enlace a una solicitud de cambios que corrija la dependencia. Como alternativa, puedes hacer clic en **Crear actualización de seguridad del {% data variables.product.prodname_dependabot %}** en la parte superior de la página de detalles de la alerta para crear una solicitud de cambios. ![Crea un botón de actualización de seguridad del {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Opcionalmente, si no utilizas las {% data variables.product.prodname_dependabot_security_updates %}, puedes utilizar la información en la página para decidir a qué versión de la dependencia actualizar y crear una solicitud de cambios para actualizar la dependencia a una versión segura.
{% elsif ghes < 3.3 or ghae %}
1. Puedes utilizar la información en la página para decidir a qué versión de la dependencia actualizar y crear una solicitud de cambios para que el archivo de bloqueo o de manifiesto se actualicen a una versión segura.
{% endif %}
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción.

{% ifversion fpt or ghec or ghes > 3.2 %}
   Cada solicitud de extracción que levante el {% data variables.product.prodname_dependabot %} incluye información sobre los comandos que puedes utilizar para controlar el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Adminsitrar las solicitudes de extracción para las actualizaciones de las dependencias](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
{% endif %}

## Descartar las {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Tip:** Solo puedes descartar las alertas abiertas.
{% endtip %}

Si programas mucho trabajo para actualizar una dependencias o decides que una alerta no necesita corregirse, puedes descartar la alerta. El descartar alertas que ya valoraste facilita clasificar las nuevas que aparecen.

1. Ver los detalles de una alerta. Para obtener más información, consulta la sección "[Ver las dependencias vulnerables](#viewing-dependabot-alerts)" (anteriormente).
1. Selecciona el menú desplegable de "Descartar" y haz clic en una razón para descartar la alerta.{% ifversion reopen-dependabot-alerts %} Las alertas descartadas sin fijar pueden volverse a abrir posteriormente.{% endif %} ![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)
{% ifversion dependabot-bulk-alerts %}

### Descartar varias alertas al mismo tiempo

1. Mira las {% data variables.product.prodname_dependabot_alerts %} abiertas. Para obtener más información, consulta la sección "[Ver las {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Opcionalmente, filtra la lista de alertas seleccionado un menú desplegable y haciendo clic en el filtro que te gustaría aplicar. También puedes teclear filtros en la barra de búsqueda.
3. A la izquierda de cada título de alerta, selecciona aquellas que quieras descartar. ![Captura de pantalla de las alertas abiertas con énfasis en las casillas de verificación](/assets/images/help/graphs/select-multiple-alerts.png)
4. Opcionalmente, en la parte superior de la lista de alertas, selecciona todas en la página. ![Captura de pantalla de todas las alertas abiertas seleccionadas](/assets/images/help/graphs/select-all-alerts.png)
5. Selecciona el menú desplegable de "Descartar alertas" y haz clic en una razón para hacerlo. ![Captura de pantalla de la página con alertas abiertas y énfasis en el menú desplegable de "Descartar alertas"](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Ver y actualziar las alertas cerradas

{% tip %}

**Tip:** Solo puedes volver a abrir alertas que se hayan descartado previamente. Las alertas cerradas que ya se hayan corregido no se pueden volver a abrir.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para solo ver las alertas cerradas, haz clic en **Cerrada**.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){% else %}
![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png){% endif %}
1. Haz clic en la alerta que te gustaría ver o actualizar.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){% else %}
![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){% endif %}
2. Opcionalmente, si se descartó la alerta y quieres volver a abrirla, haz clic en **Reabrir**. Las alertas que ya se hayan corregido no pueden volverse a abrir. ![Captura de pantalla que muestra el botón "Reabrir"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reabrir alertas múltiples al mismo tiempo

1. Ver las {% data variables.product.prodname_dependabot_alerts %} cerradas. Para obtener más información, consulta la sección "[Ver y actualizar las alertas cerradas](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (anteriormente).
2. A la izquierda de cada título de alerta, selecciona aquellas que quieras reabrir. ![Captura de pantalla de las alertas cerradas con énfasis en las casillas de verificación](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Opcionalmente, en la parte superior de la lista de alertas, selecciona todas las alertas cerradas en la página. ![Captura de pantalla de las alertas cerradas con todas las alertas seleccionadas](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Haz clic en **Reabrir** para reabrir las alertas. Las alertas que ya se hayan corregido no pueden volverse a abrir. ![Captura de pantalla de las alertas cerradas con énfasis en el botón "Reabrir"](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
