---
title: Managing dormant users
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
intro: A user account is considered to be dormant if it has not been active for at least a month. You may choose to suspend dormant users to free up user licenses.
versions:
  enterprise-server: '*'
---

"Activity" includes, but is not limited to:
- Signing in to {% data variables.product.prodname_ghe_server %}.
- Commenting on issues and pull requests.
- Creating, deleting, watching, and starring repositories.
- Pushing commits.{% if currentVersion ver_gt "enterprise-server@2.21" %}
- Accessing resources by using a personal access token or SSH key.{% endif %}

### Viewing dormant users

You can view a list of all dormant users who have not been suspended and who are not site administrators.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. In the left sidebar, click **Dormant users**. ![Dormant users tab](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png)
4. To suspend all the dormant users in this list, at the top of the page, click **Suspend all**. ![Suspend all button](/assets/images/enterprise/site-admin-settings/suspend-all.png)

### Determining whether a user account is dormant

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. In the **User info** section, a red dot with the word "Dormant" indicates the user account is dormant, and a green dot with the word "Active" indicates the user account is active. ![Dormant user account](/assets/images/enterprise/stafftools/dormant-user.png) ![Active user account](/assets/images/enterprise/stafftools/active-user.png)

### Configuring the dormancy threshold

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Dormancy threshold", use the drop-down menu, and click the desired dormancy threshold. ![The Dormancy threshold drop-down menu](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
