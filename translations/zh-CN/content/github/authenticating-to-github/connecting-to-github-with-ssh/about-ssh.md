---
title: 关于 SSH
intro: '使用 SSH 协议可以连接远程服务器和服务并向它们验证。 利用 SSH 密钥可以连接 {% data variables.product.product_name %}，而无需在每次访问时都提供用户名和个人访问令牌。'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

设置 SSH 时，您需要生成新的 SSH 密钥并将其添加到 ssh 代理中。 使用密钥进行身份验证之前，您必须将 SSH 密钥添加到 {% data variables.product.product_name %} 上的帐户中。 更多信息请参阅“[生成新的 SSH 密钥并将其添加到 ssh 代理](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”和“[添加新的 SSH 密钥到 {% data variables.product.prodname_dotcom %} 帐户](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)”。

您可以使用硬件安全密钥来进一步保护 SSH 密钥，当密钥对用于通过 SSH 进行身份验证时，需要将物理硬件安全密钥附加到计算机上。 您还可以通过将密钥添加到 ssh 代理并使用密码来保护您的 SSH 密钥。 更多信息请参阅“[使用 SSH 密钥密码](/github/authenticating-to-github/working-with-ssh-key-passphrases)”。

{% if currentVersion == "free-pro-team@latest" %}要对使用 SAML 单点登录的组织所拥有的仓库使用 SSH 密钥，您必须授权密钥。 更多信息请参阅“[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。{% endif %}

为了保持帐户安全，您可以定期检查您的 SSH 密钥列表，并撤销任何无效或已泄漏的密钥。 更多信息请参阅“[审查 SSH 密钥](/github/authenticating-to-github/reviewing-your-ssh-keys)”。

{% if currentVersion == "free-pro-team@latest" %}
如果 SSH 密钥一年未使用，则作为安全预防措施，{% data variables.product.prodname_dotcom %} 会自动删除非活动的 SSH 密钥。 更多信息请参阅“[删除或缺失的 SSH 密钥](/articles/deleted-or-missing-ssh-keys)”。
{% endif %}

如果您是提供 SSH 证书的组织成员，可以使用证书来访问组织的仓库，而无需添加证书到您的 {% data variables.product.product_name %} 帐户。 更多信息请参阅“[关于 SSH 认证中心](/articles/about-ssh-certificate-authorities)”。

### 延伸阅读

- "[检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)"
- "[测试 SSH 连接](/articles/testing-your-ssh-connection)"
- "[SSH 故障排除](/articles/troubleshooting-ssh)"
