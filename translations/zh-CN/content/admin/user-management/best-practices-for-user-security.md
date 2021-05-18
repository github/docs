---
title: 用户安全的最佳实践
intro: '{% if enterpriseServerVersions contains currentVersion %}除了站点管理员可以实现的实例级别安全措施（SSL、子域隔离、配置防火墙）外，{% else %}{% endif %}您的用户还可以按照一些步骤操作来帮助保护。'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
versions:
  enterprise-server: '*'
  github-ae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
---

{% if enterpriseServerVersions contains currentVersion %}
### 启用双重身份验证

双重身份验证 (2FA) 是登录网站和服务的一种方法，需要使用密码以外的第二重因素来验证身份。 对于 {% data variables.product.prodname_ghe_server %}，第二重因素为用户智能手机上的应用程序生成的一次性验证码。 我们强烈建议要求您的用户在他们的帐户上启用双重身份验证。 使用双重身份验证时，只有用户的密码和智能手机同时被盗，他们的帐户才会遭到入侵。

有关如何配置双重身份验证的更多信息，请参阅“[关于双重身份验证](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication)”。
{% endif %}

### 需要密码管理器

我们强烈建议要求您的用户在他们用于连接到企业的任何计算机上安装和使用密码管理器，例如 [LastPass](https://lastpass.com/)、[1Password](https://1password.com/) 或 [Keeper](https://keepersecurity.com/)。 这样可以确保密码更强，大大降低被入侵或被盗的可能性。

### 限制对团队和仓库的访问

要限制出现安全漏洞时的潜在攻击面，我们强烈建议仅向用户授予完成工作所需的团队和仓库的访问权限。 由于具有所有者角色的成员可以访问组织中的所有团队和仓库，我们强烈建议尽可能减小团队的规模。

有关如何配置团队和团队权限的更多信息，请参阅“[组织仓库的权限级别](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)”。
