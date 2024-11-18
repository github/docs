---
title: Disabling Git SSH access on your enterprise
redirect_from:
  - /enterprise/admin/hidden/disabling-ssh-access-for-a-user-account
  - /enterprise/admin/articles/disabling-ssh-access-for-a-user-account
  - /enterprise/admin/hidden/disabling-ssh-access-for-your-appliance
  - /enterprise/admin/articles/disabling-ssh-access-for-your-appliance
  - /enterprise/admin/hidden/disabling-ssh-access-for-an-organization
  - /enterprise/admin/articles/disabling-ssh-access-for-an-organization
  - /enterprise/admin/hidden/disabling-ssh-access-to-a-repository
  - /enterprise/admin/articles/disabling-ssh-access-to-a-repository
  - /enterprise/admin/guides/installation/disabling-git-ssh-access-on-github-enterprise
  - /enterprise/admin/installation/disabling-git-ssh-access-on-github-enterprise-server
  - /enterprise/admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
  - /admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
  - /admin/user-management/disabling-git-ssh-access-on-your-enterprise
  - /admin/user-management/managing-repositories-in-your-enterprise/disabling-git-ssh-access-on-your-enterprise
intro: You can prevent people from using Git over SSH for certain or all repositories on your enterprise.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
  - SSH
shortTitle: Disable SSH for Git
---
## Disabling Git SSH access to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Git SSH access", select the drop-down menu, and click **Disabled**.

## Disabling Git SSH access to all repositories owned by a user or organization

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Git SSH access", select the drop-down menu, and click **Disabled**.
1. Select **Enforce on all repositories**.

   ![Screenshot of the "Git SSH access" section of the site admin page for an organization. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Disabling Git SSH access to all repositories in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Git SSH access", select the drop-down menu, and click **Disabled**.
1. Select **Enforce on all repositories**.

   ![Screenshot of the "Git SSH access" section on the enterprise's policies page. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
