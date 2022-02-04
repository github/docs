---
title: Auditing activity in your enterprise
shortTitle: Auditing activity
intro: 'You can audit the activity of the {% data variables.product.prodname_managed_users %} in your enterprise, viewing information about what actions were performed, by which user, and when they took place.'
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

## About the audit log

The audit log allows enterprise owners to quickly review or export the actions performed by both owners and members of your enterprise. Each audit log entry shows information about the event.

- 可在其中执行操作的组织
- 执行操作的用户
- 执行操作的仓库
- 执行的操作内容
- 发生操作的国家/地区
- 操作发生的日期和时间

## 访问审核日志

You can also access the audit log for your enterprise from the REST API. For more information, see "[GitHub Enterprise administration](/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise)" in the API documentation.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Optionally, above the list of events, select the **Export Git Events** or **Export** drop-down menu and choose options for exporting events from the audit log. !["Export Git Events" and "Export" drop-down menus for the enterprise audit log](/assets/images/help/enterprises/audit-log-export-drop-down-menus.png)
