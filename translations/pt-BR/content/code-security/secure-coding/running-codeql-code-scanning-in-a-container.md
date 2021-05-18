---
title: Executar a varredura de código CodeQL em um contêiner
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} em um contêiner'
intro: 'Você pode executar {% data variables.product.prodname_code_scanning %} em um contêiner garantindo que todos os processos sejam executados no mesmo container.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### Sobre {% data variables.product.prodname_code_scanning %} com uma compilação de contêiner

Se você estiver configurando {% data variables.product.prodname_code_scanning %} para um idioma compilado e estiver criando o código em um ambiente de contêiner, a análise pode falhar com a mensagem de erro "Nenhum código fonte foi visto durante a compilação." Isso indica que {% data variables.product.prodname_codeql %} não conseguiu monitorar seu código da forma como foi compilado.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Você deve executar {% data variables.product.prodname_codeql %} dentro do contêiner no qual você constrói seu código. Isso se aplica se você estiver usando o {% data variables.product.prodname_codeql_cli %}, o {% data variables.product.prodname_codeql_runner %} ou {% data variables.product.prodname_actions %}. Para {% data variables.product.prodname_codeql_cli %} ou {% data variables.product.prodname_codeql_runner %}, consulte "[Executando {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)ou "[Executando {% data variables.product.prodname_codeql_runner %} no seu sistema CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" para obter mais informações. Se estiver usando {% data variables.product.prodname_actions %}, configure seu fluxo de trabalho para executar todas as ações no mesmo contêiner. Para obter mais informações, consulte "[Exemplo de fluxo de trabalho](#example-workflow)".
{% else %}
Você deve executar {% data variables.product.prodname_codeql %} dentro do contêiner no qual você constrói seu código. Isso se aplica se você estiver usando {% data variables.product.prodname_codeql_runner %} ou {% data variables.product.prodname_actions %}. Para {% data variables.product.prodname_codeql_runner %}, consulte "[Executando {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" para obter mais informações. Se estiver usando {% data variables.product.prodname_actions %}, configure seu fluxo de trabalho para executar todas as ações no mesmo contêiner. Para obter mais informações, consulte "[Exemplo de fluxo de trabalho](#example-workflow)".
{% endif %}

### Dependências

Você pode ter dificuldade para executar {% data variables.product.prodname_code_scanning %} se o contêiner que você está usando estiver com certas dependências ausentes (por exemplo, o Git deve ser instalado e adicionado à variável PATH). Se você encontrar problemas de dependência, revise a lista de software geralmente incluída nos ambientes virtuais de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte os arquivos de `readme` específicos da versão nesses locais:

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

### Exemplo de fluxo de trabalho

Este fluxo de trabalho de amostra usa {% data variables.product.prodname_actions %} para executar a análise de {% data variables.product.prodname_codeql %} em um ambiente de contêiner. O valor do `container.image` identifica o contêiner a ser usado. Neste exemplo, a imagem é denominada `codeql-container`, com uma tag de `f0f91db`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: github/codeql-action/analyze@v1
```
