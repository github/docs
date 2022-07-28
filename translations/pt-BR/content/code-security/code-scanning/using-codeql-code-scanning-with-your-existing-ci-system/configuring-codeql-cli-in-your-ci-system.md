---
title: Configurando a CLI do CodeQL no seu sistema de CI
shortTitle: Configurar a CLI do CodeQL
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
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Este artigo descreve as funcionalidades presentes na versão de {% data variables.product.prodname_codeql_cli %} disponível no momento da versão de {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente de {% data variables.product.prodname_codeql_cli %}, consulte a [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

{% endnote %}
{% endif %}

## Sobre como gerar resultados de varredura de código com {% data variables.product.prodname_codeql_cli %}

Uma vez disponibilizado o {% data variables.product.prodname_codeql_cli %} para servidores o seu sistema de CI e após garantir ele possa ser autenticado com {% data variables.product.product_name %}, você estárá pronto para gerar dados.

Você usa três comandos diferentes para gerar resultados e fazer o upload deles para {% data variables.product.product_name %}:

<!--Option to analyze multiple languages with one call-->
1. `criar um banco de dados` para criar um banco de dados de {% data variables.product.prodname_codeql %} para representar a estrutura hierárquica de cada linguagem de programação compatível no repositório.
2. `análise do banco de dados` para executar consultas para analisar cada banco de dados de {% data variables.product.prodname_codeql %} e resumir os resultados em um arquivo SARIF.
3. `github upload-results` para fazer o upload dos arquivos SARIF resultantes para {% data variables.product.product_name %} em que os resultados são correspondentes a um branch ou pull request e exibidos como alertas de {% data variables.product.prodname_code_scanning %}.

Você pode mostrar a ajuda de linha de comando para qualquer comando usando <nobr>`--help`</nobr> opção.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Criando bancos de dados de {% data variables.product.prodname_codeql %} para analisar

1. Confira o código que você deseja analisar:
    - Para um branch, confira o cabeçalho do branch que você deseja analisar.
    - Para um pull request, faça o checkout do commit principal do pull request, ou confira um commit do pull request gerado por {% data variables.product.prodname_dotcom %}.
2. Defina o ambiente para a base de código, garantindo que quaisquer dependências estejam disponíveis. Para mais informações, consulte [Criando bancos de dados para linguagens não compiladas](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) e [Criando bancos de dados para linguagens compiladas](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) na documentação do {% data variables.product.prodname_codeql_cli %}.
3. Encontre o comando de criação, se houver, para a base de código. Normalmente, ele está disponível em um arquivo de configuração no sistema de CI.
4. Execute `codeql database creater` a partir da raiz de checkout do seu repositório e construa a base de código.

  ```shell
  # Single supported language - create one CodeQL databsae
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **Observação:** Se você usar uma criação conteinerizada, você deverá executar o {% data variables.product.prodname_codeql_cli %} no contêiner em que ocorre a tarefa de criação.

  {% endnote %}

<table spaces-before="0">
  <tr>
    <th>
      Opção
    </th>
    
    <th align="center">
      Obrigatório
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o nome e local de um diretório a ser criado para o banco de dados de {% data variables.product.prodname_codeql %}. O comando irá falhar se você tentar substituir um diretório existente. Se você também especificar <code>--db-cluster</code>, este será o diretório principal e um subdiretório será criado para cada linguagem analisada.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--language`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o identificador para a linguagem para criar um banco de dados: <code>{% data reusables.code-scanning.codeql-languages-keywords %}</code> (use <code>javascript</code> para analisar o código TypeScript). Quando usado com <nobr>`--db-cluster`</nobr>, a opção aceita uma lista separada por vírgulas, ou pode ser especificada mais de uma vez.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Recomendado. Use para especificar o comando de criação ou o script que invoca o processo de criação para a base de código. Os comandos são executados a partir da pasta atual ou de onde são definidos, a partir de <nobr>`--source-root`</nobr>. Não é necessário para análise de Python e JavaScript/TypeScript.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--db-cluster`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use em bases de código linguagem múltipla para gerar um banco de dados para cada linguagem especificada por <nobr>`--language`</nobr>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--no-run-unnecessary-builds`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Recomendado. Use para suprimir o comando de compilação para linguagens em que {% data variables.product.prodname_codeql_cli %} não precisa monitorar a criação (por exemplo, Python e JavaScript/TypeScript).
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use se você executar a CLI fora da raiz do check-out do repositório. Por padrão, o comando <code>criação de banco de dados</code> supõe que o diretório atual é o diretório raiz para os arquivos de origem, use esta opção para especificar uma localidade diferente.
    </td>
  </tr>
</table>

Para obter mais informações, consulte [Criar bancos de dados de {% data variables.product.prodname_codeql %} ](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) na documentação para o {% data variables.product.prodname_codeql_cli %}.

### Exemplo de linguagem única

Este exemplo cria um banco de dados de {% data variables.product.prodname_codeql %} para o repositório verificado em `/checkouts/example-repo`. Ele usa o extrator do JavaScript para criar uma representação hierárquica do código JavaScript e TypeScript no repositório. O banco de dados resultante é armazenado em `/codeql-dbs/example-repo`.

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

Este exemplo cria dois bancos de dados de {% data variables.product.prodname_codeql %} para o repositório verificado em `/checkouts/example-repo-multi`. Ela usa:

- `--db-cluster` para solicitar análise de mais de uma linguagem.
- `--language` para especificar para quais linguagens criar bancos de dados.
- `--command` para dizer a ferramenta que o comando de compilação para a base de código. Nesse caso, `make`.
- `--no-run-unnecessary-builds` para informar a ferramenta que ignore o comando de criação para linguagens em que não é necessário (como Python).

Os bancos de dados resultantes são armazenados em `python` e nos subdiretórios `cpp` e `/codeql-dbs/example-repo-multi`.

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
Banco de dados criado com sucesso em /codeql-dbs/example-repo-multi.
$
```

## Analisando um banco de dados de {% data variables.product.prodname_codeql %}

1. Criar um banco de dados de {% data variables.product.prodname_codeql %} (ver acima).
2. Executar `codeql database analyze` no banco de dados e especifique quais {% ifversion codeql-packs %}pacotes e/ou {% endif %}consultas devem ser usados.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Observação:** Se você analisar mais de um banco de dados de {% data variables.product.prodname_codeql %} para um único commit, você deverá especificar uma categoria SARIF para cada conjunto de resultados gerados por este comando. Ao fazer o upload dos resultados para {% data variables.product.product_name %}, {% data variables.product.prodname_code_scanning %} usa essa categoria para armazenar os resultados para cada linguagem separadamente. Se você esquecer de fazer isso, cada upload irá substituir os resultados anteriores.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

<table spaces-before="0">
  <tr>
    <th>
      Opção
    </th>
    
    <th align="center">
      Obrigatório
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o caminho para o diretório que contém o banco de dados de {% data variables.product.prodname_codeql %} a ser analisado.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs,queries&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Especifique pacotes ou consultas de {% data variables.product.prodname_codeql %} para executar. Para executar as consultas padrão usadas para {% data variables.product.prodname_code_scanning %}, omita este parâmetro. Para ver os outros itens de consulta incluídos no pacote de {% data variables.product.prodname_codeql_cli %}, consulte <code>/&lt;extraction-root&gt;/qlpacks/codeql/&lt;language&gt;-queries/codeql-suites</code>. Para obter informações sobre como criar seu próprio conjunto de consulta, consulte <a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">Criando conjuntos de consultas de CodeQL</a> na documentação do {% data variables.product.prodname_codeql_cli %}.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--format`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o formato para o arquivo de resultados gerado pelo comando. Para fazer upload para {% data variables.product.company_short %}, deverá ser: {% ifversion fpt or ghae or ghec %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}. Para obter mais informações, consulte "<a href="/code-security/secure-coding/sarif-support-for-code-scanning">Suporte SARIF para {% data variables.product.prodname_code_scanning %}</a>".
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--output`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique onde salvar o arquivo de resultados SARIF.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
      {% octicon "question" aria-label="Required with multiple results sets" %}
    </td>
    
    <td>
      Opcional para análise única do banco de dados. Necessário para definir a linguagem quando você analisa vários bancos de dados para um único commit em um repositório. Especifique uma categoria a incluir no arquivo de resultados SARIF para esta análise. Uma categoria é usada para distinguir várias análises para a mesma ferramenta e commit, mas executada em diferentes linguagens ou em diferentes partes do código.{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--sarif-add-query-help`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use se quiser incluir qualquer ajuda de consulta disponível para consultas personalizadas usadas na sua análise. Qualquer consulta ajuda para consultas personalizadas incluídas na saída do SARIF será exibida na interface de digitalização de código se a consulta relevante gerar um alerta. Para obter mais informações, consulte <a href="https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files">Analisando bancos de dados com o {% data variables.product.prodname_codeql_cli %}</a> na documentação do {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use se você quiser incluir pacotes de consultas do CodeQL na sua análise. Para obter mais informações, consulte "<a href="#downloading-and-using-codeql-query-packs">Fazer o download e usar pacotes de {% data variables.product.prodname_codeql %}</a>."
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--download`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use se alguns de seus pacotes de consulta do CodeQL ainda não estiverem em disco e precisarem ser baixados antes de executar consultas.{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--threads`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use se você quiser usar mais de um tópico para executar consultas. O valor padrão é <code>1</code>. Você pode especificar mais threads para acelerar a execução da consulta. Para definir o número de threads para o número de processadores lógicos, especifique <code>0</code>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--verbose`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use para obter informações mais detalhadas sobre o processo de análise e dados de diagnóstico do processo de criação do banco de dados.
    </td>
  </tr>
</table>

Para obter mais informações, consulte [Analisando bancos de dados com {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) na documentação do {% data variables.product.prodname_codeql_cli %}.

### Exemplo básico

Este exemplo analisa um banco de dados {% data variables.product.prodname_codeql %} armazenado em `/codeql-dbs/example-repo` e salva os resultados como um arquivo SARIF: `/temp/example-repo-js.sarif`. Ele usa `--sarif-category` para incluir informações extras no arquivo SARIF que identifica os resultados como JavaScript. Isto é essencial quando você tem mais de um banco de dados de {% data variables.product.prodname_codeql %} para analisar um único commit em um repositório.

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

Antes de poder fazer o upload dos resultados para {% data variables.product.product_name %}, você deverá determinar a melhor maneira de passar o token de acesso {% data variables.product.prodname_github_app %} ou pessoal que você criou anteriormente para o {% data variables.product.prodname_codeql_cli %} (consulte [Instalando {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Recomendamos que você revise a orientação do seu sistema de CI sobre o uso seguro de um armazenamento de segredos. O {% data variables.product.prodname_codeql_cli %} é compatível com:

- Passando o token para a CLI através da entrada padrão usando a opção `--github-auth-stdin` (recomendado).
- Salvando o segredo na variável de ambiente `GITHUB_TOKEN` e executando a CLI sem incluir a opção `--github-auth-stdin`.

Quando você decidir o método mais seguro e confiável para o seu servidor de CI, execute `codeql github upload-results` no arquivo de resultados SARIF e inclua `--github-auth-stdin`, a menos que o token esteja disponível na variável de ambiente `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

<table spaces-before="0">
  <tr>
    <th>
      Opção
    </th>
    
    <th align="center">
      Obrigatório
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`--repository`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o <em x-id="3">PROPRIETÁRIO/NOME</em> do repositório para o qual será feito o upload dos dados. O proprietário deve ser uma organização dentro de uma empresa com uma licença para {% data variables.product.prodname_GH_advanced_security %} e {% data variables.product.prodname_GH_advanced_security %} deve estar habilitado para o repositório{% ifversion fpt or ghec %}, a menos que o repositório seja público{% endif %}. Para obter mais informações, consulte "<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">Gerenciar configurações de segurança e análise do seu repositório</a>".
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--ref`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o nome do <code>ref</code> que você verificou e analisou para que os resultados possam ser correspondidos ao código correto. Para o uso de um branch: <code>refs/heads/BRANCH-NAME</code>, para o commit principal de um pull request, use <code>refs/pull/NUMBER/head</code> ou para o commit de merge gerado por {% data variables.product.prodname_dotcom %} do uso de um pull request <code>refs/pull/NUMBER/merge</code>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--commit`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o SHA completo do commit que você analisou.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--sarif`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o arquivo SARIF a ser carregado.{% ifversion ghes or ghae %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-url`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique a URL para {% data variables.product.product_name %}.{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use para passar a CLI, {% data variables.product.prodname_github_app %} ou o token de acesso pessoal criado para autenticação com a API REST de {% data variables.product.company_short %}por meio da entrada padrão. Isso não é necessário se o comando tiver acesso a uma variável de ambiente <code>GITHUB_TOKEN</code> definida com este token.
    </td>
  </tr>
</table>

Para obter mais informações, consulte [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) na documentação para {% data variables.product.prodname_codeql_cli %}.

### Exemplo básico

Este exemplo faz o upload dos resultados do arquivo SARIF `temp/example-repo-js.sarif` para o repositório `meu-org/example-repo`. Ele informa à API de {% data variables.product.prodname_code_scanning %} que os resultados são para o commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` no branch `main`.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

Não há saída deste comando a menos que o upload não tenha sido bem-sucedido. A instrução de comando retorna quando o upload foi concluído e o processamento de dados é iniciado. Em bases de código menores, você poderá explorar os alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} pouco tempo depois. É possível ver alertas diretamente no pull request ou na aba **Segurança** para branches, dependendo do código que você fizer checkout. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" e "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

{% ifversion codeql-packs %}
## Fazendo o download e usando pacotes de consulta de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

O pacote de {% data variables.product.prodname_codeql_cli %} inclui consultas mantidas por especialistas de {% data variables.product.company_short %}, pesquisadores de segurança e contribuidores da comunidade. Se você quiser executar consultas desenvolvidas por outras organizações, os pacotes de consulta de {% data variables.product.prodname_codeql %} fornecem uma forma eficiente e confiável de fazer o download e executar consultas. Para obter mais informações, consulte "[Sobre digitalização de código com o CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Antes de poder usar um pacote de {% data variables.product.prodname_codeql %} para analisar um banco de dados, você deve fazer o download de todos os pacotes que necessitar no {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. Isso pode ser feito usando o sinalizador `--download` como parte do comando `codeql database analyze`. Se um pacote não estiver disponível publicamente, você precisará usar um {% data variables.product.prodname_github_app %} ou um token de acesso pessoal para efetuar a autenticação. Para obter mais informações e um exemplo, consulte "[o Fazer upload dos resultados para {% data variables.product.product_name %}](#uploading-results-to-github)" acima.

<table spaces-before="0">
  <tr>
    <th>
      Opção
    </th>
    
    <th align="center">
      Obrigatório
    </th>
    
    <th>
      Uso
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`<scope>`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique o escopo e o nome de um ou mais pacotes de consulta CodeQL para fazer o download usando uma lista separada por vírgulas. Opcionalmente, inclua a versão para fazer o download e descompactar. Por padrão, a versão mais recente deste pacote foi baixada. Opcionalmente, inclua um caminho para uma consulta, diretório ou conjunto de consultas para ser executado. Se nenhum caminho for incluído, execute as consultas padrão deste pacote.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Passe o token de acesso {% data variables.product.prodname_github_app %} ou pessoal criado para autenticação com a API REST de {% data variables.product.company_short %}para a CLI por meio da entrada padrão. Isso não é necessário se o comando tiver acesso a uma variável de ambiente <code>GITHUB_TOKEN</code> definida com este token.
    </td>
  </tr>
</table>

### Exemplo básico

Este exemplo executa o comando `codeql database analyze` com a opção `--download` para:

1. Faça o download do pacote `octo-org/security-queries`.
2. Faça o download de uma versão do pacote `octo-org/optional-security-queries` que é *compatível* com a versão 1.0.1 (nesse caso, é a versão 1.0.2). Para obter mais informações sobre a compatibilidade de semver, consulte [documentação da intervalo da versão semântica do npm](https://github.com/npm/node-semver#ranges).
3. Executar todas as consultas padrão em `octo-org/security-queries`.
4. Execute apenas a consulta `queries/csrf.ql` a partir de `octo-org/opcional-security-queries`

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

### Download direto dos pacotes de {% data variables.product.prodname_codeql %}

Se você quiser fazer o download de um pacote de {% data variables.product.prodname_codeql %} sem executá-lo imediatamente, você pode usar o comando `codeql pack download`. Isso é útil se você quiser evitar acessar a internet quando executar consultas de {% data variables.product.prodname_codeql %}. Ao executar a análise {% data variables.product.prodname_codeql %}, você pode especificar pacotes, versões e caminhos da mesma forma como no exemplo anterior:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```
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

Ao analisar um banco de dados {% data variables.product.prodname_codeql %} usando um conjunto de consultas de {% data variables.product.prodname_code_scanning %}, além de gerar informações detalhadas sobre alertas, a CLI relata dados de diagnóstico da etapa de geração de banco de dados e resumo de métricas. Para repositórios com poucos alertas, você pode considerar úteis essas informações para determinar se realmente existem poucos problemas no código, ou se houve erros ao gerar o banco de dados {% data variables.product.prodname_codeql %}. Para obter saídas mais detalhadas de `codeql database analyze`, use a opção `--verbose`.

Para obter mais informações sobre o tipo de informações de diagnóstico disponíveis, consulte "[Visualizar registros de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)".

### {% data variables.product.prodname_code_scanning_capc %} mostra apenas os resultados da análise de uma das linguagens analisadas

Por padrão, {% data variables.product.prodname_code_scanning %} espera um arquivo de resultados SARIF por análise de um repositório. Consequentemente, quando se faz o upload de um segundo arquivo SARIF para um compromisso, ele é tratado como uma substituição do conjunto original de dados.

Se desejar fazer o upload de mais de um conjunto de resultados para a API de {% data variables.product.prodname_code_scanning %} para um commit em um repositório, você deve identificar cada conjunto de resultados como um conjunto único. Para repositórios em que você cria mais de um banco de dados de {% data variables.product.prodname_codeql %} para analisar para cada commit, use a opção `--sarif-category` para especificar uma linguagem ou outra categoria exclusiva para cada arquivo SARIF que você gerar para esse repositório.

## Leia mais

- [Criando bancos de dados de CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analisando bancos de dados com a CLI do CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
