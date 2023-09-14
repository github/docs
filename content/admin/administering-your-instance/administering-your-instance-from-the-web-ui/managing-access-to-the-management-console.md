---
title: Managing access to the Management Console
shortTitle: Manage Management Console access
intro: '{% ifversion enterprise-management-console-multi-user-auth %}You can increase the security of {% data variables.location.product_location %} by creating or deleting {% data variables.enterprise.management_console %} users. As the root site administrator, you {% else %}You {% endif %}can access the {% data variables.enterprise.management_console %} as well as configure {% data variables.enterprise.management_console %} authentication rate limits.'
redirect_from:
  - /admin/configuration/administering-your-instance-from-the-management-console/managing-access-to-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Authentication
  - SSH
  - User account
---

{% data reusables.enterprise_site_admin_settings.management-console-access %} For more information about {% data variables.enterprise.management_console %} access, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console)."

{% ifversion enterprise-management-console-multi-user-auth %}

## Types of {% data variables.enterprise.management_console %} accounts

There are two types of user accounts for the {% data variables.enterprise.management_console %} on a {% data variables.product.product_name %} instance. The root site administrator account authenticates with a password established during the initial setup of {% data variables.location.product_location %}.

The root site administrator can create additional accounts, and assign one of two roles to each.

### Root site administrator

Root site administrators have complete control over the {% data variables.enterprise.management_console %}. They can take every action in the {% data variables.enterprise.management_console %}, including creating and deleting {% data variables.enterprise.management_console %} user accounts.

Only the root site administrator can create and delete {% data variables.enterprise.management_console %} user accounts.

### {% data variables.enterprise.management_console %} user

{% data variables.enterprise.management_console %} users can perform most administrative tasks for {% data variables.location.product_location %}. For heightened security, {% data variables.enterprise.management_console %} users cannot create or delete {% data variables.enterprise.management_console %} user accounts.

Only {% data variables.enterprise.management_console %} users with the operator role can manage SSH keys.

The root site administrator can provision one of two roles for {% data variables.enterprise.management_console %} users:

- **Editor**: A {% data variables.enterprise.management_console %} user with the editor role can perform basic administrative tasks for {% data variables.location.product_location %} in the {% data variables.enterprise.management_console %}. Editors cannot add public SSH keys to the {% data variables.enterprise.management_console %} to grant administrative SSH access to the instance.
- **Operator**: A {% data variables.enterprise.management_console %} user with the operator role can perform basic administrative tasks for {% data variables.location.product_location %} in the {% data variables.enterprise.management_console %}. Users with the operator role can add SSH keys to the {% data variables.enterprise.management_console %} to grant administrative access to the instance via SSH.

## Creating or deleting a user account for the {% data variables.enterprise.management_console %}

While signed into the {% data variables.enterprise.management_console %} as the root site administrator, you can create new {% data variables.enterprise.management_console %} user accounts.

{% data reusables.enterprise_site_admin_settings.click-user-management %}
1. Click **Create user**.
1. Fill in the user's name, username, and email address.
1. Use the drop-down menu to select the user's role. You may select the editor or operator role.
1. To finish creating the user account, click **Create**. If email notifications are configured for the instance, the user will automatically receive an invitation email with access instructions for the {% data variables.enterprise.management_console %}. For more information, see "[Inviting new {% data variables.enterprise.management_console %} users](#inviting-new-management-console-users)."
1. Optionally, to delete a {% data variables.enterprise.management_console %} user account, click {% octicon "trash" aria-label="The trash symbol" %} to the right of any user account you wish to delete. Then confirm deletion.

## Inviting new {% data variables.enterprise.management_console %} users

If you have configured email for notifications for {% data variables.location.product_location %}, new {% data variables.enterprise.management_console %} users will automatically receive an invitation to complete creation of the {% data variables.enterprise.management_console %} user account. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)."

If you have not configured email notifications for {% data variables.location.product_location %}, you must manually copy the {% data variables.enterprise.management_console %} invitation link and send it to the user. The user must set a password using the link before the user can access the {% data variables.enterprise.management_console %}.

{% data reusables.enterprise_site_admin_settings.sign-in-as-root-administrator %}
{% data reusables.enterprise_site_admin_settings.click-user-management %}
1. To copy the invitation link, click {% octicon "link" aria-label="Copy invitation link" %} on any {% data variables.enterprise.management_console %} user account.
1. Send the invitation link to the {% data variables.enterprise.management_console %} user. The invitation link will lead the user through the final account setup steps.

{% endif %}

{% ifversion enterprise-authentication-rate-limits %}

## Configuring rate limits for authentication to the {% data variables.enterprise.management_console %}

You can configure the lockout time and login attempt limits for the {% data variables.enterprise.management_console %}. If you configure rate limits, the limits apply to both the root site administrator and any {% data variables.enterprise.management_console %} users.

After you configure rate limits and a user exceeds the limit, the {% data variables.enterprise.management_console %} will remain locked for the duration set by the lockout time. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Optionally, under "Lockout time", type a number of minutes to lock the {% data variables.enterprise.management_console %} after too many failed login attempts.
1. Optionally, under "Login attempt limit", type a maximum number of failed login attempts to allow before the {% data variables.enterprise.management_console %} is locked.
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}
