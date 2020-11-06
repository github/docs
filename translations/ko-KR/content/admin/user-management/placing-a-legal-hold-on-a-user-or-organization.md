---
title: Placing a legal hold on a user or organization
intro: 'You can place a legal hold on a user or organization to ensure that repositories they own cannot be permanently removed from your enterprise.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
---

Usually, if someone deletes a repository, it will be available on disk for 90 days and can be restored via the site admin dashboard. After 90 days the repository is purged and deleted forever. If you place a legal hold on a user or organization, repositories they own are available for restore indefinitely.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Click **Place legal hold**. ![Place legal hold button](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
