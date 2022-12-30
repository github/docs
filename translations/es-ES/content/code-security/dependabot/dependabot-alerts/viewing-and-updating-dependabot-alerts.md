---
title: Visualización y actualización de alertas de Dependabot
intro: 'Si {% data variables.product.product_name %} descubre dependencias no seguras en tu proyecto, podrás ver los detalles en la pestaña de alertas del Dependabot de tu repositorio. Después, podrás actualizar tu proyecto para resolver o descartar la alerta.'
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
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185555'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

En la pestaña {% data variables.product.prodname_dependabot_alerts %} del repositorio se muestran todas las {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes %} abiertas y cerradas y las correspondientes {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. Puedes{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} filtrar las alertas por paquete, ecosistema o manifiesto. Puedes{% endif %} ordenar la lista de alertas y hacer clic en ellas para obtener más detalles. {% ifversion dependabot-bulk-alerts %}También puedes descartar o volver a abrir alertas, una a una o seleccionando varias alertas a la vez.{% else %}También puedes descartar o volver a abrir alertas. {% endif %} Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". 

{% ifversion fpt or ghec or ghes %} Puedes habilitar las actualizaciones automáticas de seguridad para cualquier repositorio que use {% data variables.product.prodname_dependabot_alerts %} y el gráfico de dependencias. Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Acerca de las actualizaciones para las dependencias vulnerables en tu repositorio

{% data variables.product.product_name %} genera {% data variables.product.prodname_dependabot_alerts %} cuando detectamos que tu código base está utilizando dependencias con riesgos de seguridad conocidos. Para los repositorios en donde se habilitan las {% data variables.product.prodname_dependabot_security_updates %} cuando {% data variables.product.product_name %} detecta una dependencia vulnerable en la rama predeterminada, {% data variables.product.prodname_dependabot %} crea una solicitud de cambios para arreglarla. La solicitud de extracción mejorará la dependencia a la versión segura mínima que sea posible y necesaria para evitar la vulnerabilidad.

Cada alerta del {% data variables.product.prodname_dependabot %} tiene un identificador numérico único y la pestaña de {% data variables.product.prodname_dependabot_alerts %} lista una alerta por cada vulnerabilidad detectada. Las {% data variables.product.prodname_dependabot_alerts %} tradicionales agrupan vulnerabilidades por dependencia y generan una sola alerta por dependencia. Si navegas a una alerta tradicional del {% data variables.product.prodname_dependabot %}, se te redirigirá a una pestaña de {% data variables.product.prodname_dependabot_alerts %} filtradas para este paquete. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} Puedes filtrar y ordenar las {% data variables.product.prodname_dependabot_alerts %} con diversos filtros y opciones de ordenación disponibles en la interfaz de usuario. Para obtener más información, consulta "[Establecimiento de prioridades de las {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)" a continuación.

## Establecimiento de prioridades de {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.company_short %} te permite priorizar la corrección de las {% data variables.product.prodname_dependabot_alerts %}. {% ifversion dependabot-most-important-sort-option %} De manera predeterminada, las {% data variables.product.prodname_dependabot_alerts %} están ordenadas por importancia. El criterio de ordenación "Más importante" permite priorizar en qué {% data variables.product.prodname_dependabot_alerts %} centrarse primero. Las alertas se clasifican en función de su posible impacto, posibilidad de acción y relevancia. Nuestro cálculo de priorización está en constante mejora, y contempla factores como la puntuación de CVSS, el ámbito de dependencia y si existen llamadas de función vulnerables relativas a la alerta.

![Captura de pantalla de la lista desplegable Ordenar con la clasificación "Más importante"](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

Además de los filtros disponibles mediante la barra de búsqueda, puedes ordenar y filtrar las {% data variables.product.prodname_dependabot_alerts %} con los menús desplegables situados en la parte superior de la lista de alertas. La barra de búsqueda también permite la búsqueda de texto completo de alertas y avisos de seguridad relacionados. Puedes buscar parte del nombre o la descripción de un aviso de seguridad para devolver las alertas del repositorio relacionadas con ese aviso de seguridad. Por ejemplo, la búsqueda de `yaml.load() API could execute arbitrary code` devolverá {% data variables.product.prodname_dependabot_alerts %} vinculadas a "[PyYAML deserializa de forma no segura las cadenas YAML que llevan a la ejecución arbitraria de código](https://github.com/advisories/GHSA-rprw-h62v-c2w7)", ya que la cadena de búsqueda aparece en la descripción del aviso.

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![Captura de pantalla de los menús de filtro y ordenación en la pestaña {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} Puedes seleccionar un filtro en un menú desplegable de la parte superior de la lista y, después, hacer clic en el filtro que quieres aplicar.
   ![Captura de pantalla del filtro y los menús de ordenación en la pestaña {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## Ecosistemas y manifiestos admitidos para el ámbito de dependencia

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Las alertas de los paquetes enumerados como dependencias de desarrollo se marcan con la etiqueta `Development` en la página {% data variables.product.prodname_dependabot_alerts %} y también están disponibles para filtrar mediante el filtro `scope`.

![Captura de pantalla en la que se muestra la etiqueta "Desarrollo" en la lista de alertas](/assets/images/help/repository/dependabot-alerts-development-label.png)

En la página de detalles de alertas de los paquetes con ámbito de desarrollo se muestra una sección "Etiquetas" que contiene una etiqueta `Development`.

![Captura de pantalla en la que se muestra la sección "Etiquetas" en la página de detalles de la alerta](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## Acerca de la detección de llamadas a funciones vulnerables

{% data reusables.dependabot.vulnerable-calls-beta %}

Cuando {% data variables.product.prodname_dependabot %} indica que el repositorio usa una dependencia vulnerable, tienes que determinar cuáles son las funciones vulnerables y comprobar si las estás usando. Una vez que tengas esta información, puedes determinar la urgencia de actualizar a una versión segura de la dependencia. 

En el caso de los lenguajes admitidos, {% data variables.product.prodname_dependabot %} detecta automáticamente si usas una función vulnerable y agrega la etiqueta "Llamada vulnerable" a las alertas afectadas. Puedes usar esta información en la vista {% data variables.product.prodname_dependabot_alerts %} para evaluar y priorizar el trabajo de corrección de forma más eficaz.

{% note %}

**Nota:** Durante la versión beta, esta característica solo está disponible para los nuevos avisos de Python creados *después* del 14 de abril de 2022 y para un subconjunto de avisos históricos de Python. {% data variables.product.prodname_dotcom %} está trabajando para la reposición de datos en avisos históricos de Python adicionales, que se agregan de forma gradual. Las llamadas vulnerables solo se resaltan en las páginas {% data variables.product.prodname_dependabot_alerts %}.

{% endnote %}

![Captura de pantalla que muestra una alerta con la etiqueta "Llamada vulnerable"](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Puedes filtrar la vista para mostrar solo las alertas en las que {% data variables.product.prodname_dependabot %} detectó al menos una llamada a una función vulnerable mediante el filtro `has:vulnerable-calls` en el campo de búsqueda.

En el caso de las alertas en las que se detectan llamadas vulnerables, la página de detalles de la alerta muestra información adicional:

- Uno o varios bloques de código que muestran dónde se usa la función.
- Anotación que enumera la propia función, con un vínculo a la línea donde se llama a la función.

![Captura de pantalla que muestra la página de detalles de la alerta para una alerta con una etiqueta "Llamada vulnerable"](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Para obtener más información, consulta "[Revisión y corrección de alertas](#reviewing-and-fixing-alerts)" a continuación.

{% endif %}

## Visualización de {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. De forma opcional, para filtrar alertas puedes seleccionar un menú desplegable y luego hacer clic en el filtro que quieres aplicar. También puedes teclear filtros en la barra de búsqueda. Para obtener más información sobre el filtrado y la ordenación de alertas, consulta "[Establecimiento de prioridades de {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)".
{%- ifversion dependabot-bulk-alerts %} ![Captura de pantalla de los menús de filtro y ordenación en la pestaña {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![Captura de pantalla de los menús de filtro y ordenación en la pestaña {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Haz clic en la alerta que quieres ver.{% ifversion dependabot-bulk-alerts %} ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![Alerta seleccionada en la lista de alertas](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Haz clic en la alerta que quieres ver.
  ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## Revisión y corrección de alertas

Es importante asegurarse de que todas las dependencias estén limpias de cualquier punto débil de seguridad. Cuando {% data variables.product.prodname_dependabot %} detecta vulnerabilidades {% ifversion GH-advisory-db-supports-malware %}o malware{% endif %} en las dependencias, debes evaluar el nivel de exposición del proyecto y determinar qué medidas de corrección se deben tomar para proteger la aplicación.

Si hay disponible una versión revisada de la dependencia, puedes generar una solicitud de incorporación de cambios de {% data variables.product.prodname_dependabot %} para actualizar esta dependencia directamente desde una alerta de {% data variables.product.prodname_dependabot %}. Si tienes habilitado {% data variables.product.prodname_dependabot_security_updates %}, la solicitud de incorporación de cambios se puede vincular en la alerta Dependabot. 

En los casos en los que una versión revisada no está disponible o no se puede actualizar a la versión segura, {% data variables.product.prodname_dependabot %} comparte información adicional para ayudarte a determinar los pasos siguientes. Al hacer clic en para ver una alerta de {% data variables.product.prodname_dependabot %}, puedes ver los detalles completos del aviso de seguridad para la dependencia, incluidas las funciones afectadas. Después, puedes comprobar si el código llama a las funciones afectadas. Esta información puede ayudarte a evaluar aún más el nivel de riesgo y determinar las soluciones alternativas o si puedes aceptar el riesgo que representa la asesoría de seguridad.

{% ifversion dependabot-alerts-vulnerable-calls %}

En el caso de los lenguajes admitidos, {% data variables.product.prodname_dependabot %} detecta llamadas a funciones vulnerables. Al ver una alerta etiquetada como "Llamada vulnerable", los detalles incluyen el nombre de la función y un vínculo al código que lo llama. A menudo podrás tomar decisiones basadas en esta información, sin explorar más.

{% endif %}

### Corrección de dependencias vulnerables

1. Consulta los detalles de una alerta. Para obtener más información, consulta "[Visualización de {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (más arriba).
{% ifversion fpt or ghec or ghes %}
1. Si tienes{% data variables.product.prodname_dependabot_security_updates %} habilitado, puede haber un vínculo a una solicitud de incorporación de cambios que corregirá la dependencia. Como alternativa, puedes hacer clic en **Crear actualización de seguridad de {% data variables.product.prodname_dependabot %}** en la parte superior de la página de detalles de la alerta para crear una solicitud de incorporación de cambios.
  ![Botón Create {% data variables.product.prodname_dependabot %} security update](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Opcionalmente, si no usas {% data variables.product.prodname_dependabot_security_updates %}, puedes usar la información de la página para decidir a qué versión de la dependencia actualizar y crear una solicitud de incorporación de cambios para actualizar la dependencia a una versión segura.
{% elsif ghae %}
1. Puedes usar la información de la página para decidir a qué versión de la dependencia actualizar y crear una solicitud de incorporación de cambios para el manifiesto o bloquear el archivo en una versión segura.
{% endif %}
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción. 

{% ifversion fpt or ghec or ghes %} Cada solicitud de incorporación de cambios que envía {% data variables.product.prodname_dependabot %} incluye información sobre los comandos que puedes usar para controlar {% data variables.product.prodname_dependabot %}. Para obtener más información, consulte "[Administración de solicitudes de incorporación de cambios para las actualizaciones de dependencias](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
{% endif %}

## Descarte de {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Sugerencia:** Solo puedes descartar alertas abiertas.
{% endtip %}

Si programas un trabajo extenso para actualizar una dependencia o decides que no es necesario corregir una alerta, puedes descartar la alerta. Descartar las alertas que ya has evaluado facilita la evaluación de nuevas alertas a medida que aparecen.

1. Consulta los detalles de una alerta. Para obtener más información, consulta "[Visualización de dependencias vulnerables](#viewing-dependabot-alerts)" (arriba).
1. Selecciona la lista desplegable "Descartar" y haz clic en un motivo para descartar la alerta.{% ifversion reopen-dependabot-alerts %} Las alertas descartadas sin fijar se pueden volver a abrir más adelante.{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. Opcionalmente, agrega un comentario de descarte. El comentario de descarte se agregará a la escala de tiempo de la alerta y se puede usar como justificación durante el proceso de auditoría y creación de informes. Puedes recuperar o establecer un comentario mediante GraphQL API. El comentario está incluido en el campo `dismissComment`. Para obtener más información, consulta "[{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert)" en la documentación de GraphQL API.
![Captura de pantalla en la que se muestra cómo descartar una alerta mediante la lista desplegable "Descartar", con la opción de agregar un comentario de descarte](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. Haz clic en **Descartar alerta**.
{% else %} ![Elección del motivo para descartar la alerta mediante la lista desplegable "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### Descartar varias alertas al mismo tiempo

1. Visualización de {% data variables.product.prodname_dependabot_alerts %} abiertas. Para obtener más información, consulta "[Visualización de {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Opcionalmente, filtra la lista de alertas seleccionando un menú desplegable y, después, haz clic en el filtro que quieres aplicar. También puedes teclear filtros en la barra de búsqueda.
3. A la izquierda de cada título de alerta, selecciona las alertas que quieres descartar.
   ![Captura de pantalla de alertas abiertas con casillas resaltadas](/assets/images/help/graphs/select-multiple-alerts.png)
4. Opcionalmente, en la parte superior de la lista de alertas, selecciona todas las alertas de la página.
   ![Captura de pantalla de todas las alertas abiertas seleccionadas](/assets/images/help/graphs/select-all-alerts.png)
5. Selecciona la lista desplegable "Descartar alertas" y haz clic en un motivo para descartar las alertas.
   ![Captura de pantalla de la página de alertas abiertas con la lista desplegable "Descartar alertas" resaltada](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Visualización y actualización de alertas cerradas

Puedes ver todas las alertas abiertas y puedes volver a abrir las alertas que se han descartado anteriormente. Las alertas cerradas que ya se han corregido no se pueden volver a abrir.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para ver las alertas cerradas, haga clic en **Closed**.

   {%- ifversion dependabot-bulk-alerts %} ![Captura de pantalla que muestra la opción "Cerrado" ](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![Captura de pantalla que muestra la opción "Cerrado"](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. Haga clic en la alerta que le gustaría ver o actualizar.

   {%- ifversion dependabot-bulk-alerts %} ![Captura de pantalla que muestra una alerta de Dependabot resaltada](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![Captura de pantalla que muestra una alerta de Dependabot resaltada](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. Si la alerta se ha descartado y desea volver a abrirla, también puede hacer clic en **Reopen**. Las alertas que ya se han corregido no se pueden volver a abrir.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} ![Captura de pantalla que muestra el botón "Volver a abrir"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Apertura de nuevo de varias alertas al mismo tiempo

1. Visualización de {% data variables.product.prodname_dependabot_alerts %} cerradas. Para obtener más información, consulta "[Visualización y actualización de alertas cerradas](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (más arriba).
2. A la izquierda de cada título de alerta, selecciona las alertas que quieres reabrir.
   ![Captura de pantalla de alertas cerradas con casillas resaltadas](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Opcionalmente, en la parte superior de la lista de alertas, selecciona todas las alertas cerradas de la página.
   ![Captura de pantalla de alertas cerradas con todas las alertas seleccionadas](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Haz clic en **Volver a abrir** para volver a abrir las alertas. Las alertas que ya se han corregido no se pueden volver a abrir.
   ![Captura de pantalla de alertas cerradas con el botón "Volver a abrir" resaltado](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## Revisión de los registros de auditoría de {% data variables.product.prodname_dependabot_alerts %}

Cuando un miembro de la organización {% ifversion not fpt %}o empresa {% endif %}realiza una acción relacionada con {% data variables.product.prodname_dependabot_alerts %}, puedes revisar las acciones en el registro de auditoría. Para más información sobre el acceso al registro, consulta "[Revisión del registro de auditoría de tu organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}" y "[Acceso al registro de auditoría de tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."{% else %}."{% endif %} {% ifversion dependabot-alerts-audit-log %}

![Captura de pantalla del registro de auditoría que muestra las alertas de Dependabot](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

Los eventos del registro de auditoría de {% data variables.product.prodname_dependabot_alerts %} incluyen detalles como quién realizó la acción, cuál fue la acción y cuándo se realizó la acción. {% ifversion dependabot-alerts-audit-log %}El evento también incluye un vínculo a la propia alerta. Cuando un miembro de la organización descarta una alerta, el evento muestra el motivo de rechazo y el comentario.{% endif %} Para obtener información sobre las acciones de {% data variables.product.prodname_dependabot_alerts %}, consulta la categoría `repository_vulnerability_alert` en "[Revisar el registro de auditoría de tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %}" y "[Eventos de registro de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)."{% else %}."{% endif %}
