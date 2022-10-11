---
title: Sobre a varredura de código de CodeQL no seu sistema de CI
shortTitle: Varredura de código na sua CI
intro: 'Você pode analisar o seu código com {% data variables.product.prodname_codeql %} em um sistema de integração contínua de terceiros e fazer o upload dos resultados para {% data variables.product.product_location %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.'
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

## Sobre {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI

{% data reusables.code-scanning.about-code-scanning %} Para obter informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

Você pode executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} usando {% data variables.product.prodname_actions %}. Como alternativa, se você usar um sistema de integração contínua ou um sistema de entrega/Continuous Delivery (CI/CD) de terceiros você poderá executar a análise {% data variables.product.prodname_codeql %} no seu sistema existente e enviar os resultados para {% data variables.product.product_location %}.

{% ifversion fpt or ghes > 3.1 or ghae-next %}
<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

Se você adicionar {% data variables.product.prodname_codeql_cli %} ao seu sistema de terceiros, chame a ferramenta para analisar o código e fazer o upload dos resultados do SARIF para {% data variables.product.product_name %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Sobre o {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Use {% data variables.product.prodname_codeql_cli %} para analisar:

- Linguagens dinâmicas, por exemplo, JavaScript e Python.
- Linguagens compiladas, por exemplo, C/C++, C# e Java.
- Bases de código em uma mistura de linguagens.

Para obter mais informações, consulte "[Instalar {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}

{% ifversion ghes = 3.2 %}
<!-- Content for GHES 3.2 only. CodeQL CLI 2.6.2, which introduces full feature parity between CodeQL CLI and CodeQL runner, is officially recommended for GHES 3.3+, so some people may need to use the CodeQL runner -->

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes = 3.1 %}
Se você adicionar {% data variables.product.prodname_codeql_cli %} ou {% data variables.product.prodname_codeql_runner %} ao seu sistema de terceiros, chame a ferramenta para analisar o código e fazer o upload dos resultados SARIF para {% data variables.product.product_name %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Comparar {% data variables.product.prodname_codeql_cli %} e {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

A {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que utiliza o {% data variables.product.prodname_codeql_cli %} para analisar o código e fazer o upload dos resultados para {% data variables.product.product_name %}. A ferramenta imita a análise executada nativamente dentro de {% data variables.product.product_name %} usando ações. O executor é capaz de integrar-se a ambientes de compilação mais complexos do que o CLI, mas esta capacidade torna mais difícil e suscetível de erros de configuração. É também mais difícil depurar quaisquer problemas. De modo geral, é melhor usar {% data variables.product.prodname_codeql_cli %} diretamente a menos que não seja compatível com o seu caso de uso.

Use {% data variables.product.prodname_codeql_cli %} para analisar:

- Linguagens dinâmicas, por exemplo, JavaScript e Python.
- Bases de código com uma linguagem compilada que pode ser construída com um único comando ou executando um único script.

Para obter mais informações, consulte "[Instalar {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

{% endif %}

<!--Content for GHES 3.0 only. Only CodeQL runner is available -->
{% ifversion ghes = 3.0 %}
{% data reusables.code-scanning.upload-sarif-ghas %}

Se você adicionar {% data variables.product.prodname_codeql_runner %} ao seu sistema de terceiros, chame a ferramenta para analisar o código e fazer o upload dos resultados do SARIF para {% data variables.product.product_name %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.deprecation-codeql-runner %}

Para configurar a verificação de código no seu sistema de CI, consulte "[Executando {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".
{% endif %}
