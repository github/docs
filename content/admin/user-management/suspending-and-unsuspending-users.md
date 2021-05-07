---
title: Suspending and unsuspending users
redirect_from:
  - /enterprise/admin/articles/suspending-a-user/
  - /enterprise/admin/articles/unsuspending-a-user/
  - /enterprise/admin/articles/viewing-suspended-users/
  - /enterprise/admin/articles/suspended-users/
  - /enterprise/admin/articles/suspending-and-unsuspending-users/
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
intro: 'If a user leaves or moves to a different part of the company, you should remove or modify their ability to access {% data variables.product.product_location %}.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---
If employees leave the company, you can suspend their {% data variables.product.prodname_ghe_server %} accounts to open up user licenses in your {% data variables.product.prodname_enterprise %} license while preserving the issues, comments, repositories, gists, and other data they created. Suspended users cannot sign into your instance, nor can they push or pull code.

When you suspend a user, the change takes effect immediately with no notification to the user. If the user attempts to pull or push to a repository, they'll receive this error:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Before suspending site administrators, you must demote them to regular users. For more information, see "[Promoting or demoting a site administrator](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)."

{% tip %}

**Note:** If [LDAP Sync is enabled](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) for {% data variables.product.product_location %}, users are automatically suspended when they're removed from the LDAP directory server. When LDAP Sync is enabled for your instance, normal user suspension methods are disabled.

{% endtip %}

### Suspending a user from the user admin dashboard

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Under "Account suspension," in the red Danger Zone box, click **Suspend**.
![Suspend button](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Provide a reason to suspend the user.
![Suspend reason](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

### Unsuspending a user from the user admin dashboard

As when suspending a user, unsuspending a user takes effect immediately. The user will not be notified.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. In the left sidebar, click **Suspended users**.
![Suspended users tab](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Click the name of the user account that you would like to unsuspend.
![Suspended user](/assets/images/enterprise/site-admin-settings/user/suspended-user.png)
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Under "Account suspension," in the red Danger Zone box, click **Unsuspend**.
![Unsuspend button](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Provide a reason to unsuspend the user.
![Unsuspend reason](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

### Suspending a user from the command line

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Run [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend) with the username to suspend.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

### Creating a custom message for suspended users

You can create a custom message that suspended users will see when attempting to sign in.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Click **Add message**.
![Add message](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Type your message into the **Suspended user message** box. You can type Markdown, or use the Markdown toolbar to style your message.
![Suspended user message](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Click the **Preview** button under the **Suspended user message** field to see the rendered message.
![Preview button](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Review the rendered message.
![Suspended user message rendered](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Unsuspending a user from the command line

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Run [ghe-user-unsuspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) with the username to unsuspend.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

### Further reading
- "[Suspend a user](/rest/reference/enterprise-admin#suspend-a-user)"
