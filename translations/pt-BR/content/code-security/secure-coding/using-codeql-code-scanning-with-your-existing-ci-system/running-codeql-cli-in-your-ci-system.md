---
title: Executando o CodeQL CLI no seu sistema de CI
shortTitle: Executando o CodeQL de CLI
intro: 'Você pode usar {% data variables.product.prodname_codeql_cli %} para executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} em um sistema de integração contínua de terceiros.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Sobre o {% data variables.product.prodname_codeql_cli %}

Você pode usar {% data variables.product.prodname_codeql_cli %} para executar o {% data variables.product.prodname_code_scanning %} no código que você está processando em um sistema de integração contínua (CI) de terceiros. {% data reusables.code-scanning.about-code-scanning %} Para obter informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning).

{% data reusables.code-scanning.what-is-codeql-cli %}

Como alternativa, você pode usar {% data variables.product.prodname_codeql_runner %} no seu sistema de CI, ou {% data variables.product.prodname_actions %} para executar {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.product_name %}. Para obter uma visão geral das opções para os sistemas de CI, consulte "[Sobre o CodeQL {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)". Para obter informações sobre {% data variables.product.prodname_code_scanning %} usando ações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% note %}

**Observação:** {% if currentVersion == "free-pro-team@latest" %}
O {% data variables.product.prodname_codeql_cli %} é grátis para usar em repositórios públicos mantidos em {% data variables.product.prodname_dotcom_the_website %}, e disponível para uso em repositórios privados que são propriedade de clientes com uma licença de {% data variables.product.prodname_advanced_security %}. Para obter informações, consulte "[{% data variables.product.product_name %} Termos e Condições](https://securitylab.github.com/tools/codeql/license) de do CLI de {% data variables.product.prodname_codeql %} " e "[{% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{%- else %}O {% data variables.product.prodname_codeql_cli %} está disponível para clientes com uma licença de {% data variables.product.prodname_advanced_security %}.
{% endif %}
{% endnote %}

### Fazer o download do {% data variables.product.prodname_codeql_cli %}

Você deve fazer o download do pacote {% data variables.product.prodname_codeql %} em https://github.com/github/codeql-action/releases. O pacote contém:

- produto de {% data variables.product.prodname_codeql_cli %}
- Uma versão compatível das consultas e bibliotecas de https://github.com/github/codeql
- Versões pré-compiladas de todas as consultas incluídas no pacote

Você sempre deve usar o pacote de {% data variables.product.prodname_codeql %}, uma vez que ele garante compatibilidade e também fornece um desempenho muito melhor do que um download separado de {% data variables.product.prodname_codeql_cli %} e checkout das consultas de {% data variables.product.prodname_codeql %}. Se você estiver executando o CLI apenas em uma plataforma específica, faça o download do arquivo `codeql-bundle-PLATFORM.tar.gz` apropriado. Como alternativa, você pode fazer o download de `codeql-bundle.tar.gz`, que contém a CLI para todas as plataformas compatíveis.

### Configurando o {% data variables.product.prodname_codeql_cli %} no seu sistema de CI

Você precisa disponibilizar todo o conteúdo do pacote {% data variables.product.prodname_codeql_cli %} para cada servidor de CI no qual você deseja executar a análise de CodeQL de {% data variables.product.prodname_code_scanning %}. Por exemplo, você pode configurar cada servidor para que copie o pacote de um local interno central, interno e extraí-lo. Como alternativa, você pode usar a API REST para obter o pacote diretamente do {% data variables.product.prodname_dotcom %}, garantindo que você irá beneficiar-se das últimas melhorias das consultas. Atualizações no {% data variables.product.prodname_codeql_cli %} são lançadas a cada 2 a 3 semanas. Por exemplo:

```shell
$ wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ../codeql-bundle-linux64.tar.gz
```

Depois de extrair o pacote do {% data variables.product.prodname_codeql_cli %}, você poderá executar o executável `codeql` no servidor:

- Ao executar `/extraction-root/codeql/codeql`, em que `<extraction-root>` é a pasta de onde você extraiu o pacote {% data variables.product.prodname_codeql_cli %}.
- Adicionando `/extraction-root/codeql` ao seu `PATH`, para que você possa executar o executável como apenas `codeql`.

### Testando a configuração de {% data variables.product.prodname_codeql_cli %}

Depois de extrair o pacote de {% data variables.product.prodname_codeql_cli %}, você pode executar o comando a seguir para verificar se a CLI está configurada corretamente para criar e analisar bases de dados.

- `codeql resolve linguagens` se `/extraction-root/codeql` estiver no `PATH`.
- caso contrário, `/extraction-root/codeql/codeql resolve linguagens`.

**Exemplo de saída bem-sucedida:**
```
cpp (/extraction-root/codeql/cpp)
csharp (/extraction-root/codeql/csharp)
csv (/extraction-root/codeql/csv)
go (/extraction-root/codeql/go)
html (/extraction-root/codeql/html)
java (/extraction-root/codeql/java)
javascript (/extraction-root/codeql/javascript)
properties (/extraction-root/codeql/properties)
python (/extraction-root/codeql/python)
xml (/extraction-root/codeql/xml)
```

Se {% data variables.product.prodname_codeql_cli %} não conseguir resolver as linguagens esperadas, certifique-se de que você fez o download do pacote {% data variables.product.prodname_codeql %} e não uma cópia independente do {% data variables.product.prodname_codeql_cli %}.

### Gerando um token para autenticação com {% data variables.product.product_name %}

Cada servidor de CI precisa de um {% data variables.product.prodname_github_app %} ou token de acesso pessoal para {% data variables.product.prodname_codeql_cli %} para usar para fazer o upload dos resultados para {% data variables.product.product_name %}. Você deve usar um token de acesso ou um {% data variables.product.prodname_github_app %} com a permissão de gravação de `security_events`. Se os servidores de CI já usam um token com este escopo para repositórios de checkout de {% data variables.product.product_name %}, potencialmente você poderia permitir que {% data variables.product.prodname_codeql_cli %} usasse o mesmo token. Caso contrário, você deve criar um novo token com a permissão de gravação de `security_events` e adicionar isso à loja secreta do sistema de CI. Para obter informações, consulte "[Criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" e "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Usando {% data variables.product.prodname_codeql_cli %} para gerar dados e fazer o upload {% data variables.product.product_name %}

Você chama {% data variables.product.prodname_codeql_cli %} para analisar o codebase em três etapas:

1. Crie um banco de dados de {% data variables.product.prodname_codeql %} para representar uma única linguagem de programação no repositório usando: `criação do banco de dados do codeql`
2. Execute consultas para analisar o banco de dados de {% data variables.product.prodname_codeql %} e resumir os resultados em um arquivo SARIF usando: `análise do banco de dados de codeql`
3. Faça o upload do arquivo SARIF para {% data variables.product.product_name %} em que os resultados correspondem a um branch ou pull request e é exibido como alertas de {% data variables.product.prodname_code_scanning %} que usam: `resultados do upload do github do codeql`

Cada comando tem algumas opções obrigatórias, com opções adicionais que você pode usar para modificar o comportamento do comando. Você pode mostrar a ajuda de linha de comando para qualquer comando usando <nobr>`--help`</nobr> opção.

{% data reusables.code-scanning.upload-sarif-ghas %}

#### Criando um banco de dados de {% data variables.product.prodname_codeql %} para analisar

1. Confira o código que você deseja analisar:
    - Para um branch, faça check-out do cabeçalho do branch que você quer analisar.
    - Para um pull request, faça o check-out do commit do cabeçalho do pull request ou do commit de merge gerado por {% data variables.product.product_name %} do pull request.
2. Defina o ambiente para a base de código, garantindo que quaisquer dependências estejam disponíveis. Para mais informações, consulte [Criando bancos de dados para linguagens não compiladas](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) e [Criando bancos de dados para linguagens compiladas](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) na documentação do {% data variables.product.prodname_codeql_cli %}.
3. Execute a `criação do banco de dados do codeql` a partir da raiz de checkout do seu repositório.
  ```shell
  codeql database create &lt;database&gt; --language=&lt;language-identifier&gt;
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
      Especifique o nome e local de um diretório a ser criado para o banco de dados de {% data variables.product.prodname_codeql %}. O comando irá falhar se você tentar substituir um diretório existente.
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
      Especifique o identificador para a linguagem para criar um banco de dados: <code>{% data reusables.code-scanning.codeql-languages-keywords %}</code> (use <code>javascript</code> para analisar o código TypeScript).
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
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional para linguagens compiladas. Use se você desejar substituir a detecção e compilação automática do sistema de compilação de CLI. Especifique o comando de criação ou script que chama o compilador. Os comandos são executados a partir da pasta atual ou de onde são definidos, a partir de <nobr>`--source-root`</nobr>. Não use esta opção para análise de Python e JavaScript/TypeScript.
    </td>
  </tr>
</table>

Para obter mais informações, consulte [Criar bancos de dados de {% data variables.product.prodname_codeql %} ](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) na documentação para o {% data variables.product.prodname_codeql_cli %}.

##### Exemplo básico

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

Para obter mais informações e exemplos, consulte [Criar bancos de dados de {% data variables.product.prodname_codeql %} ](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases) na documentação do {% data variables.product.prodname_codeql_cli %}.

#### Analisando um banco de dados de {% data variables.product.prodname_codeql %}

1. Criar um banco de dados de {% data variables.product.prodname_codeql %} (ver acima).
2. Execute `análise do banco de dados de codeql` no banco de dados e especifique quais consultas usar.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  &lt;queries&gt; 
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
      <code>&lt;queries&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Especifique as consultas a executar. Para executar as consultas padrão usadas para {% data variables.product.prodname_code_scanning %}, use: <code>&lt;language&gt;-code-scanning.qls</code>, em que <code>&lt;language&gt;</code> é um código curto para a linguagem do banco de dados. Para ver os outros itens de consulta incluídos no pacote de {% data variables.product.prodname_codeql_cli %} procure em <code>/extraction-root/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>. Para obter informações sobre como criar seu próprio conjunto de consulta, consulte <a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">Criando conjuntos de consultas de CodeQL</a> na documentação do {% data variables.product.prodname_codeql_cli %}.
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
      Especifique o formato para o arquivo de resultados gerado pelo comando. Para fazer upload para {% data variables.product.company_short %}, deverá ser: {% if currentVersion == "free-pro-team@latest" %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}. Para obter mais informações, consulte "<a href="/code-security/secure-coding/sarif-support-for-code-scanning">Suporte SARIF para {% data variables.product.prodname_code_scanning %}</a>".
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
      Especifique onde salvar o arquivo de resultados SARIF.{% if currentVersion == "free-pro-team@latest" %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Especifique uma categoria a incluir no arquivo de resultados SARIF para esta análise. Uma categoria pode ser usada para distinguir várias análises para a mesma ferramenta e commit, mas executado em diferentes linguagens ou diferentes partes do código. Esse valor aparecerá na propriedade <code>&lt;run&gt;.automationId</code> no SARIF v1, na propriedade <code>&lt;run&gt;.automationLogicalId</code> no SARIF v2 e na propriedade <code>&lt;run&gt;.automationDetails.id</code> no SARIF v2.1.0. |{% endif %}
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
</table>

Para obter mais informações, consulte [Analisando bancos de dados com {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) na documentação do {% data variables.product.prodname_codeql_cli %}.

##### Exemplo básico

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --format={% if currentVersion == "free-pro-team@latest" %}sarif-latest{% else %}sarifv2.1.0{% endif %} \
    --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
... 
> Shutting down query evaluator.
> Interpreting results.
```

#### Fazendo upload de resultados para {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Antes de poder fazer o upload dos resultados para {% data variables.product.product_name %}, você deverá determinar a melhor maneira de passar o token de acesso {% data variables.product.prodname_github_app %} ou pessoal que criou antes para o {% data variables.product.prodname_codeql_cli %} (consulte [gerar um token para autenticação com {% data variables.product.product_name %}](#generating-a-token-for-authentication-with-github) acima). Recomendamos que você revise a orientação do seu sistema de CI sobre o uso seguro da loja de segredo. O {% data variables.product.prodname_codeql_cli %} é compatível com:

- Passando o token para a CLI através da entrada padrão usando a opção `--github-auth-stdin` (recomendado).
- Salvando o segredo na variável de ambiente `GITHUB_TOKEN` e executando a CLI sem incluir a opção `--github-auth-stdin`.

Quando você decidir o método mais seguro e confiável para o seu servidor de CI, execute `codeql github upload-results` no arquivo de resultados SARIF e inclua `--github-auth-stdin` a menos que o token esteja disponível na variável de ambiente `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
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
      Especifique o <em x-id="3">PROPRIETÁRIO/NOME</em> do repositório para o qual será feito o upload dos dados. O proprietário deve ser uma organização dentro de uma empresa com uma licença para {% data variables.product.prodname_GH_advanced_security %} e {% data variables.product.prodname_GH_advanced_security %} deve estar habilitado para o repositório{% if currentVersion == "free-pro-team@latest" %}, a menos que o repositório seja público{% endif %}. Para obter mais informações, consulte "<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">Gerenciar configurações de segurança e análise do seu repositório</a>".
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
      Especifique o nome do <code>ref</code> que você verificou e analisou para que os resultados possam ser correspondidos ao código correto. Para o uso de um branch: <code>refs/heads/BRANCH-NAME</code>, para o commit principal de um pull request, use <code>refs/pulls/NUMBER/head</code> ou para o commit de merge gerado por {% data variables.product.product_name %} do uso de um pull request <code>refs/pulls/NUMBER/merge</code>.
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
      Especifique o arquivo SARIF a ser carregado.{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
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

##### Exemplo básico

```
$ echo $UPLOAD_TOKEN | codeql  github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

Não há saída deste comando a menos que o upload não tenha sido bem-sucedido. A instrução de comando retorna quando o upload foi concluído e o processamento de dados é iniciado. Em bases de código menores, você poderá explorar os alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} pouco tempo depois. Alertas são exibidos diretamente no pull request ou na aba **Segurança** para branches, dependendo do código que foi feito check-out. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" e "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

### Leia mais

- [Criando bancos de dados de CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analisando bancos de dados com a CL do CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
