---
title: 禁用个人帐户的双重身份验证
intro: 如果禁用个人帐户的双重身份验证，可能失去对所属组织的访问权限。
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---
强烈建议使用双重身份验证保护您的帐户。 如果您需要禁用 2FA，我们建议尽快将其重新启用。

{% warning %}

**警告：** 如果您是需要双重身份验证的某组织的公共仓库的成员{% if currentVersion == "free-pro-team@latest" %}、帐单管理员{% endif %} 或外部协作者，并且已禁用 2FA，您将被从该组织中自动删除，并会失去对其仓库的访问权限。 要重新获得对组织的访问权限，请重新启用双重身份验证并联系组织所有者。

{% endwarning %}

如果您的组织需要双重身份验证，并且您是所在组织某一私有仓库的会员、所有者或外部协作者，您必须首先离开组织，然后才能禁用双重身份验证。

从组织中删除自己
 - 作为组织成员或所有者，请参阅“[从组织中删除自己](/articles/removing-yourself-from-an-organization/)”。
 - 作为外部协作者，请要求组织所有者或仓库管理员从组织的仓库中删除自己。 更多信息请参阅“[查看组织中的人员角色](/articles/viewing-people-s-roles-in-an-organization)”和“[从组织仓库中删除外部协作者](/articles/removing-an-outside-collaborator-from-an-organization-repository/)”。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. 单击 **Disable（禁用）**。 ![禁用双重身份验证](/assets/images/help/2fa/disable-two-factor-authentication.png)

### 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证](/articles/configuring-two-factor-authentication)"
- "[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)"
