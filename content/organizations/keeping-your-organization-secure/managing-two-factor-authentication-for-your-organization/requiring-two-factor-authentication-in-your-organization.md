---
title: Requiring two-factor authentication in your organization
intro: 'Organization owners can require {% ifversion fpt or ghec %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to enable two-factor authentication for their personal accounts, making it harder for malicious actors to access an organization''s repositories and settings.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
product: 'Requiring two-factor authentication is available to organizations on a {% data variables.product.prodname_free_team %} or {% data variables.product.prodname_team %} plan, as well as organizations on {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}. With {% data variables.product.prodname_ghe_cloud %}, this feature is unavailable for organizations in an {% data variables.enterprise.prodname_emu_enterprise %}.'
---

{% ifversion mandatory-2fa-dotcom-contributors %}
{% data reusables.two_fa.mandatory-2fa-contributors-2023 %}
{% endif %}

## About two-factor authentication for organizations

{% data reusables.two_fa.about-2fa %} You can require all {% ifversion fpt or ghec %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} in your organization to enable two-factor authentication on {% data variables.product.product_name %}. For more information about two-factor authentication, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa)."

{% ifversion fpt or ghec %}

You can also require two-factor authentication for organizations in an enterprise. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)."

{% note %}

**Note**: Some of the users in your organization may have been selected for mandatory two-factor authentication enrollment by  {% data variables.product.prodname_dotcom_the_website %}, but it has no impact on how you enable the 2FA requirement for your organization. If you enable the 2FA requirement in your organization, all users without 2FA currently enabled will be removed from your organization, including those that are required to enable it by {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

{% endif %}

{% warning %}

**Warnings:**

* When you require use of two-factor authentication for your organization, {% ifversion fpt or ghec %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable two-factor authentication for their personal account within three months of their removal from your organization. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."
* You will also need to enable 2FA for unattended or shared access accounts, such as bots and service accounts. If you do not configure 2FA for these unattended accounts after you've enabled required two-factor authentication, the accounts will be removed from the organization and lose access to their repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/managing-bots-and-service-accounts-with-two-factor-authentication)."
* If an organization owner, member,{% ifversion fpt or ghec %} billing manager,{% endif %} or outside collaborator disables 2FA for their personal account after you've enabled required two-factor authentication, they will automatically be removed from the organization.
* If you're the sole owner of an organization that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the organization.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## Prerequisites

Before you can require {% ifversion fpt or ghec %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to use two-factor authentication, you must enable two-factor authentication for your account on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa)."

Before you require use of two-factor authentication, we recommend notifying {% ifversion fpt or ghec %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} and asking them to set up 2FA for their accounts. You can see if members and outside collaborators already use 2FA. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)."

## Requiring two-factor authentication in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% ifversion fpt or ghec %}
1. If any members or outside collaborators are removed from the organization, we recommend sending them an invitation that can reinstate their former privileges and access to your organization. They must enable two-factor authentication before they can accept your invitation.
{% endif %}

## Viewing people who were removed from your organization

To view people who were automatically removed from your organization for non-compliance when you required two-factor authentication, you can search your organization's audit log for people removed from your organization. The audit log event will show if a person was removed for 2FA non-compliance. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
1. Enter your search query. To search for:
    * Organization members removed, use `action:org.remove_member` in your search query
    * Outside collaborators removed, use `action:org.remove_outside_collaborator` in your search query{% ifversion fpt or ghec %}
    * Billing managers removed, use `action:org.remove_billing_manager`in your search query{% endif %}

 You can also view people who were removed from your organization by using a [time frame](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#search-based-on-time-of-action) in your search.

## Helping removed members and outside collaborators rejoin your organization

If any members or outside collaborators are removed from the organization when you enable required use of two-factor authentication, they'll receive an email notifying them that they've been removed. They should then enable 2FA for their personal account, and contact an organization owner to request access to your organization.

## Further reading

* "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)"
* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa)"
* "[AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/reinstating-a-former-outside-collaborators-access-to-your-organization)"
