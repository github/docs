---
title: 配置与实例的 SSH 连接
shortTitle: Configure SSH connections
intro: '可以通过配置客户端可用于建立连接的 SSH 算法来提高 {% data variables.product.product_location %} 的安全性。'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
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
ms.openlocfilehash: cf884172028d5419a0cf5287b4a108ee7ca52c12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409759'
---
## 关于与实例的 SSH 连接

{% data reusables.enterprise.about-ssh-ports %}

若要在你的环境中容纳 SSH 客户端，可以配置 {% data variables.product.product_location %} 将接受的连接类型。

## 使用 RSA 密钥配置 SSH 连接

当用户通过端口 22 借助 SSH 在 {% data variables.product.product_location %} 上执行 Git 操作时，客户端可以使用 RSA 密钥进行身份验证。 客户端可以使用 SHA-1 哈希函数对尝试进行签名。 在此上下文中，SHA-1 哈希函数不再安全。 有关详细信息，请参阅维基百科上的 [SHA-1](https://en.wikipedia.org/wiki/SHA-1)。

默认情况下{% ifversion ghes < 3.7 %}，在 {% data variables.product.product_name %} 3.6 及更高版本上{% endif %}，同时满足以下两个条件的 SSH 连接将失败。

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

可以调整截止日期。 如果用户在截止日期之前上传了 RSA 密钥，只要密钥保持有效，客户端便可以继续使用 SHA-1 成功连接。 或者，如果客户端使用 SHA-1 哈希函数对连接进行签名，你可以拒绝所有使用 RSA 密钥进行身份验证的 SSH 连接。

无论你为实例选择何种设置，客户端都可以继续使用任何使用 SHA-2 哈希函数签名的 RSA 密钥进行连接。

若使用 SSH 证书颁发机构，如果证书的 `valid_after` 日期晚于截止日期，则连接将失败。 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。

有关详细信息，请参阅 [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server)。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 使用 `ghe-find-insecure-git-operations` 实用工具审核实例的日志以查找使用不安全算法或哈希函数的连接。 有关详细信息，请参阅“[命令行实用工具](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)”。
1. 若要配置一个截止日期，在该截止日期之后，{% data variables.product.product_location %} 将拒绝来自使用该日期之后上传的 RSA 密钥的客户端的连接（如果连接由 SHA-1 哈希函数签名），请输入以下命令。 将 RFC-3399-UTC-TIMESTAMP 替换为有效的 RFC 3399 UTC 时间戳。 例如，默认值 2022 年 8 月 1 日将表示为 `2022-08-01T00:00:00Z`。 有关详细信息，请参阅 IETF 网站上的 [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)。

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 <em>RFC-3339-UTC-TIMESTAMP</em>
   </pre>
1. 或者，若要完全禁用使用由 SHA-1 哈希函数签名的 RSA 密钥的 SSH 连接，请输入以下命令。

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
