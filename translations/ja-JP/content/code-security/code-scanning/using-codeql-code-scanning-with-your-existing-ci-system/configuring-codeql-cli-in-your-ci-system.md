---
title: Configuring CodeQL CLI in your CI system
shortTitle: Configure CodeQL CLI
intro: 'You can configure your continuous integration system to run the {% data variables.product.prodname_codeql_cli %}, perform {% data variables.product.prodname_codeql %} analysis, and upload the results to {% data variables.product.product_name %} for display as {% data variables.product.prodname_code_scanning %} alerts.'
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

**Note:** This article describes features present in the version of {% data variables.product.prodname_codeql_cli %} available at the time of the release of {% data variables.product.product_name %}. If your enterprise uses a more recent version of {% data variables.product.prodname_codeql_cli %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system) instead.

{% endnote %}
{% endif %}

## About generating code scanning results with {% data variables.product.prodname_codeql_cli %}

Once you've made the {% data variables.product.prodname_codeql_cli %} available to servers in your CI system, and ensured that they can authenticate with {% data variables.product.product_name %}, you're ready to generate data.

You use three different commands to generate results and upload them to {% data variables.product.product_name %}:

<!--Option to analyze multiple languages with one call-->
1. `database create` to create a {% data variables.product.prodname_codeql %} database to represent the hierarchical structure of each supported programming language in the repository.
2. ` database analyze` to run queries to analyze each {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file.
3. `github upload-results` to upload the resulting SARIF files to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts.

You can display the command-line help for any command using the <nobr>`--help`</nobr> option.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Creating {% data variables.product.prodname_codeql %} databases to analyze

1. Check out the code that you want to analyze:
    - For a branch, check out the head of the branch that you want to analyze.
    - For a pull request, check out either the head commit of the pull request, or check out a {% data variables.product.prodname_dotcom %}-generated merge commit of the pull request.
2. Set up the environment for the codebase, making sure that any dependencies are available. For more information, see [Creating databases for non-compiled languages](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) and [Creating databases for compiled languages](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) in the documentation for the {% data variables.product.prodname_codeql_cli %}.
3. Find the build command, if any, for the codebase. Typically this is available in a configuration file in the CI system.
4. Run `codeql database create` from the checkout root of your repository and build the codebase.
  
  ```shell
  # Single supported language - create one CodeQL databsae
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```
  
  {% note %}

  **Note:** If you use a containerized build, you need to run the {% data variables.product.prodname_codeql_cli %} inside the container where your build task takes place.

  {% endnote %}

| Option | Required | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the name and location of a directory to create for the {% data variables.product.prodname_codeql %} database. The command will fail if you try to overwrite an existing directory. If you also specify `--db-cluster`, this is the parent directory and a subdirectory is created for each language analyzed.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the identifier for the language to create a database for, one of: `{% data reusables.code-scanning.codeql-languages-keywords %}` (use `javascript` to analyze TypeScript code). When used with <nobr>`--db-cluster`</nobr>, the option accepts a comma-separated list, or can be specified more than once.
| <nobr>`--command`</nobr> | | Recommended. Use to specify the build command or script that invokes the build process for the codebase. Commands are run from the current folder or, where it is defined, from <nobr>`--source-root`</nobr>. Not needed for Python and JavaScript/TypeScript analysis. | 
| <nobr>`--db-cluster`</nobr> | | Optional. Use in multi-language codebases to generate one database for each language specified by <nobr>`--language`</nobr>.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | Recommended. Use to suppress the build command for languages where the {% data variables.product.prodname_codeql_cli %} does not need to monitor the build (for example, Python and JavaScript/TypeScript). 
| <nobr>`--source-root`</nobr> | | Optional. Use if you run the CLI outside the checkout root of the repository. By default, the `database create` command assumes that the current directory is the root directory for the source files, use this option to specify a different location. |

For more information, see [Creating {% data variables.product.prodname_codeql %} databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

### Single language example

This example creates a {% data variables.product.prodname_codeql %} database for the repository checked out at `/checkouts/example-repo`. It uses the JavaScript extractor to create a hierarchical representation of the JavaScript and TypeScript code in the repository. The resulting database is stored in `/codeql-dbs/example-repo`.

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

### Multiple language example

This example creates two {% data variables.product.prodname_codeql %} databases for the repository checked out at `/checkouts/example-repo-multi`. It uses:

- `--db-cluster` to request analysis of more than one language.
- `--language` to specify which languages to create databases for.
- `--command` to tell the tool the build command for the codebase, here `make`.
- `--no-run-unnecessary-builds` to tell the tool to skip the build command for languages where it is not needed (like Python).

The resulting databases are stored in `python` and `cpp` subdirectories of `/codeql-dbs/example-repo-multi`.

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

## Analyzing a {% data variables.product.prodname_codeql %} database

1. Create a {% data variables.product.prodname_codeql %} database (see above).
2. Run `codeql database analyze` on the database and specify which {% ifversion codeql-packs %}packs and/or {% endif %}queries to use.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Note:** If you analyze more than one {% data variables.product.prodname_codeql %} database for a single commit, you must specify a SARIF category for each set of results generated by this command. When you upload the results to {% data variables.product.product_name %}, {% data variables.product.prodname_code_scanning %} uses this category to store the results for each language separately. If you forget to do this, each upload overwrites the previous results.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| Option | Required | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the path for the directory that contains the {% data variables.product.prodname_codeql %} database to analyze. |
| `<packs,queries>` | | Specify {% data variables.product.prodname_codeql %} packs or queries to run. To run the standard queries used for {% data variables.product.prodname_code_scanning %}, omit this parameter. To see the other query suites included in the {% data variables.product.prodname_codeql_cli %} bundle, look in `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`. For information about creating your own query suite, see [Creating CodeQL query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the format for the results file generated by the command. For upload to {% data variables.product.company_short %} this should be: {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)."
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify where to save the SARIF results file.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Optional for single database analysis. Required to define the language when you analyze multiple databases for a single commit in a repository. Specify a category to include in the SARIF results file for this analysis. A category is used to distinguish multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | Optional. Use if you want to include any available markdown-rendered query help for custom queries used in your analysis. Any query help for custom queries included in the SARIF output will be displayed in the code scanning UI if the relevant query generates an alert. For more information, see [Analyzing databases with the {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files) in the documentation for the {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | Optional. Use if you want to include CodeQL query packs in your analysis. For more information, see "[Downloading and using {% data variables.product.prodname_codeql %} packs](#downloading-and-using-codeql-query-packs)."
| <nobr>`--download`</nobr> | | Optional. Use if some of your CodeQL query packs are not yet on disk and need to be downloaded before running queries.{% endif %}
| <nobr>`--threads`</nobr> | | Optional. Use if you want to use more than one thread to run queries. The default value is `1`. You can specify more threads to speed up query execution. To set the number of threads to the number of logical processors, specify `0`.
| <nobr>`--verbose`</nobr> | | Optional. Use to get more detailed information about the analysis process and diagnostic data from the database creation process.

For more information, see [Analyzing databases with the {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

### Basic example

This example analyzes a {% data variables.product.prodname_codeql %} database stored at `/codeql-dbs/example-repo` and saves the results as a SARIF file: `/temp/example-repo-js.sarif`. It uses `--sarif-category` to include extra information in the SARIF file that identifies the results as JavaScript. This is essential when you have more than one {% data variables.product.prodname_codeql %} database to analyze for a single commit in a repository.

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

## Uploading results to {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Before you can upload results to {% data variables.product.product_name %}, you must determine the best way to pass the {% data variables.product.prodname_github_app %} or personal access token you created earlier to the {% data variables.product.prodname_codeql_cli %} (see [Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). We recommend that you review your CI system's guidance on the secure use of a secret store. The {% data variables.product.prodname_codeql_cli %} supports:

- Passing the token to the CLI via standard input using the `--github-auth-stdin` option (recommended).
- Saving the secret in the environment variable `GITHUB_TOKEN` and running the CLI without including the `--github-auth-stdin` option.

When you have decided on the most secure and reliable method for your CI server, run `codeql github upload-results` on each SARIF results file and include `--github-auth-stdin` unless the token is available in the environment variable `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Option | Required | Usage |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the *OWNER/NAME* of the repository to upload data to. The owner must be an organization within an enterprise that has a license for {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_GH_advanced_security %} must be enabled for the repository{% ifversion fpt or ghec %}, unless the repository is public{% endif %}. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the name of the `ref` you checked out and analyzed so that the results can be matched to the correct code. For a branch use: `refs/heads/BRANCH-NAME`, for the head commit of a pull request use `refs/pull/NUMBER/head`, or for the {% data variables.product.prodname_dotcom %}-generated merge commit of a pull request use `refs/pull/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the full SHA of the commit you analyzed.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the SARIF file to load.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the URL for {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Optional. Use to pass the CLI the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token.

For more information, see [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

### Basic example

This example uploads results from the SARIF file `temp/example-repo-js.sarif` to the repository `my-org/example-repo`. It tells the {% data variables.product.prodname_code_scanning %} API that the results are for the commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` on the `main` branch.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

There is no output from this command unless the upload was unsuccessful. The command prompt returns when the upload is complete and data processing has begun. On smaller codebases, you should be able to explore the {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} shortly afterward. You can see alerts directly in the pull request or on the **Security** tab for branches, depending on the code you checked out. For more information, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" and "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

{% ifversion codeql-packs %}
## Downloading and using {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

The {% data variables.product.prodname_codeql_cli %} bundle includes queries that are maintained by {% data variables.product.company_short %} experts, security researchers, and community contributors. If you want to run queries developed by other organizations, {% data variables.product.prodname_codeql %} query packs provide an efficient and reliable way to download and run queries. For more information, see "[About code scanning with CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

Before you can use a {% data variables.product.prodname_codeql %} pack to analyze a database, you must download any packages you require from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. This can be done either by using the `--download` flag as part of the `codeql database analyze` command. If a package is not publicly available, you will need to use a {% data variables.product.prodname_github_app %} or personal access token to authenticate. For more information and an example, see "[Uploading results to {% data variables.product.product_name %}](#uploading-results-to-github)" above.

| Option | Required | Usage |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the scope and name of one or more CodeQL query packs to download using a comma-separated list. Optionally, include the version to download and unzip. By default the latest version of this pack is downloaded. Optionally, include a path to a query, directory, or query suite to run. If no path is included, then run the default queries of this pack. |
| <nobr>`--github-auth-stdin`</nobr> | | Optional. Pass the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API to the CLI via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token.

### Basic example

This example runs the `codeql database analyze` command with the `--download` option to:

1. Download the latest version of the `octo-org/security-queries` pack.
2. Download a version of the `octo-org/optional-security-queries` pack that is *compatible* with version 1.0.1 (in this case, it is version 1.0.2). For more information on semver compatibility, see [npm's semantic version range documentation](https://github.com/npm/node-semver#ranges).
3. Run all the default queries in `octo-org/security-queries`.
4. Run only the query `queries/csrf.ql` from `octo-org/optional-security-queries`

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

### Direct download of {% data variables.product.prodname_codeql %} packs

If you want to download a {% data variables.product.prodname_codeql %} pack without running it immediately, then you can use the `codeql pack download` command. This is useful if you want to avoid accessing the internet when running {% data variables.product.prodname_codeql %} queries. When you run the {% data variables.product.prodname_codeql %} analysis, you can specify packs, versions, and paths in the same way as in the previous example:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```
{% endif %}

## Example CI configuration for {% data variables.product.prodname_codeql %} analysis

This is an example of the series of commands that you might use to analyze a codebase with two supported languages and then upload the results to {% data variables.product.product_name %}.

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

## Troubleshooting the {% data variables.product.prodname_codeql_cli %} in your CI system

### Viewing log and diagnostic information

When you analyze a {% data variables.product.prodname_codeql %} database using a {% data variables.product.prodname_code_scanning %} query suite, in addition to generating detailed information about alerts, the CLI reports diagnostic data from the database generation step and summary metrics. For repositories with few alerts, you may find this information useful for determining if there are genuinely few problems in the code, or if there were errors generating the {% data variables.product.prodname_codeql %} database. For more detailed output from `codeql database analyze`, use the `--verbose` option.

For more information about the type of diagnostic information available, see "[Viewing {% data variables.product.prodname_code_scanning %} logs](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)".

### {% data variables.product.prodname_code_scanning_capc %} only shows analysis results from one of the analyzed languages

By default, {% data variables.product.prodname_code_scanning %} expects one SARIF results file per analysis for a repository. Consequently, when you upload a second SARIF results file for a commit, it is treated as a replacement for the original set of data.

If you want to upload more than one set of results to the {% data variables.product.prodname_code_scanning %} API for a commit in a repository, you must identify each set of results as a unique set. For repositories where you create more than one {% data variables.product.prodname_codeql %} database to analyze for each commit, use the `--sarif-category` option to specify a language or other unique category for each SARIF file that you generate for that repository.

## Further reading

- [Creating CodeQL databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analyzing databases with the CodeQL CLI](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
