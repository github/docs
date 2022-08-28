---
title: Acerca del escaneo de código de CodeQL en tu sistema de IC
shortTitle: Escaneo de código en tu IC
intro: 'Puedes analizar tu código con {% data variables.product.prodname_codeql %} en un sistema de integración contínua de terceros y cargar los resultados a {% data variables.product.product_location %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
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
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system
---

<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC

{% data reusables.code-scanning.about-code-scanning %} Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

Puedes ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} dentro de {% data variables.product.product_name %} utilizando {% data variables.product.prodname_actions %}. Como alternativa, si utilizas un sistema de integración o despliegue/entrega contínua (IC/ID) de terceros, puedes ejecutar un análisis de {% data variables.product.prodname_codeql %} en tu sistema existente y cargar los resultados a {% data variables.product.product_location %}.

{% ifversion fpt or ghes > 3.1 or ghae-next %}
<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

Puedes agregar el {% data variables.product.prodname_codeql_cli %} a tu sistema de terceros y luego llamar a la herramienta para analizar código y cargar los resultados de SARIF a {% data variables.product.product_name %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Acerca de {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Utiliza el {% data variables.product.prodname_codeql_cli %} para analizar:

- Lenguajes dinámicos, por eje mplo, JavaScript y Python.
- Lenguajes compilados, por ejemplo, C/C++, C# y Java.
- Bases de código escritas en varios lenguajes.

Para obtener más información, consulta la sección "[Instalar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}

{% ifversion ghes = 3.2 %}
<!-- Content for GHES 3.2 only. CodeQL CLI 2.6.2, which introduces full feature parity between CodeQL CLI and CodeQL runner, is officially recommended for GHES 3.3+, so some people may need to use the CodeQL runner -->

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes = 3.1 %}
Agrega el {% data variables.product.prodname_codeql_cli %} o el {% data variables.product.prodname_codeql_runner %} a tu sistema de terceros y luego llama a la herramienta para analizar código y cargar los resultados de SARIF a {% data variables.product.product_name %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Comparar el {% data variables.product.prodname_codeql_cli %} y el {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

El {% data variables.product.prodname_codeql_runner %} es una herramienta de línea de comandos que utiliza el {% data variables.product.prodname_codeql_cli %} para analizar el código y para cargar los resultados a {% data variables.product.product_name %}. La herramienta simula la ejecución del análisis nativamente dentro de {% data variables.product.product_name %} utilizando acciones. El ejecutor puede integrarse con ambientes de compilación más complejos que el CLI, pero esta capacidad lo hace más difícil de configurar y más propenso a errores. También es más difícil depurar cualquier problemas. Generalmente, es mejor utilizar directamente el {% data variables.product.prodname_codeql_cli %} a menos de que no sea compatible con tu caso de uso.

Utiliza el {% data variables.product.prodname_codeql_cli %} para analizar:

- Lenguajes dinámicos, por eje mplo, JavaScript y Python.
- Las bases de código con un lenguaje compilado que pueden crearse con un solo comando o ejecutando un solo script.

Para obtener más información, consulta la sección "[Instalar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

{% endif %}

<!--Content for GHES 3.0 only. Only CodeQL runner is available -->
{% ifversion ghes = 3.0 %}
{% data reusables.code-scanning.upload-sarif-ghas %}

Puedes agregar el {% data variables.product.prodname_codeql_runner %} a tu sistema de terceros y luego llamar a la herramienta para analizar código y cargar los resultados de SARIF a {% data variables.product.product_name %}. Las alertas del {% data variables.product.prodname_code_scanning %} resultantes se muestran junto con cualquier alerta que se genere dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.deprecation-codeql-runner %}

Para configurar el escaneo de código en tu sistema de IC, consulta la sección "[Ejecutar el {% data variables.product.prodname_codeql_runner %} en tu sistema de IC](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".
{% endif %}
