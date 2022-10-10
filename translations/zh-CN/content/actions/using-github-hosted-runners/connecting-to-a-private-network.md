---
title: 连接到专用网络
intro: '可以将 {% data variables.product.prodname_dotcom %} 托管的运行器连接到专用网络上的资源，包括包注册表、机密管理器和其他本地服务。'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: 2a74b149596e0158cdc6b5e40508b1d4a54eb8e6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884267'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_dotcom %} 托管的运行器网络

默认情况下，{% data variables.product.prodname_dotcom %} 托管的运行器有权访问公共 Internet。 但是，你可能还希望这些运行器访问专用网络上的资源，例如包注册表、机密管理器或其他本地服务。 

{% data variables.product.prodname_dotcom %} 托管的运行器在所有 {% data variables.product.prodname_dotcom %} 客户之间共享，因此，你需要一种方法，在运行器运行你的工作流时，将你的专用网络仅连接到它们。 可以采用几种不同的方法来配置此访问，每个方法都有不同的优缺点。

{% ifversion fpt or ghec or ghes > 3.4 %}
### 将 API 网关与 OIDC 配合使用

借助 {% data variables.product.prodname_actions %}，可以使用 OpenID Connect (OIDC) 令牌对 {% data variables.product.prodname_actions %} 之外的工作流进行身份验证。 例如，可以在专用网络的边缘运行 API 网关，该网关使用 OIDC 令牌对传入请求进行身份验证，然后代表专用网络中的工作流发出 API 请求。

下图概述了此解决方案的体系结构：

![OIDC 网关示意图](/assets/images/help/images/actions-oidc-gateway.png)

重要的是，不仅要验证 OIDC 令牌来自 {% data variables.product.prodname_actions %}，而且还要验证它专门来自你预期的工作流，以便其他 {% data variables.product.prodname_actions %} 用户无法访问专用网络中的服务。 可以使用 OIDC 声明创建这些条件。 有关详细信息，请参阅“[使用 OIDC 声明定义云角色的信任条件](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)”。

这种方法的主要缺点是，必须实现 API 网关来代表你发出请求，并在网络边缘运行它。

但也有很多优点：
- 无需配置任何防火墙，也无需修改专用网络的路由。 
- API 网关是无状态的，因此可以水平缩放以处理高可用性和高吞吐量。

有关详细信息，请参阅 [API 网关的参考实现](https://github.com/github/actions-oidc-gateway-example)（请注意，这需要针对你的用例进行自定义，并且尚未准备好按原样运行）和“[关于使用 OpenID Connect 进行安全强化](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”。
{% endif %}

### 使用 WireGuard 创建网络覆盖

如果不想为 API 网关维护单独的基础结构，可以通过在专用网络的运行器和服务中运行 WireGuard，在这两者之间创建覆盖网络。

此方法有许多缺点： 

- 若要访问在专用服务上运行的 WireGuard，需要工作流可以引用的已知 IP 地址和端口：可以是公共 IP 地址和端口、网络网关上的端口映射，或者动态更新 DNS 的服务。 
- WireGuard 无法即时处理 NAT 遍历，因此需要确定一种提供此服务的方法。
- 此连接是一对一的，因此如果需要高可用性或高吞吐量，则需要在 WireGuard 之上构建它。 
- 需要为运行器和专用服务生成并安全地存储密钥。 WireGuard 使用 UDP，因此网络必须支持 UDP 流量。

也有一些优点，由于可以在现有服务器上运行 WireGuard，因此不必维护单独的基础结构，并且它在 {% data variables.product.prodname_dotcom %} 托管的运行器上得到了很好的支持。

### 示例：配置 WireGuard

此示例工作流将 WireGuard 配置为连接到专用服务。

对于此示例，在专用网络中运行的 WireGuard 实例具有以下配置：
- `192.168.1.1` 的覆盖网络 IP 地址
- `1.2.3.4:56789` 的公共 IP 地址和端口
- 公钥 `examplepubkey1234...`

{% data variables.product.prodname_actions %} 运行器中的 WireGuard 实例具有以下配置：
- `192.168.1.2` 的覆盖网络 IP 地址
- 私钥存储为 `WIREGUARD_PRIVATE_KEY` 下的 {% data variables.product.prodname_actions %} 机密

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

有关详细信息，请参阅 [WireGuard 的快速入门](https://www.wireguard.com/quickstart/)，以及有关如何安全存储密钥的“[加密机密](/actions/security-guides/encrypted-secrets)”。

### 使用 Tailscale 创建网络覆盖

Tailscale 是基于 WireGuard 构建的商业产品。 此选项与 WireGuard 非常相似，不同之处在于 Tailscale 更多的是完整的产品体验，而不是开源组件。

它的缺点与 WireGuard 类似：连接是一对一的，因此可能需要执行额外的操作以实现高可用性或高吞吐量。 你仍然需要生成并安全地存储密钥。 协议仍然是 UDP，因此网络必须支持 UDP 流量。

但是，与 WireGuard 相比，它也有一些优势：NAT 遍历是内置的，因此无需向公共 Internet 公开端口。 这是迄今为止启动和运行最快的选项，因为 Tailscale 提供了一个 {% data variables.product.prodname_actions %} 工作流，只需一步即可连接到覆盖网络。

有关详细信息，请参阅 [Tailscale GitHub 操作](https://github.com/tailscale/github-action)以及“[加密机密](/actions/security-guides/encrypted-secrets)”以了解如何安全地存储密钥。
