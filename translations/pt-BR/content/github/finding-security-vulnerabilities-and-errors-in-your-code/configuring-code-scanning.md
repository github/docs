---
title: Configurar a varredura do código
intro: 'Você pode configurar como o {% data variables.product.prodname_dotcom %} faz a varredura do código no seu projeto com relação a vulnerabilidades e erros.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Pessoas com permissões de gravação para um repositório podem configurar {% data variables.product.prodname_code_scanning %} para o repositório.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}


### Sobre a configuração do {% data variables.product.prodname_code_scanning %}

Você pode executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_location %}, usando {% data variables.product.prodname_actions %} ou a partir do seu sistema de integração contínua (CI), usando o {% data variables.product.prodname_codeql_runner %}. Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)." Para obter mais informações sobre o {% data variables.product.prodname_codeql_runner %}, consulte "[Executar {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)".

Este artigo está relacionado à execução de {% data variables.product.prodname_code_scanning %} dentro de {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_ghe_server %}{% else %}{% data variables.product.prodname_dotcom %}{% endif %}.

Antes de poder configurar o {% data variables.product.prodname_code_scanning %} para um repositório, você deve habilitar o {% data variables.product.prodname_code_scanning %} adicionando um fluxo de trabalho do {% data variables.product.prodname_actions %} ao repositório. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning).

{% data reusables.code-scanning.edit-workflow %}

A análise de {% data variables.product.prodname_codeql %} é apenas um tipo de {% data variables.product.prodname_code_scanning %} que você pode fazer em {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} em  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contém outros fluxos de trabalho de {% data variables.product.prodname_code_scanning %} que você pode usar. {% if currentVersion == "free-pro-team@latest" %}Você pode encontrar uma seleção destes na página "Comece com {% data variables.product.prodname_code_scanning %}", que você pode acessar na aba **{% octicon "shield" aria-label="The shield symbol" %} Segurança**.{% endif %} Os exemplos específicos fornecidos neste artigo estão relacionados ao arquivo de {% data variables.product.prodname_codeql_workflow %}.

### Editing a code scanning workflow

O {% data variables.product.prodname_dotcom %} salva arquivos de fluxo de trabalho no diretório _.github/workflows_ do seu repositório. You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. No seu repositório, pesquise o arquivo do fluxo de trabalho que você deseja editar.
1. No canto superior direito da vista do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %} para abrir o editor do fluxo de trabalho. ![Edite o botão do arquivo do fluxo de trabalho](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Depois de ter editado o arquivo, clique em **Iniciar commit** e preencha o formulário "Alterações do commit". Você pode escolher o "commit" diretamente no branch atual ou criar um novo branch e iniciar um pull request. ![Atualização do commit para o fluxo de trabalho do codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obter mais informações sobre edição de arquivos de fluxo de trabalho, consulte "[Configurar um fluxo de trabalho](/actions/configuring-and-managing-workflows/configuring-a-workflow)".

### Configurar a frequência

Você pode fazer a varredura de código de forma pré-programada ou quando ocorrerem eventos específicos em um repositório.

A varredura do código a cada push para o repositório, e toda vez que um pull request é criado, isso impede que os desenvolvedores introduzam novas vulnerabilidades e erros no código. A varredura do código de forma pré-programada informa as últimas vulnerabilidades e erros de {% data variables.product.company_short %}, que os pesquisadores de segurança e da comunidade, mesmo quando desenvolvedores não estão mantendo o repositório de forma ativa.

#### Fazer a varredura no push

Se você usar o fluxo de trabalho padrão, o {% data variables.product.prodname_code_scanning %} fará a varredura do código no repositório uma vez por semana, além das varreduras acionadas pelos eventos. Para ajustar essa programação, edite o valor `CRON` no fluxo de trabalho. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

#### Fazer a varredura de pull requests

**Observação**: As palavras-chave `caminhos` e `paths-ignore` usadas no contexto do arquivo de configuração de {% data variables.product.prodname_code_scanning %} não devem ser confundidas com as mesmas palavras-chave quando usadas para `on.<push|pull_request>.paths`. Quando estão acostumados a modificar `on.<push|pull_request>` em um arquivo de fluxo de trabalho, eles determinam se as ações serão executadas quando alguém modificar o código nos diretórios especificados. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

Para obter mais informações sobre o evento `pull_request` , consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

#### Fazer a varredura de forma pré-programada

O fluxo de trabalho padrão do {% data variables.product.prodname_code_scanning %} usa o evento `on.push` para acionar uma varredura de código em cada push para qualquer branch que contém o arquivo de fluxo de trabalho. Para ajustar essa programação, edite o valor `CRON` no fluxo de trabalho. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)".

{% note %}

**Observação**: {% data variables.product.prodname_dotcom %} executa apenas trabalhos programados que estão em fluxos de trabalho no branch-padrão. Alterar a programação de um fluxo de trabalho em qualquer outro branch não terá efeito até que você mescle o branch com o branch-padrão.

{% endnote %}

#### Exemplo

O exemplo a seguir mostra um {% data variables.product.prodname_codeql_workflow %} para um repositório em particular que possui um branch-padrão denominado `principal` e um branch protegido denominado `protegido`.

``` yaml
on:
  push:
  pull_request:
  schedule:
    - cron: '0 15 * * 0'
```

Este fluxo de trabalho faz a varredura:
* Cada push para o branch-padrão e o branch protegido
* Cada pull request para o branch-padrão
* O branch-padrão às 15h. todo domingo

### Especificar um sistema operacional

Se seu código exigir um sistema operacional específico para compilar, você poderá configurar o sistema operacional em seu {% data variables.product.prodname_codeql_workflow %}. Edite o valor de `jobs.<job_id>.runs-on` para especificar o sistema operacional para a máquina que executa suas ações em {% data variables.product.prodname_code_scanning %}. {% if currentVersion ver_gt "enterprise-server@2.21" %}Você especifica o sistema operacional usando uma etiqueta apropriada como segundo elemento em um array de dois elementos, depois de `auto-hospedado`.

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```
{% endif %}

O {% data variables.product.prodname_code_scanning_capc %} é compatível com as versões mais recentes do macOS, Ubuntu, e Windows. Portanto, os valores típicos para essa configuração são `ubuntu-latest`, `windows-latest` e `macos-latest`. Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

### Sobrescrever a detecção automática de linguagem

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring {% data variables.product.prodname_code_scanning %} for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages)."

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Para substituir a detecção automática de linguagem, adicione `with:languages:` à ação `init` no seu fluxo de trabalho. As palavras-chave para as linguagens compatíveis são `cpp`, `csharp`, `go`, `java`, `javascript` e `python`.

Por exemplo, a configuração a seguir limita {% data variables.product.prodname_code_scanning %} para C/C++, C#, e Python.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```

### Executar consultas adicionais

{% data reusables.code-scanning.run-additional-queries %}

Para adicionar uma ou mais consultas, adicione uma entrada `with: queries:` na seção `uses: github/codeql-action/init@v1` do fluxo de trabalho.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - queries: COMMA-SEPARATED LIST OF PATHS
```

Você também pode executar suítes de consultas adicionais especificando-os em um arquivo de configuração. Os suítes de consulta são coleções de consultas, geralmente agrupados por finalidade ou linguagem.

{% data reusables.code-scanning.codeql-query-suites %}

Você pode executar consultas adicionais especificando-as em um arquivo de configuração. Se você desejar executar o conjunto combinado de consultas adicionais especificadas aqui e no arquivo de configuração, determine previamente o valor de `consultas` no fluxo de trabalho com o símbolo `+`. Para obter exemplos de arquivos de configuração, consulte "[Exemplo de arquivos de configuração](#example-configuration-files)".

Para incluir um ou mais suites de consulta, adicione uma seção `consultas` ao seu arquivo de configuração.

``` yaml
queries:
  - name: DESCRIPTION OF YOUR CHOICE
    uses: PATH
```

### Usar uma ferramenta de varredura de código de terceiros

Como alternativa à especificação de quais consultas executar no arquivo de fluxo de trabalho, você poderá fazer isso em um arquivo de configuração separado. Você também pode usar um arquivo de configuração para desativar as consultas-padrão e especificar quais diretórios escanear durante a análise.

No arquivo de workflow use o parâmetro `config-file` da ação `init` para especificar o caminho para o arquivo de configuração que você deseja usar. Este exemplo carrega o arquivo de configuração _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

O arquivo de configuração pode ser localizado no repositório local ou em um repositório remoto público. Para repositórios remotos, você pode usar a sintaxe _owner/repository/file.yml@branch_. As configurações no arquivo são escritas no formato YAML.

#### Especificar consultas adicionais

Você especifica consultas adicionais em um array de `consultas`. Cada elemento do array contém um parâmetro de `uso` com um valor que identifica um único arquivo de consulta, um diretório que contém arquivos de consulta ou um arquivo de definição do conjunto de consulta.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls
```

Opcionalmente, você pode dar um nome a cada elemento do array, conforme mostrado nos exemplos de arquivos de configuração abaixo.

Para obter mais informações sobre consultas adicionais, consulte "[Executar consultas adicionais](#running-additional-queries) acima.

#### Desativar as consultas-padrão

Se você desejar apenas executar consultas personalizadas, você poderá desabilitar as consultas de segurança padrão adicionando `disable-default-queries: true` ao seu arquivo de configuração.

#### Especificar diretórios para serem varridos

Para as linguagens interpretadas com as quais {% data variables.product.prodname_codeql %} é compatível (Python e JavaScript/TypeScript), você pode restringir {% data variables.product.prodname_code_scanning %} para arquivos em diretórios específicos adicionando um array de `caminhos` para o arquivo de configuração. Você pode excluir os arquivos em diretórios específicos das varreduras, adicionando um array de `paths-ignore`.

``` yaml
paths: 
  - src 
paths-ignore: 
  - node_modules
  - '**/*.test.js'
```

{% note %}

**Observação**:

* As palavras-chave `caminhos` e `paths-ignore`, usados no contexto do arquivo de configuração do {% data variables.product.prodname_code_scanning %}, não deve ser confundido com as mesmas palavras-chave usadas para `on.<push|pull_request>.paths` em um fluxo de trabalho. Quando estão acostumados a modificar `on.<push|pull_request>` em um fluxo de trabalho, eles determinam se as ações serão executadas quando alguém modifica o código nos diretórios especificados. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. Por exemplo, `foo/**`, `**/foo` e `foo/**/bar` são todos de sintaxe permitida, mas `**foo` não é. No entanto, você pode usar estrelas únicas junto com outros caracteres, conforme mostrado no exemplo. Você precisará colocar entre aspas qualquer coisa que contenha um caractere `*`.

{% endnote %}

Para C/C++, C#, e Java, se você desejar limitar {% data variables.product.prodname_code_scanning %} a diretórios específicos no seu projeto, você deverá especificar etapas de criação apropriadas no fluxo de trabalho. Os comandos que você precisa usar para excluir um diretório da criação dependerão do seu sistema de criação. Para obter mais informações, consulte "[Configurar a ação de {% data variables.product.prodname_codeql %} para linguagens compiladas](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

Você pode rapidamente analisar pequenas partes de um monorepo ao modificar o código em diretórios específicos. Você deverá excluir diretórios nas suas etapas de criação e usar as palavras-chave `paths-ignore` e `caminhos` para [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) no seu arquivo de fluxo de trabalho.

#### Exemplo de arquivo de configuração

{% data reusables.code-scanning.example-configuration-files %}

### Configurar o {% data variables.product.prodname_code_scanning %} para linguagens compiladas

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obter mais informações sobre como configurar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para linguagens compiladas, consulte "[Configurar a ação do {% data variables.product.prodname_codeql %} para linguagens compiladas](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages)".

### Acessar repositórios privados

Se o seu fluxo de trabalho para {% data variables.product.prodname_code_scanning %} acessar repositórios privados no {% data variables.product.prodname_dotcom %}, você deverá configurar o Git para efetuar a autenticação com um token de acesso pessoal. Defina o segredo no ambiente do executor usando `jobs.<job_id>.steps.env` no seu fluxo de trabalho antes de qualquer ação do {% data variables.product.prodname_codeql %}. Para mais informações consulte "[Criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)" e "[Criar e armazenar segredos criptografados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por exemplo, a configuração a seguir faz com que o Git substitua todas as URLs para os repositórios `github/foo`, `github/bar` e `github/baz` em {% data variables.product.prodname_dotcom_the_website %} por URLs que incluem o token de acesso pessoal que você armazena na variável de ambiente `ACCESS_TOKEN`.

{% raw %}
```yaml
steps:
- name: Configure access to private repository on GitHub.com
  env:
    TOKEN: ${{ secrets.ACCESS_TOKEN }}
  run: |
    git config --global url."https://${TOKEN}@github.com/github/foo".insteadOf "https://github.com/github/foo"
    git config --global url."https://${TOKEN}@github.com/github/bar".insteadOf "https://github.com/github/bar"
    git config --global url."https://${TOKEN}@github.com/github/baz".insteadOf "https://github.com/github/baz"
```
{% endraw %}

### {% data variables.product.prodname_code_scanning_capc %} usa {% data variables.product.prodname_actions %}.

Você pode exibir análise de código de uma ferramenta de terceiros em {% data variables.product.prodname_dotcom %}, adicionando a ação de `upload-sarif` ao seu fluxo de trabalho. Você pode fazer o upload de dados de análise de código com a ação `upload-sarif`. Para obter mais informações, consulte "[Fazer o upload de um arquivo SARIF para o GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)".
