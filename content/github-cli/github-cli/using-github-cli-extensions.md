---
title: Using GitHub CLI extensions
intro: 'Learn how to use custom extensions written by other {% data variables.product.prodname_cli %} users.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
---

## About {% data variables.product.prodname_cli %} extensions

{% note %}

**Note:** Extensions outside of {% data variables.product.product_name %} and {% data variables.product.prodname_cli %} are not certified by {% data variables.product.product_name %} and are governed by separate terms of service, privacy policy, and support documentation. To mitigate risk when using third-party extensions, audit the source code of the extension before installing or updating the extension.

{% endnote %}

{% data reusables.cli.cli-extensions %} For more information about how to create {% data variables.product.prodname_cli %} extensions, see "[Creating {% data variables.product.prodname_cli %} extensions](/github-cli/github-cli/creating-github-cli-extensions)."

Extensions are locally installed and are scoped to the user. Therefore, if you access {% data variables.product.prodname_cli %} from a different machine or another user accesses {% data variables.product.prodname_cli %} from the same machine, the extension will not be available.

## Finding extensions

You can find extensions by browsing [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).

## Installing extensions

To install an extension, use the `extensions install` subcommand. Replace the `owner/repo` parameter with the name of the extension, such as `octocat/gh-whoami`.{% ifversion ghes %} If the extension is on {% data variables.product.prodname_ghe_server %}, also include the hostname, such as `https://ghe.io/octocat/gh-whoami`.{% endif %}

```shell
gh extension install <em>owner/repo</em>
```

If you already have an extension by the same name installed, the command will fail. For example, if you have installed `octocat/gh-whoami`, you must uninstall it before installing `hubot/gh-whoami`.

## Viewing installed extensions

To view all installed extensions, use the `extensions list` subcommand. The output will also tell you which extensions have updates available.

```shell
gh extension list
```

## Updating extensions

To update an extension, use the `extensions upgrade` subcommand. Replace the `extension` parameter with the name of the extension.

```shell
gh extension upgrade <em>extension</em>
```

To update all installed extensions, use the `--all` flag.

```shell
gh extension upgrade --all
```

## Uninstalling extensions

To uninstall an extension, use the `extensions remove` subcommand. Replace the `extension` parameter with the name of the extension.

```shell
gh extension remove <em>extension</em>
```
