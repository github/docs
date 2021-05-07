---
title: Administrar las alertas del escaneo de código para tu repositorio
shortTitle: Administrar alertas
intro: 'Desde la vista de seguridad, puedes ver, arreglar, {% if currentVersion == "enterprise-server@2.22" %}o cerrar{% else %}descartar, o borrar{% endif %} las alertas para las vulnerabilidades potenciales o para los errores en el código de tus proyectos.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
---

{% data reusables.code-scanning.beta %}

### Acerca de las alertas de {% data variables.product.prodname_code_scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para que verifique el código en un repositorio utilizando el análisis predeterminado de {% data variables.product.prodname_codeql %}, un análisis de terceros, o varios tipos de análisis. Cuando se complete el análisis, las alertas resultantes se mostrarán unas junto a otras en la vista de seguridad del repositorio. Los resultados de las herramientas de terceros o de las consultas personalizadas podrían no incluir todas las propiedades que ves para las alertas que se detectan con el análisis predeterminado del {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)".

Predeterminadamente, el {% data variables.product.prodname_code_scanning %} analiza tu código periódicamente en la rama predeterminada y durante las solicitudes de cambios. Para obtener información acerca de la administración de alertas en una solicitud de cambios, consulta la sección "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Acerca de los detalles de las alertas

Cada alerta resalta un problema en el código y el nombre de la herramienta que lo identificó. Puedes ver la línea de código que activó la alerta, así como las propiedades de la misma, tales como la severidad y la naturaleza de dicho problema. Las alertas también te dicen si el problema se introdujo por primera vez. Para las alertas que identificó el análisis de {% data variables.product.prodname_codeql %}, también verás información de cómo arreglar elproblema.

![Ejemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Si configuras el {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_codeql %}, esto también puede detectar problemas de flujo de datos en tu código. El análisis de flujo de datos encuentra problemas de seguridad potenciales en el código, tales como: utilizar los datos de formas no seguras, pasar argumentos peligrosos a las funciones y tener fugas de información sensible.

Cuando {% data variables.product.prodname_code_scanning %} reporta alertas de flujo de datos, {% data variables.product.prodname_dotcom %} te muestra como se mueven los datos a través del código. El {% data variables.product.prodname_code_scanning_capc %} te permite identificar las áreas de tu código que filtran información sensible y que podrían ser el punto de entrada para los ataques que hagan los usuarios malintencionados.

### Visualizar las alertas de un repositorio

Cualquiera con permisos de escritura en un repositorio puede ver las anotaciones del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios. Para obtener màs informaciònPara obtener más información, consulta la sección "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de extracción](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

Necesitas permisos de escritura para ver un resumen de todas las alertas de un repositorio en la pestaña de **Seguridad**. Predeterminadamente, las alertas se muestran para la rama predeterminada.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Debajo de "{% data variables.product.prodname_code_scanning_capc %}", da clic en la alerta que quisieras explorar. ![Resumen de alertas](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
1. Opcionalmente, si la alerta resalta un problema con el flujo de datos, da clic en **Mostrar rutas** para mostrar la ruta desde la fuente de datos hacia el consumidor de datos en donde se utiliza. ![El enlace de "Mostrar rutas" en una alerta](/assets/images/help/repository/code-scanning-show-paths.png)
1. Las alertas del análisis de {% data variables.product.prodname_codeql %} incluyen una descripción del problema. Da clic en **Mostrar más** para obtener orientación sobre cómo arreglar tu código. ![Detalles de una alerta](/assets/images/help/repository/code-scanning-alert-details.png)

### Arreglar una alerta

Cualquiera con permisos de escritura en un repositorio puede arreglar una alerta si confirma una corrección en el código. Si el repositorio tiene programado un {% data variables.product.prodname_code_scanning %} para ejecutarse en las solicitudes de cambios, es mejor levantar una solicitud de cambios con tu corrección. Esto activará el análisis del {% data variables.product.prodname_code_scanning %} en los cambios y probará que tu arreglo no introduciría ningún problema nuevo. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" y "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

Si tienes permisos de escritura para un repositorio, puedes ver las alertas arregladas si ves el resumen de las alertas y das clic en **Cerrado**. Para obtener más información, consulta la sección "[Visualizar las alertas de un repositorio](#viewing-the-alerts-for-a-repository)". La lista de "Cerrados" muestra las alertas solucionadas y aquellas que los usuarios {% if currentVersion == "enterprise-server@2.22" %}cerraron{% else %}descartaron{% endif %}.

Las alertas pueden arreglarse en una rama pero no en alguna otra. Puedes utilizar el menú desplegable de "Rama", en el resumen de las alertas, para verificar si una alerta se arregló en una rama en particular.

![Filtrar alertas por rama](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)

{% if currentVersion == "enterprise-server@2.22" %}

### Cerrar una alerta

Cerrar una alerta es una forma de resolverla si no crees que necesita un arreglo. {% data reusables.code-scanning.close-alert-examples %}

{% else %}

### Descartar o borrar las alertas

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

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% if currentVersion == "enterprise-server@2.22" %}
{% data reusables.code-scanning.click-alert-in-list %}
1. Selecciona el menú desplegable de **Cerrar** y da clic en una razón para cerrar la alerta.    
   ![Elegir una razón apra cerrar la alerta a través del menú desplegable de "Cerrar"](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

1. Si tienes permisos administrativos en el repositorio y quieres borrar las alertas para esta herramienta del {% data variables.product.prodname_code_scanning %}, selecciona algunas o todas las casillas de verificación y da clic en **Borrar**.

   ![Borrar alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, puedes utilizar los filtros para mostrar un subconjunto de alertas y luego borrar simultáneamente todas las que empaten. Por ejemplo, si eliminaste una consulta desde el análisis de {% data variables.product.prodname_codeql %}, puedes utilizar el filtro de "Regla" para listar solo las alertas para esa consulta y luego seleccionar y borrar todas esas alertas.

  ![Filtrar alertas por regla](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)

1. Si quieres descartar una alerta, es importante explorarla primero para que puedas elegir la razón correcta para descartarla. Da clic en la alerta que quisieras explorar.

  ![Abrir una alerta desde la lista de sumario](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)

1. Revisa la alerta y da clic en **Descartar** y elije una razón para cerrarla. ![Elegir una razón para descartar una alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

#### Descartar varias alertas al mismo tiempo

Si un proyecto tiene varias alertas que quieras descartar por la misma razón, puedes descartarlas por lote desde el resúmen de las alertas. Habitualmente quieres filtrar la lista y luego descartar todas las alertas coincidentes. Por ejemplo, puede que quieras descartar todas las alertas actuales del proyecto que se hayan etiquetado para una vulnerabilidad de Enumeración de Debilidades (CWE, por sus siglas en inglés) Común en particular.

{% endif %}

### Leer más

- "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)"
- "[Acerca de la integración con {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
