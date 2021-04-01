---
title: Rebuilding contributions data
intro: You may need to rebuild contributions data to link existing commits to a user account.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data/
  - /enterprise/admin/user-management/rebuilding-contributions-data
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

Whenever a commit is pushed to {% data variables.product.prodname_enterprise %}, it is linked to a user account if they are both associated with the same email address. However, existing commits are *not* retroactively linked when a user registers a new email address or creates a new account.

1. Visit the user's profile page.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. On the left side of the page, click **Admin**.
  ![Admin tab](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. Under **Contributions data**, click **Rebuild**.
![Rebuild button](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} will now start background jobs to re-link commits with that user's account.
  ![Queued rebuild jobs](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
