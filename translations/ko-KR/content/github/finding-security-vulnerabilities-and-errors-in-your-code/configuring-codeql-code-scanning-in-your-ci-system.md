---
title: Configuring CodeQL code scanning in your CI system
shortTitle: Configuring in your CI
intro: 'You can configure how the {% data variables.product.prodname_codeql_runner %} scans the code in your project and uploads the results to {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### About configuring {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system

To integrate {% data variables.product.prodname_code_scanning %} into your CI system, you can use the {% data variables.product.prodname_codeql_runner %}. For more information, see "[Running {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)."

In general, you invoke the {% data variables.product.prodname_codeql_runner %} as follows.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` depends on where you've downloaded the {% data variables.product.prodname_codeql_runner %} on your CI system. `codeql-runner-OS` depends on the operating system you use. There are three versions of the {% data variables.product.prodname_codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos`, and `codeql-runner-win`, for Linux, macOS, and Windows systems respectively.

To customize the way the {% data variables.product.prodname_codeql_runner %} scans your code, you can use flags, such as `--languages` and `--queries`, or you can specify custom settings in a separate configuration file.

### Overriding automatic language detection

The {% data variables.product.prodname_codeql_runner %} automatically detects and scans code written in the supported languages.

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

To override automatic language detection, run the `init` command with the `--languages` flag, followed by a comma-separated list of language keywords. The keywords for the supported languages are `cpp`, `csharp`, `go`, `java`, `javascript`, and `python`.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

### Running additional queries

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites %}

To add one or more queries, pass a comma-separated list of paths to the `--queries` flag of the `init` command. You can also specify additional queries in a configuration file.

If you also are using a configuration file for custom settings, and you are also specifying additional queries with the `--queries` flag, the {% data variables.product.prodname_codeql_runner %} uses the additional queries specified with the <nobr>`--queries`</nobr> flag instead of any in the configuration file. If you want to run the combined set of additional queries specified with the flag and in the configuration file, prefix the value passed to <nobr>`--queries`</nobr> with the `+` symbol. For more information, see "[Using a custom configuration file](#using-a-custom-configuration-file)."

In the following example, the `+` symbol ensures that the {% data variables.product.prodname_codeql_runner %} uses the additional queries together with any queries specified in the referenced configuration file.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Using a custom configuration file

Instead of passing additional information to the {% data variables.product.prodname_codeql_runner %} commands, you can specify custom settings in a separate configuration file.

The configuration file is a YAML file. It uses syntax similar to the workflow syntax for {% data variables.product.prodname_actions %}, as illustrated in the examples below. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)."

Use the `--config-file` flag of the `init` command to specify the configuration file. The value of <nobr>`--config-file`</nobr> is the path to the configuration file that you want to use. This example loads the configuration file _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

#### Example configuration files

{% data reusables.code-scanning.example-configuration-files %}

### Configuring {% data variables.product.prodname_code_scanning %} for compiled languages

For the compiled languages C/C++, C#, and Java, {% data variables.product.prodname_codeql %} builds the code before analyzing it. {% data reusables.code-scanning.analyze-go %}

For many common build systems, the {% data variables.product.prodname_codeql_runner %} can build the code automatically. To attempt to build the code automatically, run `autobuild` between the `init` and `analyze` steps. Note that if your repository requires a specific version of a build tool, you may need to install the build tool manually first.

The `autobuild` process only ever attempts to build _one_ compiled language for a repository. The language automatically selected for analysis is the language with the most files. If you want to choose a language explicitly, use the `--language` flag of the `autobuild` command.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

If the `autobuild` command can't build your code, you can run the build steps yourself, between the `init` and `analyze` steps. For more information, see "[Running {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system#compiled-language-example)."

### Uploading {% data variables.product.prodname_code_scanning %} data to {% data variables.product.prodname_dotcom %}

By default, the {% data variables.product.prodname_codeql_runner %} uploads results from {% data variables.product.prodname_code_scanning %} when you run the `analyze` command. You can also upload SARIF files separately, by using the `upload` command.

Once you've uploaded the data, {% data variables.product.prodname_dotcom %} displays the alerts in your repository. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

### {% data variables.product.prodname_codeql_runner %} command reference

The {% data variables.product.prodname_codeql_runner %} supports the following commands and flags.

#### `init`

Initializes the {% data variables.product.prodname_codeql_runner %} and creates a {% data variables.product.prodname_codeql %} database for each language to be analyzed.

| Flag                             | 필수 사항 | Input value                                                                                                                                                                         |
| -------------------------------- |:-----:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                   |   ✓   | Name of the repository to initialize.                                                                                                                                               |
| `--github-url`                   |   ✓   | URL of the {% data variables.product.prodname_dotcom %} instance where your repository is hosted.                                                                                   |
| `--github-auth`                  |   ✓   | A {% data variables.product.prodname_github_apps %} token or personal access token.                                                                                               |
| `--languages`                    |       | Comma-separated list of languages to analyze. By default, the {% data variables.product.prodname_codeql_runner %} detects and analyzes all supported languages in the repository. |
| `--queries`                      |       | Comma-separated list of additional queries to run, in addition to the default suite of security queries.                                                                            |
| `--config-file`                  |       | Path to custom configuration file.                                                                                                                                                  |
| `--codeql-path`                  |       | Path to a copy of the {% data variables.product.prodname_codeql %} CLI executable to use. By default, the {% data variables.product.prodname_codeql_runner %} downloads a copy.   |
| `--temp-dir`                     |       | Directory where temporary files are stored. The default is _./codeql-runner_.                                                                                                       |
| `--tools-dir`                    |       | Directory where {% data variables.product.prodname_codeql %} tools and other files are stored between runs. The default is a subdirectory of the home directory.                    |
| <nobr>`--checkout-path`</nobr> |       | The path to the checkout of your repository. The default is the current working directory.                                                                                          |
| `--debug`                        |       | None. Prints more verbose output.                                                                                                                                                   |
| `-h`, `--help`                   |       | None. Displays help for the command.                                                                                                                                                |

#### `autobuild`

Attempts to build the code for the compiled languages C/C++, C#, and Java. For those languages, {% data variables.product.prodname_codeql %} builds the code before analyzing it. Run `autobuild` between the `init` and `analyze` steps.

| Flag                        | 필수 사항 | Input value                                                                                                                                    |
| --------------------------- |:-----:| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--language`                |       | The language to build. By default, the {% data variables.product.prodname_codeql_runner %} builds the compiled language with the most files. |
| <nobr>`--temp-dir`</nobr> |       | Directory where temporary files are stored. The default is _./codeql-runner_.                                                                  |
| `--debug`                   |       | None. Prints more verbose output.                                                                                                              |
| `-h`, `--help`              |       | None. Displays help for the command.                                                                                                           |

#### `analyze`

Analyzes the code in the {% data variables.product.prodname_codeql %} databases and uploads results to {% data variables.product.product_location %}.

| Flag                               | 필수 사항 | Input value                                                                                                                                                                                                     |
| ---------------------------------- |:-----:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                     |   ✓   | Name of the repository to analyze.                                                                                                                                                                              |
| `--commit`                         |   ✓   | SHA of the commit to analyze. In Git and in Azure DevOps, this corresponds to the value of `git rev-parse HEAD`. In Jenkins, this corresponds to `$GIT_COMMIT`.                                                 |
| `--ref`                            |   ✓   | Name of the reference to analyze, for example `refs/heads/main`. In Git and in Jenkins, this corresponds to the value of `git symbolic-ref HEAD`. In Azure DevOps, this corresponds to `$(Build.SourceBranch)`. |
| `--github-url`                     |   ✓   | URL of the {% data variables.product.prodname_dotcom %} instance where your repository is hosted.                                                                                                               |
| `--github-auth`                    |   ✓   | A {% data variables.product.prodname_github_apps %} token or personal access token.                                                                                                                           |
| <nobr>`--checkout-path`</nobr>   |       | The path to the checkout of your repository. The default is the current working directory.                                                                                                                      |
| `--no-upload`                      |       | None. Stops the {% data variables.product.prodname_codeql_runner %} from uploading the results to {% data variables.product.product_location %}.                                                              |
| `--output-dir`                     |       | Directory where the output SARIF files are stored. The default is in the directory of temporary files.                                                                                                          |
| `--ram`                            |       | Amount of memory to use when running queries. The default is to use all available memory.                                                                                                                       |
| <nobr>`--no-add-snippets`</nobr> |       | None. Excludes code snippets from the SARIF output.                                                                                                                                                             |
| `--threads`                        |       | Number of threads to use when running queries. The default is to use all available cores.                                                                                                                       |
| `--temp-dir`                       |       | Directory where temporary files are stored. The default is _./codeql-runner_.                                                                                                                                   |
| `--debug`                          |       | None. Prints more verbose output.                                                                                                                                                                               |
| `-h`, `--help`                     |       | None. Displays help for the command.                                                                                                                                                                            |

#### `업로드`

Uploads SARIF files to {% data variables.product.product_location %}.

| Flag                             | 필수 사항 | Input value                                                                                                                                                                                                            |
| -------------------------------- |:-----:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sarif-file`                   |   ✓   | SARIF file to upload, or a directory containing multiple SARIF files.                                                                                                                                                  |
| `--repository`                   |   ✓   | Name of the repository that was analyzed.                                                                                                                                                                              |
| `--commit`                       |   ✓   | SHA of the commit that was analyzed. In Git and in Azure DevOps, this corresponds to the value of `git rev-parse HEAD`. In Jenkins, this corresponds to `$GIT_COMMIT`.                                                 |
| `--ref`                          |   ✓   | Name of the reference that was analyzed, for example `refs/heads/main`. In Git and in Jenkins, this corresponds to the value of `git symbolic-ref HEAD`. In Azure DevOps, this corresponds to `$(Build.SourceBranch)`. |
| `--github-url`                   |   ✓   | URL of the {% data variables.product.prodname_dotcom %} instance where your repository is hosted.                                                                                                                      |
| `--github-auth`                  |   ✓   | A {% data variables.product.prodname_github_apps %} token or personal access token.                                                                                                                                  |
| <nobr>`--checkout-path`</nobr> |       | The path to the checkout of your repository. The default is the current working directory.                                                                                                                             |
| `--debug`                        |       | None. Prints more verbose output.                                                                                                                                                                                      |
| `-h`, `--help`                   |       | None. Displays help for the command.                                                                                                                                                                                   |
