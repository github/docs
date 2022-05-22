---
title: Administrar las alertas del escaneo de código para tu repositorio
shortTitle: Administrar alertas
intro: 'Desde la vista de seguridad, puedes ver, corregir o cerrar las alertas de vulnerabilidades potenciales o errores en el código de tu proyecto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

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

Si tienes permisos de escritura para un repositorio, puedes ver las alertas arregladas si ves el resumen de las alertas y das clic en **Cerrado**. Para obtener más información, consulta la sección "[Visualizar las alertas de un repositorio](#viewing-the-alerts-for-a-repository)". La lista "Cerrada" muestra las alertas fijas y las que cerraron los usuarios.

Las alertas pueden arreglarse en una rama pero no en alguna otra. Puedes utilizar el menú desplegable de "Rama", en el resumen de las alertas, para verificar si una alerta se arregló en una rama en particular.

![Filtrar alertas por rama](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)

### Cerrar una alerta

Cerrar una alerta es una forma de resolverla si no crees que necesita un arreglo. {% data reusables.code-scanning.close-alert-examples %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
1. Selecciona el menú desplegable de **Cerrar** y da clic en una razón para cerrar la alerta.    
   ![Elegir una razón apra cerrar la alerta a través del menú desplegable de "Cerrar"](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

### Leer más

- "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de cambios](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)"
- "[Acerca de la integración con {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
