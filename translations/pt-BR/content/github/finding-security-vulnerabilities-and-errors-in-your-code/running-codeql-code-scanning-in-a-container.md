---
title: Executar a varredura de código CodeQL em um contêiner
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} em um contêiner'
intro: 'Você pode executar {% data variables.product.prodname_code_scanning %} em um contêiner garantindo que todos os processos sejam executados no mesmo container.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### Sobre {% data variables.product.prodname_code_scanning %} com uma compilação de contêiner

Se você estiver configurando {% data variables.product.prodname_code_scanning %} para um idioma compilado e estiver criando o código em um ambiente de contêiner, a análise pode falhar com a mensagem de erro "Nenhum código fonte foi visto durante a compilação." Isso indica que {% data variables.product.prodname_codeql %} não conseguiu monitorar seu código da forma como foi compilado.

Você precisa executar {% data variables.product.prodname_codeql %} no mesmo contêiner em que você cria o seu código. Isto se aplica independentemente de você usar {% data variables.product.prodname_codeql_runner %} ou {% data variables.product.prodname_actions %}. Se você estiver usando {% data variables.product.prodname_codeql_runner %}, execute-o no contêiner onde seu código é criado. Para obter mais informações sobre o {% data variables.product.prodname_codeql_runner %}, consulte "[Executar {% data variables.product.prodname_codeql %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)". Se estiver usando {% data variables.product.prodname_actions %}, configure seu fluxo de trabalho para executar todas as ações no mesmo contêiner. Para obter mais informações, consulte "[Exemplo de fluxo de trabalho](#example-workflow)".

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
    - cron: '0 0 * * 0'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest 

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
