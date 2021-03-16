---
title: 关于企业配置
intro: '您可以使用站点管理员仪表板{% if enterpriseServerVersions contains currentVersion %}、{% data variables.enterprise.management_console %}和管理 shell (SSH){% elsif currentVersion == "github-ae@latest" %} 以及企业设置或联系支持{% endif %}来管理您的企业。'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} 更多信息请参阅“[站点管理员仪表板](/admin/configuration/site-admin-dashboard)”。

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} 更多信息请参阅“[访问管理控制台](/admin/configuration/accessing-the-management-console)”。

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} 更多信息请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
第一次访问您的企业时，您将完成初始配置以获取
可供使用的 {% data variables.product.product_name %}。 初始配置包括连接您的企业与 idP 连接、通过 SAML SSO 进行身份验证，以及配置企业中仓库和组织的策略。 更多信息请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)。”

为使用户在初始配置后收到来自 {% data variables.product.product_name %} 的任何电子邮件，您必须要求 {% data variables.contact.github_support %} 配置支持 SMTP 服务器的出站电子邮件。 更多信息请参阅“[配置电子邮件通知](/admin/configuration/configuring-email-for-notifications)”。

稍后，您可以使用站点管理员仪表板和企业设置进一步配置企业、管理用户、组织和仓库，并设置可降低风险和提高质量的策略。

所有企业都配置了子域隔离，仅对加密流量支持 TLS 1.2 及更高版本。
{% endif %}

### 延伸阅读

- "[管理用户、组织和仓库](/admin/user-management)"
- "[为企业设置策略](/admin/policies)"
