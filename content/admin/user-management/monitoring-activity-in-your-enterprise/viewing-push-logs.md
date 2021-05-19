---
title: Viewing push logs
intro: Site administrators can view a list of Git push operations for any repository on the enterprise.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
---
Push log entries show:

- Who initiated the push
- Whether it was a force push or not
- The branch someone pushed to
- The protocol used to push
- The originating IP address
- The Git client used to push
- The SHA hashes from before and after the operation

### Viewing a repository's push logs

1. Sign into {% data variables.product.prodname_ghe_server %} as a site administrator.
1. Navigate to a repository.
1. In the upper-right corner of the repository's page, click {% octicon "rocket" aria-label="The rocket ship" %}.
    ![Rocketship icon for accessing site admin settings](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. In the left sidebar, click **Push Log**.
![Push log tab](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% if enterpriseServerVersions contains currentVersion %}
### Viewing a repository's push logs on the command-line

{% data reusables.enterprise_installation.ssh-into-instance %}
1. In the appropriate Git repository, open the audit log file:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
{% endif %}
