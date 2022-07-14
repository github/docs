---
title: Executar a varredura de código CodeQL em um contêiner
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} em um contêiner'
intro: 'Você pode executar {% data variables.product.prodname_code_scanning %} em um contêiner garantindo que todos os processos sejam executados no mesmo container.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
---


{% data reusables.code-scanning.beta %}

## Sobre {% data variables.product.prodname_code_scanning %} com uma compilação de contêiner

Se você estiver configurando {% data variables.product.prodname_code_scanning %} para um idioma compilado e estiver criando o código em um ambiente de contêiner, a análise pode falhar com a mensagem de erro "Nenhum código fonte foi visto durante a compilação." Isso indica que {% data variables.product.prodname_codeql %} não conseguiu monitorar seu código da forma como foi compilado.

Você deve executar {% data variables.product.prodname_codeql %} dentro do contêiner no qual você constrói seu código. Isso se aplica se você estiver usando o {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, o {% data variables.product.prodname_codeql_runner %},{% endif %} ou {% data variables.product.prodname_actions %}. Para o {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}ou o {% data variables.product.prodname_codeql_runner %}{% endif %}, consulte "[Instalando {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)"{% ifversion codeql-runner-supported %} or "[Executando {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"{% endif %} para obter mais informações. Se estiver usando {% data variables.product.prodname_actions %}, configure seu fluxo de trabalho para executar todas as ações no mesmo contêiner. Para obter mais informações, consulte "[Exemplo de fluxo de trabalho](#example-workflow)".

## Dependências

Você pode ter dificuldade para executar {% data variables.product.prodname_code_scanning %} se o contêiner que você está usando estiver com certas dependências ausentes (por exemplo, o Git deve ser instalado e adicionado à variável PATH). Se você encontrar problemas de dependência, revise a lista de software geralmente incluída nos ambientes virtuais de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte os arquivos de `readme` específicos da versão nesses locais:

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

## Exemplo de fluxo de trabalho

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Este artigo descreve as funcionalidades disponíveis com a versão da ação CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão de {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, consulte o [artigo de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container)para obter informações sobre as últimas funcionalidades.{% ifversion not ghae %} Para obter informações sobre como usar a última versão, consulte "[Configurando a digitalização de código para o seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)."{% endif %}

{% endnote %}
{% endif %}

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
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```
