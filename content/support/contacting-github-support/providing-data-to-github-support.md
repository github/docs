---
title: Providing data to GitHub Support
intro: 'Since {% data variables.contact.github_support %} doesn''t have access to your environment, we sometimes require some additional information from you.'
shortTitle: Providing data
versions:
  ghes: '*'
permissions: 'Site administrators and enterprise owners can provide data to {% data variables.contact.github_support %}.'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
---

## About diagnostic files and support bundles

To help you troubleshoot issues with a {% data variables.product.prodname_ghe_server %} instance in your environment, {% data variables.contact.github_support %} may request one or more types of data.

| Data | File format | Description |
| :- | :- | :- |
| Diagnostic file | Plaintext | Contains information about the instance's settings and environment. |
| Support bundle | Archive | Contains a diagnostics file and sanitized log files from the past two days by default. |
| Extended support bundle | Archive | Contains a diagnostics file and sanitized log files from the past eight days. |

## About log file sanitization

Authentication tokens, keys, and secrets are removed from log files in the following log directories contained within a support bundle or diagnostics file:

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## Creating and sharing diagnostic files

Diagnostic files are an overview of a {% data variables.product.prodname_ghe_server %} instance's settings and environment that contain:

* Client license information, including company name, expiration date, and number of user licenses
* Version numbers and SHAs
* VM architecture
* Host name, private mode, SSL settings
* Load and process listings
* Network settings
* Authentication method and details
* Number of repositories, users, and other installation data

You can download the diagnostics for your instance from the {% data variables.enterprise.management_console %} or by running the `ghe-diagnostics` command-line utility.

### Creating a diagnostic file from the {% data variables.enterprise.management_console %}

You can create a diagnostic file from the {% data variables.enterprise.management_console %} if you don't currently have SSH access.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
1. Click **Download diagnostics info**.

### Creating a diagnostic file using SSH

You can use this method without signing into the {% data variables.enterprise.management_console %}.

Use the [ghe-diagnostics](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-diagnostics) command-line utility to retrieve the diagnostics for your instance.

```shell
ssh -p122 admin@HOSTNAME -- 'ghe-diagnostics' > diagnostics.txt
```

## Creating and sharing support bundles

After you submit your support request, we may ask you to share a support bundle with our team. The support bundle is a gzip-compressed tar archive that includes diagnostics and important logs from your instance, such as:

* Authentication-related logs that may be helpful when troubleshooting authentication errors, or configuring LDAP, CAS, or SAML
* {% data variables.enterprise.management_console %} log
* `github-logs/exceptions.log`: Information about 500 errors encountered on the site
* `github-logs/audit.log`: {% data variables.product.prodname_ghe_server %} audit logs
* `babeld-logs/babeld.log`: Git proxy logs
* `system-logs/haproxy.log`: HAProxy logs
* `elasticsearch-logs/github-enterprise.log`: Elasticsearch logs
* `configuration-logs/{% ifversion unique-config-run-logs %}{% else %}ghe-config.log{% endif %}`: {% data variables.product.prodname_ghe_server %} configuration logs
{%- ifversion unique-config-run-logs %}
{%- endif %}
* `collectd/logs/collectd.log`: Collectd logs
* `mail-logs/mail.log`: SMTP email delivery logs

For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."

Support bundles include logs from the past two days by default. You can specify an exact duration in days. To provide logs from the past eight days, you can download an extended support bundle. For more information, see "[Creating and sharing extended support bundles](#creating-and-sharing-extended-support-bundles)."

{% tip %}

**Tip:** When you contact {% data variables.contact.github_support %}, you'll be sent a confirmation email that will contain a ticket reference link. If {% data variables.contact.github_support %} asks you to upload a support bundle, you can use the ticket reference link to upload the support bundle.

{% endtip %}

### Creating a support bundle from the {% data variables.enterprise.management_console %}

You can use these steps to create and share a support bundle if you can access the web-based {% data variables.enterprise.management_console %} and have outbound internet access.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
1. Click **Download support bundle**.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Creating a support bundle using SSH

You can use these steps to create and share a support bundle if you have SSH access to {% data variables.location.product_location %} and have outbound internet access.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. Download the support bundle via SSH:

   ```shell
   ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
   ```

   For more information about the `ghe-support-bundle` command, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-support-bundle)".
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Uploading a support bundle using your enterprise account

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_enterprise %} Help", click **Upload a support bundle**.

   ![Screenshot of the "GitHub Enterprise help" section of the enterprise settings page. The "Upload a support bundle link" is highlighted with a dark orange rectangle.](/assets/images/enterprise/support/upload-support-bundle.png)
1. Under "Select an enterprise account", use the drop-down menu to select the support bundle's associated account.
1. Under "Upload a support bundle for {% data variables.contact.enterprise_support %}", to select your support bundle, click **Choose file**, or drag your support bundle file onto **Choose file**.
1. Click **Upload**.

### Uploading a support bundle directly using SSH

You can directly upload a support bundle to our server if:
* You have SSH access to {% data variables.location.product_location %}.
* Outbound HTTPS connections over TCP port 443 are allowed from {% data variables.location.product_location %} to _enterprise-bundles.github.com_ and _esbtoolsproduction.blob.core.windows.net_.

1. Upload the bundle to our support bundle server:

   ```shell
   ssh -p122 admin@HOSTNAME -- 'ghe-support-bundle -u'
   ```

## Creating and sharing extended support bundles

Support bundles include logs from the past two days by default, while _extended_ support bundles include logs from the past eight days. If the events that {% data variables.contact.github_support %} is investigating occurred more than two days ago, we may ask you to share an extended support bundle. You will need SSH access to download an extended bundle - you cannot download an extended bundle from the {% data variables.enterprise.management_console %}.

To prevent bundles from becoming too large, bundles only contain logs that haven't been rotated and compressed. Log rotation on {% data variables.product.prodname_ghe_server %} happens at various frequencies (daily or weekly) for different log files, depending on how large we expect the logs to be.

### Creating an extended support bundle using SSH

You can use these steps to create and share an extended support bundle if you have SSH access to {% data variables.location.product_location %} and you have outbound internet access.

1. Download the extended support bundle via SSH by adding the `-x` flag to the `ghe-support-bundle` command:

   ```shell
   ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o -x' > support-bundle.tgz
   ```

{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Uploading an extended support bundle directly using SSH

You can directly upload a support bundle to our server if:
* You have SSH access to {% data variables.location.product_location %}.
* Outbound HTTPS connections over TCP port 443 are allowed from {% data variables.location.product_location %} to _enterprise-bundles.github.com_ and _esbtoolsproduction.blob.core.windows.net_.

1. Upload the bundle to our support bundle server:

   ```shell
   ssh -p122 admin@HOSTNAME -- 'ghe-support-bundle -u -x'
   ```

## Further reading

* "[AUTOTITLE](/support/learning-about-github-support/about-github-support)"
* "[AUTOTITLE](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)"
