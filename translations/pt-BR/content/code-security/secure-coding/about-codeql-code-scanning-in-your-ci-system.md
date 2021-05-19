---
title: Sobre a varredura de código de CodeQL no seu sistema de CI
shortTitle: Varredura de código na sua CI
intro: 'Você pode analisar o seu código com {% data variables.product.prodname_codeql %} em um sistema de integração contínua de terceiros e fazer o upload dos resultados para {% data variables.product.product_location %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Sobre {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI

{% data reusables.code-scanning.about-code-scanning %} Para obter informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning).

Você pode executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %} usando ações. Como alternativa, se você usar um sistema de integração contínua ou um sistema de entrega/Continuous Delivery (CI/CD) de terceiros você poderá executar a análise {% data variables.product.prodname_codeql %} no seu sistema existente e enviar os resultados para {% data variables.product.product_location %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Se você adicionar {% data variables.product.prodname_codeql_cli %} ou {% data variables.product.prodname_codeql_runner %} ao seu sistema de terceiros, chame a ferramenta para analisar o código e fazer o upload dos resultados SARIF para {% data variables.product.product_name %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.upload-sarif-ghas %}

### Comparar {% data variables.product.prodname_codeql_cli %} e {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

A {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que utiliza o {% data variables.product.prodname_codeql_cli %} para analisar o código e fazer o upload dos resultados para {% data variables.product.product_name %}. A ferramenta imita a análise executada nativamente dentro de {% data variables.product.product_name %} usando ações. O executor é capaz de integrar-se a ambientes de compilação mais complexos do que o CLI, mas esta capacidade torna mais difícil e suscetível de erros de configuração. É também mais difícil depurar quaisquer problemas. De modo geral, é melhor usar {% data variables.product.prodname_codeql_cli %} diretamente a menos que não seja compatível com o seu caso de uso.

Use {% data variables.product.prodname_codeql_cli %} para analisar:

- Linguagens dinâmicas, por exemplo, JavaScript e Python.
- Bases de código com uma linguagem compilada que pode ser construída com um único comando ou executando um único script.

Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)".

{% if currentVersion == "free-pro-team@latest" %}
If you need to set up the CI system to orchestrate compiler invocations as well as running {% data variables.product.prodname_codeql %} analysis, you must use the {% data variables.product.prodname_codeql_runner %}.
{% else %}
Você precisará usar {% data variables.product.prodname_codeql_runner %} se precisar:
- Configurar o sistema de CI para orquestrar as invocações do compilador, bem como executar a análise de {% data variables.product.prodname_codeql %}.
- Analisar mais de uma linguagem em um repositório.
{% endif %}

{% data reusables.code-scanning.beta-codeql-runner %}

Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

{% else %}

{% data reusables.code-scanning.upload-sarif-ghas %}

Se você adicionar {% data variables.product.prodname_codeql_runner %} ao seu sistema de terceiros, chame a ferramenta para analisar o código e fazer o upload dos resultados do SARIF para {% data variables.product.product_name %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.

{% data reusables.code-scanning.beta-codeql-runner %}

Para configurar a verificação de código no seu sistema de CI, consulte "[Executando {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".
{% endif %}
