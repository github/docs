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
---

## 关于代码空间网络

默认情况下，您的代码空间有权访问公共 Internet 上的所有资源，包括包管理器、许可证服务器、数据库和云平台 API，但它们无权访问专用网络上的资源。

## 连接到专用网络上的资源

当前支持的访问专用网络上资源的方法是使用 VPN。 目前不建议允许列表代码空间 IP，因为这将允许所有代码空间（包括您和其他客户的代码空间）访问受保护的网络资源。

### 使用 VPN 访问专用网络后面的资源

要访问专用网络后面的资源，最简单方法是从代码空间内通过 VPN 进入该网络。

我们建议使用 [OpenVPN](https://openvpn.net/) 等 VPN工具访问专用网络上的资源。 更多信息请参阅“[从 GitHub Codespaces 使用 OpenVPN 客户端](https://github.com/codespaces-contrib/codespaces-openvpn)”。

还有一些第三方解决方案虽然没有得到 {% data variables.product.prodname_dotcom %} 的明确认可，但提供了如何与 {% data variables.product.prodname_codespaces %} 集成的示例。

这些第三方解决方案包括：

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### 将代码空间的私有资源列入允许列表

虽然 {% data variables.product.prodname_dotcom %} 在其 Meta API 上发布多个产品的 IP 范围，但代码空间 IP 是动态分配的，这意味着您的代码空间不能保证每天具有相同的 IP 地址。 我们强烈建议用户不要允许列出整个 IP 范围，因为这样用户能够过于宽泛地访问所有代码空间（包括与您的代码空间无关的用户）。

有关 Meta API 的详细信息，请参阅“[ Meta](/rest/reference/meta)”。

## 限制对公共互联网的访问

目前，没有办法限制代码空间访问公共互联网，或者限制经过适当身份验证的用户访问转发端口。

For more information on how to secure your codespaces, see "[Security in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)."
