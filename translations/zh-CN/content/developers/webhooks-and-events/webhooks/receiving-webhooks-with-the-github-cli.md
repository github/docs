---
title: 使用 GitHub CLI 接收 Webhook
intro: '可以使用 {% data variables.product.prodname_cli %} 在开发环境中测试 Webhook，而无需端口转发或第三方工具的复杂性。'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 2772a9d4208d0afe77871255ad6510b7f39de8d5
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132961'
---
## 关于使用 {% data variables.product.prodname_cli %} 接收 Webhook

{% note %}

注意：使用 {% data variables.product.prodname_cli %} 接收 Webhook 目前为受限公共 beta 版本，可能发生更改。 若要注册 beta 版本，请回复我们的 GitHub 社区[讨论](https://github.com/orgs/community/discussions/38261)。 可能不会立即将你添加到其中。 添加到 beta 版本后，你将收到电子邮件通知。

{% endnote %}

更改集成代码时，在本地环境中运行代码可以快速测试和迭代，而无需部署代码。 可以使用 {% data variables.product.prodname_cli %} 将 Webhook 转发到本地环境。

{% note %}

注意：{% data variables.product.prodname_cli %} 中的 Webhook 转发仅适用于存储库和组织 Webhook。 如果要在本地测试赞助、GitHub 应用、企业或市场 Webhook，则需要手动完成。 有关详细信息，请参阅“[创建 Webhook](/developers/webhooks-and-events/webhooks/creating-webhooks)”。

{% endnote %}

## 使用 {% data variables.product.prodname_cli %} 接收 Webhook

{% data reusables.cli.cli-learn-more %}

1. 若要安装 {% data variables.product.prodname_cli %} 扩展以启用 Webhook 转发，请使用 `extension install` 子命令。 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. 在本地启动应用程序，并记下希望接收 Webhook 的 URL。 本指南假定应用程序正在侦听 `http://localhost:3000/webhook` 中的 Webhook 事件。

1. 若要设置要传递到应用程序的 Webhook，请运行 `webhook forward` 子命令。 将 `REPOSITORY` 替换为存储库的名称。 例如，`monalisa/octocat`。 将 `EVENTS` 替换为要接收的事件的逗号分隔列表。 例如，`issues,pull_request`。 将 `URL` 替换为应用程序希望接收 Webhook 的本地 URL。 例如，`"http://localhost:3000/webhook"`。  若要侦听组织 Webhook 而不是存储库 Webhook，请将 `--repo` 标志替换为 `--org` 标志。 例如，`--org="octo-org"`。


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  让命令在后台运行。 它将接收指定存储库的所有指定事件，并将其转发到在指定 URL 处运行的 Webhook 处理程序。
