---
title: 关于 GitHub 的 IP 地址
intro: '{% data variables.product.product_name %} 可服务于多个 IP 地址范围的应用程序，使用 API 可获取地址。'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist
  - /categories/73/articles
  - /categories/administration
  - /articles/github-s-ip-addresses
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: GitHub's IP addresses
ms.openlocfilehash: ab598fa408512a43ab07c069119480b5ae03278e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099888'
---
可从 [meta](https://api.github.com/meta) API 终结点检索 {% data variables.product.prodname_dotcom %} 的 IP 地址列表。 有关详细信息，请参阅“[Meta](/rest/reference/meta)”。

{% note %}

注意：Meta API 返回的 {% data variables.product.prodname_dotcom %} IP 地址列表并非详尽无遗。 例如，某些 {% data variables.product.prodname_dotcom %} 服务的 IP 地址可能不会列出，例如 LFS 或 {% data variables.product.prodname_registry %}。

{% endnote %}

{% data variables.product.prodname_dotcom %} 使用这些 IP 地址来提供我们的内容、提供 web 挂钩以及执行托管的 {% data variables.product.prodname_actions %} 构建。

这些范围采用 [CIDR 表示法](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)。 可使用在线转换工具将 CIDR 表示法转换为 IP 地址范围，例如：[“将 CIDR 转换为 IPv4”站点](https://www.ipaddressguide.com/cidr)。

我们会不时更改我们的 IP 地址。 不建议按 IP 地址来创建允许名单，但如果您使用这些 IP 范围，强烈建议经常监控我们的 API。

要使应用程序正常运行，必须通过 `github.com` 的 IP 范围允许 TCP 端口 22、80、443 和 9418。

## 延伸阅读

- [排查连接问题](/articles/troubleshooting-connectivity-problems)
