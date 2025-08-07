---
title: Disabling SCIM provisioning for users
shortTitle: Disable SCIM provisioning
intro: 'You can disable SCIM provisioning for your enterprise''s user accounts.'
permissions: Site administrators
versions:
  feature: scim-for-ghes-public-beta
topics:
  - Accounts
  - Enterprise
---

{% data reusables.scim.ghes-beta-note %}

## How do I disable SCIM?

To disable SCIM provisioning while keeping SAML on:

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Deselect **Enable SCIM configuration**.

When this happens, users will still be able to use SAML single sign-on through your identity provider, but SCIM provisioning will no longer work. Instead, SAML JIT provisioning will be used again. For more information on SAML provisioning, see [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

If for some reason you no longer have access to your instance, you will need to sign in to the management console and enable built-in authentication. For more information, see [AUTOTITLE](/admin/managing-iam/using-built-in-authentication/configuring-built-in-authentication#configuring-built-in-authentication). Once this is complete, you can sign in to your instance with the SCIM setup user you created when enabling SCIM, and uncheck the **Enable SCIM configuration** checkbox described above.

## How else can be SCIM disabled?

In addition to directly disabling SCIM provisioning on your instance, SCIM will be disabled if any of the following actions are taken:

* The **SAML** radio button is unselected in the "Authentication" section of the Management Console.
* The SAML **Issuer** or **Single sign-on URL** field is updated in the "Authentication" section of the Management Console.

## What happens if I disable SCIM?

When SCIM is disabled on {% data variables.product.prodname_ghe_server %}:

* In your instance's [audit logs](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise), you should expect to see a "business.disable_open_scim" event.
* All linked SCIM identities and SCIM-provisioned groups will be deleted from the instance.
* Requests to the SCIM API endpoints on your instance will no longer succeed.
* All SCIM external identities on {% data variables.product.prodname_ghe_server %} will be deleted.
* All user accounts will remain with the same usernames, and they will not be suspended when SCIM is disabled.
* All of the external groups that were previously provisioned by SCIM will be deleted.
* All user accounts, including SCIM-provisioned user accounts, will remain on the instance and will not be suspended.
* Site administrators will be able to manage the lifecycle of SCIM-provisioned users, such as suspension and deletion, from the site admin dashboard.
* Users will still be able to sign on via SAML, if enabled.
* The "Suspended Members" page in your enterprise settings will no longer be present. Suspended members can still be seen in the [Site Admin dashboard](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users#viewing-suspended-users-in-the-site-admin-dashboard)
{%- ifversion scim-for-ghes-ga %}
* You will be able to see the "SAML authentication" section on the `https://HOSTNAME/users/USER/security` site admin page for users. If any SAML mappings were previously created for users on the {% data variables.product.prodname_ghe_server %} before SCIM was enabled, it will be possible to once again view and update them in this section.
{%- endif %}
