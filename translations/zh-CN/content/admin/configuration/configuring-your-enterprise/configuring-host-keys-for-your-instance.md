---
title: 为实例配置主机密钥
shortTitle: Configure host keys
intro: '可通过配置实例用来为传入 SSH 连接生成和播发主机密钥的算法，来提高 {% data variables.location.product_location %} 的安全性。'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107107'
---
## 关于实例的主机密钥

接受 SSH 连接的服务器将播发一个或多个加密主机密钥，以安全地识别 SSH 客户端的服务器。 为了在连接初始化期间确认服务器的标识，客户端会存储并验证主机密钥。 有关详细信息，请参阅 SSH Academy 网站上的 [SSH 主机密钥 - 内容、原因、方法](https://ssh.com/academy/ssh/host-key)。

{% data reusables.enterprise.about-ssh-ports %}

默认情况下，{% data variables.location.product_location %} 使用 OpenSSH 样式的主机密钥轮换来生成和播发主机密钥。 若要在环境中提高 SSH 的安全性，可以启用其他算法来生成主机密钥。

{% note %}

注意：如果启用其他主机密钥算法，则不使用 OpenSSH 进行 SSH 连接的客户端可能会在连接过程中遇到警告，或者无法完全连接。 一些 SSH 实现可以忽略不受支持的算法并退回到其他算法。 如果客户端不支持回退操作，连接将失败。 例如，适用于 Go 的 SSH 库不支持回退到其他算法。

{% endnote %}

## 管理 Ed25519 主机密钥

若要提高连接到 {% data variables.location.product_location %} 的客户端的安全性，可以启用 Ed25519 主机密钥的生成和播发。 Ed25519 可在不降低速度的情况免受对一些针对旧版签名算法的攻击。 旧版 SSH 客户端可能不支持 Ed25519。 默认情况下，{% data variables.product.product_name %} 实例不会生成或播发 Ed25519 主机密钥。 有关详细信息，请参阅 [Ed25519 网站](https://ed25519.cr.yp.to)。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 要启用 Ed25519 主机密钥的生成和播发，请输入以下命令。

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. （可选）输入以下命令以禁用 Ed25519 主机密钥的生成和播发。

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
