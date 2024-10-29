---
title: Using GitHub CLI extensions
intro: 'Learn how to use custom extensions written by other {% data variables.product.prodname_cli %} users.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - CLI
---

## About {% data variables.product.prodname_cli %} extensions

{% note %}

**Note:** Extensions outside of {% data variables.product.product_name %} and {% data variables.product.prodname_cli %} are not certified by {% data variables.product.product_name %} and are governed by separate terms of service, privacy policy, and support documentation. To mitigate risk when using third-party extensions, audit the source code of the extension before installing or updating the extension.

{% endnote %}

{% data reusables.cli.cli-extensions %} For more information about how to create {% data variables.product.prodname_cli %} extensions, see "[AUTOTITLE](/github-cli/github-cli/creating-github-cli-extensions)."

Extensions are locally installed and are scoped to the user. Therefore, if you access {% data variables.product.prodname_cli %} from a different machine or another user accesses {% data variables.product.prodname_cli %} from the same machine, the extension will not be available.

## Finding extensions

You can find extensions by browsing [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).

## Installing extensions

To install an extension, use the `extensions install` subcommand. Replace the `repo` parameter with the repository of the extension. You can use the full URL, such as `https://github.com/octocat/gh-whoami`, or just the owner and repository, such as `octocat/gh-whoami`.

If the owner and repository are used, `gh` will install the extension using the hostname to which `gh` is currently authenticated. The full URL format is useful when installing extensions from a different host. For example, users on {% data variables.product.prodname_ghe_server %} should use the full repository URL to install extensions from {% data variables.product.prodname_dotcom_the_website %} or any other host.

To install an extension in development from the current directory, use `.` as the value for the `repo` parameter.

```shell
gh extension install REPO
```

If you already have an extension by the same name installed, the command will fail. For example, if you have installed `octocat/gh-whoami`, you must uninstall it before installing `hubot/gh-whoami`.

## Running an extension

When you have installed an extension, you run the extension as you would run a native {% data variables.product.prodname_cli %} command, using `gh EXTENSION-NAME`. The `EXTENSION-NAME` is the name of the repository that contains the extension, minus the `gh-` prefix.

For example, if you installed the extension from the `octocat/gh-whoami` repository, you would run the extension with the following command.

``` shell
gh whoami
```

You can usually find specific information about how to use an extension in the README of the repository that contains the extension.

## Viewing installed extensions

To view all installed extensions, use the `extensions list` subcommand. The output will also tell you which extensions have updates available.

```shell
gh extension list
```

## Updating extensions

To update an extension, use the `extensions upgrade` subcommand. Replace the `extension` parameter with the name of the extension.

```shell
gh extension upgrade EXTENSION
```

To update all installed extensions, use the `--all` flag.

```shell
gh extension upgrade --all
```

## Uninstalling extensions

To uninstall an extension, use the `extensions remove` subcommand. Replace the `extension` parameter with the name of the extension.

```shell
gh extension remove EXTENSION
```
