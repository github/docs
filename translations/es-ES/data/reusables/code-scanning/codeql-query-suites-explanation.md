Las siguientes suites de consultas se compilan en el {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} y están disponibles para utilizarse.

{% data reusables.code-scanning.codeql-query-suites %}

Cuando especificas una suite de consultas, el motor de análisis de {% data variables.product.prodname_codeql %} ejecutará el conjunto predeterminado de consultas y cualquier consulta adicional que se defina en la suite de consultas adicionales. {% ifversion codeql-ml-queries %}Las suites de consultas `security-extended` y `security-and-quality` para JavaScript contienen consultas experimentales. Para obtener más información, consulta la sección "[Acerca de las alertas del {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".{% endif %}
