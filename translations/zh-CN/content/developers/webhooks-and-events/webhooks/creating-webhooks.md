---
title: 创建 web 挂钩
intro: '了解如何构建 web 挂钩，选择 web 挂钩将在 {% data variables.product.prodname_dotcom %} 上侦听的事件，以及如何设置服务器以接收和管理 web 挂钩负载。'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: f07c5de7acd3c5be5236765236d24a6938e3b91f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097984'
---
学完 [webhook 的基础知识][webhooks-overview]后，接下来了解如何生成自己的基于 webhook 的集成。 在本教程中，我们将创建一个仓库 web 挂钩，它将负责根据仓库每天收到的议题数量列出仓库的受欢迎程度。

创建 web 挂钩是一个两步过程。 首先需要设置 web 挂钩通过 {% data variables.product.product_name %} 实施的行为 - 它应该侦听哪些事件。 之后，您将设置服务器以接收和管理有效负载。


{% data reusables.webhooks.webhooks-rest-api-links %}

## 向互联网显示本地主机

在本教程中，我们将使用本地服务器接收来自 {% data variables.product.prodname_dotcom %} 的消息。 因此，首先，我们需要将我们的本地发展环境显示给互联网。 我们将使用 ngrok 实现此目的。 所有主要操作系统均可免费使用 ngrok。 有关详细信息，请参阅 [`ngrok` 下载页面](https://ngrok.com/download)。

安装 `ngrok` 后，可以通过在命令行上运行 `./ngrok http 4567` 来公开本地主机。 4567 是我们服务器侦听消息的端口号。 您应该会看到如下所示的行：

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

记下 `*.ngrok.io` URL。 我们将用它来设置 web 挂钩。

## 设置 Webhook

您可以在组织或特定仓库上安装 web 挂钩。

要设置 web 挂钩，请转到仓库或组织的设置页面。 然后，依次单击“Webhook”和“添加 Webhook” 。

另外，你可以选择[使用 Webhook API][webhook-api] 生成和管理 Webhook。

Web 挂钩需要设置几个配置选项才能使用。 我们将在下面介绍所有这些设置。

## 有效负载 URL

{% data reusables.webhooks.payload_url %}

由于我们为本教程进行本地开发，因此将其设置为 `*.ngrok.io` URL，且后接 `/payload`。 例如 `http://7e9ea9dc.ngrok.io/payload`。

## 内容类型

{% data reusables.webhooks.content_type %} 对于本教程，默认的内容类型 `application/json` 适用。

## 机密

{% data reusables.webhooks.secret %}

## SSL 验证

{% data reusables.webhooks.webhooks_ssl %}

## 活动

默认情况下，web 挂钩交付为“Active（激活）”。 您可以通过取消选择“Active（激活）”来选择禁用 web 挂钩交付。

## 事件

事件是 web 挂钩的核心。 当仓库上发生特定操作时，就会触发这些 web 挂钩，而服务器的有效负载 URL 会截获它们并采取行动。

可在 [webhook API][hooks-api] 参考中找到完整的 webhook 事件列表及其执行时间。

由于 webhook 正在处理存储库中的问题，因此单击“选择单个事件”，然后单击“问题” 。 请确保选择“可用”以接收触发的 Webhook 的问题事件。 您还可以使用默认选项选择所有事件。

完成后，单击“添加 Webhook”。 

现在您创建了 web 挂钩，是时候设置我们的本地服务器来测试 web 挂钩了。 转到[配置服务器](/webhooks/configuring/)，了解如何实现这一目标。

### 通配符事件

要为所有事件配置 webhook，请使用通配符 (`*`) 指定 webhook 事件。 添加通配符事件时，我们将用通配符事件替换您配置的任何现有事件，并向您发送所有受支持事件的有效负载。 您还会自动获取我们可能在将来添加的任何新事件。

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
