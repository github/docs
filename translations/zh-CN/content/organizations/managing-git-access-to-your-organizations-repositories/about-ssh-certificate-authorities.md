---
title: 关于 SSH 认证中心
intro: 通过 SSH 认证中心，组织或企业帐户可提供 SSH 证书，供成员用来通过 Git 访问您的资源。
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH certificate authorities
ms.openlocfilehash: c4940399efa3c1e88c68224c421de7f43f7ea89b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061977'
---
## 关于 SSH 认证中心

SSH 证书是一种机制：一个 SSH 密钥对另一个 SSH 密钥签名。 如果使用 SSH 认证中心 (CA) 为组织成员提供已签名的 SSH 证书，您可以将 CA 添加到企业帐户或组织，以便组织成员使用其证书访问组织资源。 

{% data reusables.organizations.ssh-ca-ghec-only %}

在将 SSH CA 添加到组织或企业帐户后，您可以使用 CA 为组织成员签名客户 SSH 证书。 组织成员可以使用已签名的证书通过 Git 访问组织的仓库（并且只访问您组织的仓库）。 （可选）您可以要求成员使用 SSH 证书访问组织资源。 有关详细信息，请参阅“[管理组织的 SSH 证书颁发机构](/articles/managing-your-organizations-ssh-certificate-authorities)”和“[在企业中强制实施安全设置策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”。

例如，您可以构建内部系统，每天早上向开发者颁发新证书。 每个开发者可以使用其每日证书处理组织在 {% data variables.product.product_name %} 上的仓库。 在一天结束时，证书会自动到期，以保护仓库，避免证书以后被窃取。

{% ifversion ghec %} 即使实施了 SAML 单一登录，组织成员也可使用其签名的证书进行身份验证。 除非您将 SSH 证书设为要求，组织成员可继续使用其他验证方式通过 Git 访问组织的资源，包括他们的用户名和密码、个人访问令牌及其自己的 SSH 密钥。
{% endif %}

成员将无法使用其证书访问其个人帐户拥有的仓库的复刻。 

## 关于使用 SSH 证书的 SSH URL

如果您的组织需要 SSH 证书，为了防止身份验证错误，组织成员在通过 SSH 执行 Git 操作时应使用包含组织 ID 的特殊 URL。 此特殊 URL 允许客户端和服务器更轻松地协商应使用成员计算机上的哪个密钥进行身份验证。 如果成员使用以 `git@github.com` 开头的正常 URL，则 SSH 客户端可能会提供错误的密钥，从而导致操作失败。

对存储库具有读取访问权限的任何人都可以通过以下方式找到此 URL：选择存储库主页上的“代码”下拉菜单，然后单击“使用 SSH” 。

如果您的组织不需要 SSH 证书，则成员可以继续使用自己的 SSH 密钥或其他身份验证方式。 在这种情况下，特殊 URL 或以 `git@github.com` 开头的正常 URL 将起作用。

## 颁发证书

在颁发每个证书时，必须包含扩展，以指定证书用于哪个 {% data variables.product.product_name %} 用户。 例如，你可以使用 OpenSSH 的 `ssh-keygen` 命令，将 _KEY-IDENTITY_ 替换为密钥标识，_USERNAME_ 替换为 {% data variables.product.product_name %} 用户名。 您生成的证书将授权代表该用户使用您组织的任何资源。 在签发证书之前，请确保验证用户的身份。

{% note %}

注意：必须更新到 OpenSSH 7.6 或更高版本才能使用这些命令。

{% endnote %}

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

警告：证书签名并颁发后，无法吊销。 请确保使用 -`V` 标志来配置证书的生存期，否则证书可以无限期使用。

{% endwarning %}

要为使用 SSH 访问多个 {% data variables.product.company_short %} 产品的人颁发证书，您可以包括两个登录扩展，以指定每个产品的用户名。 例如，以下命令将为 {% data variables.product.prodname_ghe_cloud %} 的用户帐户颁发 _USERNAME-1_ 的证书，为 _HOSTNAME_ 处的 {% data variables.product.prodname_ghe_managed %} 或 {% data variables.product.prodname_ghe_server %} 上的用户帐户颁发 _USERNAME-2_ 的证书。

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

可以使用 `source-address` 扩展来限制组织成员用来访问组织资源的 IP 地址。 扩展接受采用 CIDR 表示法的特定 IP 地址或一个 IP 地址范围。 您可以指定多个地址或范围，用逗号分隔值。 有关详细信息，请参阅 Wikipedia 上的“[无类别域际路由](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)”。

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
