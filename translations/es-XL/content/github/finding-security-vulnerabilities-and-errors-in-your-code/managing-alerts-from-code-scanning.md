---
title: Administrar alertas del escaneo de código
shortTitle: Administrar alertas
intro: 'Puedes ver, arreglar y cerrar alertas para los errores o vulnerabilidades potenciales en el código de tu proyecto.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
permissions: 'Las personas con permisos de escritura en un repositorio pueden administrar las alertas de {{ site.data.variables.product.prodname_code_scanning }} para el repositario.'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}
{{ site.data.reusables.code-scanning.enterprise-enable-code-scanning }}

### Acerca de las alertas de {{ site.data.variables.product.prodname_code_scanning }}

After you enable {{ site.data.variables.product.prodname_code_scanning }}, {{ site.data.variables.product.prodname_dotcom }} displays {{ site.data.variables.product.prodname_code_scanning }} alerts in your repository. El flujo de trabajo predeterminado de {{ site.data.variables.product.prodname_code_scanning }} utiliza el evento `on.push` para activar el escaneo de código cada vez que alguien carga información a cualquier rama que contenga el archivo de flujo de trabajo.

Each alert highlights a problem with the code and the name of the tool that identified it. Puedes ver la línea de código que activó la alerta, así como las propiedades de la misma, tales como la severidad y la naturaleza de dicho problema. Las alertas también te dicen si el problema se introdujo por primera vez. For alerts identified by {{ site.data.variables.product.prodname_codeql }} analysis, you will also see information on how to fix the problem.

![Ejemplo de alerta de {{ site.data.variables.product.prodname_code_scanning }}](/assets/images/help/repository/code-scanning-alert.png)

Si no quieres tomar la acción que se recomienda en la alerta, puedes cerrarla manualmente. Por ejemplo, puedes cerrar una alerta para el código que se utilice para pruebas, o si crees que ésta es un falso positivo. También puede que quieras cerrar una alerta si el esfuerzo para arreglar el error en el código es mayor que el beneficio potencial de mejorarlo.

Por defecto, {{ site.data.variables.product.prodname_dotcom }} muestra alertas para la rama predeterminada y para cualquier rama protegida. Puedes clasificar y filtrar la lista de alertas para ver únicamente aquellas que te interesen.

Puedes ver las alertas que se introdujeron en una solicitud de extracción y tomar acción inmediata. Cuando {{ site.data.variables.product.prodname_code_scanning }} encuentra errores o vulnerabilidades en una solicitud de extracción, {{ site.data.variables.product.prodname_dotcom }} muestra anotaciones en la línea de tiempo así como las vistas diferenciales de dicha solicitud.

If you enable {{ site.data.variables.product.prodname_code_scanning }} using {{ site.data.variables.product.prodname_codeql }}, this can also detect data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

Cuando {{ site.data.variables.product.prodname_code_scanning }} reporta alertas de flujo de datos, {{ site.data.variables.product.prodname_dotcom }} te muestra como se mueven los datos a través del código. {{ site.data.variables.product.prodname_code_scanning_capc }} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

{{ site.data.reusables.code-scanning.you-can-upload-third-party-analysis }}{{ site.data.reusables.code-scanning.get-started-uploading-third-party-data }}

If you scan your code using a third-party tool or scan your code with custom {{ site.data.variables.product.prodname_codeql }} queries, {{ site.data.variables.product.prodname_dotcom }} will only use the supported SARIF 2.1.0 properties to display alerts. Los resultados de herramientas de terceros o las consultas personalizadas podrían no incluir todas las propiedades que ves cuando escaneas tu código utilizando las consultas predeterminadas de {{ site.data.variables.product.prodname_codeql }} en {{ site.data.variables.product.company_short }}. Para obtener más información, consulta la sección "[Soporte de SARIF para {{ site.data.variables.product.prodname_code_scanning }}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)".

### Visualizar una alerta

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-security }}
{{ site.data.reusables.repositories.sidebar-code-scanning-alerts }}
{{ site.data.reusables.code-scanning.click-alert-in-list }}
5. Opcionalmente, si la alerta resalta un problema con el flujo de datos, da clic en **Mostrar ruta** para revisar la ruta de los datos. ![Ejemplo de alerta de flujo de datos](/assets/images/help/repository/code-scanning-show-paths.png)

### Cerrar una alerta

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-security }}
{{ site.data.reusables.repositories.sidebar-code-scanning-alerts }}
{{ site.data.reusables.code-scanning.click-alert-in-list }}
5. Utiliza el menú desplegable de "Cerrar" y da clic en una razón para cerrar la alerta. ![Escoger una razón para cerrar la alerta a través del menú desplegable de "Cerrar"](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

### Leer más

- "[{{ site.data.variables.product.prodname_code_scanning_capc }}](http://developer.github.com/v3/code-scanning)"
- "[{{ site.data.variables.product.prodname_code_scanning_capc }} API](/v3/code-scanning)"
