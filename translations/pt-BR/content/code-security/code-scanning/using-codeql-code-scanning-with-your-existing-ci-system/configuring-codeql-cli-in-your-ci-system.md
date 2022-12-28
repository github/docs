---
title: Configurando a CLI do CodeQL no seu sistema de CI
shortTitle: Configure CodeQL CLI
intro: 'Você pode configurar seu sistema de integração contínua para executar o {% data variables.product.prodname_codeql_cli %}, realizar análise de {% data variables.product.prodname_codeql %} e fazer o upload dos resultados para {% data variables.product.product_name %} para exibição como os alertas de {% data variables.product.prodname_code_scanning %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182295'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** este artigo descreve os recursos presentes na versão da {% data variables.product.prodname_codeql_cli %} disponíveis no momento do lançamento do {% data variables.product.product_name %}. Se a sua empresa usa uma versão mais recente da {% data variables.product.prodname_codeql_cli %}, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

{% endnote %} {% endif %}

## Sobre como gerar resultados de varredura de código com {% data variables.product.prodname_codeql_cli %}

Uma vez disponibilizado o {% data variables.product.prodname_codeql_cli %} para servidores o seu sistema de CI e após garantir ele possa ser autenticado com {% data variables.product.product_name %}, você estárá pronto para gerar dados.

Você usa três comandos diferentes para gerar resultados e fazer o upload deles para {% data variables.product.product_name %}:

<!--Option to analyze multiple languages with one call-->
1. `database create` para criar um banco de dados do {% data variables.product.prodname_codeql %} a fim de representar a estrutura hierárquica de cada linguagem de programação compatível no repositório.
2. ` database analyze` para executar consultas a fim de analisar cada banco de dados do {% data variables.product.prodname_codeql %} e resumir os resultados em um arquivo SARIF.
3. `github upload-results` para carregar os arquivos SARIF resultantes no {% data variables.product.product_name %}, no qual será feita a correspondência dos resultados com um branch ou uma solicitação de pull e no qual eles serão exibidos como alertas da {% data variables.product.prodname_code_scanning %}.

Veja a ajuda da linha de comando para qualquer comando usando a opção <nobr>`--help`</nobr>.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Criando bancos de dados de {% data variables.product.prodname_codeql %} para analisar

1. Confira o código que você deseja analisar: 
    - Para uma ramificação, confira o cabeçalho da ramificação que você deseja analisar.
    - Para uma solicitação de pull, faça check-out do commit principal da solicitação de pull ou confira um commit de mesclagem da solicitação de pull gerado pelo {% data variables.product.prodname_dotcom %}.
2. Configure o ambiente para a base de código, verificando se todas as dependências estão disponíveis. Para obter mais informações, confira [Como criar bancos de dados para linguagens não compiladas](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) e [Como criar bancos de dados para linguagens compiladas](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) na documentação da {% data variables.product.prodname_codeql_cli %}.
3. Localize o comando de build, se houver, para a base de código. Normalmente, isso está disponível em um arquivo de configuração no sistema de CI.
4. Execute `codeql database create` na raiz do check-out do repositório e compile a base de código.

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **Observação:** se você usar um build conteinerizado, precisará executar a {% data variables.product.prodname_codeql_cli %} no contêiner em que ocorre a tarefa de build.

  {% endnote %}

| Opção | Obrigatório | Uso |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o nome e local de um diretório a ser criado para o banco de dados de {% data variables.product.prodname_codeql %}. O comando falhará se você tentar substituir um diretório. Se você também especificar `--db-cluster`, esse será o diretório pai e um subdiretório será criado para cada linguagem analisada.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique entre os seguintes identificadores aquele da linguagem para a qual um banco de dados será criado: `{% data reusables.code-scanning.codeql-languages-keywords %}` (use `javascript` para analisar o código TypeScript {% ifversion codeql-kotlin-beta %} e `java` para analisar o código Kotlin{% endif %}). Quando usado com <nobr>`--db-cluster`</nobr>, a opção aceita uma lista separada por vírgulas ou pode ser especificada mais de uma vez.
| <nobr>`--command`</nobr> | | Recomendável. Use para especificar o comando ou o script de build que invoca o processo de build para a base de código. Os comandos são executados por meio da pasta atual ou no local em que são definidos, em <nobr>`--source-root`</nobr>. Não é necessário para a análise de Python e JavaScript/TypeScript. |
| <nobr>`--db-cluster`</nobr> | | Opcional. Use bases de código de linguagem múltipla para gerar um banco de dados para cada linguagem especificada por <nobr>`--language`</nobr>.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | Recomendável. Use para suprimir o comando de compilação para linguagens em que {% data variables.product.prodname_codeql_cli %} não precisa monitorar a criação (por exemplo, Python e JavaScript/TypeScript).
| <nobr>`--source-root`</nobr> | | Opcional. Use se você executa a CLI fora da raiz de check-out do repositório. Por padrão, o comando `database create` pressupõe que o diretório atual seja o diretório raiz dos arquivos de origem. Use essa opção para especificar outro local. |
| <nobr>`--codescanning-config`</nobr> | | Opcional (Avançado). Use se você tiver um arquivo de configuração que especifica como criar os bancos de dados {% data variables.product.prodname_codeql %} e quais consultas serão executadas em etapas posteriores. Para obter mais informações, confira "[Como usar um arquivo de configuração personalizado](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file)" e "[Criação de banco de dados](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config)". |

Para obter mais informações, confira [Como criar bancos de dados do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) na documentação da {% data variables.product.prodname_codeql_cli %}.

### Exemplo de linguagem única

Este exemplo cria um banco de dados do {% data variables.product.prodname_codeql %} para o repositório com check-out em `/checkouts/example-repo`. Ele usa o extrator de JavaScript para criar uma representação hierárquica do código JavaScript e TypeScript no repositório. O banco de dados resultante é armazenado no `/codeql-dbs/example-repo`.

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### Exemplo de linguagem múltipla

Este exemplo cria dois bancos de dados do {% data variables.product.prodname_codeql %} para o repositório com check-out em `/checkouts/example-repo-multi`. Ele usa:

- `--db-cluster` para solicitar a análise de mais de uma linguagem.
- `--language` para especificar para quais linguagens os bancos de dados são criados.
- `--command` para indicar o comando de build para a base de código à ferramenta, acesse aqui `make`.
- `--no-run-unnecessary-builds` para informar a ferramenta para ignorar o comando de build para linguagens em que ele não é necessário (como Python).

Os bancos de dados resultantes são armazenados em subdiretórios `python` e `cpp` do `/codeql-dbs/example-repo-multi`.

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## Analisando um banco de dados de {% data variables.product.prodname_codeql %}

1. Criar um banco de dados de {% data variables.product.prodname_codeql %} (ver acima).
2. Execute `codeql database analyze` no banco de dados e especifique {% ifversion codeql-packs %}os pacotes e/ou {% endif %}as consultas a serem usados.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Observação:** se você analisar mais de um banco de dados do {% data variables.product.prodname_codeql %} para um só commit, precisará especificar uma categoria SARIF para cada conjunto de resultados gerado por este comando. Ao fazer o upload dos resultados para {% data variables.product.product_name %}, {% data variables.product.prodname_code_scanning %} usa essa categoria para armazenar os resultados para cada linguagem separadamente. Se você se esquecer de fazer isso, cada upload substituirá os resultados anteriores.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| Opção | Obrigatório | Uso |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o caminho para o diretório que contém o banco de dados de {% data variables.product.prodname_codeql %} a ser analisado. |
| `<packs,queries>` | | Especifique pacotes ou consultas de {% data variables.product.prodname_codeql %} para executar. Para executar as consultas padrão usadas para {% data variables.product.prodname_code_scanning %}, omita este parâmetro. Para ver os outros conjuntos de consultas incluídos no pacote da {% data variables.product.prodname_codeql_cli %}, confira `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`. Para obter informações sobre como criar seu conjunto de consultas, confira [Como criar conjuntos de consultas do CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) na documentação da {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o formato para o arquivo de resultados gerado pelo comando. Para upload no {% data variables.product.company_short %}, isso deve ser: {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. Para obter mais informações, confira "[Suporte do SARIF à {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)".
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique em que local salvar o arquivo de resultados SARIF.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Opcional para análise de banco de dados individual. Necessário para definir a linguagem ao analisar vários bancos de dados para um só commit em um repositório. Especifique uma categoria a ser incluída no arquivo de resultados SARIF para esta análise. Uma categoria é usada para distinguir várias análises para a mesma ferramenta e commit, mas executadas em diferentes linguagens ou partes diferentes do código.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | Opcional. Use se você quer incluir qualquer ajuda de consulta renderizada por markdown disponível para as consultas personalizadas usadas em sua análise. Qualquer ajuda de consulta para consultas personalizadas incluídas na saída SARIF será exibida na interface do usuário de verificação de código se a consulta relevante gerar um alerta. Para obter mais informações, confira [Como analisar bancos de dados com a {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files) na documentação da {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | Opcional. Use se quiser incluir pacotes de consulta CodeQL em sua análise. Para obter mais informações, confira "[Como baixar e usar pacotes do {% data variables.product.prodname_codeql %}](#downloading-and-using-codeql-query-packs)".
| <nobr>`--download`</nobr> | | Opcional. Use se alguns de seus pacotes de consulta CodeQL ainda não estiverem em disco e precisarem ser baixados antes de executar consultas.{% endif %}
| <nobr>`--threads`</nobr> | | Opcional. Use se você quiser usar mais de um thread para executar consultas. O valor padrão é `1`. Você pode especificar mais threads para acelerar a execução da consulta. Para definir o número de threads para o número de processadores lógicos, especifique `0`.
| <nobr>`--verbose`</nobr> | | Opcional. Use o para obter informações mais detalhadas sobre o processo de análise e os dados de diagnóstico do processo de criação do banco de dados.

Para obter mais informações, confira [Como analisar bancos de dados com a {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) na documentação da {% data variables.product.prodname_codeql_cli %}.

### Exemplo básico

Este exemplo analisa um banco de dados do {% data variables.product.prodname_codeql %} armazenado em `/codeql-dbs/example-repo` e salva os resultados como um arquivo SARIF: `/temp/example-repo-js.sarif`. Ele usa `--sarif-category` para incluir informações extras no arquivo SARIF que identifica os resultados como JavaScript. Isso é essencial quando você tem mais de um banco de dados {% data variables.product.prodname_codeql %} para analisar um único commit em um repositório.

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## Fazendo upload de resultados para {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Para carregar os resultados no {% data variables.product.product_name %}, você precisa determinar a melhor maneira de transmitir o {% data variables.product.prodname_github_app %} ou o {% data variables.product.pat_generic %} já criado para a {% data variables.product.prodname_codeql_cli %} (confira [Como instalar a {% data variables.product.prodname_codeql_cli %} no sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Recomendamos que você examine as diretrizes do sistema da CI sobre o uso seguro de um repositório secreto. O {% data variables.product.prodname_codeql_cli %} é compatível com:

- Passar o token para a CLI por meio de entrada padrão usando a opção `--github-auth-stdin` (recomendado).
- Salvar o segredo na variável de ambiente `GITHUB_TOKEN` e executar a CLI sem incluir a opção `--github-auth-stdin`.

Quando você tiver decidido o método mais seguro e confiável para o servidor da CI, execute `codeql github upload-results` em cada arquivo de resultados do SARIF e inclua `--github-auth-stdin`, a menos que o token esteja disponível na variável de ambiente `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Opção | Obrigatório | Uso |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o *PROPRIETÁRIO/NOME* do repositório no qual os dados serão carregados. O proprietário precisa ser uma organização dentro de uma empresa com uma licença do {% data variables.product.prodname_GH_advanced_security %}, e o {% data variables.product.prodname_GH_advanced_security %} precisa estar habilitado para o repositório{% ifversion fpt or ghec %}, a menos que o repositório seja público{% endif %}. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o nome da `ref` do qual você fez check-out e analisou para que os resultados possam corresponder ao código correto. Para um branch, use `refs/heads/BRANCH-NAME`, para o commit principal de uma solicitação de pull, use `refs/pull/NUMBER/head` ou para o commit de mesclagem de uma solicitação de pull gerado pelo {% data variables.product.prodname_dotcom %}, use `refs/pull/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o SHA completo do commit que você analisou.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o arquivo SARIF a ser carregado.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique a URL para {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Opcional. Use essa opção para passar à CLI o {% data variables.product.prodname_github_app %} ou o {% data variables.product.pat_generic %} já criado para autenticação com a API REST do {% data variables.product.company_short %} por meio da entrada padrão. Isso não será necessário se o comando tiver acesso a uma variável de ambiente `GITHUB_TOKEN` definida com esse token.

Para obter mais informações, confira os [resultados de upload do GitHub](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) na documentação da {% data variables.product.prodname_codeql_cli %}.

### Exemplo básico

Este exemplo carrega os resultados do arquivo SARIF `temp/example-repo-js.sarif` no repositório `my-org/example-repo`. Ele informa à API da {% data variables.product.prodname_code_scanning %} de que os resultados referem-se ao commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` no branch `main`.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

Não há saída deste comando a menos que o upload não tenha sido bem-sucedido. A instrução de comando retorna quando o upload foi concluído e o processamento de dados é iniciado. Em bases de código menores, você poderá explorar os alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} pouco tempo depois. Você pode ver os alertas diretamente na solicitação de pull ou na guia **Segurança** dos branches, dependendo do código do qual você fez check-out. Para obter mais informações, confira "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" e "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

{% ifversion codeql-packs %}
## Fazendo o download e usando pacotes de consulta de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

O pacote de {% data variables.product.prodname_codeql_cli %} inclui consultas mantidas por especialistas de {% data variables.product.company_short %}, pesquisadores de segurança e contribuidores da comunidade. Se você quiser executar consultas desenvolvidas por outras organizações, os pacotes de consulta de {% data variables.product.prodname_codeql %} fornecem uma forma eficiente e confiável de fazer o download e executar consultas. Para obter mais informações, confira "[Sobre a verificação de código com o CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Antes de usar um pacote {% data variables.product.prodname_codeql %} para analisar um banco de dados, você deve baixar os pacotes necessários do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. Isso pode ser feito usando o sinalizador `--download` como parte do comando `codeql database analyze`. Se um pacote não estiver disponível publicamente, você precisará usar um {% data variables.product.prodname_github_app %} ou um {% data variables.product.pat_generic %} para fazer a autenticação. Para obter mais informações e um exemplo, confira "[Como carregar os resultados no {% data variables.product.product_name %}](#uploading-results-to-github)" acima.

| Opção | Obrigatório | Uso |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Especifique o escopo e o nome de um ou mais pacotes de consulta CodeQL para fazer o download usando uma lista separada por vírgulas. Opcionalmente, inclua a versão para fazer o download e descompactar. Por padrão, a versão mais recente deste pacote foi baixada. Opcionalmente, inclua um caminho para um conjunto de consultas, diretórios ou consultas a serem executadas. Se nenhum caminho for incluído, execute as consultas padrão deste pacote. |
| <nobr>`--github-auth-stdin`</nobr> | | Opcional. Passe à CLI o {% data variables.product.prodname_github_app %} ou o {% data variables.product.pat_generic %} criado para autenticação com a API REST do {% data variables.product.company_short %} por meio da entrada padrão. Isso não será necessário se o comando tiver acesso a uma variável de ambiente `GITHUB_TOKEN` definida com esse token.

### Exemplo básico

Este exemplo executa o comando `codeql database analyze` com a opção `--download` para:

1. Baixar a versão mais recente do pacote `octo-org/security-queries`.
2. Baixar uma versão do pacote `octo-org/optional-security-queries` que seja *compativel* com a versão 1.0.1 (nesse caso, é a versão 1.0.2). Para obter mais informações sobre compatibilidade semver, confira a [documentação do intervalo de versão semântica do npm](https://github.com/npm/node-semver#ranges).
3. Execute todas as consultas padrão em `octo-org/security-queries`.
4. Executar somente a consulta `queries/csrf.ql` de `octo-org/optional-security-queries`

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### Download direto de pacotes {% data variables.product.prodname_codeql %}

Se você quiser baixar um pacote {% data variables.product.prodname_codeql %} sem executá-lo imediatamente, poderá usar o comando `codeql pack download`. Isso será útil se você quiser evitar acessar a Internet ao executar consultas {% data variables.product.prodname_codeql %}. Ao executar a análise {% data variables.product.prodname_codeql %}, você pode especificar pacotes, versões e caminhos da mesma forma que no exemplo anterior:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### Baixar pacotes do {% data variables.product.prodname_codeql %} de vários registros de contêiner do {% data variables.product.company_short %}

Se os pacotes do {% data variables.product.prodname_codeql %} residirem em vários registros de contêiner, você precisará instruir a {% data variables.product.prodname_codeql_cli %} onde localizar cada pacote. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server)".
{% endif %}

## Exemplo de configuração de CI para análise de {% data variables.product.prodname_codeql %}

Este é um exemplo da série de comandos que você pode usar para analisar uma base de código com duas linguagens compatíveis e, em seguida, fazer o upload dos resultados para {% data variables.product.product_name %}.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## Solucionando o {% data variables.product.prodname_codeql_cli %} do seu sistema de CI

### Visualizando o registro e as informações de diagnóstico

Ao analisar um banco de dados {% data variables.product.prodname_codeql %} usando um conjunto de consultas de {% data variables.product.prodname_code_scanning %}, além de gerar informações detalhadas sobre alertas, a CLI relata dados de diagnóstico da etapa de geração de banco de dados e resumo de métricas. Para repositórios com poucos alertas, você pode considerar úteis essas informações para determinar se realmente existem poucos problemas no código, ou se houve erros ao gerar o banco de dados {% data variables.product.prodname_codeql %}. Para obter uma saída mais detalhados de `codeql database analyze`, use a opção `--verbose`.

Para obter mais informações sobre os tipos de informações de diagnóstico disponíveis, confira "[Como exibir os logs da {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)".

### {% data variables.product.prodname_code_scanning_capc %} mostra apenas os resultados da análise de uma das linguagens analisadas

Por padrão, {% data variables.product.prodname_code_scanning %} espera um arquivo de resultados SARIF por análise de um repositório. Consequentemente, quando se faz o upload de um segundo arquivo SARIF para um compromisso, ele é tratado como uma substituição do conjunto original de dados.

Se desejar fazer o upload de mais de um conjunto de resultados para a API de {% data variables.product.prodname_code_scanning %} para um commit em um repositório, você deve identificar cada conjunto de resultados como um conjunto único. Para os repositórios em que você cria mais de um banco de dados do {% data variables.product.prodname_codeql %} a fim de analisar para cada commit, use a opção `--sarif-category` para especificar uma linguagem ou outra categoria exclusiva para cada arquivo SARIF que você gerar para esse repositório.

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Problemas com a extração do Python

Estamos preterindo o suporte do Python 2 para a {% data variables.product.prodname_codeql_cli %}, mais especificamente para a fase de geração de banco de dados do CodeQL (extração de código).

Se você usa a {% data variables.product.prodname_codeql_cli %} para executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no código escrito em Python, verifique se o sistema de CI tem o Python 3 instalado.

{% endif %}

## Leitura adicional

- [Como criar bancos de dados do CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Como analisar bancos de dados com a CLI do CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [Publicar e usar pacotes do CodeQL](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
