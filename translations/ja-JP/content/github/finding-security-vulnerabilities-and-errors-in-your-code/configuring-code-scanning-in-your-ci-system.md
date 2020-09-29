---
title: Configuring code scanning in your CI system
shortTitle: Configuring in your CI
intro: 'You can configure how the {% data variables.product.prodname_codeql_runner %} scans the code in your project and uploads the results to {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### About {% data variables.product.prodname_code_scanning %} configuration in your CI system

To integrate {% data variables.product.prodname_code_scanning %} into your CI system, you can use the {% data variables.product.prodname_codeql_runner %}. For more information, see "[Running code scanning in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

In general, you invoke the {% data variables.product.prodname_codeql_runner %} as follows.

```
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` depends on where you've downloaded the {% data variables.product.prodname_codeql_runner %} on your CI system. `codeql-runner-OS` depends on the operating system you use. There are three versions of the {% data variables.product.prodname_codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos`, and `codeql-runner-win`, for Linux, macOS, and Windows systems respectively.

To customize the way the {% data variables.product.prodname_codeql_runner %} scans your code, you can use flags, such as `--languages` and `--queries`, or you can specify custom settings in a separate configuration file.

### 自動言語検出をオーバーライドする

The {% data variables.product.prodname_codeql_runner %} automatically detects and scans code written in the supported languages.

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

To override automatic language detection, run the `init` command with the `--languages` flag, followed by a comma-separated list of language keywords. サポートされている言語のキーワードは、`cpp`、`csharp`、`go`、`java`、`JavaScript`、および `python` です。

```
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

### 追加のクエリを実行する

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites %}

To add one or more queries, pass a comma-separated list of paths to the `--queries` flag of the `init` command. You can also specify additional queries in a configuration file.

If you also are using a configuration file for custom settings, and you are also specifying additional queries with the `--queries` flag, the {% data variables.product.prodname_codeql_runner %} uses the additional queries specified with the <nobr>`--queries`</nobr> flag instead of any in the configuration file. If you want to run the combined set of additional queries specified with the flag and in the configuration file, prefix the value passed to <nobr>`--queries`</nobr> with the `+` symbol. 設定ファイルの例については、「[Example configuration files](#example-configuration-files)」を参照してください。

In the following example, the `+` symbol ensures that the {% data variables.product.prodname_codeql_runner %} uses the additional queries together with any queries specified in the referenced configuration file.

```
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### サードパーティのコードスキャンツールを使用する

Instead of passing additional information to the {% data variables.product.prodname_codeql_runner %} commands, you can specify custom settings in a separate configuration file.

The configuration file is a YAML file. It uses syntax similar to the workflow syntax for {% data variables.product.prodname_actions %}, as illustrated in the examples below. 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)」を参照してください。

Use the `--config-file` flag of the `init` command to specify the configuration file. The value of <nobr>`--config-file`</nobr> is the path to the configuration file that you want to use. This example loads the configuration file _.github/codeql/codeql-config.yml_.

```
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

#### 設定ファイルの例

{% data reusables.code-scanning.example-configuration-files %}

### コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

For the compiled languages C/C++, C#, and Java, {% data variables.product.prodname_codeql %} builds the code before analyzing it. 他のコンパイル言語とは対照的に、{% data variables.product.prodname_codeql %} はコードをビルドせずに Go を分析します。

For many common build systems, the {% data variables.product.prodname_codeql_runner %} can build the code automatically. To attempt to build the code automatically, run `autobuild` between the `init` and `analyze` steps. Note that if your repository requires a specific version of a build tool, you may need to install the build tool manually first.

The `autobuild` process only ever attempts to build _one_ compiled language for a repository. The language automatically selected for analysis is the language with the most files. If you want to choose a language explicitly, use the `--language` flag of the `autobuild` command.

```
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

If the `autobuild` command can't build your code, you can run the build steps yourself, between the `init` and `analyze` steps. For more information, see "[Running code scanning in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system#compiled-language-example)."

### {% data variables.product.prodname_code_scanning %} 用の設定ファイルを作成できます。

By default, the {% data variables.product.prodname_codeql_runner %} uploads results from {% data variables.product.prodname_code_scanning %} when you run the `analyze` command. You can also upload SARIF files separately, by using the `upload` command.

Once you've uploaded the data, {% data variables.product.prodname_dotcom %} displays the alerts in your repository. For more information, see "[Managing alerts from code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning#viewing-an-alert)."

### {% data variables.product.prodname_codeql_runner %} command reference

The {% data variables.product.prodname_codeql_runner %} supports the following commands and flags.

#### `init`

Initializes the {% data variables.product.prodname_codeql_runner %} and creates a {% data variables.product.prodname_codeql %} database for each language to be analyzed.

| Flag                             | 必須 | Input value                                                                                                                                                                                 |
| -------------------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                   | ✓  | Name of the repository to initialize.                                                                                                                                                       |
| `--github-url`                   | ✓  | URL of the {% data variables.product.prodname_dotcom %} instance where your repository is hosted.                                                                                      |
| `--github-auth`                  | ✓  | A {% data variables.product.prodname_github_apps %} token or personal access token.                                                                                                  |
| `--languages`                    |    | Comma-separated list of languages to analyze. By default, the {% data variables.product.prodname_codeql_runner %} detects and analyzes all supported languages in the repository.    |
| `--queries`                      |    | Comma-separated list of additional queries to run, in addition to the default suite of security queries.                                                                                    |
| `--config-file`                  |    | Path to custom configuration file.                                                                                                                                                          |
| `--codeql-path`                  |    | Path to a copy of the {% data variables.product.prodname_codeql %} CLI executable to use. By default, the {% data variables.product.prodname_codeql_runner %} downloads a copy. |
| `--temp-dir`                     |    | Directory where temporary files are stored. The default is _./codeql-runner_.                                                                                                               |
| `--tools-dir`                    |    | Directory where {% data variables.product.prodname_codeql %} tools and other files are stored between runs. The default is a subdirectory of the home directory.                       |
| <nobr>`--checkout-path`</nobr> |    | The path to the checkout of your repository. The default is the current working directory.                                                                                                  |
| `--debug`                        |    | なし. Prints more verbose output.                                                                                                                                                             |
| `-h`, `--help`                   |    | なし. Displays help for the command.                                                                                                                                                          |

#### `autobuild`

Attempts to build the code for the compiled languages C/C++, C#, and Java. For those languages, {% data variables.product.prodname_codeql %} builds the code before analyzing it. Run `autobuild` between the `init` and `analyze` steps.

| Flag                        | 必須 | Input value                                                                                                                                         |
| --------------------------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--language`                |    | The language to build. By default, the {% data variables.product.prodname_codeql_runner %} builds the compiled language with the most files. |
| <nobr>`--temp-dir`</nobr> |    | Directory where temporary files are stored. The default is _./codeql-runner_.                                                                       |
| `--debug`                   |    | なし. Prints more verbose output.                                                                                                                     |
| `-h`, `--help`              |    | なし. Displays help for the command.                                                                                                                  |

#### `analyze`

Analyzes the code in the {% data variables.product.prodname_codeql %} databases and uploads results to {% data variables.product.product_location %}.

| Flag                             | 必須 | Input value                                                                                                                                                                                                     |
| -------------------------------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                   | ✓  | Name of the repository to analyze.                                                                                                                                                                              |
| `--commit`                       | ✓  | SHA of the commit to analyze. In Git and in Azure DevOps, this corresponds to the value of `git rev-parse HEAD`. In Jenkins, this corresponds to `$GIT_COMMIT`.                                                 |
| `--ref`                          | ✓  | Name of the reference to analyze, for example `refs/heads/main`. In Git and in Jenkins, this corresponds to the value of `git symbolic-ref HEAD`. In Azure DevOps, this corresponds to `$(Build.SourceBranch)`. |
| `--github-url`                   | ✓  | URL of the {% data variables.product.prodname_dotcom %} instance where your repository is hosted.                                                                                                          |
| `--github-auth`                  | ✓  | A {% data variables.product.prodname_github_apps %} token or personal access token.                                                                                                                      |
| <nobr>`--checkout-path`</nobr> |    | The path to the checkout of your repository. The default is the current working directory.                                                                                                                      |
| `--no-upload`                    |    | なし. Stops the {% data variables.product.prodname_codeql_runner %} from uploading the results to {% data variables.product.product_location %}.                                                      |
| `--output-dir`                   |    | Directory where the output SARIF files are stored. The default is in the directory of temporary files.                                                                                                          |
| `--temp-dir`                     |    | Directory where temporary files are stored. The default is _./codeql-runner_.                                                                                                                                   |
| `--debug`                        |    | なし. Prints more verbose output.                                                                                                                                                                                 |
| `-h`, `--help`                   |    | なし. Displays help for the command.                                                                                                                                                                              |

#### `アップロード`

Uploads SARIF files to {% data variables.product.product_location %}.

| Flag                             | 必須 | Input value                                                                                                                                                                                                            |
| -------------------------------- |:--:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sarif-file`                   | ✓  | SARIF file to upload, or a directory containing multiple SARIF files.                                                                                                                                                  |
| `--repository`                   | ✓  | Name of the repository that was analyzed.                                                                                                                                                                              |
| `--commit`                       | ✓  | SHA of the commit that was analyzed. In Git and in Azure DevOps, this corresponds to the value of `git rev-parse HEAD`. In Jenkins, this corresponds to `$GIT_COMMIT`.                                                 |
| `--ref`                          | ✓  | Name of the reference that was analyzed, for example `refs/heads/main`. In Git and in Jenkins, this corresponds to the value of `git symbolic-ref HEAD`. In Azure DevOps, this corresponds to `$(Build.SourceBranch)`. |
| `--github-url`                   | ✓  | URL of the {% data variables.product.prodname_dotcom %} instance where your repository is hosted.                                                                                                                 |
| `--github-auth`                  | ✓  | A {% data variables.product.prodname_github_apps %} token or personal access token.                                                                                                                             |
| <nobr>`--checkout-path`</nobr> |    | The path to the checkout of your repository. The default is the current working directory.                                                                                                                             |
| `--debug`                        |    | なし. Prints more verbose output.                                                                                                                                                                                        |
| `-h`, `--help`                   |    | なし. Displays help for the command.                                                                                                                                                                                     |
