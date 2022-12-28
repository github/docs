---
title: Fazer o upload de arquivo SARIF para o GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161155'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre os uploads de arquivos SARIF para {% data variables.product.prodname_code_scanning %}

O {% data variables.product.prodname_dotcom %} cria alertas de {% data variables.product.prodname_code_scanning %} em um repositório usando informações de arquivos de Formato Intercâmbio de Resultados de Análise Estática (SARIF). Os arquivos SARIF podem ser enviados para um repositório usando a API ou {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Você pode gerar arquivos SARIF usando muitas ferramentas de teste de segurança de análise estática, incluindo {% data variables.product.prodname_codeql %}. Os resultados devem usar o SARIF versão 2.1.0. Para obter mais informações, confira "[Suporte do SARIF à {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)".

Carregue os resultados usando o {% data variables.product.prodname_actions %}, a API da {% data variables.product.prodname_code_scanning %},{% ifversion codeql-runner-supported %} o {% data variables.code-scanning.codeql_runner %},{% endif %} ou a {% data variables.product.prodname_codeql_cli %}. O melhor método de upload dependerá de como você gera o arquivo SARIF. Por exemplo, se você usar:

- {% data variables.product.prodname_actions %} para executar a ação {% data variables.product.prodname_codeql %}, não haverá nenhuma ação adicional necessária. A ação {% data variables.product.prodname_codeql %} faz o upload do arquivo SARIF automaticamente quando ele conclui a análise.
- O arquivo SARIF pode ser gerado a partir de uma ferramenta de análise compatível com o SARIF, que você executa no mesmo fluxo de trabalho de {% data variables.product.prodname_actions %} usado para fazer o upload do arquivo.
 - A {% data variables.product.prodname_codeql_cli %} para executar a {% data variables.product.prodname_code_scanning %} no sistema de CI. Você pode usar a CLI para carregar resultados no {% data variables.product.prodname_dotcom %} (para obter mais informações, confira "[Como instalar a {% data variables.product.prodname_codeql_cli %} no sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)").{% ifversion codeql-runner-supported %}
- O {% data variables.code-scanning.codeql_runner %}, para executar a {% data variables.product.prodname_code_scanning %} no seu sistema de CI. Por padrão, o executor carrega automaticamente os resultados no {% data variables.product.prodname_dotcom %} após a conclusão. Se você bloquear o upload automático, quando estiver pronto para carregar os resultados, use o comando `upload` (para obter mais informações, confira "[Como executar o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)").{% endif %}
- Uma ferramenta que gera resultados como um artefato fora do repositório. Você pode usar a API da {% data variables.product.prodname_code_scanning %} para carregar o arquivo (para obter mais informações, confira "[Carregar uma análise como dados SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)").

{% data reusables.code-scanning.not-available %}

## Fazer o upload uma análise de {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_actions %}

Para fazer com que {% data variables.product.prodname_actions %} faça um upload de um arquivo SARIF de terceiros para um repositório, você precisará de um fluxo de trabalho. Para obter mais informações, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

O fluxo de trabalho precisará usar a ação `upload-sarif`, que faz parte do repositório `github/codeql-action`. Ele tem parâmetros de entrada que você pode usar para configurar o upload. Os principais parâmetros de entrada que você vai usar são:

- `sarif-file`, que configura o arquivo ou o diretório de arquivos SARIF a serem carregados. O diretório ou caminho do arquivo é relativo à raiz do repositório.
- `category` (opcional), que atribui uma categoria para os resultados no arquivo SARIF. Isso permite que você analise o mesmo commit de várias maneiras e reveja os resultados usando as visualizações de {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_dotcom %}. Por exemplo, você pode analisar usando várias ferramentas, e nos monorrepositórios, você pode analisar diferentes porções do repositório com base no subconjunto de arquivos alterados.

Para obter mais informações, confira a [ação `upload-sarif`](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif).

A ação `upload-sarif` pode ser configurada para ser executada quando os eventos `push` e `scheduled` ocorrerem. Para obter mais informações sobre os eventos do {% data variables.product.prodname_actions %}, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

Se o arquivo SARIF não incluir `partialFingerprints`, a ação `upload-sarif` calculará o campo `partialFingerprints` para você e tentará evitar alertas duplicados. O {% data variables.product.prodname_dotcom %} só poderá criar `partialFingerprints` quando o repositório contiver o arquivo SARIF e o código-fonte usado na análise estática. Para obter mais informações sobre como evitar alertas duplicados, confira "[Sobre o suporte do SARIF para verificação de código](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Exemplo de fluxo de trabalho para arquivos SARIF gerados fora de um repositório

Você pode criar um novo fluxo de trabalho que faz o upload de arquivos SARIF após fazer o commit deles no seu repositório. Isso é útil quando o arquivo SARIF é gerado como um artefato fora do seu repositório.

Este exemplo de fluxo de trabalho é executado sempre que os commits são carregados no repositório. A ação usa a propriedade `partialFingerprints` para determinar se as alterações ocorreram. Além de ser executado quando as confirmações são enviadas por push, o fluxo de trabalho é agendado para ser executado uma vez por semana. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

Esse fluxo de trabalho carrega o arquivo `results.sarif` localizado na raiz do repositório. Para obter mais informações sobre como editar um arquivo de fluxo de trabalho, confira "[Saiba como usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Como alternativa, você pode modificar este fluxo de trabalho para fazer upload de um diretório de arquivos SARIF. Por exemplo, você pode posicionar todos os arquivos SARIF em um diretório na raiz do seu repositório chamado `sarif-output` e definir o parâmetro de entrada `sarif_file` da ação como `sarif-output`. Observe que, se você carregar um diretório, cada arquivo SARIF precisará incluir uma `runAutomationDetails.id` exclusiva para definir a categoria para os resultados. Para obter mais informações, confira "[Objeto `runAutomationDetails`](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)".

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Exemplo de fluxo de trabalho que executa a ferramenta de análise ESLint

Se você gerar o arquivo SARIF de terceiros como parte de um fluxo de trabalho de CI (integração contínua), poderá adicionar a ação `upload-sarif` como uma etapa depois de executar os testes de CI. Se você ainda não tiver um fluxo de trabalho de CI, você poderá criar um usando um modelo de {% data variables.product.prodname_actions %}. Para obter mais informações, confira o [guia de início rápido do "{% data variables.product.prodname_actions %}](/actions/quickstart)".

Este exemplo de fluxo de trabalho é executado sempre que os commits são carregados no repositório. A ação usa a propriedade `partialFingerprints` para determinar se as alterações ocorreram. Além de ser executado quando as confirmações são enviadas por push, o fluxo de trabalho é agendado para ser executado uma vez por semana. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

O fluxo de trabalho mostra um exemplo de execução da ferramenta de análise estática ESLint como uma etapa de um fluxo de trabalho. A etapa `Run ESLint` executa a ferramenta ESLint e gera o arquivo `results.sarif`. Em seguida, o fluxo de trabalho carrega o arquivo `results.sarif` no {% data variables.product.prodname_dotcom %} usando a ação `upload-sarif`. Para obter mais informações sobre como criar um arquivo de fluxo de trabalho, confira "[Introdução ao GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)".

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Leitura adicional

- "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Como ver o histórico do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[Sobre a {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %} no seu sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)"
- "[Carregar uma análise como dados SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"
