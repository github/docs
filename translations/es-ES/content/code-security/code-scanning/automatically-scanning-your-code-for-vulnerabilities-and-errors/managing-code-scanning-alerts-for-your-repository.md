---
title: Administrar las alertas del escaneo de código para tu repositorio
shortTitle: Administra las alertas
intro: 'Desde la vista de seguridad, puedes ver, corregir, descartar o borrar las alertas de las vulnerabilidades o errores potenciales en el código de tu proyecto.'
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
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

## Acerca de las alertas de {% data variables.product.prodname_code_scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para que verifique el código en un repositorio utilizando el análisis predeterminado de {% data variables.product.prodname_codeql %}, un análisis de terceros, o varios tipos de análisis. Cuando se complete el análisis, las alertas resultantes se mostrarán unas junto a otras en la vista de seguridad del repositorio. Los resultados de las herramientas de terceros o de las consultas personalizadas podrían no incluir todas las propiedades que ves para las alertas que se detectan con el análisis predeterminado del {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

Predeterminadamente, el {% data variables.product.prodname_code_scanning %} analiza tu código periódicamente en la rama predeterminada y durante las solicitudes de cambios. Para obtener información acerca de la administración de alertas en una solicitud de cambios, consulta la sección "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Acerca de los detalles de las alertas

Cada alerta resalta un problema en el código y el nombre de la herramienta que lo identificó. Puedes ver la línea de código que activó la alerta, así como las propiedades de dicha alerta, tales como la gravedad{% ifversion fpt or ghes > 3.1 or ghae-issue-4697 or ghec %}, gravedad de seguridad{% endif %} y la naturaleza del problema. Las alertas también te dicen si el problema se introdujo por primera vez. Para las alertas que identificó el análisis de {% data variables.product.prodname_codeql %}, también verás información de cómo arreglar elproblema.

![Ejemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Si configuras el {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_codeql %}, esto también puede detectar problemas de flujo de datos en tu código. El análisis de flujo de datos encuentra problemas de seguridad potenciales en el código, tales como: utilizar los datos de formas no seguras, pasar argumentos peligrosos a las funciones y tener fugas de información sensible.

Cuando {% data variables.product.prodname_code_scanning %} reporta alertas de flujo de datos, {% data variables.product.prodname_dotcom %} te muestra como se mueven los datos a través del código. El {% data variables.product.prodname_code_scanning_capc %} te permite identificar las áreas de tu código que filtran información sensible y que podrían ser el punto de entrada para los ataques que hagan los usuarios malintencionados.

### Acerca de los niveles de gravedad

Los niveles de gravedad de las alertas pueden ser `Error`, `Warning`, o `Note`.

Predeterminadamente, cualquier resultado del escaneo de código con una severidad de `error` causará una falla de verificación. {% ifversion fpt or ghes > 3.1 or ghae-issue-4697 or ghec %}Puedes especificar el nivel de gravedad en el cual deberían fallar las solicitudes de cambios que activan las alertas del escaneo de código. Para obtener más información, consulta la sección "[Definir las gravedades que ocasionan un fallo en la verificación de las solicitudes de cambios](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4697 or ghec %}
### Acerca de los niveles de gravedad

El {% data variables.product.prodname_code_scanning_capc %} muestra los niveles de gravedad de seguridad para las alertas que generan las consultas de seguridad. Los niveles de seguridad pueden ser `Critical`, `High`, `Medium` o `Low`.

Para calcular la gravedad de seguridad de una alerta, utilizamos los datos del Sistema de Puntuación para Vulnerabilidades Comunes (CVSS). El CVSS es un marco de trabajo de código abierto para comunicar las características y gravedad de las vulnerabilidades de software y otros productos de seguridad lo utilizan habitualmente para puntuar las alertas. Para obtener más información sobre cómo se calculan los niveles de gravedad, consulta [la publicación del blog](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/).

Predeterminadamente, cualquier resultado del escaneo de código con una gravedad de seguridad `Critical` o `High` ocasionarán un fallo de verificación. Puedes especificar qué nivel de gravedad de seguridad para de los resultados del escaneo de código deberían ocasionar una falla de verificación. Para obtener más información, consulta la sección "[Definir las gravedades que ocasionan un fallo en la verificación de las solicitudes de cambios](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".{% endif %}

### Acerca de las etiquetas para las alertas que no se encuentran en el código de la aplicación

{% data variables.product.product_name %} asigna una etiqueta de categoría a las alertas que no se encuentran en el código de aplicación. La etiqueta se relaciona con la ubicación de la alerta.

- **Generado**: Código que genera el proceso de compilación
- **Prueba**: Código de prueba
- **Librería**: Librería o código de terceros
- **Documentación**: Documentación

El {% data variables.product.prodname_code_scanning_capc %} categoriza los archivos por sus rutas. No puedes categorizar los archivos de origen manualmente.

Aquí tienes un ejemplo de la lista de alertas del {% data variables.product.prodname_code_scanning %} para una alerta que se marcó como ocurrente en código de librería.

![Alerta de librería del escaneo de código en la lista](/assets/images/help/repository/code-scanning-library-alert-index.png)

En la página de alertas, puedes ver si la ruta de archivo se marca como código de librería (etiqueta `Library`).

![Detalles de la alerta de librería del escaneo de código](/assets/images/help/repository/code-scanning-library-alert-show.png)

## Visualizar las alertas de un repositorio

Cualquiera con permisos de escritura en un repositorio puede ver las anotaciones del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios. Para obtener màs informaciònPara obtener más información, consulta la sección "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de extracción](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Necesitas permisos de escritura para ver un resumen de todas las alertas de un repositorio en la pestaña de **Seguridad**.

Predeterminadamente, la página de alertas del escaneo de código se filtra para mostrar las alertas únicamente para la rama predeterminada del repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
1. Opcionalmente, utiliza la caja de búsqueda de texto libre o los menús desplegables para filtrar las alertas. Por ejemplo, puedes filtrar por la herramienta que se utilizó para identificar las alertas. ![Filter by tool](/assets/images/help/repository/code-scanning-filter-by-tool.png){% endif %}
1. Debajo de "{% data variables.product.prodname_code_scanning_capc %}", da clic en la alerta que quisieras explorar.
{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
  ![Resumen de alertas](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![Lista de alertas de {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Opcionalmente, si la alerta resalta un problema con el flujo de datos, da clic en **Mostrar rutas** para mostrar la ruta desde la fuente de datos hacia el consumidor de datos en donde se utiliza. ![El enlace de "Mostrar rutas" en una alerta](/assets/images/help/repository/code-scanning-show-paths.png)
1. Las alertas del análisis de {% data variables.product.prodname_codeql %} incluyen una descripción del problema. Da clic en **Mostrar más** para obtener orientación sobre cómo arreglar tu código. ![Detalles de una alerta](/assets/images/help/repository/code-scanning-alert-details.png)

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
{% note %}

**Nota:** Para realizar el análisis del {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}, puedes ver la información sobre la última ejecución en un encabezado en la parte superior de la lisa de alertas del {% data variables.product.prodname_code_scanning %} para el repositorio.

Por ejemplo, puedes ver cuándo se ejecutó el último escaneo, la cantidad de líneas de código que se analizó en comparación con la cantidad de líneas de código totales en tu repositorio y la cantidad total de alertas qeu se generaron.  ![Letrero de IU](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}
{% endif %}

## Filtrar las alertas del {% data variables.product.prodname_code_scanning %}

Puedes filtrar las alertas que se muestran en la vista de alertas del {% data variables.product.prodname_code_scanning %}. Esto es útil si hay muchas alertas, ya que puedes enfocarte en un tipo particular de estas. Hay algunos filtros predefinidos y rangos de palabras clave que puedes utilizar para refinar la lista de alertas que se muestran.

- Para utilizar un filtro predefinido, haz clic en **Filtros** o en un filtro que se muestre en el encabezado de la lista de alertas y elige un filtro de la lista desplegable.
  {% ifversion fpt or ghes > 3.0 or ghec %}![Filtros predefinidos](/assets/images/help/repository/code-scanning-predefined-filters.png)
  {% else %}![Predefined filters](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Para utilizar una palabra clave, teclea directamente en los filtros de la caja de texto o:
  1. Haz clic en la caja de texto de filtros para que se muestre una lista de palabras clave de filtro disponibles.
  2. Haz clic en la palabra clave que quieras utilizar y luego elige un valor de la lista desplegable. ![Lista de filtros de palabra clave](/assets/images/help/repository/code-scanning-filter-keywords.png)

El beneficio de utilizar filtros de palabra clave es que solo los valores con resultados se muestran en las listas desplegables. Esto hace más fácil el evitar configurar filtros que no encuentran resultados.

Si ingresas filtros múltiples, la vista te mostrará las alertas que empatan con _todos_ ellos. Por ejemplo, `is:closed severity:high branch:main` solo mostrará las aletas de gravedad alta cerradas que estén presentes en la rama `main`. La excepción son filtros que se relacionan a los refs (`ref`, `branch` y `pr`): `is:open branch:main branch:next` que te mostrarán alertas abiertas tanto de la rama `main` como de la `next`.

### Restringir los resultados únicamente al código de la aplicación

Puedes utilizar el filtro de "Solo alertas en el código de la aplicación" o la palabra clave y el valor `autofilter:true` para restringir a las alertas en el código de aplicación. Consulta la sección "[Acerca de las etiquetas para las alertas que no estén en el código de la aplicación](#about-labels-for-alerts-that-are-not-found-in-application-code)" para obtener más información sobre los tipos de código que no estén en el código de la aplicación.

{% ifversion fpt or ghes > 3.1 or ghec %}

## Buscar las alertas del {% data variables.product.prodname_code_scanning %}

Puedes buscar la lista de alertas. Esto es útil si hay una gran cantidad de alertas en tu repositorio o si no sabes el nombre exacto de una alerta, por ejemplo. {% data variables.product.product_name %} realiza la búsqueda de texto gratuita a través de:
- El nombre de la alerta
- La descripción de la alerta
- Los detalles de la alerta (esto también incluye la información qeu se esconde de la vista predeterminada en la sección retraible de **Mostrar más**)

 ![La información de la alerta que se utiliza en las búsquedas](/assets/images/help/repository/code-scanning-free-text-search-areas.png)

| Búsqueda compatible                                            | Ejemplo de sintaxis | Resultados                                                                   |
| -------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------- |
| Búsqueda de palabra sencilla                                   | `injection`         | Devuelve todas las alertas que contienen la palabra `injection`              |
| Búsqueda de palabras múltiples                                 | `sql injection`     | Devuelve todas las alertas que contienen la palabra `sql` o `injection`      |
| Búsqueda de coincidencia exacta</br>(utilizar comillas dobles) | `"sql injection"`   | Devuelve todas las alertas que contienen la frase exacta `sql injection`     |
| Búsqueda con OR                                                | `sql OR injection`  | Devuelve todas las alertas que contienen la palabra `sql` o `injection`      |
| Búsqueda con AND                                               | `sql AND injection` | Devuelve todas las alertas que contienen ambas palabras: `sql` e `injection` |

{% tip %}

**Tips:**
- La búsuqeda de palabras múltiples es equivalente auna búsqueda con OR.
- La búsqueda con AND devolverá resultados en donde los términos de búsqueda se encuentren _en cualquier lugar_ y en cualquier órden en el nombre, descripción o detalles de la alerta.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. A la derecha de los menús desplegables de **Filtros**, teclea las palabras clave a buscar en la caja de búsqueda de texto gratuita. ![La caja de búsqueda de texto gratuita](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Presiona <kbd>return</kbd>. El listado de alerta contendrá las alertas abiertas del {% data variables.product.prodname_code_scanning %} que empaten con tus criterios de búsqueda.

{% endif %}

## Arreglar una alerta

Cualquiera con permisos de escritura en un repositorio puede arreglar una alerta si confirma una corrección en el código. Si el repositorio tiene programado un {% data variables.product.prodname_code_scanning %} para ejecutarse en las solicitudes de cambios, es mejor levantar una solicitud de cambios con tu corrección. Esto activará el análisis del {% data variables.product.prodname_code_scanning %} en los cambios y probará que tu arreglo no introduciría ningún problema nuevo. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" y "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Si tienes permisos de escritura para un repositorio, puedes ver las alertas arregladas si ves el resumen de las alertas y das clic en **Cerrado**. Para obtener más información, consulta la sección "[Visualizar las alertas de un repositorio](#viewing-the-alerts-for-a-repository)". La lista de "Cerrado" muestra las alertas arregladas y las que los usuarios han descartado.

Puedes utilizar{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %} la búsqueda gratuita por texto o {% endif %} los filtros para mostrar un subconjunto de alertas y luego, a su vez, marcar todas las alertas coincidentes como cerradas.

Las alertas pueden arreglarse en una rama pero no en alguna otra. Puedes utilizar el menú desplegable de "Rama", en el resumen de las alertas, para verificar si una alerta se arregló en una rama en particular.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
![Filtrar alertas por rama](/assets/images/help/repository/code-scanning-branch-filter.png)
{% else %}
![Filtrar alertas por rama](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)
{% endif %}

## Descartar o borrar las alertas

Hay dos formas de cerrar una alerta. Puedes arreglar el problema en el código, o puedes descartar la alerta. Como alternativa, si tienes permisos adminsitrativos en el repositorio, puedes borrar las alertas. Borrar las alertas es útil en situaciones en donde configuraste una herramienta del {% data variables.product.prodname_code_scanning %} y luego decidiste eliminarla, o donde configuraste el análisis de {% data variables.product.prodname_codeql %} con un conjunto más grande de consultas que quieres seguir utilizando y después eliminaste algunas de ellas de la herramienta. En ambos casos, el borrar las alertas te permite limpiar tus resultados del {% data variables.product.prodname_code_scanning %}. Puedes borrar las alertas de la lista de resumen dentro de la pestaña de **Seguridad**.

El descartar una alerta es una forma de cerrar aquellas que no crees que necesiten arreglo. {% data reusables.code-scanning.close-alert-examples %} Puedes eliminar alertas desde las anotaciones del {% data variables.product.prodname_code_scanning %} en el código, o desde la lista de resumen dentro de la pestaña de **Seguridad**.

Cuando descartas una alerta:

- Se descarta en todas las ramas.
- La alerta se elimina de la cantidad de alertas actuales para tu proyecto.
- La alerta se mueve a la lista de "Cerrado" en el resumen de alertas, desde donde puedes volver a abrirla en caso de que lo necesites.
- La razón por la cual cerraste la alerta se registra.
- La siguiente vez que se ejecute el {% data variables.product.prodname_code_scanning %}, este código no volverá a generar una alerta.

Cuando borras una alerta:

- Se borra en todas las ramas.
- La alerta se elimina de la cantidad de alertas actuales para tu proyecto.
- _No_ seagrega a la lista de "Cerrado" en el resumen de las alertas.
- Si el código que generó la alerta se mantiene tal cual, y se ejecuta nuevamente la misma herramienta del {% data variables.product.prodname_code_scanning %} sin ningún cambio de configuración, la alerta se mostrará nuevamente en los resultados de tu análisis.

Para descartar o borrar una alerta:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Si tienes permisos administrativos en el repositorio y quieres borrar las alertas para esta herramienta del {% data variables.product.prodname_code_scanning %}, selecciona algunas o todas las casillas de verificación y da clic en **Borrar**.

   ![Borrar alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, puedes utilizar {% ifversion fpt or ghes > 3.1 or ghae-next or ghec %} la búsqueda gratuita por texto o{% endif %} los filtros para mostrar un subconjunto de alertas y luego borrar todas las alertas coincidentes a la vez. Por ejemplo, si eliminaste una consulta desde el análisis de {% data variables.product.prodname_codeql %}, puedes utilizar el filtro de "Regla" para listar solo las alertas para esa consulta y luego seleccionar y borrar todas esas alertas.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
  ![Filtrar alertas por regla](/assets/images/help/repository/code-scanning-filter-by-rule.png)
{% else %}
  ![Filtrar alertas por regla](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)
{% endif %}

1. Si quieres descartar una alerta, es importante explorarla primero para que puedas elegir la razón correcta para descartarla. Da clic en la alerta que quisieras explorar.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
   ![Abrir una alerta desde la lista de sumario](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![Lista de alertas de {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Revisa la alerta y da clic en **Descartar** y elije una razón para cerrarla. ![Elegir una razón para descartar una alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Descartar varias alertas al mismo tiempo

Si un proyecto tiene varias alertas que quieras descartar por la misma razón, puedes descartarlas por lote desde el resúmen de las alertas. Habitualmente quieres filtrar la lista y luego descartar todas las alertas coincidentes. Por ejemplo, puede que quieras descartar todas las alertas actuales del proyecto que se hayan etiquetado para una vulnerabilidad de Enumeración de Debilidades (CWE, por sus siglas en inglés) Común en particular.

## Leer más

- "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Acerca de la integración con {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
