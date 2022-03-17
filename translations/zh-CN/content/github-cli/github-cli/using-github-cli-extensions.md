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

要安装扩展，请使用 `extensions install` 子命令。 将 `repo` 参数替换为扩展的存储库。 您可以使用完整的URL，例如 `https://github.com/octocat/gh-whoami`，也可以仅使用所有者和存储库，例如 `octocat/gh-whoami`。

如果使用所有者和存储库，`gh` 将使用当前向 `gh` 验证的主机名安装扩展。 从其他主机安装扩展时，完整的 URL 格式非常有用。 例如， {% data variables.product.prodname_ghe_server %} 上的用户应使用完整存储库 URL 从 {% data variables.product.prodname_dotcom_the_website %} 或任何其他主机安装扩展。

要从当前目录安装开发中的扩展，请使用 `.` 作为 `repo` 参数的值。

```shell
gh extension install <em>repo</em>
```

如果已安装同名的扩展，则该命令将失败。 例如，如果您已经安装了 `octocat/gh-whoami`，则必须先将其卸载，然后再安装 `hubot/gh-whoami`。

## 查看已安装的扩展

要查看所有已安装的扩展，请使用 `extensions list` 子命令。 输出还将告诉您哪些扩展具有可用的更新。

```shell
gh extension list
```

## 更新扩展

要更新扩展，请使用 `extensions upgrade` 子命令。 将 `extension` 参数替换为扩展的名称。

```shell
gh extension upgrade <em>extension</em>
```

要更新所有已安装的扩展，请使用 `--all` 标志。

```shell
gh extension upgrade --all
```

## 卸载扩展

要卸载扩展，请使用 `extensions remove` 子命令。 将 `extension` 参数替换为扩展的名称。

```shell
gh extension remove <em>extension</em>
```
