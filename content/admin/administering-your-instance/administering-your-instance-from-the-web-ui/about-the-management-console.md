---
title: About the Management Console
intro: '{% data reusables.enterprise_site_admin_settings.management-console-overview %}'
redirect_from:
  - /admin/configuration/administering-your-instance-from-the-management-console/about-the-management-console
versions:
  ghes: '*'
type: overview
topics:
  - Administrator
  - Enterprise
  - Fundamentals
  - Networking
  - Monitoring
---

## About the {% data variables.enterprise.management_console %}

The {% data variables.enterprise.management_console %} allows you to manage the low-level configuration of  {% data variables.location.product_location %}. For example, you can complete initial setup, manage licensing and low-level settings, configure authentication, schedule maintenance windows, and monitor your instance.

You can always reach the {% data variables.enterprise.management_console %} using {% data variables.location.product_location %}'s IP address, even when the instance is in maintenance mode, or there is a critical application failure or hostname or SSL misconfiguration.

To access the {% data variables.enterprise.management_console %}, {% ifversion enterprise-management-console-multi-user-auth %}you can use the root site administrator password established during initial setup of {% data variables.location.product_location %} or log in as a {% data variables.enterprise.management_console %} user. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/accessing-the-management-console)." {% else %}you must use the administrator password established during initial setup of {% data variables.location.product_location %}. {% endif %}You must also be able to connect to the virtual machine host on port 8443. If you're having trouble reaching the {% data variables.enterprise.management_console %}, please check intermediate firewall and security group configurations.

The {% data variables.enterprise.management_console %} password hash is stored in `/data/user/common/secrets.conf`. If high availability or clustering is configured, the file is automatically synced from the primary node to any additional nodes. Any change to the primary's password will automatically be replicated to all of the instance's nodes. For more information about high availability, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)."

{% ifversion management-console-events-audit-log %}

When someone performs an action in the {% data variables.enterprise.management_console %} via the web interface or REST API, an event appears in the audit log. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

{% endif %}

## Examples of activities in the {% data variables.enterprise.management_console %}

In the {% data variables.enterprise.management_console %}, you can perform administrative tasks for {% data variables.location.product_location %}, including:

- **Initial setup**: Walk through the initial setup process when first launching {% data variables.location.product_location %} by visiting {% data variables.location.product_location %}'s IP address in your browser.
{%- ifversion enterprise-management-console-multi-user-auth %}
- **Identity and access management**: Improve the security of {% data variables.location.product_location %} by creating dedicated user accounts for the {% data variables.enterprise.management_console %}. The root site administrator account can control these user accounts' access by assigning either the editor or operator role. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/managing-access-to-the-management-console)."
{%- endif %}
- **Configuring authentication policies for the {% data variables.enterprise.management_console %}**: Set rate limits for login attempts, and the lockout duration if someone exceeds the rate limit. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/managing-access-to-the-management-console#configuring-rate-limits-for-authentication-to-the-management-console)."
- **Configuring basic settings for your instance**: Configure DNS, hostname, SSL, user authentication, email, monitoring services, and log forwarding on the Settings page.
- **Scheduling maintenance windows**: Take {% data variables.location.product_location %} offline while performing maintenance using the {% data variables.enterprise.management_console %} or administrative shell.
- **Troubleshooting**: Generate a support bundle or view high level diagnostic information.
- **License management**: View or update your {% data variables.product.prodname_enterprise %} license.
