---
title: Running CodeQL CLI in your CI system
shortTitle: Running CodeQL CLI
intro: 'You can use the {% data variables.product.prodname_codeql_cli %} to perform {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in a third-party continuous integration system.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### About the {% data variables.product.prodname_codeql_cli %}

You can use the {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_code_scanning %} on code that you're processing in a third-party continuous integration (CI) system. {% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)."

{% data reusables.code-scanning.what-is-codeql-cli %}

Alternatively, you can use {% data variables.product.prodname_codeql_runner %} in your CI system, or {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_name %}. For an overview of the options for CI systems, see "[About CodeQL {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)". For information about {% data variables.product.prodname_code_scanning %} using actions, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

{% note %}

**Note:** {% if currentVersion == "free-pro-team@latest" %}
The {% data variables.product.prodname_codeql_cli %} is free to use on public repositories that are maintained on {% data variables.product.prodname_dotcom_the_website %}, and available to use on private repositories that are owned by customers with an {% data variables.product.prodname_advanced_security %} license. For information, see "[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} Terms and Conditions](https://securitylab.github.com/tools/codeql/license)" and "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)."
{%- else %}The {% data variables.product.prodname_codeql_cli %} is available to customers with an {% data variables.product.prodname_advanced_security %} license.
{% endif %}
{% endnote %}

### Downloading the {% data variables.product.prodname_codeql_cli %}

You should download the {% data variables.product.prodname_codeql %} bundle from https://github.com/github/codeql-action/releases. The bundle contains:

- {% data variables.product.prodname_codeql_cli %} product
- A compatible version of the queries and libraries from https://github.com/github/codeql
- Precompiled versions of all the queries included in the bundle

You should always use the {% data variables.product.prodname_codeql %} bundle as this ensures compatibility and also gives much better performance than a separate download of the {% data variables.product.prodname_codeql_cli %} and checkout of the {% data variables.product.prodname_codeql %} queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.gz` file. Alternatively, you can download `codeql-bundle.tar.gz`, which contains the CLI for all supported platforms.

### Setting up the {% data variables.product.prodname_codeql_cli %} in your CI system

You need to make the full contents of the {% data variables.product.prodname_codeql_cli %} bundle available to every CI server that you want to run CodeQL {% data variables.product.prodname_code_scanning %} analysis on. For example, you might configure each server to copy the bundle from a central, internal location and extract it. Alternatively, you could use the REST API to get the bundle directly from {% data variables.product.prodname_dotcom %}, ensuring that you benefit from the latest improvements to queries. Updates to the {% data variables.product.prodname_codeql_cli %} are released every 2-3 weeks. For example:

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

Each CI server needs a {% data variables.product.prodname_github_app %} or personal access token for the {% data variables.product.prodname_codeql_cli %} to use to upload results to {% data variables.product.product_name %}. You must use an access token or a {% data variables.product.prodname_github_app %} with the `security_events` write permission. If CI servers already use a token with this scope to checkout repositories from {% data variables.product.product_name %}, you could potentially allow the {% data variables.product.prodname_codeql_cli %} to use the same token. Otherwise, you should create a new token with the `security_events` write permission and add this to the CI system's secret store. For information, see "[Building {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" and "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

### Using the {% data variables.product.prodname_codeql_cli %} to generate data and upload it to {% data variables.product.product_name %}

You call the {% data variables.product.prodname_codeql_cli %} to analyze the codebase in three steps:

1. Create a {% data variables.product.prodname_codeql %} database to represent a single programming language in the repository using: `codeql database create`
2. Run queries to analyze the {% data variables.product.prodname_codeql %} database and summarize the results in a SARIF file using: `codeql database analyze`
3. Upload the SARIF file to {% data variables.product.product_name %} where the results are matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts using: `codeql github upload-results`

Each command has a few mandatory options with additional options that you can use to modify the behavior of the command. You can display the command-line help for any command using the <nobr>`--help`</nobr> option.

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

| Option | Required | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the name and location of a directory to create for the {% data variables.product.prodname_codeql %} database. The command will fail if you try to overwrite an existing directory. |
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the identifier for the language to create a database for, one of: `{% data reusables.code-scanning.codeql-languages-keywords %}` (use `javascript` to analyze TypeScript code).
| <nobr>`--source-root`</nobr> | | Optional. Use if you run the CLI outside the checkout root of the repository. By default, the `database create` command assumes that the current directory is the root directory for the source files, use this option to specify a different location. |
| <nobr>`--command`</nobr> | | Optional for compiled languages. Use if you want to override the CLI's automatic build system detection and compilation. Specify the build command or script that invokes the compiler. Commands are run from the current folder or, where it is defined, from <nobr>`--source-root`</nobr>. Do not use this option for Python and JavaScript/TypeScript analysis. |

For more information, see [Creating {% data variables.product.prodname_codeql %} databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

##### Basic example

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

| Option | Required | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the path for the directory that contains the {% data variables.product.prodname_codeql %} database to analyze. |
| `<queries>` | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the queries to run. To run the standard queries used for {% data variables.product.prodname_code_scanning %}, use: `<language>-code-scanning.qls` where `<language>` is the short code for the language of the database. To see the other query suites included in the {% data variables.product.prodname_codeql_cli %} bundle look in `/extraction-root/codeql/qlpacks/codeql-<language>/codeql-suites`. For information about creating your own query suite, see [Creating CodeQL query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the format for the results file generated by the command. For upload to {% data variables.product.company_short %} this should be: {% if currentVersion == "free-pro-team@latest" %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)."
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify where to save the SARIF results file.{% if currentVersion == "free-pro-team@latest" %}
| <nobr>`--sarif-category`<nobr> | | Optional. Specify a category to include in the SARIF results  file for this analysis. A category can be used to distinguish multiple analyses for the same tool and commit, but performed on different languages or different parts of the code. This value will appear in the `<run>.automationId` property in SARIF v1, the `<run>.automationLogicalId` property in SARIF v2, and the `<run>.automationDetails.id` property in SARIF v2.1.0. |{% endif %}
| <nobr>`--threads`</nobr> | | Optional. Use if you want to use more than one thread to run queries. The default value is `1`. You can specify more threads to speed up query execution. To set the number of threads to the number of logical processors, specify `0`.

For more information, see [Analyzing databases with the {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

##### Basic example

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

| Option | Required | Usage |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the *OWNER/NAME* of the repository to upload data to. The owner must be an organization within an enterprise that has a license for {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_GH_advanced_security %} must be enabled for the repository{% if currentVersion == "free-pro-team@latest" %}, unless the repository is public{% endif %}. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the name of the `ref` you checked out and analyzed so that the results can be matched to the correct code. For a branch use: `refs/heads/BRANCH-NAME`, for the head commit of a pull request use `refs/pulls/NUMBER/head`, or for the {% data variables.product.product_name %}-generated merge commit of a pull request use `refs/pulls/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the full SHA of the commit you analyzed.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the SARIF file to load.{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Specify the URL for {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Optional. Use to pass the CLI the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token.

For more information, see [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

##### Basic example

```
$ echo $UPLOAD_TOKEN | codeql  github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

There is no output from this command unless the upload was unsuccessful. The command prompt returns when the upload is complete and data processing has begun. On smaller codebases, you should be able to explore the {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} shortly afterward. Alerts are shown directly in the pull request or on the **Security** tab for branches, depending on the code that was checked out. For more information, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" and "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

### Further reading

- [Creating CodeQL databases](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analyzing databases with the CodeQL CL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
