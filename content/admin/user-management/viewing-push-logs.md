---
title: Viewing push logs
intro: 'Site administrators can view a list of Git push operations for any repository on {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
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

1. Navigate to a repository.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. In the left sidebar, click **Push Log**.
![Push log tab](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

### Viewing a repository's push logs on the command-line

1. SSH into your appliance. For more information, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)."
2. In the appropriate Git repository, open the audit log file:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
