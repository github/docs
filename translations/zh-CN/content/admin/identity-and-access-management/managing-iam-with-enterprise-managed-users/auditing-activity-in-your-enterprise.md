---
title: 审核企业中的活动
shortTitle: 审核活动
intro: '您可以审核企业中 {% data variables.product.prodname_managed_users %} 的活动，查看执行的操作、执行的用户以及执行时间等相关信息。'
permissions: Enterprise owners can access the audit log.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
---

## 关于审核日志

审核日志允许企业所有者快速查看或导出企业所有者和成员执行的操作。 每个审核日志条目都显示有关事件的信息。

- 可在其中执行操作的组织
- 执行操作的用户
- 执行操作的仓库
- 执行的操作内容
- 发生操作的国家/地区
- 操作发生的日期和时间

## 访问审核日志

您还可以从 REST API 访问企业的审核日志。 更多信息请参阅 API 文档中的“[GitHub Enterprise 管理](/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. （可选）在事件列表上方，选择 **Export Git Events（导出 Git 事件）**或 **Export（导出）**下拉菜单，然后选择用于从审核日志中导出事件的选项。 ![企业审核日志的"导出 Git 事件"和"导出"下拉菜单](/assets/images/help/enterprises/audit-log-export-drop-down-menus.png)
