---
title: 使用 GitHub CLI 扩展
intro: '了解如何使用其他 {% data variables.product.prodname_cli %} 用户编写的自定义扩展。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
---

## 关于 {% data variables.product.prodname_cli %} 扩展

{% note %}

**注意： {% data variables.product.product_name %} 和 {% data variables.product.prodname_cli %} 以外的** 扩展未经 {% data variables.product.product_name %} 认证，并受单独的服务条款、隐私政策和支持文档的约束。 要在使用第三方扩展时降低风险，请在安装或更新扩展之前审核扩展的源代码。

{% endnote %}

{% data reusables.cli.cli-extensions %} 有关如何创建 {% data variables.product.prodname_cli %} 扩展的详细信息，请参阅“[创建 {% data variables.product.prodname_cli %} 扩展](/github-cli/github-cli/creating-github-cli-extensions)”。

扩展在本地安装，范围限定为用户。 因此，如果您从另一台计算机访问 {% data variables.product.prodname_cli %} ，或者其他用户从同一台计算机访问 {% data variables.product.prodname_cli %} ，则该扩展将不可用。

## 查找扩展

您可以通过浏览[具有 `gh-extension` 主题的存储库](https://github.com/topics/gh-extension)来查找扩展。

## 安装扩展

要安装扩展，请使用 `extensions install` 子命令。 将 `repo` 参数替换为扩展的存储库。 You can use the full URL, such as `https://github.com/octocat/gh-whoami`, or just the owner and repository, such as `octocat/gh-whoami`.

If the owner and repository are used, `gh` will install the extension using the hostname to which `gh` is currently authenticated. The full URL format is useful when installing extensions from a different host. For example, users on {% data variables.product.prodname_ghe_server %} should use the full repository URL to install extensions from {% data variables.product.prodname_dotcom_the_website %} or any other host.

To install an extension in development from the current directory, use `.` as the value for the `repo` parameter.

```shell
gh extension install <em>repo</em>
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
