---
title: Viewing push logs
intro: Site administrators can view a list of Git push operations for any repository on the enterprise.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
  - /admin/monitoring-activity-in-your-enterprise/exploring-user-activity/viewing-push-logs
versions:
  ghes: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
---
Push log entries show:

* Who initiated the push
* Whether it was a force push or not
* The branch someone pushed to
* The protocol used to push
* The originating IP address
* The Git client used to push
* The SHA hashes from before and after the operation

{% ifversion repository-activity-view %}
{% data reusables.repositories.activity-view %}
For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository)."
{% endif %}

## Viewing a repository's push logs

1. Sign into {% data variables.product.prodname_ghe_server %} as a site administrator.
1. Navigate to a repository.
1. In the upper-right corner of the repository's page, click {% octicon "rocket" aria-label="Site admin" %}.
{% data reusables.enterprise_site_admin_settings.security-tab %}
1. In the left sidebar, click **Push Log**.

{% ifversion ghes %}

## Viewing a repository's push logs on the command-line

{% data reusables.enterprise_installation.ssh-into-instance %}
1. In the appropriate Git repository, open the audit log file:

   ```shell
   ghe-repo OWNER/REPOSITORY -c "cat audit_log"
   ```

{% endif %}
