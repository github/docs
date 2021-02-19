---
title: Fazer o upload de arquivo SARIF para o GitHub
shortTitle: Fazer o upload de um arquivo SARIF
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'As pessoas com permissões de gravação em um repositório podem fazer upload de dados {% data variables.product.prodname_code_scanning %} de uma ferramenta de terceiros.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Sobre os uploads de arquivos SARIF para {% data variables.product.prodname_code_scanning %}

O {% data variables.product.prodname_dotcom %} cria alertas de {% data variables.product.prodname_code_scanning %} em um repositório usando informações de arquivos de Formato Intercâmbio de Resultados de Análise Estática (SARIF). Os arquivos SARIF podem ser enviados para um repositório usando a API ou {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".

Você pode gerar arquivos SARIF usando muitas ferramentas de teste de segurança de análise estática, incluindo {% data variables.product.prodname_codeql %}. Para fazer o upload dos resultados das ferramentas de terceiros, você deve usar o formato Intercâmbio de Resultados de Análise Estática (SARIF) 2.1.0. Para obter mais informações, consulte "[Sobre o suporte do SARIF para a varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning)".

Você pode fazer o upload dos resultados usando {% data variables.product.prodname_actions %}{% if currentVersion == "enterprise-server@2. 2" %} (disponível se sua organização participa do programa beta){% endif %}, a API de {% data variables.product.prodname_code_scanning %} ou {% data variables.product.prodname_codeql_runner %}. O melhor método de upload dependerá de como você gera o arquivo SARIF. Por exemplo, se você usar:

- {% data variables.product.prodname_actions %} para executar a ação {% data variables.product.prodname_codeql %}, não haverá nenhuma ação adicional necessária. A ação {% data variables.product.prodname_codeql %} faz o upload do arquivo SARIF automaticamente quando ele conclui a análise.
- O arquivo SARIF pode ser gerado a partir de uma ferramenta de análise compatível com o SARIF, que você executa no mesmo fluxo de trabalho de {% data variables.product.prodname_actions %} usado para fazer o upload do arquivo.
- {% data variables.product.prodname_dotcom %} exibirá alertas de {% data variables.product.prodname_code_scanning %} do arquivo SARIF carregado em seu repositório. Se você bloquear o upload automático, quando você estiver pronto para fazer o upload de resultados, você poderá usar o comando `upload` (para obter mais informações, consulte "[Executar {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
- Uma ferramenta que gera resultados como um artefato fora do seu repositório, você pode usar a API de {% data variables.product.prodname_code_scanning %} para fazer o upload do arquivo (para obter mais informações, consulte "[Fazer o upload de um arquivo SARIF](/rest/reference/code-scanning#upload-a-sarif-file)").

{% data reusables.code-scanning.not-available %}

### Fazer o upload uma análise de {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_actions %}

Para fazer o upload de um arquivo SARIF de terceiros para {% data variables.product.prodname_dotcom %}, você precisará de um fluxo de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aprender {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" e "[Aprender {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

O seu fluxo de trabalho precisará usar a ação `upload-sarif`, que tem parâmetros de entrada que você pode usar para configurar o upload. Ele tem parâmetros de entrada que você pode usar para configurar o upload. O parâmetro de entrada principal que você usará é `sarif-file`, que configura o arquivo ou diretório dos arquivos SARIF a serem carregados. O diretório ou caminho do arquivo é relativo à raiz do repositório. Para mais informações, consulte a ação [`upload-sarif`](https://github.com/github/codeql-action/tree/HEAD/upload-sarif).

A ação `upload-sarif` pode ser configurada para ser executada quando ocorrem o evento `push` e `agendado`. Para obter mais informações sobre eventos do {% data variables.product.prodname_actions %}, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

Se o seu arquivo SARIF não incluir `partialFingerprints`, a ação `upload-sarif` calculará o campo `parcialFingerprints` para você e tentará evitar alertas duplicados. O {% data variables.product.prodname_dotcom %} só pode criar `partialFingerprints` quando o repositório contiver o arquivo SARIF e o código-fonte usado na análise estática. Para obter mais informações sobre a prevenção de alertas duplicados, consulte "[Sobre o suporte SARIF para a varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### Exemplo de fluxo de trabalho para arquivos SARIF gerados fora de um repositório

Você pode criar um novo fluxo de trabalho que faz o upload de arquivos SARIF após fazer o commit deles no seu repositório. Isso é útil quando o arquivo SARIF é gerado como um artefato fora do seu repositório.

Este exemplo de fluxo de trabalho é executado sempre que os commits são carregados no repositório. A ação usa a propriedade `partialFingerprints` para determinar se houve alterações. Além de executar quando os commits são carregados, o fluxo de trabalho está programado para ser executado uma vez por semana. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

Este fluxo de trabalho faz o upload do arquivo `results.sarif` localizado na raiz do repositório. Para obter mais informações sobre a criação de um arquivo de fluxo de trabalho, consulte "[Aprender {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Como alternativa, você pode modificar este fluxo de trabalho para fazer upload de um diretório de arquivos SARIF. Por exemplo, você pode colocar todos os arquivos SARIF em um diretório na raiz do seu repositório denominado `sarif-output` e definir o parâmetro de entrada da ação `sarif_file` como `sarif-output`.

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every at 00:00 on Sunday UTC time.
on:
  push:
  schedule:
  - cron: '0 0 * * 0'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # This step checks out a copy of your repository.
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Upload SARIF file
      uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

#### Exemplo de fluxo de trabalho que executa a ferramenta de análise ESLint

Se você gerar seu arquivo SARIF de terceiros como parte de um fluxo de trabalho de integração contínua (CI), você poderá adicionar a ação `upload-sarif` como um passo depois de executar seus testes de CI. Se você ainda não tiver um fluxo de trabalho de CI, você poderá criar um usando um modelo de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte o início rápido "[{% data variables.product.prodname_actions %}](/actions/quickstart)".

Este exemplo de fluxo de trabalho é executado sempre que os commits são carregados no repositório. A ação usa a propriedade `partialFingerprints` para determinar se houve alterações. Além de executar quando os commits são carregados, o fluxo de trabalho está programado para ser executado uma vez por semana. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

O fluxo de trabalho mostra um exemplo de execução da ferramenta de análise estática ESLint como uma etapa de um fluxo de trabalho. A etapa `Executar ESLint` executa a ferramenta ESLint e produz o arquivo `results.sarif`. Em seguida, o fluxo de trabalho faz o upload do arquivo `results.sarif` para {% data variables.product.prodname_dotcom %} usando a ação `upload-sarif`. Para obter mais informações sobre a criação de um arquivo de fluxo de trabalho, consulte "[Introdução ao GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)".

```yml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every at 00:00 on Sunday UTC time.
on:
  push:
  schedule:
  - cron: '0 0 * * 0'

jobs:
  build:
    steps:
    - uses: actions/checkout@v2
    - name: Run npm install
      run: npm install
    # Runs the ESlint code analysis
    - name: Run ESLint
      # eslint exits 1 if it finds anything to report
      run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
    # Uploads results.sarif to GitHub repository using the upload-sarif action
    - uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

### Leia mais

- "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Visualizar o seu histórico de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[Executar {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)"
- "[Fazer o upload de um arquivo SARIF](/rest/reference/code-scanning#upload-a-sarif-file)"
