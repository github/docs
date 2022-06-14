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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_dotcom %} 托管的运行器联网

默认情况下，{% data variables.product.prodname_dotcom %} 托管的运行器可以访问公共互联网。 但是，您可能还希望这些运行器访问专用网络上的资源，例如程序包注册表、机密管理器或其他本地服务。

{% data variables.product.prodname_dotcom %} 托管的运行器在所有 {% data variables.product.prodname_dotcom %} 客户之间共享，因此您需要一种方法，在运行器运行工作流程时，将您的专用网络仅连接到他们的运行器。 您可以采取几种不同的方法来配置此访问，每种方法都有不同的优点和缺点。

{% ifversion fpt or ghec or ghes > 3.4 %}
### 将 API 网关与 OIDC 配合使用

借助 {% data variables.product.prodname_actions %}，您可以使用 OpenID Connect (OIDC) 令牌在 {% data variables.product.prodname_actions %} 之外验证工作流程。 例如，您可以在专用网络的边缘运行 API 网关，该网关使用 OIDC 令牌对传入请求进行身份验证，然后代表专用网络中的工作流程发出 API 请求。

下图概述了此解决方案的架构：

![OIDC 网关的示意图](/assets/images/help/images/actions-oidc-gateway.png)

重要的是，您不仅要验证 OIDC 令牌来自 {% data variables.product.prodname_actions %}，还要特别验证它来自预期的工作流程，以便其他 {% data variables.product.prodname_actions %} 用户无法访问您的专用网络中的服务。 您可以使用 OIDC 声明来创建这些条件。 更多信息请参阅“[使用 OIDC 声明定义云角色上的信任条件](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)”。

此方法的主要缺点是您必须实现 API 网关以代表您发出请求，并在网络边界运行它。

但也有各种优点：
- 您无需配置任何防火墙，也无需修改专用网络的路由。
- API 网关是无状态的，因此可以水平扩展以处理高可用性和高吞吐量。

更多信息请参阅 [API Gateway 的参考实现](https://github.com/github/actions-oidc-gateway-example)（请注意，这需要针对您的使用情况进行自定义，并且不能按原样运行）和[关于使用 OpenID Connect 进行安全强化](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”。
{% endif %}

### 使用 WireGuard 创建网络覆盖

如果您不想为 API Gateway 维护单独的基础设施，则可以通过在两个地方运行 WireGuard，在运行器和专用网络中的服务之间创建一个覆盖网络。

这种方法有几个缺点：

- 要访问在专用服务上运行的 WireGuard，需要工作流程可以引用的已知 IP 地址和端口：这可以是公共 IP 地址和端口、网络网关上的端口映射或动态更新 DNS 的服务。
- WireGuard 不会开箱即用地处理 NAT 遍历，因此您需要确定一种提供此服务的方法。
- 这种连接是一对一的，因此，如果需要高可用性或高吞吐量，则需要在WireGuard 之上构建它。
- 您需要为运行器和私有服务生成并安全地存储密钥。 WireGuard 使用 UDP，因此您的网络必须支持 UDP 流量。

还有一些优点，因为您可以在现有的服务器上运行 WireGuard，所以你不必维护单独的基础设施，而且它在 {% data variables.product.prodname_dotcom %} 托管的运行器上得到了很好的支持。

### 示例：配置 WireGuard

此示例工作流程将 WireGuard 配置为连接到专用服务。

对于此示例，在专用网络中运行的 WireGuard 实例具有以下配置：
- `192.168.1.1` 的覆盖网络 IP 地址
- `1.2.3.4:56789` 的公共 IP 地址和端口
- 公钥 `examplepubkey1234...`

{% data variables.product.prodname_actions %} 运行器中的 WireGuard 实例具有以下配置：
- `192.168.1.2` 的覆盖网络 IP 地址
- 私钥作为 {% data variables.product.prodname_actions %} 机密存储在 `WIREGUARD_PRIVATE_KEY`下

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

有关更多信息，请参阅 [WireGuard 快速入门](https://www.wireguard.com/quickstart/)，以及“[加密机密](/actions/security-guides/encrypted-secrets)”了解如何安全存储密钥。

### 使用 Tailscale 创建网络叠加

Tailscale 是建立在 WireGuard 之上的商业产品。 此选项与 WireGuard 非常相似，除了 Tailscale 更像是完整的产品体验，而不是开源组件。

它的缺点与 WireGuard 类似：连接是一对一的，因此您可能需要执行额外的工作以实现高可用性或高吞吐量。 您仍然需要生成并安全地存储密钥。 该协议仍然是 UDP，因此您的网络必须支持 UDP 流量。

但与 WireGuard 相比有一些优势：NAT 遍历是内置的，因此您无需向公共互联网公开端口。 到目前为止，它是这些选项中启动和运行最快的选项，因为 Tailscale 提供 {% data variables.product.prodname_actions %} 工作流程，只需一步即可连接到覆盖网络。

更多信息请参阅 [Tailscale GitHub Action](https://github.com/tailscale/github-action)，以及参阅“[加密机密](/actions/security-guides/encrypted-secrets)”，了解如何安全存储密钥。
