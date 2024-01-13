---
title: Troubleshooting access to the Management Console
shortTitle: Troubleshoot Management Console
intro: 'You can troubleshoot access problems for the {% data variables.enterprise.management_console %}.'
redirect_from:
  - /admin/configuration/administering-your-instance-from-the-management-console/troubleshooting-access-to-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Authentication
  - SSH
  - Troubleshooting
---

## About problems with {% data variables.enterprise.management_console %} access

If you experience problems accessing the Management Console, you can try the following troubleshooting steps.

## Unlocking the {% data variables.enterprise.management_console %} after failed login attempts

The {% data variables.enterprise.management_console %} locks after {% ifversion enterprise-authentication-rate-limits %}the number of failed login attempts configured by your authentication policies. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/managing-access-to-the-management-console#configuring-rate-limits-for-authentication-to-the-management-console)."{% else %}ten failed login attempts are made in the span of ten minutes. You must wait for the login screen to automatically unlock before attempting to log in again. The login screen automatically unlocks as soon as the previous ten minute period contains fewer than ten failed login attempts. The counter resets after a successful login occurs.{% endif %}

{% ifversion enterprise-management-console-multi-user-auth %}

### Unlocking the root site administrator account

{% endif %}

{% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

{% ifversion enterprise-management-console-multi-user-auth %}

### Unlocking a {% data variables.enterprise.management_console %} user account

The root site administrator can unlock access to the {% data variables.enterprise.management_console %} for other user accounts.

{% data reusables.enterprise_site_admin_settings.sign-in-as-root-administrator %}
{% data reusables.enterprise_site_admin_settings.click-user-management %}
1. Locked user accounts will appear as "State: blocked". To unblock the user and allow authentication, to the right of the user's details, click {% octicon "law" aria-label="Unblock user" %}.

{%- endif %}

## Troubleshooting failed connections to the {% data variables.enterprise.management_console %}

If you cannot connect to the {% data variables.enterprise.management_console %} on {% data variables.location.product_location %}, you can review the following information to troubleshoot the problem.

### Error: "Your session has expired" for connections through a load balancer

If you access {% data variables.location.product_location %} through a load balancer and connections to the {% data variables.enterprise.management_console %} fail with a message that your session has expired, you may need to reconfigure your load balancer. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)."
