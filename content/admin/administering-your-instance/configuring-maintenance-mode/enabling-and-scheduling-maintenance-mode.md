---
title: Enabling and scheduling maintenance mode
intro: 'Some standard maintenance procedures, such as upgrading {% data variables.location.product_location %} or restoring backups, require the instance to be taken offline for normal use.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode
  - /admin/administering-your-instance/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
---

## About maintenance mode

Some types of operations require that you take {% data variables.location.product_location %} offline and put it into maintenance mode:
* Upgrading to a new version of {% data variables.product.prodname_ghe_server %}
* Increasing CPU, memory, or storage resources allocated to the virtual machine
* Migrating data from one virtual machine to another
* Restoring data from a {% data variables.product.prodname_enterprise_backup_utilities %} snapshot
* Troubleshooting certain types of critical application issues

We recommend that you schedule a maintenance window for at least 30 minutes in the future to give users time to prepare. When a maintenance window is scheduled, all users will see a banner when accessing the site.

When the instance is in maintenance mode, all normal HTTP and Git access is refused. This includes web and API requests, for which the appliance responds with status code `503` (Service Unavailable). Git fetch, clone, and push operations are also rejected with an error message indicating that the site is temporarily unavailable.{% ifversion ghes < 3.13 %} In high availability configurations, Git replication will be paused.{% endif %} GitHub Actions jobs will not be executed. Visiting the site in a browser results in a maintenance page.

{% ifversion ip-exception-list %}

You can perform initial validation of your maintenance operation by configuring an IP exception list to allow access to {% data variables.location.product_location %} from only the IP addresses and ranges provided. Attempts to access {% data variables.location.product_location %} from IP addresses not specified on the IP exception list will receive a response consistent with those sent when the instance is in maintenance mode.

{% endif %}

## Enabling maintenance mode immediately or scheduling a maintenance window for a later time

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the top navigation bar, click **Maintenance**.

   ![Screenshot of the header of the {% data variables.enterprise.management_console %}. A tab, labeled "Maintenance", is highlighted with an orange outline.](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Under "Enable and schedule", {% ifversion custom-maintenance-mode-message %}select **Enable maintenance mode**, then {% endif %}decide whether to enable maintenance mode immediately or to schedule a maintenance window for a future time.
    * To enable maintenance mode immediately, select the dropdown menu and click **now**.
    * To schedule a maintenance window for a future time, select the dropdown menu and click a start time.
{% data reusables.enterprise_management_console.custom-maintenance-message %}
{% ifversion custom-maintenance-mode-message %}1. When you're satisfied with the timing of the window and the optional message, click **Save**. If you selected "now", your instance will be put into maintenance mode immediately.
{% else %}1. When you're satisfied with the timing of the window, select the checkbox next to "Enable maintenance mode". If you selected "now", your instance will be put into maintenance mode immediately.{% endif %}

{% ifversion ip-exception-list %}

## Validating changes in maintenance mode using the IP exception list

The IP exception list provides controlled and restricted access to {% data variables.location.product_location %}, which is ideal for initial validation of server health following a maintenance operation. Once enabled, {% data variables.location.product_location %} will be taken out of maintenance mode and available only to the configured IP addresses. The maintenance mode checkbox will be updated to reflect the change in state.

If you re-enable maintenance mode, the IP exception list will be disabled and {% data variables.location.product_location %} will return to maintenance mode. If you just disable the IP exception list, {% data variables.location.product_location %} will return to normal operation.

You can also use a command-line utility to configure the IP exception list. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the top navigation bar, click **Maintenance**, then confirm maintenance mode is already enabled.

   ![Screenshot of the header of the {% data variables.enterprise.management_console %}. A tab, labeled "Maintenance", is highlighted with an orange outline.](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Under "Enable and configure IP exception list", select **Enable IP exception list**.
1. To the right of the checkbox for enabling the list, type a valid list of space-separated IP addresses or CIDR blocks that should be allowed to access {% data variables.location.product_location %}.
{% data reusables.enterprise_management_console.custom-maintenance-message %}
1. Click **Save**.

{% endif %}

{% ifversion maintenance-management-api %}

## Managing maintenance mode using the REST API

You can manage maintenance mode on {% data variables.location.product_location %} using the REST API. For more information, see "[AUTOTITLE](/rest/enterprise-admin/manage-ghes#get-the-status-of-maintenance-mode)."

{% else %}

## Scheduling maintenance mode with the {% data variables.product.prodname_enterprise_api %}

You can schedule maintenance for different times or dates with the {% data variables.product.prodname_enterprise_api %}. For more information, see "[AUTOTITLE](/rest/enterprise-admin/management-console#enable-or-disable-maintenance-mode)."

{% endif %}

{% ifversion ghes-manage-api-cli-extension %}

## Managing maintenance mode using the {% data variables.product.prodname_cli %}

You can manage maintenance mode on {% data variables.location.product_location %} using the {% data variables.product.prodname_cli %} `gh es` extension. For more information, see the GH ES CLI usage documentation for [`gh es maintenance set`](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-maintenance-set) and [`gh es maintenance get`](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-maintenance-get).

For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli)".

{% endif %}

{% ifversion custom-maintenance-mode-message %}

## Managing maintenance mode using SSH

If you have SSH access, you can use the `ghe-maintenance` command line utility to can set or unset maintenance mode for a {% data variables.product.product_name %} instance with one node, or multiple nodes in a high-availability configuration. For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)" and "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-maintenance)."

## Managing maintenance mode for a cluster using SSH

If you have SSH access to your {% data variables.product.prodname_ghe_server %} instance, you can use the `ghe-cluster-maintenance` command line utility to set or unset maintenance mode for every node in a cluster. For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)" and "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-cluster-maintenance)."

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
{%- ifversion custom-maintenance-mode-message %}
$ ghe-cluster-maintenance -s "MESSAGE"
# Sets maintenance mode with a custom message
$ ghe-cluster-maintenance -m "MESSAGE"
# Updates the custom message
{%- endif %}
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```

{% endif %}
