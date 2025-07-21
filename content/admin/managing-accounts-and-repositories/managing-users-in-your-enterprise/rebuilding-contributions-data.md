---
title: Rebuilding contributions data
intro: You may need to rebuild contributions data to link existing commits to a user account.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
  - /admin/user-management/managing-users-in-your-enterprise/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
---
Whenever a commit is pushed to {% data variables.product.prodname_enterprise %}, it is linked to a user account if they are both associated with the same email address. However, existing commits are _not_ retroactively linked when a user registers a new email address or creates a new account.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. To the right of "Rebuild commit contributions data", click **Rebuild**.

You should see the "Rebuild commit contributions jobs enqueued" banner at the top of the screen indicating that {% data variables.product.prodname_enterprise %} will now start background jobs to re-link commits with that user's account.
