---
title: Acerca del escaneo de código de CodeQL en tu sistema de IC
shortTitle: Escaneo de código en tu IC
intro: 'Puedes analizar tu código con {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros y cargar los resultados a {% data variables.product.product_location %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Acerca del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC

{% data reusables.code-scanning.about-code-scanning %} Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".

Puedes ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} dentro de {% data variables.product.product_name %} utilizando acciones. Como alternativa, si utilizas un sistema de integración o despliegue/entrega contínua (IC/ID) de terceros, puedes ejecutar un análisis de {% data variables.product.prodname_codeql %} en tu sistema existente y cargar los resultados a {% data variables.product.product_location %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Agrega el {% data variables.product.prodname_codeql_cli %} o el {% data variables.product.prodname_codeql_runner %} a tu sistema de terceros y luego llama a la herramienta para analizar código y cargar los resultados de SARIF a {% data variables.product.product_name %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

### Comparar el {% data variables.product.prodname_codeql_cli %} y el {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

El {% data variables.product.prodname_codeql_runner %} es una herramienta de línea de comandos que utiliza el {% data variables.product.prodname_codeql_cli %} para analizar el código y para cargar los resultados a {% data variables.product.product_name %}. La herramienta simula la ejecución del análisis nativamente dentro de {% data variables.product.product_name %} utilizando acciones. El ejecutor puede integrarse con ambientes de compilación más complejos que el CLI, pero esta capacidad lo hace más difícil de configurar y más propenso a errores. También es más difícil depurar cualquier problemas. Generalmente, es mejor utilizar directamente el {% data variables.product.prodname_codeql_cli %} a menos de que no sea compatible con tu caso de uso.

Utiliza el {% data variables.product.prodname_codeql_cli %} para analizar:

- Lenguajes dinámicos, por eje mplo, JavaScript y Python.
- Las bases de código con un lenguaje compilado que pueden crearse con un solo comando o ejecutando un solo script.

Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)".

{% if currentVersion == "free-pro-team@latest" %}
Si necesitas configurar el sistema de IC para orquestrar invocaciones del compilador así como para ejecutar el análisis de {% data variables.product.prodname_codeql %}, debes utilizar el {% data variables.product.prodname_codeql_runner %}.
{% else %}
Necesitarás utilizar el {% data variables.product.prodname_codeql_runner %} si necesitas:
- Configura el sistema de IC para orquestrar las invocaciones del compilador así como para ejecutar el análisis de {% data variables.product.prodname_codeql %}.
- Analiza más de un lenguaje en un repositorio.
{% endif %}

{% data reusables.code-scanning.beta-codeql-runner %}

Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

{% else %}

{% data reusables.code-scanning.upload-sarif-ghas %}

Puedes agregar el {% data variables.product.prodname_codeql_runner %} a tu sistema de terceros y luego llamar a la herramienta para analizar código y cargar los resultados de SARIF a {% data variables.product.product_name %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.beta-codeql-runner %}

Para configurar el escaneo de código en tu sistema de IC, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".
{% endif %}
