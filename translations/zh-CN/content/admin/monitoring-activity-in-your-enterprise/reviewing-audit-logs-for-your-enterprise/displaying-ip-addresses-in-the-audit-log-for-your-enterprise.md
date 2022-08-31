---
title: 在企业的审核日志中显示 IP 地址
intro: 您可以在企业的审核日志中显示事件的源 IP 地址。
shortTitle: 审核日志中的 IP 地址
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
---

## 关于在审核日志中显示 IP 地址

默认情况下，{% data variables.product.product_name %} 不会在企业的审核日志中显示事件的源 IP 地址。 （可选）为了确保合规性并响应威胁，您可以显示与负责每个事件的参与者关联的完整 IP 地址。 参与者通常是用户，但也可以是应用程序或集成。

您负责履行查看或存储企业审核日志中显示的 IP 地址时附带的任何法律义务。

如果选择显示 IP 地址，则 IP 地址仅显示在企业的审核日志中。 对于企业拥有的各个组织的审核日志中的事件，不会显示 IP 地址。 有关组织审核日志的详细信息，请参阅“[查看组织的审核日志](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)”。

您可以在审核日志中显示 IP 地址，而不管您在 {% data variables.product.product_location %} 上对企业使用哪种身份验证方法。 更多信息请参阅“[关于企业的身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。

当任何人在 {% data variables.product.product_location %} 上创建帐户时，此人同意 {% data variables.product.company_short %} 收集有关连接到 {% data variables.product.company_short %} 服务的基本信息，包括源 IP 地址。 更多信息请参阅“[GitHub 隐私声明](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)”。

## 在审核日志中显示 IP 地址的事件

在企业成员与企业或企业中的组织拥有的资源交互时，{% data variables.product.product_name %} 会在审核日志中显示 IP 地址。 例如，您将看到涉及企业中组织拥有的内部或私有存储库或这些存储库关联资源的已审核事件的 IP 地址，例如议题、拉取请求、操作或项目。

如果企业成员使用他们管理的个人帐户访问 {% data variables.product.product_location %}，因为您不使用 {% data variables.product.prodname_emus %}，所以 {% data variables.product.product_name %} 不会在审核日志中显示以下操作的事件或 IP 地址。

- 向 {% data variables.product.product_location %} 验证
- 与个人帐户拥有的资源（包括存储库、要点或项目）的交互
- 与企业中组织拥有的公共存储库的交互

## 启用在审核日志中显示 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. 在“Audit log（审核日志）”下，单击 **Source IP disclosure（源 IP 披露）**。

   !["源 IP 披露"选项卡屏幕截图](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. 在“Disclose actor IP addresses in audit logs（在审核日志中披露参与者 IP 地址）”下，选择 **Enable source IP disclosure（启用源 IP 披露）**。

   ![启用在审核日志中显示 IP 地址的复选框屏幕截图](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. 单击 **Save（保存）**。

启用该功能后，可以访问审核日志以查看包含 IP 地址的事件。 更多信息请参阅“[访问企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”。
