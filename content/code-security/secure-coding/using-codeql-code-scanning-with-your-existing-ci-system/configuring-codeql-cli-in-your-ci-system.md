---
title: Configuring CodeQL CLI in your CI system
shortTitle: Configuring CodeQL CLI
intro: 'You can configure your continuous integration system to run the {% data variables.product.prodname_codeql_cli %}, perform {% data variables.product.prodname_codeql %} analysis, and upload the results to {% data variables.product.product_name %} for display as {% data variables.product.prodname_code_scanning %} alerts.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: 'next'
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

## About generating code scanning results with {% data variables.product.prodname_codeql_cli %}

Once you've made the {% data variables.product.prodname_codeql_cli %} available to servers in your CI system, and ensured that they can authenticate with {% data variables.product.product_name %}, you're ready to generate data.

You use three different commands to generate results and upload them to {% data variables.product.product_name %}:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
<!--Option to analyze multiple languages with one call-->
1. `database create` to create a {% data variables.product.prodname_codeql %} database to represent the hierarchical structure of each supported programming language in the repository.
2. ` database analyze` to run queries to analyze each {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file.
3. `github upload-results` to upload the resulting SARIF files to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts.
{% else %}
<!--Only one language can be analyzed-->
1. `database create` to create a {% data variables.product.prodname_codeql %} database to represent the hierarchical structure of a supported programming language in the repository.
2. ` database analyze` to run queries to analyze the {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file.
3. `github upload-results` to upload the resulting SARIF file to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts.
{% endif %}

You can display the command-line help for any command using the <nobr>`--help`</nobr> option.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Creating {% data variables.product.prodname_codeql %} databases to analyze

1. Check out the code that you want to analyze:
    - For a branch, check out the head of the branch that you want to analyze.
    - For a pull request, check out either the head commit of the pull request, or check out a {% data variables.product.product_name %}-generated merge commit of the pull request.
2. Set up the environment for the codebase, making sure that any dependencies are available. For more information, see [Creating databases for non-compiled languages](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) and [Creating databases for compiled languages](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) in the documentation for the {% data variables.product.prodname_codeql_cli %}.
3. Find the build command, if any, for the codebase. Typically this is available in a configuration file in the CI system.
4. Run `codeql database create` from the checkout root of your repository and build the codebase. 
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
  ```shell
  # Single supported language - create one CodeQL databsae
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt; 

  # Multiple supported languages - create one CodeQL database per langauge
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt; 
  ```
  {% else %}
    ```shell
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;
  ```
  {% endif %}
  {% note %}

  **Note:** If you use a containerized build, you need to run the {% data variables.product.prodname_codeql_cli %} inside the container where your build task takes place.

  {% endnote %}

| Option | Required | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the name and location of a directory to create for the {% data variables.product.prodname_codeql %} database. The command will fail if you try to overwrite an existing directory. If you also specify `--db-cluster`, this is the parent directory and a subdirectory is created for each language analyzed.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the identifier for the language to create a database for, one of: `{% data reusables.code-scanning.codeql-languages-keywords %}` (use `javascript` to analyze TypeScript code). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}When used with <nobr>`--db-cluster`</nobr>, the option accepts a comma-separated list, or can be specified more than once.{% endif %}
| <nobr>`--command`</nobr> | | Recommended. Use to specify the build command or script that invokes the build process for the codebase. Commands are run from the current folder or, where it is defined, from <nobr>`--source-root`</nobr>. Not needed for Python and JavaScript/TypeScript analysis. | {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
| <nobr>`--db-cluster`</nobr> | | Optional. Use in multi-language codebases to generate one database for each language specified by <nobr>`--language`</nobr>.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | Recommended. Use to suppress the build command for languages where the {% data variables.product.prodname_codeql_cli %} does not need to monitor the build (for example, Python and JavaScript/TypeScript). {% endif %}
| <nobr>`--source-root`</nobr> | | Optional. Use if you run the CLI outside the checkout root of the repository. By default, the `database create` command assumes that the current directory is the root directory for the source files, use this option to specify a different location. |

For more information, see [Creating {% data variables.product.prodname_codeql %} databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

### {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}Single language example{% else %}Basic example{% endif %}

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
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
{% endif %}

## Analyzing a {% data variables.product.prodname_codeql %} database

1. Create a {% data variables.product.prodname_codeql %} database (see above).
2. Run `codeql database analyze` on the database and specify which queries to use.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  &lt;queries&gt; 
  ```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**Note:** If you analyze more than one {% data variables.product.prodname_codeql %} database for a single commit, you must specify a SARIF category for each set of results generated by this command. When you upload the results to {% data variables.product.product_name %}, {% data variables.product.prodname_code_scanning %} uses this category to store the results for each language separately. If you forget to do this, each upload overwrites the previous results.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt;  &lt;queries&gt; 
```
{% endnote %}
{% endif %}

| Option | Required | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the path for the directory that contains the {% data variables.product.prodname_codeql %} database to analyze. |
| `<queries>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the queries to run. To run the standard queries used for {% data variables.product.prodname_code_scanning %}, use: `<language>-code-scanning.qls` where `<language>` is the short code for the language of the database. To see the other query suites included in the {% data variables.product.prodname_codeql_cli %} bundle, look in `/<extraction-root>/codeql/qlpacks/codeql-<language>/codeql-suites`. For information about creating your own query suite, see [Creating CodeQL query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the format for the results file generated by the command. For upload to {% data variables.product.company_short %} this should be: {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)."
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify where to save the SARIF results file.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Optional for single database analysis. Required to define the language when you analyze multiple databases for a single commit in a repository. Specify a category to include in the SARIF results file for this analysis. A category is used to distinguish multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.|{% endif %}
| <nobr>`--threads`</nobr> | | Optional. Use if you want to use more than one thread to run queries. The default value is `1`. You can specify more threads to speed up query execution. To set the number of threads to the number of logical processors, specify `0`.
| <nobr>`--verbose`</nobr> | | Optional. Use to get more detailed information about the analysis process{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %} and diagnostic data from the database creation process{% endif %}.

For more information, see [Analyzing databases with the {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

### Basic example

This example analyzes a {% data variables.product.prodname_codeql %} database stored at `/codeql-dbs/example-repo` and saves the results as a SARIF file: `/temp/example-repo-js.sarif`. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}It uses `--sarif-category` to include extra information in the SARIF file that identifies the results as JavaScript. This is essential when you have more than one {% data variables.product.prodname_codeql %} database to analyze for a single commit in a repository.{% endif %}

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}--sarif-category=javascript{% endif %}
    --format={% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
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
      {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Option | Required | Usage |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the *OWNER/NAME* of the repository to upload data to. The owner must be an organization within an enterprise that has a license for {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_GH_advanced_security %} must be enabled for the repository{% if currentVersion == "free-pro-team@latest" %}, unless the repository is public{% endif %}. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the name of the `ref` you checked out and analyzed so that the results can be matched to the correct code. For a branch use: `refs/heads/BRANCH-NAME`, for the head commit of a pull request use `refs/pulls/NUMBER/head`, or for the {% data variables.product.product_name %}-generated merge commit of a pull request use `refs/pulls/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the full SHA of the commit you analyzed.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the SARIF file to load.{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the URL for {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Optional. Use to pass the CLI the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token.

For more information, see [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

### Basic example

This example uploads results from the SARIF file `temp/example-repo-js.sarif` to the repository `my-org/example-repo`. It tells the {% data variables.product.prodname_code_scanning %} API that the results are for the commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` on the `main` branch.

```
$ echo $UPLOAD_TOKEN | codeql  github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

There is no output from this command unless the upload was unsuccessful. The command prompt returns when the upload is complete and data processing has begun. On smaller codebases, you should be able to explore the {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} shortly afterward. You can see alerts directly in the pull request or on the **Security** tab for branches, depending on the code you checked out. For more information, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" and "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
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

### Diagnostic data and summary metrics

When you analyze a {% data variables.product.prodname_codeql %} database using a {% data variables.product.prodname_code_scanning %} query suite, in addition to generating detailed information about alerts, the CLI reports diagnostic data from the database generation step and summary metrics. For repositories with few alerts, you may find this information useful for determining if there are genuinely few problems in the code, or if there were errors generating the {% data variables.product.prodname_codeql %} database. For more detailed output from `codeql database analyze`, use the `--verbose` option.

### {% data variables.product.prodname_code_scanning %} only shows analysis results from one of the analized languages

By default, {% data variables.product.prodname_code_scanning %} expects one SARIF results file per analysis for a repository. Consequently, when you upload a second SARIF results file for a commit, it is treated as a replacement for the original set of data.

If you want to upload more than one set of results to the {% data variables.product.prodname_code_scanning %} API for a commit in a repository, you must identify each set of results as a unique set. For repositories where you create more than one {% data variables.product.prodname_codeql %} database to analyze for each commit, use the `--sarif-category` option to specify a language or other unique category for each SARIF file that you generate for that repository.

### Alternative if your CI system cannot trigger the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% endif %}

## Further reading

- [Creating CodeQL databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analyzing databases with the CodeQL CLI](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
