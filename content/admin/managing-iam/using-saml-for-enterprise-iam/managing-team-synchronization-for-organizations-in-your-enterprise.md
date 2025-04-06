---
title: Managing team synchronization for organizations in your enterprise
intro: 'You can enable team synchronization between Microsoft Entra ID (previously known as Azure AD) and {% data variables.product.product_name %} to allow organizations owned by your enterprise account to manage team membership through IdP groups.'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Manage team synchronization
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## About team synchronization for enterprise accounts

If you use SAML at the enterprise level with Entra ID as your IdP, you can enable team synchronization for your enterprise account to allow organization owners and team maintainers to synchronize teams in the organizations owned by your enterprise accounts with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion team-sync-manage-org-invites %}
{% data reusables.identity-and-permissions.team-sync-org-invites %}
{% endif %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

You can also configure and manage team synchronization for an individual organization. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)."

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Prerequisites

* You must use an Entra ID commercial tenant, not Gov Cloud.
* You or your Entra ID administrator must be a Global administrator or a Privileged Role administrator in Entra ID.
* You must enforce SAML single sign-on for organizations in your enterprise account with your supported IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."
* You must authenticate to your enterprise account using SAML SSO and the supported IdP. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on)."

## Managing team synchronization for Entra ID

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
1. Review the details for the IdP tenant you want to connect to your enterprise account, then click **Approve**.
1. To disable team synchronization, under "Team synchronization", click **Disable team synchronization**.

{% ifversion team-sync-manage-org-invites %}

## Managing whether team synchronization can re-invite non-members to organizations

{% data reusables.saml.team-sync-pending-invites %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Team synchronization", select or deselect **Do not allow Team Sync to re-invite past members to organizations that were removed by an organization owner.**
{% endif %}
