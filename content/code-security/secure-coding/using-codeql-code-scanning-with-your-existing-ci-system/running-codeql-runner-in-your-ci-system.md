---
title: Running CodeQL runner in your CI system
shortTitle: Running CodeQL runner
intro: 'You can use the {% data variables.product.prodname_codeql_runner %} to perform {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in a third-party continuous integration system.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
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
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->
<!--UI-LINK: When GitHub Enterprise Server doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About the {% data variables.product.prodname_codeql_runner %}

The {% data variables.product.prodname_codeql_runner %} is a tool you can use to run {% data variables.product.prodname_code_scanning %} on code that you're processing in a third-party continuous integration (CI) system. {% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
In many cases it is easier to set up {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_cli %} directly in your CI system. The runner is more complex and less forgiving to set up than the CLI, and is recommended only if you need its capability to analyze multiple compiled languages with a single build, or to integrate with complex build processes. For more information, see "[About CodeQL code scanning in your CI system](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".
{% endif %}

Alternatively, you can use {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_name %}. For information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that runs {% data variables.product.prodname_codeql %} analysis on a checkout of a {% data variables.product.prodname_dotcom %} repository. You add the runner to your third-party system, then call the runner to analyze code and upload the results to {% data variables.product.product_name %}. These results are displayed as {% data variables.product.prodname_code_scanning %} alerts in the repository.

{% note %}

**Note:** 
{% if currentVersion == "free-pro-team@latest" %}
* The {% data variables.product.prodname_codeql_runner %} uses the {% data variables.product.prodname_codeql %} CLI to analyze code and therefore has the same license conditions. It's free to use on public repositories that are maintained on {% data variables.product.prodname_dotcom_the_website %}, and available to use on private repositories that are owned by customers with an {% data variables.product.prodname_advanced_security %} license. For information, see "[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} Terms and Conditions](https://securitylab.github.com/tools/codeql/license)" and "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)."
{% else %}
* The {% data variables.product.prodname_codeql_runner %} is available to customers with an {% data variables.product.prodname_advanced_security %} license.
{% endif %}
{% if currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}
* The {% data variables.product.prodname_codeql_runner %} shouldn't be confused with the {% data variables.product.prodname_codeql %} CLI. The {% data variables.product.prodname_codeql %} CLI is a command-line interface that lets you create {% data variables.product.prodname_codeql %} databases for security research and run {% data variables.product.prodname_codeql %} queries.
For more information, see "[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)."
{% endif %}
{% endnote %}

## Downloading the {% data variables.product.prodname_codeql_runner %}

You can download the {% data variables.product.prodname_codeql_runner %} from https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases. On some operating systems, you may need to change permissions for the downloaded file before you can run it.

On Linux:

```shell
chmod +x codeql-runner-linux
```

On macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

On Windows, the `codeql-runner-win.exe` file usually requires no change to permissions.

## Adding the {% data variables.product.prodname_codeql_runner %} to your CI system

Once you download the {% data variables.product.prodname_codeql_runner %} and verify that it can be executed, you should make the runner available to each CI server that you intend to use for {% data variables.product.prodname_code_scanning %}. For example, you might configure each server to copy the runner from a central, internal location. Alternatively, you could use the REST API to get the runner directly from {% data variables.product.prodname_dotcom %}, for example: 

```shell
wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

In addition to this, each CI server also needs:

- A {% data variables.product.prodname_github_app %} or personal access token for the {% data variables.product.prodname_codeql_runner %} to use. You must use an access token with the `repo` scope, or a {% data variables.product.prodname_github_app %} with the `security_events` write permission, and `metadata` and `contents` read permissions. For information, see "[Building {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" and "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."
- Access to the {% data variables.product.prodname_codeql %} bundle associated with this release of the {% data variables.product.prodname_codeql_runner %}. This package contains queries and libraries needed for {% data variables.product.prodname_codeql %} analysis, plus the {% data variables.product.prodname_codeql %} CLI, which is used internally by the runner. For information, see "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)."

The options for providing access to the {% data variables.product.prodname_codeql %} bundle are:

1. Allow the CI servers access to https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action so that the {% data variables.product.prodname_codeql_runner %} can download the bundle automatically.
1. Manually download/extract the bundle, store it with other central resources, and use the <nobr>`--codeql-path`</nobr> flag to specify the location of the bundle in calls to initialize the {% data variables.product.prodname_codeql_runner %}.

## Calling the {% data variables.product.prodname_codeql_runner %}

You should call the {% data variables.product.prodname_codeql_runner %} from the checkout location of the repository you want to analyze. The two main commands are:

1. `init` required to initialize the runner and create a {% data variables.product.prodname_codeql %} database for each language to be analyzed. These databases are populated and analyzed by subsequent commands.
1. `analyze` required to populate the {% data variables.product.prodname_codeql %} databases, analyze them, and upload results to {% data variables.product.product_name %}.

For both commands, you must specify the URL of {% data variables.product.product_name %}, the repository *OWNER/NAME*, and the {% data variables.product.prodname_github_apps %} or personal access token to use for authentication. You also need to specify the location of the CodeQL bundle, unless the CI server has access to download it directly from the `github/codeql-action` repository.

You can configure where the {% data variables.product.prodname_codeql_runner %} stores the CodeQL bundle for future analysis on a server using the <nobr>`--tools-dir`</nobr> flag and where it stores temporary files during analysis using <nobr>`--temp-dir`</nobr>.

To view the command-line reference for the runner, use the `-h` flag. For example, to list all commands run: `codeql-runner-OS -h`, or to list all the flags available for the `init` command run: `codeql-runner-OS init -h` (where `OS` varies according to the executable that you are using). For more information, see "[Configuring {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)."

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Basic example

This example runs {% data variables.product.prodname_codeql %} analysis on a Linux CI server for the `octo-org/example-repo` repository hosted on `{% data variables.command_line.git_url_example %}`. The process is very simple because the repository contains only languages that can be analyzed by {% data variables.product.prodname_codeql %} directly, without being built (that is, Go, JavaScript, Python, and TypeScript).

In this example, the server has access to download the {% data variables.product.prodname_codeql %} bundle directly from the `github/codeql-action` repository, so there is no need to use the `--codeql-path` flag.

1. Check out the repository to analyze.
1. Move into the directory where the repository is checked out.
1. Initialize the {% data variables.product.prodname_codeql_runner %} and create {% data variables.product.prodname_codeql %} databases for the languages detected.

{% if currentVersion ver_lt "enterprise-server@3.1" %}
   ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
   ```
{% else %}
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```
{% endif %}

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### Compiled language example

This example is similar to the previous example, however this time the repository has code in C/C++, C#, or Java. To create a {% data variables.product.prodname_codeql %} database for these languages, the CLI needs to monitor the build. At the end of the initialization process, the runner reports the command you need to set up the environment before building the code. You need to run this command, before calling the normal CI build process, and then running the `analyze` command.

1. Check out the repository to analyze.
1. Move into the directory where the repository is checked out.
1. Initialize the {% data variables.product.prodname_codeql_runner %} and create {% data variables.product.prodname_codeql %} databases for the languages detected.
{% if currentVersion ver_lt "enterprise-server@3.1" %}
 ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
 ```
{% else %}
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
{% endif %}
1. Source the script generated by the `init` action to set up the environment to monitor the build. Note the leading dot and space in the following code snippet.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Build the code. On macOS, you need to prefix the build command with the environment variable `$CODEQL_RUNNER`. For more information, see "[Troubleshooting {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)."

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Note:** If you use a containerized build, you need to run the {% data variables.product.prodname_codeql_runner %} in the container where your build task takes place.

{% endnote %}

## Further reading

- "[Configuring {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)"
- "[Troubleshooting {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)"
