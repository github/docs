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
topics:
  - Security
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

You should download the {% data variables.product.prodname_codeql %} bundle from https://github.com/github/codeql-action/releases. The bundle contains:

- {% data variables.product.prodname_codeql_cli %} product
- A compatible version of the queries and libraries from https://github.com/github/codeql
- Precompiled versions of all the queries included in the bundle

You should always use the {% data variables.product.prodname_codeql %} bundle as this ensures compatibility and also gives much better performance than a separate download of the {% data variables.product.prodname_codeql_cli %} and checkout of the {% data variables.product.prodname_codeql %} queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.gz` file. Alternatively, you can download `codeql-bundle.tar.gz`, which contains the CLI for all supported platforms.

### Setting up the {% data variables.product.prodname_codeql_cli %} in your CI system

You need to make the full contents of the {% data variables.product.prodname_codeql_cli %} bundle available to every CI server that you want to run CodeQL {% data variables.product.prodname_code_scanning %} analysis on. For example, you might configure each server to copy the bundle from a central, internal location and extract it. Alternatively, you could use the REST API to get the bundle directly from {% data variables.product.prodname_dotcom %}, ensuring that you benefit from the latest improvements to queries. Updates to the {% data variables.product.prodname_codeql_cli %} are released every 2-3 weeks. Por exemplo:

```shell
$ wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ../codeql-bundle-linux64.tar.gz
```

After you extract the {% data variables.product.prodname_codeql_cli %} bundle, you can run the `codeql` executable on the server:

- By executing `/extraction-root/codeql/codeql`, where `<extraction-root>` is the folder where you extracted the {% data variables.product.prodname_codeql_cli %} bundle.
- By adding `/extraction-root/codeql` to your `PATH`, so that you can run the executable as just `codeql`.

### Testing the {% data variables.product.prodname_codeql_cli %} set up

After you extract the {% data variables.product.prodname_codeql_cli %} bundle, you can run the following command to verify that the CLI is correctly set up to create and analyze databases.

- `codeql resolve languages` if `/extraction-root/codeql` is on the `PATH`.
- `/extraction-root/codeql/codeql resolve languages` otherwise.

**Example of successful output:**
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

If the {% data variables.product.prodname_codeql_cli %} is unable to resolve the expected languages, check that you downloaded the {% data variables.product.prodname_codeql %} bundle and not a standalone copy of the {% data variables.product.prodname_codeql_cli %}.

### Generating a token for authentication with {% data variables.product.product_name %}

Each CI server needs a {% data variables.product.prodname_github_app %} or personal access token for the {% data variables.product.prodname_codeql_cli %} to use to upload results to {% data variables.product.product_name %}. You must use an access token or a {% data variables.product.prodname_github_app %} with the `security_events` write permission. If CI servers already use a token with this scope to checkout repositories from {% data variables.product.product_name %}, you could potentially allow the {% data variables.product.prodname_codeql_cli %} to use the same token. Otherwise, you should create a new token with the `security_events` write permission and add this to the CI system's secret store. Para obter informações, consulte "[Criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" e "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Using the {% data variables.product.prodname_codeql_cli %} to generate data and upload it to {% data variables.product.product_name %}

You call the {% data variables.product.prodname_codeql_cli %} to analyze the codebase in three steps:

1. Create a {% data variables.product.prodname_codeql %} database to represent a single programming language in the repository using: `codeql database create`
2. Run queries to analyze the {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file using: `codeql database analyze`
3. Upload the SARIF file to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts using: `codeql github upload-results`

Each command has a few mandatory options with additional options that you can use to modify the behavior of the command. You can display the command-line help for any command using the <nobr>`--help`</nobr> opção.

{% data reusables.code-scanning.upload-sarif-ghas %}

#### Creating a {% data variables.product.prodname_codeql %} database to analyze

1. Check out the code that you want to analyze:
    - For a branch checkout the head of the branch that you want to analyze.
    - For a pull request checkout either the head commit of the pull request, or check out a {% data variables.product.product_name %}-generated merge commit of the pull request.
2. Set up the environment for the codebase, making sure that any dependencies are available. For more information, see [Creating databases for non-compiled languages](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) and [Creating databases for compiled languages](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) in the documentation for the {% data variables.product.prodname_codeql_cli %}.
3. Run `codeql database create` from the checkout root of your repository.
  ```shell
  codeql database create &lt;database&gt; --language=&lt;language-identifier&gt;
  ```
  {% note %}

  **Note:** If you use a containerized build, you need to run the {% data variables.product.prodname_codeql_cli %} inside the container where your build task takes place.

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
      Specify the name and location of a directory to create for the {% data variables.product.prodname_codeql %} database. The command will fail if you try to overwrite an existing directory.
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
      Specify the identifier for the language to create a database for, one of: <code>{% data reusables.code-scanning.codeql-languages-keywords %}</code> (use <code>javascript</code> to analyze TypeScript code).
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use if you run the CLI outside the checkout root of the repository. By default, the <code>database create</code> command assumes that the current directory is the root directory for the source files, use this option to specify a different location.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Optional for compiled languages. Use if you want to override the CLI's automatic build system detection and compilation. Specify the build command or script that invokes the compiler. Commands are run from the current folder or, where it is defined, from <nobr>`--source-root`</nobr>. Do not use this option for Python and JavaScript/TypeScript analysis.
    </td>
  </tr>
</table>

For more information, see [Creating {% data variables.product.prodname_codeql %} databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

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

For more information and examples, see [Creating {% data variables.product.prodname_codeql %} databases ](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

#### Analyzing a {% data variables.product.prodname_codeql %} database

1. Create a {% data variables.product.prodname_codeql %} database (see above).
2. Run `codeql database analyze` on the database and specify which queries to use.
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
      Specify the path for the directory that contains the {% data variables.product.prodname_codeql %} database to analyze.
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
      Specify the queries to run. To run the standard queries used for {% data variables.product.prodname_code_scanning %}, use: <code>&lt;language&gt;-code-scanning.qls</code> where <code>&lt;language&gt;</code> is the short code for the language of the database. To see the other query suites included in the {% data variables.product.prodname_codeql_cli %} bundle look in <code>/extraction-root/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>. For information about creating your own query suite, see <a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">Creating CodeQL query suites</a> in the documentation for the {% data variables.product.prodname_codeql_cli %}.
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
      Specify the format for the results file generated by the command. For upload to {% data variables.product.company_short %} this should be: {% if currentVersion == "free-pro-team@latest" %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}. Para obter mais informações, consulte "<a href="/code-security/secure-coding/sarif-support-for-code-scanning">Suporte SARIF para {% data variables.product.prodname_code_scanning %}</a>".
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
      Specify where to save the SARIF results file.{% if currentVersion == "free-pro-team@latest" %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Specify a category to include in the SARIF results  file for this analysis. A category can be used to distinguish multiple analyses for the same tool and commit, but performed on different languages or different parts of the code. This value will appear in the <code>&lt;run&gt;.automationId</code> property in SARIF v1, the <code>&lt;run&gt;.automationLogicalId</code> property in SARIF v2, and the <code>&lt;run&gt;.automationDetails.id</code> property in SARIF v2.1.0. |{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--threads`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use if you want to use more than one thread to run queries. The default value is <code>1</code>. You can specify more threads to speed up query execution. To set the number of threads to the number of logical processors, specify <code>0</code>.
    </td>
  </tr>
</table>

For more information, see [Analyzing databases with the {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

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

#### Uploading results to {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Before you can upload results to {% data variables.product.product_name %}, you must determine the best way to pass the {% data variables.product.prodname_github_app %} or personal access token you created earlier to the {% data variables.product.prodname_codeql_cli %} (see [Generating a token for authentication with {% data variables.product.product_name %}](#generating-a-token-for-authentication-with-github) above). We recommend that you review your CI system's guidance on the secure use of the secret store. The {% data variables.product.prodname_codeql_cli %} supports:

- Passing the token to the CLI via standard input using the `--github-auth-stdin` option (recommended).
- Saving the secret in the environment variable `GITHUB_TOKEN` and running the CLI without including the `--github-auth-stdin` option.

When you have decided on the most secure and reliable method for your CI server, run `codeql github upload-results` on the SARIF results file and include `--github-auth-stdin` unless the token is available in the environment variable `GITHUB_TOKEN`.

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
      Specify the <em x-id="3">OWNER/NAME</em> of the repository to upload data to. The owner must be an organization within an enterprise that has a license for {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_GH_advanced_security %} must be enabled for the repository{% if currentVersion == "free-pro-team@latest" %}, unless the repository is public{% endif %}. Para obter mais informações, consulte "<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">Gerenciar configurações de segurança e análise do seu repositório</a>".
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
      Specify the name of the <code>ref</code> you checked out and analyzed so that the results can be matched to the correct code. For a branch use: <code>refs/heads/BRANCH-NAME</code>, for the head commit of a pull request use <code>refs/pulls/NUMBER/head</code>, or for the {% data variables.product.product_name %}-generated merge commit of a pull request use <code>refs/pulls/NUMBER/merge</code>.
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
      Specify the full SHA of the commit you analyzed.
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
      Specify the SARIF file to load.{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
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
      Specify the URL for {% data variables.product.product_name %}.{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Opcional. Use to pass the CLI the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API via standard input. This is not needed if the command has access to a <code>GITHUB_TOKEN</code> environment variable set with this token.
    </td>
  </tr>
</table>

For more information, see [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

##### Exemplo básico

```
$ echo $UPLOAD_TOKEN | codeql  github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

There is no output from this command unless the upload was unsuccessful. The command prompt returns when the upload is complete and data processing has begun. On smaller codebases, you should be able to explore the {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} shortly afterward. Alerts are shown directly in the pull request or on the **Security** tab for branches, depending on the code that was checked out. For more information, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" and "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

### Leia mais

- [Creating CodeQL databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analyzing databases with the CodeQL CL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
