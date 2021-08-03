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
When you set up SSH, you will need to generate a new SSH key and add it to the ssh-agent. You must add the SSH key to your account on {% data variables.product.product_name %} before you use the key to authenticate. For more information, see "[Generating a new SSH key and adding it to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" and "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

You can further secure your SSH key by using a hardware security key, which requires the physical hardware security key to be attached to your computer when the key pair is used to authenticate with SSH. You can also secure your SSH key by adding your key to the ssh-agent and using a passphrase. 更多信息请参阅“[使用 SSH 密钥密码](/github/authenticating-to-github/working-with-ssh-key-passphrases)”。

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you must authorize the key. 更多信息请参阅“[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。{% endif %}

To maintain account security, you can regularly review your SSH keys list and revoke any keys that are invalid or have been compromised. 更多信息请参阅“[审查 SSH 密钥](/github/authenticating-to-github/reviewing-your-ssh-keys)”。

{% if currentVersion == "free-pro-team@latest" %}
如果 SSH 密钥一年未使用，则作为安全预防措施，
{% data variables.product.prodname_dotcom %} 会自动删除非活动的 SSH 密钥。 更多信息请参阅“[删除或缺失的 SSH 密钥](/articles/deleted-or-missing-ssh-keys)”。
{% endif %}

如果您是提供 SSH 证书的组织成员，可以使用证书来访问组织的仓库，而无需添加证书到您的 {% data variables.product.product_name %} 帐户。 更多信息请参阅“[关于 SSH 认证中心](/articles/about-ssh-certificate-authorities)”。

### 延伸阅读

- "[检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)"
- "[测试 SSH 连接](/articles/testing-your-ssh-connection)"
- "[SSH 故障排除](/articles/troubleshooting-ssh)"
