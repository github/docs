{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
Si no es adecuado que utilices el {% data variables.product.prodname_codeql_cli %} para tu sistema de IC, como alternativa, está disponible el {% data variables.product.prodname_codeql_runner %}. Típicamente, esto se necesita si el sistema de IC necesitaría orquestrar invocaciones del compilador así como ejecutar un análisis de {% data variables.product.prodname_codeql %}. Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system)".
{% endif %}

{% ifversion ghes = 3.1 %}
Necesitarás utilizar el {% data variables.product.prodname_codeql_runner %} si necesitas:
- Configura el sistema de IC para orquestrar las invocaciones del compilador así como para ejecutar el análisis de {% data variables.product.prodname_codeql %}.
- Analiza más de un lenguaje en un repositorio.
{% endif %}
