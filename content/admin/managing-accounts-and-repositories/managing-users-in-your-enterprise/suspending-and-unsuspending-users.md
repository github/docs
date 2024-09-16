---
title: Suspending and unsuspending users
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users
intro: 'If a user leaves or moves to a different part of the company, you should remove or modify their ability to access {% data variables.location.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
---

## About suspended users

If employees leave the company, you can suspend their {% data variables.product.prodname_ghe_server %} accounts to open up user licenses in your {% data variables.product.prodname_enterprise %} license while preserving the issues, comments, repositories, gists, and other data they created. Suspended users cannot sign into your instance, nor can they push or pull code.

When you suspend a user, the change takes effect immediately with no notification to the user. If the user attempts to pull or push to a repository, they'll receive this error:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with
your installation administrator.
fatal: The remote end hung up unexpectedly
```

> [!TIP] {% data variables.product.prodname_dotcom %} recommends suspending users where possible, rather than deleting their accounts.

## Scenarios where you cannot suspend users

Before suspending site administrators, you must demote them to regular users. See "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)."

If you use certain external authentication features, you cannot manage user suspension from the site admin dashboard or command line:

* If LDAP Sync is enabled for {% data variables.location.product_location %}, users are automatically suspended based on the scenarios that are described in "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync)."
* If SCIM provisioning is enabled, SCIM-provisioned users must be suspended or unsuspended through your identity provider.

## Viewing suspended users in the site admin dashboard

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. In the left sidebar, click **Suspended users**.
1. A list of suspended users displays.

## Suspending a user from the site admin dashboard

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Account suspension," in the "Danger Zone" section, click **Suspend**.
1. In the "Log reason" field, type a reason to suspend the user.
1. Click **Suspend**.

## Unsuspending a user from the site admin dashboard

As when suspending a user, unsuspending a user takes effect immediately. The user will not be notified.

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. In the left sidebar, click **Suspended users**.
1. Click the name of the user account that you would like to unsuspend.
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Account suspension," in the "Danger Zone" section, click **Unsuspend**.
1. In the "Log reason" field, type a reason to unsuspend the user.
1. Click **Unsuspend.**

## Suspending a user from the command line

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Run [ghe-user-suspend](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-user-suspend) with the username to suspend.

   ```shell
   ghe-user-suspend USERNAME
   ```

## Creating a custom message for suspended users

You can create a custom message that suspended users will see when attempting to sign in.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. To the right of "Suspended user page", click **Add message**.

   ![Screenshot of the "Suspend user page" section of the "Messages" settings. A button, labeled with a plus icon and "Add message," is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/add-message.png)
1. In the "Suspend user message" field, type your message. You can type Markdown, or use the Markdown toolbar to style your message.
1. To see the rendered message, click **Preview**.
{% data reusables.enterprise_site_admin_settings.save-changes %}

## Unsuspending a user from the command line

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Run [ghe-user-unsuspend](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-user-unsuspend) with the username to unsuspend.

   ```shell
   ghe-user-unsuspend USERNAME
   ```

## Further reading

* "[AUTOTITLE](/rest/enterprise-admin/users#suspend-a-user)"
