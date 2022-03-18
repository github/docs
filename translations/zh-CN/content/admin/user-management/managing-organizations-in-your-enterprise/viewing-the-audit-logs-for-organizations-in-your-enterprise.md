---
title: 查看企业中组织的审核日志
intro: 企业所有者可以在其审核日志中查看企业帐户拥有的所有组织的汇总操作。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /articles/viewing-the-audit-logs-for-organizations-in-your-business-account
  - /articles/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: 查看组织审核日志
---

每个审核日志条目都显示有关事件的适用信息，例如：

- 可在其中执行操作的组织
- 执行操作的用户
- 执行操作的仓库
- 执行的操作内容
- 发生操作的国家/地区
- 操作发生的日期和时间

您可以在审核日志中搜索特定事件并导出审核日志数据。 有关搜索审核日志和特定组织事件的更多信息，请参阅“[审查组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)”。

您还可以将审核和 Git 事件数据从 {% data variables.product.prodname_dotcom %} 流式传输到外部数据管理系统。 更多信息请参阅“[流式传输企业帐户中组织的审核日志](/admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
