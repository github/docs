---
title: Administración de alertas de examen de código para el repositorio
shortTitle: Manage alerts
intro: 'En la vista de seguridad, {% ifversion delete-code-scanning-alerts %}puedes ver, corregir, descartar o eliminar alertas {% else %}puedes ver, corregir o descartar alertas{% endif %} de posibles vulnerabilidades o errores en el código del proyecto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693331'
---
{% data reusables.code-scanning.beta %}

## Visualizar las alertas de un repositorio

Cualquiera con permisos de escritura en un repositorio puede ver las anotaciones del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios. Para más información, vea "[Evaluación de prioridades de alertas de {% data variables.product.prodname_code_scanning %} en solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Necesita permiso de escritura para ver un resumen de todas las alertas de un repositorio en la pestaña **Seguridad**.

Predeterminadamente, la página de alertas del escaneo de código se filtra para mostrar las alertas únicamente para la rama predeterminada del repositorio.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Opcionalmente, utiliza la caja de búsqueda de texto libre o los menús desplegables para filtrar las alertas. Por ejemplo, puedes filtrar por la herramienta que se utilizó para identificar las alertas.
   ![Filtrado por herramienta](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![Resumen de alertas](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![Sección "Ramas afectadas" en una alerta](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. Opcionalmente, si la alerta resalta un problema con el flujo de datos, haga clic en **Mostrar rutas** para mostrar la ruta desde el origen de datos hacia el receptor en el que se usa.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Vínculo "Mostrar rutas" en una alerta](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![The "Show paths" link on an alert](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. Las alertas del análisis de {% data variables.product.prodname_codeql %} incluyen una descripción del problema. Haga clic en **Mostrar más** para obtener instrucciones sobre cómo corregir el código.
   ![Detalles para una alerta](/assets/images/help/repository/code-scanning-alert-details.png)

Para más información, vea "[Acerca de las alertas de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)".

{% note %}

**Nota:** Para realizar el análisis de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}, puede ver información sobre la última ejecución en un encabezado en la parte superior de la lisa de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio. 

Por ejemplo, puedes ver cuándo se ejecutó el último escaneo, la cantidad de líneas de código que se analizó en comparación con la cantidad de líneas de código totales en tu repositorio y la cantidad total de alertas qeu se generaron.
  ![Banner de interfaz de usuario](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## Filtrar las alertas del {% data variables.product.prodname_code_scanning %}

Puedes filtrar las alertas que se muestran en la vista de alertas del {% data variables.product.prodname_code_scanning %}. Esto es útil si hay muchas alertas, ya que puedes enfocarte en un tipo particular de estas. Hay algunos filtros predefinidos y rangos de palabras clave que puedes utilizar para refinar la lista de alertas que se muestran. 

- Para usar un filtro predefinido, haga clic en **Filtros** o en un filtro que se muestre en el encabezado de la lista de alertas y seleccione un filtro en la lista desplegable.
  {% ifversion fpt or ghes or ghec %}![Filtros predefinidos](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![Predefined filters](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Para utilizar una palabra clave, teclea directamente en los filtros de la caja de texto o:
  1. Haz clic en la caja de texto de filtros para que se muestre una lista de palabras clave de filtro disponibles.
  2. Haz clic en la palabra clave que quieras utilizar y luego elige un valor de la lista desplegable.
  ![Lista de filtros de palabra clave](/assets/images/help/repository/code-scanning-filter-keywords.png)

El beneficio de utilizar filtros de palabra clave es que solo los valores con resultados se muestran en las listas desplegables. Esto hace más fácil el evitar configurar filtros que no encuentran resultados.

Si escribe varios filtros, en la vista se mostrarán alertas que coincidan _con todos_ ellos. Por ejemplo, `is:closed severity:high branch:main` solo mostrará alertas de gravedad alta cerradas que están presentes en la rama `main`. La excepción son los filtros relacionados con las referencias (`ref`, `branch` y `pr`): `is:open branch:main branch:next`mostrará las alertas abiertas tanto de la rama `main` como de la rama `next`.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

Puede usar el prefijo `-` en el filtro `tag` para excluir los resultados con esa etiqueta. Por ejemplo, `-tag:style` solo muestra alertas que no tienen la etiqueta `style`{% ifversion codeql-ml-queries %} y `-tag:experimental` omitirá todas las alertas experimentales. Para más información, vea "[Acerca de las alertas de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".{% else %}.{% endif %}

{% endif %}

### Restringir los resultados únicamente al código de la aplicación

Puede usar el filtro "Solo alertas en el código de la aplicación" o la palabra clave `autofilter:true` y el valor para restringir a las alertas en el código de aplicación. Vea "[Acerca de las etiquetas para las alertas que no están en el código de aplicación](#about-labels-for-alerts-that-are-not-found-in-application-code)" anteriormente para más información sobre los tipos de código que no son código de aplicación.

{% ifversion fpt or ghes or ghec %}

## Buscar las alertas del {% data variables.product.prodname_code_scanning %}

Puedes buscar la lista de alertas. Esto es útil si hay una gran cantidad de alertas en tu repositorio o si no sabes el nombre exacto de una alerta, por ejemplo. {% data variables.product.product_name %} realiza la búsqueda de texto gratuita a través de:
- Nombre de la alerta
- Los detalles de la alerta (que también incluye la información oculta de la vista de forma predeterminada en la sección **Mostrar más** contraíble) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![La información de alerta usada en las búsquedas](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![The alert information used in searches](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| Búsqueda compatible | Ejemplo de sintaxis | Results |
| ---- | ---- | ---- |
| Búsqueda de palabra sencilla | `injection` | Devuelve todas las alertas que contienen la palabra `injection` |
| Búsqueda de palabras múltiples | `sql injection` | Devuelve todas las alertas que contienen `sql` o `injection` |
| Búsqueda de coincidencias exactas</br>(use comillas dobles) |  `"sql injection"` | Devuelve todas las alertas que contienen la frase exacta `sql injection` |
| Búsqueda con OR | `sql OR injection` | Devuelve todas las alertas que contienen `sql` o `injection` |
| Búsqueda con AND | `sql AND injection` | Devuelve todas las alertas que contienen las palabras `sql` y `injection` | 

{% tip %}

**Sugerencias:** 
- La búsuqeda de palabras múltiples es equivalente auna búsqueda con OR.
- La búsqueda con AND devolverá resultados en los que los términos de la búsqueda se encuentren en _cualquier parte_, en cualquier orden en el nombre o los detalles de la alerta.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. A la derecha de los menús desplegables **Filtros**, escriba las palabras clave que se van a buscar en el cuadro de búsqueda de texto libre.
  ![Cuadro de búsqueda de texto libre](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Presione <kbd>Entrar</kbd>. El listado de alerta contendrá las alertas abiertas del {% data variables.product.prodname_code_scanning %} que empaten con tus criterios de búsqueda.

{% endif %}

{% ifversion code-scanning-task-lists %}
## Rastrar alertas del {% data variables.product.prodname_code_scanning %} en las propuestas

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Arreglar una alerta

Cualquiera con permisos de escritura en un repositorio puede arreglar una alerta si confirma una corrección en el código. Si el repositorio tiene programado un {% data variables.product.prodname_code_scanning %} para ejecutarse en las solicitudes de cambios, es mejor levantar una solicitud de cambios con tu corrección. Esto activará el análisis del {% data variables.product.prodname_code_scanning %} en los cambios y probará que tu arreglo no introduciría ningún problema nuevo. Para más información vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" y "[Evaluación de prioridades de las alertas de {% data variables.product.prodname_code_scanning %} en las solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Si tiene permisos de escritura para un repositorio, puede ver las alertas corregidas si examina el resumen de las alertas y hace clic en **Cerradas**. Para más información, vea "[Visualización de las alertas de un repositorio](#viewing-the-alerts-for-a-repository)". La lista de "Cerrado" muestra las alertas arregladas y las que los usuarios han descartado.

Puedes usar la búsqueda de texto libre o los filtros para mostrar un subconjunto de alertas y, después, marcar como cerradas todas las alertas que coincidan. 

Las alertas pueden arreglarse en una rama pero no en alguna otra. Puedes utilizar el filtro "Branch" en el resumen de las alertas para verificar si una alerta está fija en una rama particular.

![Filtrar alertas por rama](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**Nota:** Si ejecuta el análisis de código con varias configuraciones, en ocasiones una alerta tendrá varios orígenes de análisis. A menos que ejecute todas las configuraciones con regularidad, es posible que vea alertas que se han corregido en un origen de análisis, pero no en otro. Para más información, vea "[Acerca de los orígenes de análisis](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins)".

{% endnote %} {% endif %}
## Descarte {% ifversion delete-code-scanning-alerts %}o eliminación {% endif %}de alertas

Hay dos formas de cerrar una alerta. Puedes arreglar el problema en el código, o puedes descartar la alerta. {% ifversion delete-code-scanning-alerts %}Como alternativa, si tienes permisos de administrador para el repositorio, puedes eliminar alertas. Borrar las alertas es útil en situaciones en donde configuraste una herramienta del {% data variables.product.prodname_code_scanning %} y luego decidiste eliminarla, o donde configuraste el análisis de {% data variables.product.prodname_codeql %} con un conjunto más grande de consultas que quieres seguir utilizando y después eliminaste algunas de ellas de la herramienta. En ambos casos, el borrar las alertas te permite limpiar tus resultados del {% data variables.product.prodname_code_scanning %}. Puedes eliminar alertas de la lista de resumen dentro de la pestaña **Seguridad**.{% endif %}

Descartar una alerta es una manera de cerrar una alerta que considere que no es necesario solucionar. {% data reusables.code-scanning.close-alert-examples %} Puede eliminar alertas desde las anotaciones de {% data variables.product.prodname_code_scanning %} en el código, o bien desde la lista de resumen dentro de la pestaña **Seguridad**.

Cuando descartas una alerta:

- Se descarta en todas las ramas.
- La alerta se elimina de la cantidad de alertas actuales para tu proyecto.
- La alerta se mueve a la lista de "Cerrado" en el resumen de alertas, desde donde puedes volver a abrirla en caso de que lo necesites.
- Se registra el motivo por el que cerraste la alerta.{% ifversion comment-dismissed-code-scanning-alert %} 
- Opcionalmente, puedes comentar un descarte para registrar el contexto del descarte de una alerta.{% endif %}
- La siguiente vez que se ejecute el {% data variables.product.prodname_code_scanning %}, este código no volverá a generar una alerta.

{% ifversion delete-code-scanning-alerts %}Al eliminar una alerta:

- Se borra en todas las ramas.
- La alerta se elimina de la cantidad de alertas actuales para tu proyecto.
- _No_ se agrega a la lista "Cerradas" del resumen de alertas.
- Si el código que ha generado la alerta se mantiene tal cual, y se ejecuta la misma herramienta otra vez sin ningún cambio de configuración {% data variables.product.prodname_code_scanning %}, la alerta se mostrará otra vez en los resultados de tu análisis.{% endif %}

Para descartar {% ifversion delete-code-scanning-alerts %}o eliminar {% endif %}alertas:

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. Si tiene permisos de administrador en el repositorio y quiere eliminar las alertas para esta herramienta de {% data variables.product.prodname_code_scanning %}, seleccione algunas o todas las casillas, y haga clic en **Eliminar**.

   ![Borrar alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, puedes usar la búsqueda de texto libre o los filtros para mostrar un subconjunto de alertas y, después, borrar simultáneamente todas las alertas que coincidan. Por ejemplo, si eliminaste una consulta desde el análisis de {% data variables.product.prodname_codeql %}, puedes utilizar el filtro de "Regla" para listar solo las alertas para esa consulta y luego seleccionar y borrar todas esas alertas.

{% ifversion ghes or ghae %} ![Filtrado de alertas por regla](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![Filtrado de alertas por regla](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. Si quieres descartar una alerta, es importante explorarla primero para que puedas elegir la razón correcta para descartarla. Da clic en la alerta que quisieras explorar.
![Abre una alerta de la lista de resumen ](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. Revisa la alerta y, después, haz clic en **Descartar alertar** y elige un motivo para cerrar la alerta. 
  ![Captura de pantalla de la alerta de análisis de código con una lista desplegable resaltada para seleccionar el motivo del descarte](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. Revise la alerta y, después, haga clic en **Descartar** y elija un motivo para cerrar la alerta.
  ![Elegir un motivo para descartar una alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Descartar varias alertas al mismo tiempo

Si un proyecto tiene varias alertas que quieras descartar por la misma razón, puedes descartarlas por lote desde el resúmen de las alertas. Habitualmente quieres filtrar la lista y luego descartar todas las alertas coincidentes. Por ejemplo, puede que quieras descartar todas las alertas actuales del proyecto que se hayan etiquetado para una vulnerabilidad de Enumeración de Debilidades (CWE, por sus siglas en inglés) Común en particular.

## Información adicional

- "[Evaluación de prioridades de alertas de {% data variables.product.prodname_code_scanning %} en solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Acerca de la integración con {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
