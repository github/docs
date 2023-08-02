---
title: Promoting or demoting a site administrator
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator
intro: 'Site administrators can promote any normal user account to a site administrator, as well as demote other site administrators to regular users.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
---
{% tip %}

**Note:** If [LDAP Sync is enabled](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync) and the `Administrators group` attribute is set when [configuring LDAP access for users](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), those users will automatically have site administrator access to your instance. In this case, you can't manually promote users with the steps below; you must add them to the LDAP administrators group.

{% endtip %}

For information about promoting a user to an organization owner, see the `ghe-org-admin-promote` section of "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-org-admin-promote)."

## Promoting a user from the enterprise settings

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. In the upper-right corner of the page, click **Add owner**.
1. In the search field, type the name of the user, then click **Add**.

## Demoting a site administrator from the enterprise settings

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. In the upper-left corner of the page, in the "Find an administrator" search field, type the username of the person you want to demote.
{%- ifversion ghes > 3.6 %}
1. In the search results, find the username of the person you want to demote, then select the {% octicon "kebab-horizontal" aria-label="Administrator settings" %} dropdown menu and click **Convert to member**.

   ![Screenshot of a user in the enterprise administrators list. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/administrator-settings.png)
{%- else %}
1. In the search results, find the username of the person you want to demote, then use the {% octicon "gear" %} drop-down menu, and select **Remove owner**.
{%- endif %}

## Promoting a user from the command line

1. [SSH](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) into your appliance.
1. Run [ghe-user-promote](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-user-promote) with the username to promote.

   ```shell
   ghe-user-promote USERNAME
   ```

## Demoting a site administrator from the command line

1. [SSH](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) into your appliance.
1. Run [ghe-user-demote](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-user-demote) with the username to demote.

   ```shell
   ghe-user-demote USERNAME
   ```
