---
title: 连接到专用网络
intro: '可以将 {% data variables.product.prodname_github_codespaces %} 连接到专用网络上的资源，包括包注册表、许可证服务器和本地数据库。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 80bf210d2090833e6057fcc89989170b1f68f2f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147546304'
---
## 关于代码空间网络

默认情况下，您的代码空间有权访问公共 Internet 上的所有资源，包括包管理器、许可证服务器、数据库和云平台 API，但它们无权访问专用网络上的资源。

## 连接到专用网络上的资源

目前，在 Codespaces 内访问专用网络上的资源有两种方法。
- 使用 {% data variables.product.prodname_cli %} 扩展将本地计算机配置为远程资源的网关。
- 使用 VPN。 

### 使用 GitHub CLI 扩展访问远程资源

{% note %}

注意：{% data variables.product.prodname_cli %} 扩展目前为 beta 版本，可能会有变动。 

{% endnote %}

可以使用 {% data variables.product.prodname_cli %} 扩展在 codespace 和本地计算机之间创建网桥，以便 codespace 可以访问可从计算机访问的任何远程资源。 codespace 使用本地计算机作为网络网关访问这些资源。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_cli %} 访问远程资源](https://github.com/github/gh-net#codespaces-network-bridge)”。

   
   

### 使用 VPN 访问专用网络后面的资源

作为 {% data variables.product.prodname_cli %} 扩展的替代方法，可以使用 VPN 从 codespace 内访问专用网络后面的资源。

建议使用 [OpenVPN](https://openvpn.net/) 等 VPN工具访问专用网络上的资源。 有关详细信息，请参阅“[从 GitHub Codespaces 使用 OpenVPN 客户端](https://github.com/codespaces-contrib/codespaces-openvpn)”。

还有一些第三方解决方案虽然没有得到 {% data variables.product.prodname_dotcom %} 的明确认可，但提供了如何与 {% data variables.product.prodname_codespaces %} 集成的示例。

这些第三方解决方案包括：

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### 将代码空间的私有资源列入允许列表

虽然 {% data variables.product.prodname_dotcom %} 在其 Meta API 上发布多个产品的 IP 范围，但代码空间 IP 是动态分配的，这意味着您的代码空间不能保证每天具有相同的 IP 地址。 我们强烈建议用户不要允许列出整个 IP 范围，因为这样用户能够过于宽泛地访问所有代码空间（包括与您的代码空间无关的用户）。

有关 Meta API 的详细信息，请参阅“[Meta](/rest/reference/meta)”。

## 限制对公共互联网的访问

目前，没有办法限制代码空间访问公共互联网，或者限制经过适当身份验证的用户访问转发端口。

有关如何保护 codespace 的详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 中的安全性](/codespaces/codespaces-reference/security-in-github-codespaces)”。
