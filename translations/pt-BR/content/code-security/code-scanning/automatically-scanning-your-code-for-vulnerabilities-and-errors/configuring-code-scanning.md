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
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configurar varredura de código
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Sobre a configuração do {% data variables.product.prodname_code_scanning %}

Você pode executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %}, usando {% data variables.product.prodname_actions %} ou a partir do seu sistema de integração contínua (CI). Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" ou
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
"[Sobre {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".
{%- else %}
"[Executar {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."
{% endif %}

Este artigo é sobre a execução de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} usando ações.

Antes de poder configurar o {% data variables.product.prodname_code_scanning %} para um repositório, você deve configurar {% data variables.product.prodname_code_scanning %} adicionando um fluxo de trabalho do {% data variables.product.prodname_actions %} ao repositório. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %}

A análise de {% data variables.product.prodname_codeql %} é apenas um tipo de {% data variables.product.prodname_code_scanning %} que você pode fazer em {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} em  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contém outros fluxos de trabalho de {% data variables.product.prodname_code_scanning %} que você pode usar. {% ifversion fpt %}Você pode encontrar uma seleção destes na página "Comece com {% data variables.product.prodname_code_scanning %}", que você pode acessar na aba **{% octicon "shield" aria-label="The shield symbol" %} Segurança**.{% endif %} Os exemplos específicos fornecidos neste artigo estão relacionados ao arquivo de {% data variables.product.prodname_codeql_workflow %}.

## Editing a code scanning workflow

O {% data variables.product.prodname_dotcom %} salva arquivos de fluxo de trabalho no diretório _.github/workflows_ do seu repositório. Você pode encontrar um fluxo de trabalho que você adicionou procurando o nome do seu arquivo. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. No seu repositório, pesquise o arquivo do fluxo de trabalho que você deseja editar.
1. No canto superior direito da vista do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %} para abrir o editor do fluxo de trabalho. ![Edite o botão do arquivo do fluxo de trabalho](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Depois de ter editado o arquivo, clique em **Iniciar commit** e preencha o formulário "Alterações do commit". Você pode escolher o "commit" diretamente no branch atual ou criar um novo branch e iniciar um pull request. ![Atualização do commit para o fluxo de trabalho do codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obter mais informações sobre a edição de arquivos do fluxo de trabalho, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Configurar a frequência

Você pode fazer a varredura de código de forma pré-programada ou quando ocorrerem eventos específicos em um repositório.

A varredura do código a cada push para o repositório, e toda vez que um pull request é criado, isso impede que os desenvolvedores introduzam novas vulnerabilidades e erros no código. A varredura do código de forma pré-programada informa as últimas vulnerabilidades e erros de {% data variables.product.company_short %}, que os pesquisadores de segurança e da comunidade, mesmo quando desenvolvedores não estão mantendo o repositório de forma ativa.

### Fazer a varredura no push

Se você usar o fluxo de trabalho padrão, o {% data variables.product.prodname_code_scanning %} fará a varredura do código no repositório uma vez por semana, além das varreduras acionadas pelos eventos. Para ajustar essa programação, edite o valor `CRON` no fluxo de trabalho. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

Se você fizer uma varredura no push, os resultados aparecerão na aba **Segurança** do repositório. Para obter mais informações, consulte "[Gerenciar alertas de varredura de código para seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository). "

{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 %}
Além disso, quando uma verificação de `on:push` retorna resultados que podem ser mapeados com um pull request aberto, esses alertas serão automaticamente exibidos no pull request nos mesmos lugares que outros alertas de pull request. Os alertas são identificados comparando a análise existente do cabeçalho do branch com a análise do branch de destino. Para obter mais informações sobre alertas de {% data variables.product.prodname_code_scanning %} em pull requests, consulte "[Triando alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
{% endif %}

### Fazer a varredura de pull requests

O padrão {% data variables.product.prodname_codeql_workflow %} usa o evento `pull_request` para acionar uma verificação de código em pull requests direcionadas ao branch padrão. {% ifversion ghes %}O evento `pull_request` não será acionado se o pull request foi aberto através de uma bifurcação privada.{% else %}Se um pull request for de um fork privado, o evento `pull_request` só será acionado se você tiver selecionado a opção "Executar fluxos de trabalho a partir de pull requests" nas configurações do repositório. Para obter mais informações, consulte "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)".{% endif %}

Para obter mais informações sobre o evento `pull_request` , consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

Se você realizar uma varredura de pull requests, os resultados aparecerão como alertas em uma verificação de pull request. Para obter mais informações, consulte "[Alertas de varredura de código de triagem em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 %}
 O uso o gatilho `pull_request`, configurado para verificar o commit de merge do pull request, em vez do commit do cabeçalho, produzirá resultados mais eficientes e precisos do que digitalizar o cabeçalho do branch em cada push. No entanto, se você usa um sistema de CI/CD que não pode ser configurado para acionar em pull requests, você ainda poderá usar o gatilho `on:push` e {% data variables.product.prodname_code_scanning %} mapeará os resultados para abrir os pull requests no branch e adicionar os alertas como anotações no pull request. Para obter mais informações, consulte "[Digitalizando ao enviar por push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
### Definindo as severidades que causam falha na verificação de pull request

Por padrão, apenas os alertas com o nível de  gravidade `Error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %} ou nível de segurança `Critical` ou `High`{% endif %} farão com que ocorra uma falha no pull request e uma verificação será bem-sucedida com alertas de menor gravidade. É possível alterar os níveis de gravide dos alertas{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %} e de gravidades de segurança{% endif %} que causarão uma falha de verificação de pull request nas configurações do seu repositório. Para obter mais informações sobre os níveis de gravidade, consulte "[Gerenciar alertas de digitalização de códigos para o seu repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#about-alerts-details).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Em "Varredura de código", à direita de "Verificar falha", use o menu suspenso para selecionar o nível de gravidade que você gostaria de fazer com que um pull request falhasse.
{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}
![Verificar falha de configuração](/assets/images/help/repository/code-scanning-check-failure-setting.png)
{% else %}
![Verificar falha de configuração](/assets/images/help/repository/code-scanning-check-failure-setting-ghae.png)
{% endif %}
{% endif %}

### Evitar varreduras desnecessárias de pull requests

Você pode querer evitar que uma varredura de código seja acionada em pull requests específicos para o branch padrão, Independentemente de os arquivos terem sido alterados. Você pode configurar isso, especificando `no:pull_request:paths-ignore` ou `on:pull_request:paths` no fluxo de trabalho de {% data variables.product.prodname_code_scanning %}. Por exemplo, se as únicas alterações em um pull request são para arquivos com extensões de arquivo `.md` ou `.txt`, você poderá usar o seguinte array `paths-ignore`.

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

* `on:pull_request:paths-ignore` e `on:pull_request:paths` definem condições que determinam se as ações no fluxo de trabalho serão executadas em um pull request. Eles não determinam quais arquivos serão analisados quando as ações _são_ executadas. Quando uma pull request contém quaisquer arquivos não correspondidos por `on:pull_request:paths-ignore` ou `on:pull_request:paths`, o fluxo de trabalho executa as ações e faz a varredura de todos os arquivos alterados no pull request, incluindo aqueles que correspondidos por `on:pull_request:paths-ignore` ou `on:pull_request:paths`, a menos que os arquivos tenham sido excluídos. Para obter informações sobre como excluir arquivos da análise, consulte "[Especificar diretórios a serem varridos](#specifying-directories-to-scan)".
* Para arquivos do fluxo de trabalho de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, não use as palavras-chave `paths-ignore` ou `paths` com o evento `on:push`, pois é provável que isso gere análises ausentes. Para resultados precisos, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} precisam conseguir comparar novas alterações com a análise do commit anterior.

{% endnote %}

Para mais informações sobre como usar `on:pull_request:paths-ignore` e `on:pull_request:paths` para determinar quando um fluxo de trabalho será executado para um pull request, consulte "[sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

### Fazer a varredura de forma pré-programada

O fluxo de trabalho padrão do {% data variables.product.prodname_code_scanning %} usa o evento `on.push` para acionar uma varredura de código em cada push para qualquer branch que contém o arquivo de fluxo de trabalho. Para ajustar essa programação, edite o valor `CRON` no fluxo de trabalho. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)".

{% note %}

**Observação**: {% data variables.product.prodname_dotcom %} executa apenas trabalhos programados que estão em fluxos de trabalho no branch-padrão. Alterar a programação de um fluxo de trabalho em qualquer outro branch não terá efeito até que você mescle o branch com o branch-padrão.

{% endnote %}

### Exemplo

O exemplo a seguir mostra um {% data variables.product.prodname_codeql_workflow %} para um repositório em particular que possui um branch-padrão denominado `principal` e um branch protegido denominado `protegido`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Este fluxo de trabalho faz a varredura:
* Cada push para o branch-padrão e o branch protegido
* Cada pull request para o branch-padrão
* O branch padrão toda segunda-feira às 14h20 UTC

## Especificar um sistema operacional

Se seu código exigir um sistema operacional específico para compilar, você poderá configurar o sistema operacional em seu {% data variables.product.prodname_codeql_workflow %}. Edite o valor de `jobs.analyze.runs-on` para especificar o sistema operacional para a máquina que executa suas ações de {% data variables.product.prodname_code_scanning %}. {% ifversion ghes %}Você especifica o sistema operacional usando uma etiqueta apropriada como segundo elemento em um array de dois elementos, após `auto-hospedado`.{% else %}

Se você optar por usar um executor auto-hospedado para varredura de código, você pode especificar um sistema operacional usando uma etiqueta apropriada como segundo elemento em um array de dois elementos, após `auto-hospedado`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% ifversion fpt %}Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."{% endif %}

O {% data variables.product.prodname_code_scanning_capc %} é compatível com as versões mais recentes do macOS, Ubuntu, e Windows. Portanto, os valores típicos para essa configuração são `ubuntu-latest`, `windows-latest` e `macos-latest`. Para obter mais informações, consulte {% ifversion ghes %}" %}"[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" e "[Usando rótulos com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Sintaxe de fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

{% ifversion ghes %}Você deve garantir que o Git esteja na variável do PATH em seus executores auto-hospedados.{% else %}Se você usa um executor auto-hospedado, você deve garantir que o Git esteja na variável de PATH.{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## Especificar o local para bancos de dados de {% data variables.product.prodname_codeql %}

Em geral você não precisa se preocupar com o lugar em que {% data variables.product.prodname_codeql_workflow %} coloca bancos de dados de {% data variables.product.prodname_codeql %}, uma vez que as etapas posteriores encontrarão automaticamente bancos de dados criados nas etapas anteriores. No entanto, se estiver escrevendo um fluxo de trabalho personalizado que exige que o banco de dados de {% data variables.product.prodname_codeql %} esteja em um local específico do disco, por exemplo, para fazer o upload do banco de dados como um artefato de fluxo de trabalho você pode especificar essa localização usando o parâmetro `db-location` na ação `init`.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    db-location: '${{ github.workspace }}/codeql_dbs'
```
{% endraw %}

O {% data variables.product.prodname_codeql_workflow %} esperará que o caminho fornecido no `db-location` tenha permissão de gravação, e não exista ou seja um diretório vazio. Ao usar este parâmetro em um trabalho em execução em um executor auto-hospedado ou usando um contêiner Docker, é responsabilidade do usuário garantir que o diretório escolhido seja limpo entre execuções, ou que os bancos de dados sejam removidos depois de deixarem de ser necessários. Isto não é necessário para trabalhos em execução em executores auto-hospedados {% data variables.product.prodname_dotcom %}, que obtêm uma instância nova e um sistema de arquivos limpo toda vez que forem executados. Para obter mais informações, consulte "[Sobre executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

Se este parâmetro não for usado, o {% data variables.product.prodname_codeql_workflow %} criará bancos de dados em um local temporário da sua própria escolha.
{% endif %}

## Alterar as linguagens que são analisadas

O {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} detecta automaticamente código escrito nas linguagens compatíveis.

{% data reusables.code-scanning.codeql-languages-bullets %}

O arquivo padrão do {% data variables.product.prodname_codeql_workflow %} contém uma matriz de criação denominada `linguagem` que lista as linguagens no seu repositório que são analisadas. O {% data variables.product.prodname_codeql %} preenche automaticamente esta matriz quando você adiciona o {% data variables.product.prodname_code_scanning %} a um repositório. Usar a matriz de `linguagem` otimiza {% data variables.product.prodname_codeql %} para executar cada análise em paralelo. Recomendamos que todos os fluxos de trabalho adotem esta configuração devido aos benefícios de desempenho de criações paralelas. Para obter mais informações sobre matrizes de criação, consulte "[Gerenciar fluxos de trabalho complexos](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)".

{% data reusables.code-scanning.specify-language-to-analyze %}

Se o seu fluxo de trabalho usar a matriz de </code>linguagem `, o {% data variables.product.prodname_codeql %} será codificado para analisar apenas as linguagens da matriz. Para alterar as linguagens que você deseja analisar, edite o valor da variável da matriz. Você pode remover uma linguagem para evitar que ele seja analisado ou adicionar uma linguagem que não estava presente no repositório quando o {% data variables.product.prodname_code_scanning %} estava configurado. Por exemplo, se o repositório inicialmente continha apenas JavaScript quando {% data variables.product.prodname_code_scanning %} foi configurado e, posteriormente, você adicionou o código Python, você precisará adicionar o <code>python` à matriz.

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

Se o seu fluxo de trabalho não contiver uma matriz denominada `linguagem`, o {% data variables.product.prodname_codeql %} será configurado para executar a análise sequencialmente. Se você não especificar as linguagens no fluxo de trabalho, o {% data variables.product.prodname_codeql %} irá detectar automaticamente e tentará analisar quaisquer linguagens compatíveis no repositório. Se você quiser escolher quais linguagens analisar sem usar uma matriz, você poderá usar o parâmetro `linguagens` na ação `init`.

```yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt %}
## Analisar as dependências do Python

Para executores hospedados no GitHub, que usam apenas Linux, o {% data variables.product.prodname_codeql_workflow %} tentará instalar automaticamente as dependências do Python para dar mais resultados para a análise do CodeQL. Você pode controlar este comportamento especificando o parâmetro `setup-python-dependencies` para a ação chamada pela etapa "Initialize CodeQL". Por padrão, esse parâmetro é definido como `verdadeiro`:

-  Se o repositório contiver código escrito em Python, a etapa "Initialize CodeQL" instalará as dependências necessárias no executor hospedado pelo GitHub. Se a instalação automática for bem-sucedida, a ação também definirá a variável de ambiente `CODEQL_PYTHON` para o arquivo Python executável que inclui as dependências.

- Se o repositório não tiver dependências do Python ou se as dependências forem especificadas de forma inesperada, você receberá um aviso e a ação continuará com os trabalhos restantes. A ação pode ser executada com sucesso, mesmo quando houver problemas de interpretação de dependências, mas os resultados podem estar incompletos.

Alternativamente, você pode instalar as dependências do Python manualmente em qualquer sistema operacional. Você precisará adicionar as `setup-python-dependencies` e definir como `falso`, além de definir `CODEQL_PYTHON` como o executável do Python que inclui as dependências, conforme mostrado neste trecho do fluxo de trabalho:

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      security-events: write
      actions: read{% endif %}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
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
        uses: github/codeql-action/init@v1
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## Configurar uma categoria para a análise

Use a `categoria` para distinguir entre múltiplas análises para a mesma ferramenta e commit, mas executada em diferentes linguagens ou diferentes partes do código. A categoria especificada no seu fluxo de trabalho será incluída no arquivo de resultados SARIF.

Esse parâmetro é particularmente útil se você trabalhar com monorepos e tiver vários arquivos SARIF para diferentes componentes do monorepo.

{% raw %}
``` yaml
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow, 
        # GitHub will generate a default category name for you
        category: "my_category"
```
{% endraw %}

Se você não especificar um parâmetro da `categoria` no seu fluxo de trabalho, {% data variables.product.product_name %} irá gerar um nome de categoria para você, com base no nome do arquivo de fluxo de trabalho que ativa a ação, o nome da ação e todas as variáveis de matrizes. Por exemplo:
- O fluxo de trabalho `.github/workflows/codeql-analyis.yml` e a ação `analyze` produzirão a categoria `.github/workflows/codeql.yml:analyze`.
- O fluxo de trabalho `.github/workflows/codeql-analyis.yml`, a ação `analyze` e as variáveis da matriz `{language: javascript, os: linux}` irão produzir a categoria `.github/workflows/codeql-analyis.yml:analyze/language:javascript/os:linux`.

A `categoria` será exibida como a propriedade `<run>.automationDetails.id` no SARIF v2.1.0. Para obter mais informações, consulte "[Suporte SARIF para {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)".

Sua categoria especificada não substituirá os detalhes do objeto `runAutomationDetails` no arquivo SARIF, se incluído.

{% endif %}

## Executar consultas adicionais

{% data reusables.code-scanning.run-additional-queries %}

{% if codeql-packs %}
### Usando pacotes de consulta de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Para adicionar um ou mais pacotes de consulta (beta) de {% data variables.product.prodname_codeql %}, adicione uma entrada `with: packs` à seção `uses: github/codeql-action/init@v1` do fluxo de trabalho. Dentro de `pacotes` você especifica um ou mais pacotes para usar e, opcionalmente, qual versão baixar. Quando você não especificar uma versão, será feito o download da versão mais recente. Se você quiser usar pacotes que não estão disponíveis publicamente, você precisa definir a variável de ambiente `GITHUB_TOKEN` para um segredo que tenha acesso aos pacotes. Para obter mais informações, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

{% note %}

**Observação:** Para fluxos de trabalho que geram bancos de dados de {% data variables.product.prodname_codeql %} para várias linguagens, você deverá especificar pacotes de consulta de {% data variables.product.prodname_codeql %} em um arquivo de configuração. Para obter mais informações, consulte "[Especificando pacotes de consulta {% data variables.product.prodname_codeql %}](#specifying-codeql-query-packs)" abaixo.

{% endnote %}

No exemplo abaixo, `escopo` é toda organização ou conta pessoal que publicou o pacote. Quando o fluxo de trabalho é executado, os três pacotes de consulta de {% data variables.product.prodname_codeql %} são baixados de {% data variables.product.product_name %} e das consultas ou conjunto de consultas padrão para cada execução de pacote. É feito o download da versão mais recente do `pack1`, pois nenhuma versão é especificada. A versão 1.2.3 de `pack2` é baixada, bem como a última versão de `pack3` que é compatível com a versão 1.2.3.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~1.2.3
```
{% endraw %}

### Usando consultas em pacotes QL
{% endif %}
Para adicionar uma ou mais consultas, adicione uma entrada `with: queries:` na seção `uses: github/codeql-action/init@v1` do fluxo de trabalho. Se as consultas estiverem em um repositório privado, use o parâmetro `external-repository-token` para especificar um token que tenha acesso ao check-out do repositório privado.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Forneça um token de acesso para consultas armazenadas em repositórios privados.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

Você também pode executar suítes de consultas adicionais especificando-os em um arquivo de configuração. Os suítes de consulta são coleções de consultas, geralmente agrupados por finalidade ou linguagem.

{% data reusables.code-scanning.codeql-query-suites %}

{% if codeql-packs %}
### Trabalhando com arquivos de configuração personalizados
{% endif %}

Se você também usar um arquivo de configuração para configurações personalizadas, todas os {% if codeql-packs %}pacotes ou {% endif %}consultas especificadas no seu fluxo de trabalho serão usados em vez daqueles especificados no arquivo de configuração. Se você quiser executar o conjunto combinado de {% if codeql-packs %}pacotes adicionais ou {% endif %}consultas, prefixe o valor de {% if codeql-packs %}`pacotes` ou {% endif %}`consultas` no fluxo de trabalho com o símbolo `+`. Para obter exemplos de arquivos de configuração, consulte "[Exemplo de arquivos de configuração](#example-configuration-files)".

No exemplo a seguir, o símbolo `+` garante que os {% if codeql-packs %}pacotes e {% endif %}consultas especificados sejam usados em conjunto com qualquer um especificado no arquivo de configuração referenciado.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- if codeql-packs %}
    packs: +scope/pack1,scope/pack2@v1.2.3
    {% endif %}
```

## Usar uma ferramenta de varredura de código de terceiros

Um arquivo de configuração personalizado é uma forma alternativa de especificar as consultas adicionais de {% if codeql-packs %}e {% endif %}a serem executadas. Você também pode usar o arquivo para desabilitar as consultas padrão e especificar quais diretórios digitalizar durante a análise.

No arquivo de workflow use o parâmetro `config-file` da ação `init` para especificar o caminho para o arquivo de configuração que você deseja usar. Este exemplo carrega o arquivo de configuração _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

Se o arquivo de configuração estiver localizado em um repositório privado externo, use o parâmetro `external-repository-token` da ação `init` para especificar um token que tenha acesso ao repositório privado.

{% raw %}
```yaml
- uses: github/codeql-action/init@v1
  with:
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

As configurações no arquivo de configuração estão escritas no formato YAML.

{% if codeql-packs %}
### Especificando pacotes de consulta de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Você especificou pacotes de consulta de {% data variables.product.prodname_codeql %} em uma matriz. Observe que o formato é diferente do formato usado pelo arquivo do fluxo de trabalho.

{% raw %}
``` yaml
packs: 
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1 
  # Use version 1.23 of 'pack2' 
  - scope/pack2@v1.2.3
  # Use the latest version of 'pack3' compatible with 1.23
  - scope/pack3@~1.2.3
```
{% endraw %}

Se tiver um fluxo de trabalho que gera mais de um banco de dados de {% data variables.product.prodname_codeql %}, você poderá especificar todos os pacotes de consulta de {% data variables.product.prodname_codeql %} para executar em um arquivo de configuração personalizado usando um mapa aninhado de pacotes.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %}
{% endif %}

### Especificar consultas adicionais

Você especifica consultas adicionais em um array de `consultas`. Cada elemento do array contém um parâmetro de `uso` com um valor que identifica um único arquivo de consulta, um diretório que contém arquivos de consulta ou um arquivo de definição do conjunto de consulta.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Opcionalmente, você pode dar um nome a cada elemento do array, conforme mostrado nos exemplos de arquivos de configuração abaixo. Para obter mais informações sobre consultas adicionais, consulte "[Executar consultas adicionais](#running-additional-queries) acima.

### Desativar as consultas-padrão

Se você desejar apenas executar consultas personalizadas, você poderá desabilitar as consultas de segurança padrão adicionando `disable-default-queries: true` ao seu arquivo de configuração.

### Especificar diretórios para serem varridos

Para as linguagens interpretadas com as quais {% data variables.product.prodname_codeql %} é compatível (Python e JavaScript/TypeScript), você pode restringir {% data variables.product.prodname_code_scanning %} para arquivos em diretórios específicos adicionando um array de `caminhos` para o arquivo de configuração. Você pode excluir os arquivos em diretórios específicos das análises, adicionando um array de `paths-ignore`.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Observação**:

* As palavras-chave `caminhos` e `paths-ignore`, usados no contexto do arquivo de configuração do {% data variables.product.prodname_code_scanning %}, não deve ser confundido com as mesmas palavras-chave usadas para `on.<push|pull_request>.paths` em um fluxo de trabalho. Quando estão acostumados a modificar `on.<push|pull_request>` em um fluxo de trabalho, eles determinam se as ações serão executadas quando alguém modifica o código nos diretórios especificados. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".
* Os caracteres de filtros padrão `?`, `+`, `[`, `]` e `!` não são compatíveis e serão correspondidos literalmente.
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. Por exemplo, `foo/**`, `**/foo` e `foo/**/bar` são todos de sintaxe permitida, mas `**foo` não é. No entanto, você pode usar estrelas únicas junto com outros caracteres, conforme mostrado no exemplo. Você precisará colocar entre aspas qualquer coisa que contenha um caractere `*`.

{% endnote %}

Para linguagens compiladas, se você deseja limitar {% data variables.product.prodname_code_scanning %} a diretórios específicos no seu projeto, você deverá especificar os passos de compilação adequados no fluxo de trabalho. Os comandos que você precisa usar para excluir um diretório da criação dependerão do seu sistema de criação. Para obter mais informações, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

Você pode rapidamente analisar pequenas partes de um monorepo ao modificar o código em diretórios específicos. Você deverá excluir diretórios nas suas etapas de criação e usar as palavras-chave `paths-ignore` e `caminhos` para [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) no seu arquivo de fluxo de trabalho.

### Exemplo de arquivo de configuração

{% data reusables.code-scanning.example-configuration-files %}

## Configurar o {% data variables.product.prodname_code_scanning %} para linguagens compiladas

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obter mais informações sobre como configurar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para linguagens compiladas, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)".

## {% data variables.product.prodname_code_scanning_capc %} usa {% data variables.product.prodname_actions %}.

Você pode exibir análise de código de uma ferramenta de terceiros em {% data variables.product.prodname_dotcom %}, adicionando a ação de `upload-sarif` ao seu fluxo de trabalho. Você pode fazer o upload de dados de análise de código com a ação `upload-sarif`. Para obter mais informações, consulte "[Fazer o upload de um arquivo SARIF para o GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
