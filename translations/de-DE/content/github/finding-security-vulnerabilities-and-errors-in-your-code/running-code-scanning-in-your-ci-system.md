---
title: Running code scanning in your CI system
shortTitle: Running in your CI
intro: 'If you use a third-party continuous integration system, you can integrate {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} into this system using the {% data variables.product.prodname_codeql_runner %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Informationen zu {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)."

You can use the {% data variables.product.prodname_codeql_runner %} to run {% data variables.product.prodname_code_scanning %} on code that you're processing in a third-party continuous integration (CI) system. Alternatively, you can use {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.product_location %}. For information, see "[Enabling {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)."

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that runs {% data variables.product.prodname_codeql %} analysis on a checkout of a {% data variables.product.prodname_dotcom %} repository. You add the runner to your third-party system, then call the runner to analyze code and upload the results to {% data variables.product.product_location %}. These results are displayed as {% data variables.product.prodname_code_scanning %} alerts in the repository.

{% data reusables.code-scanning.codeql-runner-license %}

### Downloading the {% data variables.product.prodname_codeql_runner %}

You can download the {% data variables.product.prodname_codeql_runner %} from https://github.com/github/codeql-action/releases. On some operating systems, you may need to change permissions for the downloaded file before you can run it.

On Linux:

```shell
chmod +x codeql-runner-linux
```

On MacOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

### Adding the {% data variables.product.prodname_codeql_runner %} to your CI system

Once you have downloaded the {% data variables.product.prodname_codeql_runner %} and verified that it can be executed, you should make the runner available to each CI server that you intend to use for {% data variables.product.prodname_code_scanning %}. In addition to this, each CI server also needs:

- A {% data variables.product.prodname_github_apps %} or personal access token for the {% data variables.product.prodname_codeql_runner %} to use. For private repositories  the token must have the `repo` scope. For public the token needs only the `public_repo` and `repo:security_events` scopes. For information, see "[Building {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" and "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."
- Access to the {% data variables.product.prodname_codeql %} bundle associated with this release of the {% data variables.product.prodname_codeql_runner %}. This package contains the {% data variables.product.prodname_codeql %} CLI, queries, and libraries needed for {% data variables.product.prodname_codeql %} analysis. For information, see "[{% data variables.product.prodname_codeql %} CLI](https://help.semmle.com/codeql/codeql-cli.html)."

The options for providing access to the {% data variables.product.prodname_codeql %} bundle are:

1. Allow the CI servers access to {% data variables.product.prodname_dotcom_the_website %} so that the {% data variables.product.prodname_codeql_runner %} can download the bundle automatically.
1. Manually download/extract the bundle, store it with other central resources, and use the `--codeql-path` flag to specify the location of the bundle in calls to initialize the {% data variables.product.prodname_codeql_runner %}.
{% if currentVersion != "free-pro-team@latest" %}
1. You can mirror the `github/codeql-action` repository on {% data variables.product.product_location %}. Unless you specify the <nobr>`--codeql-path`</nobr> flag, the runner automatically checks for the bundle in this location and on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}

### Calling the {% data variables.product.prodname_codeql_runner %}

You should call the {% data variables.product.prodname_codeql_runner %} from the checkout location of the repository you want to analyze. The two main commands are:

1. `init` required to initialize the runner and create a {% data variables.product.prodname_codeql %} database for each language to be analyzed. These databases are populated and analyzed by subsequent commands.
1. `analyze` required to populate the {% data variables.product.prodname_codeql %} databases, analyze them, and upload results to {% data variables.product.product_location %}.

For both commands, you must specify the URL of {% data variables.product.product_location %}, the repository *OWNER/NAME*, and the GitHub Apps or personal access token to use for authentication. You also need to specify the location of the CodeQL bundle unless the CI server has access to download it directly from the `github/codeql-action` repository on {% data variables.product.prodname_dotcom_the_website %}{% if currentVersion != "free-pro-team@latest" %} or mirrored on {% data variables.product.product_location %}{% endif %}.

You can configure where the {% data variables.product.prodname_codeql_runner %} stores the CodeQL bundle for future analysis on a server using the <nobr>`--tools-dir`</nobr> flag and where it stores temporary files during analysis using <nobr>`--temp-dir`</nobr>.

To view the command-line reference for the runner, use the `-h` flag. For example, to list all commands run: `codeql-runner-OS -h`, or to list all the flags available for the `init` command run: `codeql-runner-OS init -h` (where `OS` varies according to the executable that you are using). For more information, see "[{% data variables.product.prodname_codeql_runner %} command reference](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system#codeql-runner-command-reference)."

#### Basic example

This example runs {% data variables.product.prodname_codeql %} analysis on a Linux CI server for the `octo-org/example-repo` repository hosted on `{% data variables.command_line.git_url_example %}`. The process is very simple because the repository contains only languages that can be analyzed by {% data variables.product.prodname_codeql %} directly, without being built (that is, Go, JavaScript, Python, and TypeScript).

1. Check out the repository to analyze.
1. Move into the directory where the repository is checked out.
1. Initialize the {% data variables.product.prodname_codeql_runner %} and create {% data variables.product.prodname_codeql %} databases for the languages detected.

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

1. Populate the {% data variables.product.prodname_codeql_runner %} databases, analyze them, and upload the results to {% data variables.product.product_name %}.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/main
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

The server has access to download the {% data variables.product.prodname_codeql %} bundle directly from the `github/codeql-action` repository on {% data variables.product.prodname_dotcom_the_website %}{% if currentVersion != "free-pro-team@latest" %} or mirrored on {% data variables.product.product_location %}{% endif %}, so there is no need to use the `--codeql-path` flag. When the analysis is complete, the {% data variables.product.prodname_codeql_runner %} uploads the results to the {% data variables.product.prodname_code_scanning %} view. Weitere Informationen findest Du unter „[Warnungen von {% data variables.product.prodname_code_scanning %} verwalten](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)."

#### Compiled language example

This example is similar to the previous example, however this time the repository has code in C/C++, C#, or Java. To create a {% data variables.product.prodname_codeql %} database for these languages, the CLI needs to trace the build. At the end of the initialization process, the runner reports the command you need to set up the environment before building the code. You need to run this command, before calling the normal CI build process, and then running the `analyze` command.

1. Check out the repository to analyze.
1. Move into the directory where the repository is checked out.
1. Initialize the {% data variables.product.prodname_codeql_runner %} and create {% data variables.product.prodname_codeql %} databases for the languages detected.

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so the build can be traced, for example by running "
      . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      ```

1. Run the script generated by the `init` action to set up the environment to trace the build.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Build the code.
1. Populate the {% data variables.product.prodname_codeql %} databases, analyze them, and upload the results to GitHub.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit ae7b655ef30b50fb726ae7b3daa79571a39d194d --ref refs/heads/main
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo-2/code-scanning/sarifs - 202 in 573ms
    > Successfully uploaded results
    ```

{% note %}

**Note:** If you use a containerized build, you need to run the {% data variables.product.prodname_codeql_runner %} in the container where your build task takes place.

{% endnote %}

### Weiterführende Informationen

- "[Configuring code scanning in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system)"
- "[Troubleshooting code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)"
