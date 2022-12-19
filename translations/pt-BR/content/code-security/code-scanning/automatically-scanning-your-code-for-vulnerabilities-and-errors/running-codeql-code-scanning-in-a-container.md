---
title: Executar a varredura de código CodeQL em um contêiner
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
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
ms.openlocfilehash: 60dac8a7f71af067c5cfaba5f48d123a3068f704
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162804'
---
{% data reusables.code-scanning.beta %}

## Sobre {% data variables.product.prodname_code_scanning %} com uma compilação de contêiner

Se você estiver configurando {% data variables.product.prodname_code_scanning %} para um idioma compilado e estiver criando o código em um ambiente de contêiner, a análise pode falhar com a mensagem de erro "Nenhum código fonte foi visto durante a compilação." Isso indica que {% data variables.product.prodname_codeql %} não conseguiu monitorar seu código da forma como foi compilado.

Você deve executar {% data variables.product.prodname_codeql %} dentro do contêiner no qual você constrói seu código. Isso se aplica quando você está usando a {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, o {% data variables.code-scanning.codeql_runner %},{% endif %} ou o {% data variables.product.prodname_actions %}. Para a {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}ou o {% data variables.code-scanning.codeql_runner %}{% endif %}, confira "[Como instalar a {% data variables.product.prodname_codeql_cli %} no sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)"{% ifversion codeql-runner-supported %} ou "[Como executar o {% data variables.code-scanning.codeql_runner %} no sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"{% endif %} para obter mais informações. Se estiver usando {% data variables.product.prodname_actions %}, configure seu fluxo de trabalho para executar todas as ações no mesmo contêiner. Para obter mais informações, confira "[Exemplo de fluxo de trabalho](#example-workflow)".

{% note %}

**Observação:** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Dependências

Você pode ter dificuldade para executar {% data variables.product.prodname_code_scanning %} se o contêiner que você está usando estiver com certas dependências ausentes (por exemplo, o Git deve ser instalado e adicionado à variável PATH). Se você encontrar problemas de dependência, revise a lista de software geralmente incluída nas imagens do executor de {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira os arquivos `readme` específicos da versão nestes locais:

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS - https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## Fluxo de trabalho de exemplo

{% ifversion ghes or ghae %} {% note %}

**Observação:** este artigo descreve os recursos disponíveis na versão da ação do CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão do {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, confira o [artigo do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container) para obter informações sobre os recursos mais recentes.{% ifversion not ghae %} Para obter informações sobre como usar a última versão, confira "[Como configurar a verificação de código para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

Este fluxo de trabalho de amostra usa {% data variables.product.prodname_actions %} para executar a análise de {% data variables.product.prodname_codeql %} em um ambiente de contêiner. O valor de `container.image` identifica o contêiner a ser usado. Neste exemplo, a imagem é nomeada `codeql-container`, com uma tag de `f0f91db`. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

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
