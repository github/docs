---
title: Promoting or demoting a site administrator
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator/
  - /enterprise/admin/articles/demoting-a-site-administrator/
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'Site administrators can promote any normal user account to a site administrator, as well as demote other site administrators to regular users.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
---
{% tip %}

**Note:** If [LDAP Sync is enabled](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) and the `Administrators group` attribute is set when [configuring LDAP access for users](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), those users will automatically have site administrator access to your instance. In this case, you can't manually promote users with the steps below; you must add them to the LDAP administrators group.

{% endtip %}

For information about promoting a user to an organization owner, see the `ghe-org-admin-promote` section of "[Command-line utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)."

### Promoting a user from the enterprise settings

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
5. In the upper-right corner of the page, click **Add owner**.
  ![Button to add an admin](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. In the search field, type the name of the user and click **Add**.
  ![Search field to add an admin](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

### Demoting a site administrator from the enterprise settings

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. In the upper-left corner of the page, in the "Find an administrator" search field, type the username of the person you want to demote.
  ![Search field to find an administrator](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. In the search results, find the username of the person you want to demote, then use the {% octicon "gear" %} drop-down menu, and select **Remove owner**.
  ![Remove from enterprise option](/assets/images/help/business-accounts/demote-admin-button.png)

### Promoting a user from the command line

1. [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) into your appliance.
2. Run [ghe-user-promote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-promote) with the username to promote.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

### Demoting a site administrator from the command line

1. [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) into your appliance.
2. Run [ghe-user-demote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-demote) with the username to demote.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
