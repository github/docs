---
title: Configurar a varredura do código
intro: 'Você pode configurar como o {% data variables.product.prodname_dotcom %} faz a varredura do código no seu projeto com relação a vulnerabilidades e erros.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182311'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** este artigo descreve os recursos disponíveis na versão da ação do CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão do {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, confira o [artigo sobre o {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning) para obter informações sobre os últimos recursos. {% ifversion not ghae %} Para obter informações sobre como usar a última versão, confira "[Como configurar a verificação de código para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

## Sobre a configuração do {% data variables.product.prodname_code_scanning %}

Você pode executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %}, usando {% data variables.product.prodname_actions %} ou a partir do seu sistema de integração contínua (CI). Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" ou "[Sobre a {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %} no seu sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".

Este artigo é sobre a execução de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} usando ações.

Antes de poder configurar o {% data variables.product.prodname_code_scanning %} para um repositório, você deve configurar {% data variables.product.prodname_code_scanning %} adicionando um fluxo de trabalho do {% data variables.product.prodname_actions %} ao repositório. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %}

A análise de {% data variables.product.prodname_codeql %} é apenas um tipo de {% data variables.product.prodname_code_scanning %} que você pode fazer em {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} em {% data variables.product.prodname_dotcom_the_website %}{% endif %} contém outros fluxos de trabalho de {% data variables.product.prodname_code_scanning %} que você pode usar. {% ifversion fpt or ghec %}Encontre uma seleção deles na página "Introdução à {% data variables.product.prodname_code_scanning %}", que você pode acessar na guia **{% octicon "shield" aria-label="The shield symbol" %} Segurança**.{% endif %} Os exemplos específicos fornecidos neste artigo estão relacionados ao arquivo sobre o {% data variables.code-scanning.codeql_workflow %}.

## Edição de um fluxo de trabalho de {% data variables.product.prodname_code_scanning %}

O {% data variables.product.prodname_dotcom %} salva os arquivos de fluxo de trabalho no diretório _.github/workflows_ do seu repositório. Você pode encontrar um fluxo de trabalho que adicionou ao pesquisar seu nome de arquivo. Por exemplo, por padrão, o arquivo de fluxo de trabalho da {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %} é chamado _codeql-analysis.yml_.

1. No seu repositório, pesquise o arquivo do fluxo de trabalho que você deseja editar.
1. No canto superior direito da exibição de arquivo, para abrir o editor de fluxo de trabalho, clique em {% octicon "pencil" aria-label="The edit icon" %}.
![Botão Editar arquivo de fluxo de trabalho](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Depois de editar o arquivo, clique em **Iniciar confirmação** e preencha o formulário "Confirmar alterações". Você pode optar por confirmar diretamente a ramificação atual ou criar uma nova ramificação e iniciar uma solicitação de pull.
![Commit da atualização no fluxo de trabalho de codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obter mais informações sobre como editar arquivos de fluxo de trabalho, confira "[Saiba mais sobre o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Configurar a frequência

Configure o {% data variables.code-scanning.codeql_workflow %} para examinar o código conforme um agendamento ou quando eventos específicos ocorrerem em um repositório.

A varredura do código a cada push para o repositório, e toda vez que um pull request é criado, isso impede que os desenvolvedores introduzam novas vulnerabilidades e erros no código. A varredura do código de forma pré-programada informa as últimas vulnerabilidades e erros de {% data variables.product.company_short %}, que os pesquisadores de segurança e da comunidade, mesmo quando desenvolvedores não estão mantendo o repositório de forma ativa.

### Fazer a varredura no push

Por padrão, o {% data variables.code-scanning.codeql_workflow %} usa o evento `on.push` para disparar uma verificação de código em cada push para o branch padrão do repositório e todos os branches protegidos. Para {% data variables.product.prodname_code_scanning %} ser acionado em um branch especificado, o fluxo de trabalho deverá existir nesse branch. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

Se você fizer a verificação durante o push, os resultados serão exibidos na guia **Segurança** do repositório. Para obter mais informações, confira "[Como gerenciar alertas de verificação de código do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

Além disso, quando uma verificação de `on:push` retorna resultados que podem ser mapeados para uma solicitação de pull aberta, esses alertas aparecem automaticamente na solicitação de pull no mesmo local que os outros alertas da solicitação de pull. Os alertas são identificados por meio da comparação da análise existente do início da ramificação com a análise da ramificação de destino. Para obter mais informações sobre os alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull, confira "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

### Fazer a varredura de pull requests

O {% data variables.code-scanning.codeql_workflow %} padrão usa o evento `pull_request` para disparar uma verificação de código nas solicitações de pull direcionadas ao branch padrão. {% ifversion ghes %}O evento `pull_request` não é disparado se a solicitação de pull foi aberta por meio de um fork privado.{% else %}Se uma solicitação de pull for proveniente de um fork privado, o evento `pull_request` só será disparado se você tiver selecionado a opção "Executar fluxos de trabalho por meio de solicitações de pull" nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)".{% endif %}

Para obter mais informações sobre o evento `pull_request`, confira "[Eventos que disparam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows#pull_request)".

Se você examinar as solicitações de pull, os resultados serão exibidos como alertas em uma verificação de solicitação de pull. Para obter mais informações, confira "[Como fazer a triagem de alertas de verificação de código em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Se você usar o gatilho `pull_request`, configurado para verificar o commit de mesclagem da solicitação de pull em vez do commit de cabeçalho, ele produzirá resultados mais eficientes e precisos do que a verificação do cabeçalho do branch em cada push. No entanto, se você usar um sistema de CI/CD que não possa ser configurado para disparo em solicitações de pull, ainda poderá usar o gatilho `on:push` e a {% data variables.product.prodname_code_scanning %} mapeará os resultados para as solicitações de pull em aberto no branch e adicionará os alertas como anotações na solicitação de pull. Para obter mais informações, confira "[Verificação durante o push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".

### Definição das severidades que causam falha na verificação de solicitação de pull

Por padrão, apenas alertas com o nível de severidade `Error` ou nível de severidade de segurança `Critical` ou `High` causarão falha na verificação de solicitação de pull. As verificações com alertas de menor severidade serão bem-sucedidas. Você pode alterar os níveis de severidades de alerta e de severidades de segurança que causarão uma falha de verificação de solicitação de pull nas configurações do repositório. Para obter mais informações sobre os níveis de severidade, confira "[Sobre os alertas da verificação de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Varredura de código", à direita de "Verificar falha", use o menu suspenso para selecionar o nível de gravidade que você gostaria de fazer com que um pull request falhasse.
![Configuração de verificação de falha](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### Evitar varreduras desnecessárias de pull requests

Talvez você queira evitar que uma varredura de código seja disparada em solicitações de pull específicas direcionadas à ramificação padrão, independentemente dos arquivos que foram alterados. Configure isso especificando `on:pull_request:paths-ignore` ou `on:pull_request:paths` no fluxo de trabalho da {% data variables.product.prodname_code_scanning %}. Por exemplo, se as únicas alterações em uma solicitação de pull forem para arquivos com as extensões de arquivo `.md` ou `.txt`, você poderá usar a matriz `paths-ignore` a seguir.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**Observações**

* `on:pull_request:paths-ignore` e `on:pull_request:paths` definem condições que determinam se as ações no fluxo de trabalho serão executadas em uma solicitação de pull. Eles não determinam quais arquivos serão analisados quando as ações _forem_ executadas. Quando uma solicitação de pull contém arquivos sem correspondência com `on:pull_request:paths-ignore` ou `on:pull_request:paths`, o fluxo de trabalho executa as ações e verifica todos os arquivos alterados na solicitação de pull, incluindo aqueles correspondentes a `on:pull_request:paths-ignore` ou `on:pull_request:paths`, a menos que eles tenham sido excluídos. Para obter informações sobre como excluir arquivos da análise, confira "[Como especificar os diretórios para verificação](#specifying-directories-to-scan)".
* Nos arquivos de fluxo de trabalho da {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %}, não use as palavras-chave `paths-ignore` ou `paths` com o evento `on:push`, pois é provável que isso gere análises ausentes. Para resultados precisos, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} precisam conseguir comparar novas alterações com a análise do commit anterior.

{% endnote %}

Para obter mais informações sobre como usar `on:pull_request:paths-ignore` e `on:pull_request:paths` para determinar quando um fluxo de trabalho será executado para uma solicitação de pull, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

### Fazer a varredura de forma pré-programada

Se você usar o {% data variables.code-scanning.codeql_workflow %} padrão, o fluxo de trabalho examinará o código no repositório uma vez por semana, além das verificações disparadas pelos eventos. Para ajustar essa agenda, edite o valor `cron` no fluxo de trabalho. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)".

{% note %}

**Observação**: o {% data variables.product.prodname_dotcom %} só executa os trabalhos agendados que estão em fluxos de trabalho no branch padrão. Alterar a programação de um fluxo de trabalho em qualquer outro branch não terá efeito até que você mescle o branch com o branch-padrão.

{% endnote %}

### Exemplo

O exemplo a seguir mostra um {% data variables.code-scanning.codeql_workflow %} para um repositório em particular que tem um branch padrão chamado `main` e um branch protegido chamado `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Este fluxo de trabalho varre:
* Cada push para a ramificação padrão e a ramificação protegida
* Cada solicitação de pull para a ramificação padrão
* A ramificação padrão a cada segunda-feira às 14h20 UTC

## Especificar um sistema operacional

Se o código exigir um sistema operacional específico para ser compilado, configure o sistema operacional no seu {% data variables.code-scanning.codeql_workflow %}. Edite o valor de `jobs.analyze.runs-on` para especificar o sistema operacional do computador que executa as ações da {% data variables.product.prodname_code_scanning %}. {% ifversion ghes %}Você especifica o sistema operacional usando um rótulo apropriado como o segundo elemento em uma matriz de dois elementos, após `self-hosted`.{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

Se optar por usar um executor auto-hospedado para a verificação de código, especifique um sistema operacional usando um rótulo apropriado como o segundo elemento em uma matriz de dois elementos, após `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} é compatível com as versões mais recentes do Ubunto, Windows e macOS. Os valores típicos dessa configuração são: `ubuntu-latest`, `windows-latest` e `macos-latest`. Para obter mais informações, confira "[Escolhendo o executor de um trabalho](/actions/using-jobs/choosing-the-runner-for-a-job)" e "[Usando rótulos com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

{% ifversion ghes %}Você deve garantir que o Git esteja na variável PATH em seus executores auto-hospedados.{% else %}Se você usa um executor auto-hospedado, você deve garantir que o Git esteja na variável PATH.{% endif %} Para obter mais informações, confira "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Para obter especificações recomendadas (RAM, núcleos de CPU e disco) para executar a análise do {% data variables.product.prodname_codeql %} {% ifversion not ghes %} em computadores auto-hospedados{% endif %}, confira "[Recursos de hardware recomendados para execução do {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)".

## Especificar o local para bancos de dados de {% data variables.product.prodname_codeql %}

Em geral, você não precisa se preocupar com o lugar em que o {% data variables.code-scanning.codeql_workflow %} coloca os bancos de dados do {% data variables.product.prodname_codeql %}, pois as etapas posteriores encontrarão automaticamente os bancos de dados criados nas etapas anteriores. No entanto, se estiver escrevendo uma etapa de fluxo de trabalho personalizado que exija que o banco de dados {% data variables.product.prodname_codeql %} esteja em um local específico do disco, por exemplo, para carregar o banco de dados como um artefato de fluxo de trabalho, especifique esse local usando o parâmetro `db-location` na ação `init`.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

O {% data variables.code-scanning.codeql_workflow %} vai esperar que o caminho fornecido em `db-location` seja gravável, não exista ou seja um diretório vazio. Ao usar este parâmetro em um trabalho em execução em um executor auto-hospedado ou usando um contêiner Docker, é responsabilidade do usuário garantir que o diretório escolhido seja limpo entre execuções, ou que os bancos de dados sejam removidos depois de deixarem de ser necessários. {% ifversion fpt or ghec or ghes %}Isto não é necessário para trabalhos em execução em executores auto-hospedados {% data variables.product.prodname_dotcom %}, que obtêm uma instância nova e um sistema de arquivos limpo toda vez que forem executados. Para obter mais informações, confira "[Sobre os executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".{% endif %}

Se esse parâmetro não for usado, o {% data variables.code-scanning.codeql_workflow %} criará os bancos de dados em uma localização temporária escolhida por ele.

## Alterar as linguagens que são analisadas

O {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} detecta automaticamente código escrito nas linguagens compatíveis.

{% data reusables.code-scanning.codeql-languages-bullets %}

O arquivo do {% data variables.code-scanning.codeql_workflow %} padrão contém uma matriz chamada `language` que lista as linguagens no repositório que são analisadas. O {% data variables.product.prodname_codeql %} preenche automaticamente esta matriz quando você adiciona o {% data variables.product.prodname_code_scanning %} a um repositório. O uso da matriz `language` otimiza o {% data variables.product.prodname_codeql %} a executar cada análise em paralelo. Recomendamos que todos os fluxos de trabalho adotem essa configuração devido aos benefícios de desempenho da paralelização de compilações. Para obter mais informações sobre matrizes, confira "[Usando uma matriz para seus trabalhos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

{% data reusables.code-scanning.specify-language-to-analyze %}

Se o seu fluxo de trabalho usar a matriz `language`, o {% data variables.product.prodname_codeql %} será embutido em código para analisar apenas as linguagens da matriz. Para alterar as linguagens que você deseja analisar, edite o valor da variável de matriz. Você pode remover uma linguagem para evitar que ele seja analisado ou adicionar uma linguagem que não estava presente no repositório quando o {% data variables.product.prodname_code_scanning %} estava configurado. Por exemplo, se o repositório inicialmente só continha o JavaScript quando a {% data variables.product.prodname_code_scanning %} foi configurada e, posteriormente, você adicionou o código Python, você precisa adicionar o `python` à matriz.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

Se o fluxo de trabalho não contiver uma matriz chamada `language`, o {% data variables.product.prodname_codeql %} será configurado para executar a análise sequencialmente. Se você não especificar as linguagens no fluxo de trabalho, o {% data variables.product.prodname_codeql %} irá detectar automaticamente e tentará analisar quaisquer linguagens compatíveis no repositório. Caso deseje escolher as linguagens que serão analisadas sem usar uma matriz, use o parâmetro `languages` na ação `init`.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## Analisar as dependências do Python

Para os executores hospedados no GitHub que usam apenas o Linux, o {% data variables.code-scanning.codeql_workflow %} tentará instalar automaticamente as dependências do Python para fornecer mais resultados para a análise do CodeQL. Controle esse comportamento especificando o parâmetro `setup-python-dependencies` para a ação chamada pela etapa "Inicializar o CodeQL". Por padrão, esse parâmetro é definido como `true`:

-  Se o repositório contiver código escrito em Python, a etapa "Initialize CodeQL" instalará as dependências necessárias no executor hospedado pelo GitHub. Se a instalação automática for bem-sucedida, a ação também definirá a variável de ambiente `CODEQL_PYTHON` para o arquivo executável Python que inclui as dependências.

- Se o repositório não tiver dependências do Python ou se as dependências forem especificadas de forma inesperada, você receberá um aviso e a ação continuará com os trabalhos restantes. A ação pode ser executada com sucesso, mesmo quando houver problemas de interpretação de dependências, mas os resultados podem estar incompletos.

Alternativamente, você pode instalar as dependências do Python manualmente em qualquer sistema operacional. Você precisará adicionar `setup-python-dependencies` e defini-lo como `false`, bem como definir `CODEQL_PYTHON` como o executável Python que inclui as dependências, conforme mostrado neste extrato de fluxo de trabalho:

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## Configurar uma categoria para a análise

Use `category` para distinguir entre várias análises da mesma ferramenta e do mesmo commit, mas executadas em diferentes linguagens ou em diferentes partes do código. A categoria especificada no seu fluxo de trabalho será incluída no arquivo de resultados SARIF.

Esse parâmetro é particularmente útil se você trabalhar com monorepos e tiver vários arquivos SARIF para diferentes componentes do monorepo.

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

Se você não especificar um parâmetro `category` no fluxo de trabalho, o {% data variables.product.product_name %} vai gerar um nome de categoria para você, com base no nome do arquivo de fluxo de trabalho que dispara a ação, o nome da ação e todas as variáveis da matriz. Por exemplo:
- O fluxo de trabalho `.github/workflows/codeql-analysis.yml` e a ação `analyze` produzirão a categoria `.github/workflows/codeql.yml:analyze`.
- O fluxo de trabalho `.github/workflows/codeql-analysis.yml`, a ação `analyze` e as variáveis da matriz `{language: javascript, os: linux}` produzirão a categoria `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

O valor `category` será exibido como a propriedade `<run>.automationDetails.id` no SARIF v2.1.0. Para obter mais informações, confira "[Suporte do SARIF à {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)".

A categoria especificada não substituirá os detalhes do objeto `runAutomationDetails` no arquivo SARIF, se incluído.

## Executar consultas adicionais

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### Usando pacotes de consulta de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Para adicionar um ou mais pacotes de consulta do {% data variables.product.prodname_codeql %} (beta), adicione uma entrada `with: packs:` à seção `uses: {% data reusables.actions.action-codeql-action-init %}` do fluxo de trabalho. Em `packs`, você especifica um ou mais pacotes a serem usados e, opcionalmente, a versão que será baixada. Quando você não especificar uma versão, a versão mais recente será baixada. Se você quiser usar pacotes que não estão publicamente disponíveis, precisará definir a variável de ambiente `GITHUB_TOKEN` para um segredo que tenha acesso aos pacotes. Para obter mais informações, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

{% note %}

**Observação:** para fluxos de trabalho que geram bancos de dados do {% data variables.product.prodname_codeql %} para várias linguagens, você precisará especificar pacotes de consulta do {% data variables.product.prodname_codeql %} em um arquivo de configuração. Para obter mais informações, confira "[Como especificar pacotes de consulta do {% data variables.product.prodname_codeql %}](#specifying-codeql-query-packs)" abaixo.

{% endnote %}

No exemplo abaixo, `scope` é a organização ou a conta pessoal que publicou o pacote. Quando o fluxo de trabalho é executado, os três pacotes de consulta do {% data variables.product.prodname_codeql %} são baixados do {% data variables.product.product_name %} e das consultas ou conjunto de consultas padrão de cada execução de pacote:
- A última versão do `pack1` é baixada e todas as consultas padrão são executadas.
- A versão 1.2.3 do `pack2` é baixada e todas as consultas padrão são executadas.
- A última versão do `pack3` que é compatível com a versão 3.2.1 é baixada e todas as consultas são executadas.
- A versão 4.5.6 é `pack4` baixada e somente as consultas encontradas em `path/to/queries` são executadas.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### Como baixar pacotes do {% data variables.product.prodname_codeql %} do {% data variables.product.prodname_ghe_server %}

Se o fluxo de trabalho usa pacotes publicados em uma instalação do {% data variables.product.prodname_ghe_server %}, você precisa informar ao fluxo de trabalho onde encontrá-los. Você pode fazer isso usando a entrada `registries` da ação {% data reusables.actions.action-codeql-action-init %}. Essa entrada aceita uma lista de propriedades `url`, `packages` e `token`, como é mostrado abaixo.

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

Os padrões de pacote na lista de registros são examinados em ordem, portanto, coloque os padrões de pacote mais específicos em primeiro lugar. Os valores de `token` precisam ser um {% data variables.product.pat_v1 %} gerado pela instância do GitHub da qual você está baixando com a permissão `read:packages`.

Observe o `|` após o nome da propriedade `registries`. Isso é importante, pois as entradas do {% data variables.product.prodname_actions %} só podem aceitar cadeias de caracteres. O uso de `|` converte o texto subsequente em uma cadeia de caracteres, que é analisada depois pela ação {% data reusables.actions.action-codeql-action-init %}.

### Usando consultas em pacotes QL
{% endif %} Para adicionar uma ou mais consultas, adicione uma entrada `with: queries:` à seção `uses: {% data reusables.actions.action-codeql-action-init %}` do fluxo de trabalho. Se as consultas estiverem em um repositório privado, use o parâmetro `external-repository-token` para especificar um token que tenha acesso para fazer check-out do repositório privado.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Você também pode especificar conjuntos de consulta no valor de `queries`. Os conjuntos de consulta são coleções de consultas, geralmente agrupadas por finalidade ou linguagem.

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### Trabalhando com arquivos de configuração personalizados
{% endif %}

Se você também usar um arquivo de configuração para configurações personalizadas, todos os {% ifversion codeql-packs %}pacotes ou {% endif %}as consultas especificados no fluxo de trabalho serão usados em vez dos especificados no arquivo de configuração. Se você quiser executar o conjunto combinado de {% ifversion codeql-packs %}pacotes ou {% endif %}consultas adicionais, anteceda o valor de {% ifversion codeql-packs %}`packs` ou de {% endif %}`queries` no fluxo de trabalho com o símbolo `+`. Para obter mais informações, confira "[Como usar um arquivo de configuração personalizado](#using-a-custom-configuration-file)".

No exemplo a seguir, o símbolo `+` garante que {% ifversion codeql-packs %}os pacotes e {% endif %}as consultas adicionais especificados sejam usados em conjunto com qualquer um especificado no arquivo de configuração referenciado.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## Usando um arquivo de configuração personalizado

Um arquivo de configuração personalizado é uma forma alternativa de especificar {% ifversion codeql-packs %}os pacotes e {% endif %}as consultas adicionais serem executados. Você também pode usar o arquivo para desabilitar as consultas padrão{% ifversion code-scanning-exclude-queries-from-analysis %}, excluir ou incluir consultas específicas,{% endif %} e especificar quais diretórios examinar durante a análise.

No arquivo de fluxo de trabalho, use o parâmetro `config-file` da ação `init` para especificar o caminho para o arquivo de configuração que você deseja usar. Este exemplo carrega o arquivo de configuração _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

Se o arquivo de configuração estiver localizado em um repositório privado externo, use o parâmetro `external-repository-token` da ação `init` para especificar um token que tenha acesso ao repositório privado.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

As configurações no arquivo de configuração são gravadas no formato YAML.

{% ifversion codeql-packs %}
### Especificando pacotes de consulta de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Você especificou pacotes de consulta de {% data variables.product.prodname_codeql %} em uma matriz. Observe que o formato é diferente do formato usado pelo arquivo de fluxo de trabalho.

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

O formato completo para especificar um pacote de consultas é `scope/name[@version][:path]`. `version` e `path` são opcionais. `version` é o intervalo de versão semver. Se ele estiver ausente, a última versão será usada. Para obter mais informações sobre intervalos semver, confira a [documentação do semver no npm](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).

Se tiver um fluxo de trabalho que gera mais de um banco de dados de {% data variables.product.prodname_codeql %}, você poderá especificar todos os pacotes de consulta de {% data variables.product.prodname_codeql %} para executar em um arquivo de configuração personalizado usando um mapa aninhado de pacotes.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### Especificar consultas adicionais

As consultas adicionais são especificadas em uma matriz `queries`. Cada elemento da matriz contém um parâmetro `uses` com um valor que identifica um arquivo de consulta individual, um diretório contendo arquivos de consulta ou um arquivo de definição de conjunto de consultas.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Opcionalmente, você pode dar um nome a cada elemento do array, conforme mostrado nos exemplos de arquivos de configuração abaixo. Para obter mais informações sobre consultas adicionais, confira "[Como executar consultas adicionais](#running-additional-queries)" acima.

### Desativar as consultas-padrão

Se você quiser apenas executar consultas personalizadas, poderá desabilitar as consultas de segurança padrão usando `disable-default-queries: true`.

{% ifversion code-scanning-exclude-queries-from-analysis %}
### Como excluir consultas específicas da análise

Você pode adicionar os filtros `exclude` e `include` ao seu arquivo de configuração personalizado para especificar as consultas que deseja excluir ou incluir na análise.

Isso será útil se você quiser excluir, por exemplo:
- Consultas específicas dos pacotes padrão (`security`, `security-extended` e `security-and-quality`).
- Consultas específicas cujos resultados não interessam a você.
- Todas as consultas que geram avisos e recomendações.

Você pode usar filtros `exclude` semelhantes aos do arquivo de configuração abaixo para excluir as consultas que deseja remover da análise padrão. No exemplo do arquivo de configuração abaixo, as consultas `js/redundant-assignment` as `js/useless-assignment-to-local` são excluídas da análise.

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
Para localizar a ID de uma consulta, você pode clicar no alerta da lista de alertas na guia Segurança. Isso abre a página de detalhes do alerta. O campo `Rule ID` contém a ID da consulta. Para obter mais informações sobre a página de detalhes do alerta, confira "[Sobre alertas de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)".

{% tip %}

**Dicas:**
- A ordem dos filtros faz diferença. A primeira instrução de filtro exibida após as instruções sobre as consultas e os pacotes de consulta determina se as consultas são incluídas ou excluídas por padrão.
- As instruções subsequentes são executadas em ordem e as instruções que aparecem posteriormente no arquivo têm precedência sobre as instruções anteriores.

{% endtip %}

Você pode encontrar outro exemplo ilustrando o uso desses filtros na seção "[Arquivos de configuração de exemplo](#example-configuration-files)".

Para obter mais informações sobre como usar os filtros `exclude` e `include` em seu arquivo de configuração personalizado, confira "[Como criar conjuntos de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite)". Para obter informações sobre os metadados de consulta nos quais você pode filtrar, confira "[Metadados para consultas CodeQL](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)".

{% endif %}

### Especificar diretórios para serem varridos

Nas linguagens interpretadas compatíveis com o {% data variables.product.prodname_codeql %} (Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}, Ruby{% endif %} e JavaScript/TypeScript), você pode restringir a {% data variables.product.prodname_code_scanning %} a arquivos em diretórios específicos adicionando uma matriz `paths` ao arquivo de configuração. Você pode excluir os arquivos de diretórios específicos da análise ao adicionar uma matriz `paths-ignore`.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Observação**:

* As palavras-chave `paths` e `paths-ignore`, usadas no contexto do arquivo de configuração da {% data variables.product.prodname_code_scanning %}, não devem ser confundidas com as mesmas palavras-chave quando usadas para `on.<push|pull_request>.paths` em um fluxo de trabalho. Quando são usadas para modificar `on.<push|pull_request>` em um fluxo de trabalho, elas determinam se as ações serão executadas quando alguém modificar o código nos diretórios especificados. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".
* Os caracteres de padrão de filtro `?`, `+`, `[`, `]` e `!` não têm suporte e serão correspondidos literalmente.
* `**` os caracteres só podem estar no início ou no final de uma linha, ou circundados por barras, e você não pode misturar `**` e outros caracteres. Por exemplo, `foo/**`, `**/foo` e `foo/**/bar` são todas as sintaxes permitidas, mas `**foo` não é. No entanto, você pode usar estrelas únicas junto com outros caracteres, conforme mostrado no exemplo. Você precisará citar qualquer coisa que contenha um caractere `*`.

{% endnote %}

Para linguagens compiladas, se você deseja limitar {% data variables.product.prodname_code_scanning %} a diretórios específicos no seu projeto, você deverá especificar os passos de compilação adequados no fluxo de trabalho. Os comandos que você precisará usar para excluir um diretório da compilação dependerão do seu sistema de compilação. Para obter mais informações, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

Você pode analisar rapidamente pequenas partes de um repositório único quando modifica o código em diretórios específicos. Você precisará excluir os diretórios das etapas de build e usar as palavras-chave `paths-ignore` e `paths` para [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) no fluxo de trabalho.

### Exemplo de arquivos de configuração

{% data reusables.code-scanning.example-configuration-files %}

## Configurar o {% data variables.product.prodname_code_scanning %} para linguagens compiladas

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obter mais informações sobre como configurar a {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %} para as linguagens compiladas, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)".

## Carregar dados do {% data variables.product.prodname_code_scanning %} no {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} pode exibir dados de análise de código gerados externamente por uma ferramenta de terceiros. Carregue os dados da análise de código com a ação `upload-sarif`. Para obter mais informações, confira "[Como carregar um arquivo SARIF no GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
