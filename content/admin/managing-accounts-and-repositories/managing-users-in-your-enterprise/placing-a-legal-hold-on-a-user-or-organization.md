---
title: Placing a legal hold on a user or organization
intro: You can place a legal hold on a user or organization to ensure that repositories they own cannot be permanently removed from your enterprise.
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
---

Usually, if someone deletes a repository, it will be available on disk for 90 days and can be restored via the site admin dashboard. After 90 days the repository is purged and deleted forever. If you place a legal hold on a user or organization, repositories they own are available for restore indefinitely.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Legal hold", click **Place legal hold**.
