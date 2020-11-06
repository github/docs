---
title: 关于 SSH 认证中心
intro: '通过 SSH 认证中心，组织或企业帐户可提供 SSH 证书，供成员用来通过 Git 访问您的资源。'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

SSH 证书是一种机制：一个 SSH 密钥对另一个 SSH 密钥签名。 如果使用 SSH 认证中心 (CA) 为组织成员提供已签名的 SSH 证书，您可以将 CA 添加到企业帐户或组织，以便组织成员使用其证书访问组织资源。 更多信息请参阅“[管理组织的 SSH 认证中心](/articles/managing-your-organizations-ssh-certificate-authorities)”。

在将 SSH CA 添加到组织或企业帐户后，您可以使用 CA 为组织成员签名客户 SSH 证书。 组织成员可以使用已签名的证书通过 Git 访问组织的仓库（并且只访问您组织的仓库）。 You can require that members use SSH certificates to access organization resources.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Enforcing security settings in your enterprise account](/articles/enforcing-security-settings-in-your-enterprise-account#managing-your-enterprise-accounts-ssh-certificate-authorities)."{% endif %}

例如，您可以构建内部系统，每天早上向开发者颁发新证书。 每个开发者可以使用其每日证书处理组织在 {% data variables.product.product_name %} 上的仓库。 在一天结束时，证书会自动到期，以保护仓库，避免证书以后被窃取。

在颁发每个证书时，必须包含扩展，以指定证书用于哪个 {% data variables.product.product_name %} 用户。 例如，您可以使用 OpenSSH 的 `ssh-keygen` 命令，将 _KEY-IDENTITY_ 替换为密钥标识，_USERNAME_ 替换为 {% data variables.product.product_name %} 用户名：

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME</em> ./user-key.pub
```

要为在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 上具有不同用户名的人颁发证书，可以包括两个登录扩展。

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>CLOUD-USERNAME</em> extension:login@<em>HOSTNAME</em>=<em>SERVER-USERNAME</em> ./user-key.pub
```

您可以使用 `source-address` 扩展来限制组织成员用来访问组织资源的 IP 地址。 扩展接受采用 CIDR 表示法的特定 IP 地址或一个 IP 地址范围。 您可以指定多个地址或范围，用逗号分隔值。 更多信息请参阅维基百科上的“[无类别域间路由](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)”。

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```

即使您实施了 SAML 单点登录，组织成员也可使用其签名的证书进行身份验证。 除非您将 SSH 证书设为要求，组织成员可继续使用其他验证方式通过 Git 访问组织的资源，包括他们的用户名和密码、个人访问令牌及其自己的 SSH 密钥。

为防止身份验证错误，组织成员应使用包含组织 ID 的特殊 URL，以使用签名证书克隆仓库。 对仓库具有读取权限的任何人都可在仓库页面上找到此 URL。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。
