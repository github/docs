---
title: GitHub CLI 引用
intro: '您可以在终端或 {% data variables.product.prodname_cli %} 手册中查看所有 {% data variables.product.prodname_cli %} 命令。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: reference
ms.openlocfilehash: 1da9b2ffe79af2c432a4dfc79f944f8656663733
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066718'
---
要查看所有顶级 {% data variables.product.prodname_cli %} 命令，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh)或不带参数调用 `gh`。

```shell
gh
```

要列出特定组下的所有命令，请使用不带参数的顶层命令。 例如，列出 [用于管理存储库的命令](https://cli.github.com/manual/gh_repo)：

```shell
gh repo
```

要查看可与 {% data variables.product.prodname_cli %} 一起使用的环境变量，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_help_environment)或使用 `environment` 命令。

```shell
gh environment
```

要查看可与 {% data variables.product.prodname_cli %} 一起使用的配置设置，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_config)或使用 `config` 命令。

```shell
gh config
```
