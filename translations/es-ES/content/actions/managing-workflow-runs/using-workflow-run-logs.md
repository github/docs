---
title: Utilizar bitácoras de ejecución de flujo de trabajo
intro: 'Puedes ver, buscar y descargar las bitácoras de cada job en una ejecución de flujo de trabajo.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Puedes ver si una ejecución de flujo de trabajo está en curso o completa desde la página de ejecución del flujo de trabajo. Debes haber iniciado sesión en una cuenta de {% data variables.product.prodname_dotcom %} para ver la información de ejecución del flujo de trabajo, incluyendo los casos de repositorios públicos. Para obtener más información, consulta "[Permisos de acceso en GitHub](/articles/access-permissions-on-github)".

Si la ejecución está completa, puedes ver si el resultado fue exitoso, fallido, cancelado o neutral. Si la ejecución falló, puedes ver y buscar en los registros de construcción para diagnosticar la falla y volver a ejecutar el flujo de trabajo. También puedes ver los minutos de ejecución facturables para jobs, o descargar bitácoras y artefactos de compilación.

{% data variables.product.prodname_actions %} usa la API de verificaciones para generar estados, resultados y registros para un flujo de trabajo. {% data variables.product.prodname_dotcom %} crea una nueva comprobación de suite para cada ejecución de flujo de trabajo. La comprobación de suite contiene una ejecución de comprobación para cada trabajo en el flujo de trabajo, y cada trabajo incluye diferentes pasos. {% data variables.product.prodname_actions %} se ejecutan como un paso en un flujo de trabajo. Para obtener más información acerca de la API de Verificaciones, consulta la sección "[Verificaciones](/rest/reference/checks)".

{% data reusables.github-actions.invalid-workflow-files %}

### Ver registros para diagnosticar fallas

Si falla la ejecución de su flujo de trabajo, puedes ver qué paso provocó el error y revisar los registros de construcción del paso que falló para solucionar el problema. Puedes ver el tiempo que demoró cada paso en ejecutarse. También puedes copiar un enlace permanente a una línea específica en el archivo de registro para compartir con tu equipo. {% data reusables.repositories.permissions-statement-read %}

Adicionalmente a los pasos que se configuraron en el archivo de flujo de trabajo, {% data variables.product.prodname_dotcom %} agrega dos pasos adicionales a cada job para configurar y completar la ejecución del flujo de trabajo. Estos pasos se registran en la ejecución del flujo de trabajo con los nombres de "Set up job" y "Complete job".

Para jobs que se ejecutan en ejecutores hospedados en {% data variables.product.prodname_dotcom %}, "Set up job" registra los detalles del ambiente virtual del ejecutor, e incluye un enlace a la lista de herramientas pre-instaladas que estuvieron presentes en la máquina del ejecutor.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% data reusables.repositories.view-failed-job-results-superlinter %}
{% data reusables.repositories.view-specific-line-superlinter %}

### Buscar registros

Puedes buscar en los registros de construcción un paso en particular. Cuando buscas registros, solo los pasos ampliados se incluyen en los resultados. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. En el cuadro de búsqueda **Buscar registros** en la esquina superior derecha de la salida del registro, escribe una consulta de búsqueda.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Cuadro de búsqueda para buscar registros](/assets/images/help/repository/search-log-box-updated-2.png)
{% else %}
  ![Cuadro de búsqueda para buscar registros](/assets/images/help/repository/search-log-box-updated.png)
{% endif %}
{% else %}
1. Para expandir cada paso que deseas incluir en tu búsqueda, haz clic en el paso. ![Nombre del paso](/assets/images/help/repository/failed-check-step.png)
1. En el cuadro de búsqueda **Buscar registros** en la esquina superior derecha de la salida del registro, escribe una consulta de búsqueda. ![Cuadro de búsqueda para buscar registros](/assets/images/help/repository/search-log-box.png)
{% endif %}

### Descargar bitácoras

Puedes descargar los archivos de bitácora desde tu ejecución de flujo de trabajo. También puedes descargar los artefactos de un flujo de trabajo. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)." {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. En la esquina superior derecha, da clic en
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}{% octicon "gear" aria-label="The gear icon" %}{% else %}{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}{% endif %} y selecciona **Desgargar archivo de bitácora**.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Menú desplegable para descargar registros](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  {% else %}
  ![Menú desplegable para descargar registros](/assets/images/help/repository/download-logs-drop-down-updated.png)
  {% endif %}
{% else %}
1. En la esquina superior derecha, da clic en
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Descargar archivo de bitácora**.
  ![Menú desplegable para descargar registros](/assets/images/help/repository/download-logs-drop-down.png)
{% endif %}

### Borrar bitácoras

Puedes borrar los archivos de bitácora de tu ejecución de flujo de trabajo. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. En la esquina superior derecha, da clic en
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
 ![Icono de Kebab horizontal](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    {% else %}
    ![Icono de Kebab horizontal](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated.png)
    {% endif %}
2. Para borrar los archivos de bitácora, da clic en el botón **Borrar todas las bitácoras** y revisa el aviso de confirmación.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Borrar todas las bitácoras](/assets/images/help/repository/delete-all-logs-updated-2.png)
  {% else %}
  ![Borrar todas las bitácoras](/assets/images/help/repository/delete-all-logs-updated.png)
  {% endif %}
Después de borrar las bitácoras, el botón de **Borrar todas las bitácoras** se elimina para indicar que ya no quedan archivos en la ejecución de flujo de trabajo.
{% else %}
1. En la esquina superior derecha, da clic en el {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Icono de Kebab horizontal](/assets/images/help/repository/workflow-run-kebab-horizontal-icon.png)
2. Para borrar los archivos de bitácora, da clic en el botón **Borrar todas las bitácoras** y revisa el aviso de confirmación. ![Delete all logs](/assets/images/help/repository/delete-all-logs.png) Después de que se hayan borrado las bitácoras, el botón de **Borrar todas las bitácoras** se elimina para indicar que no queda ningún archivo de bitácora en la ejecución del flujo de trabajo.
{% endif %}
