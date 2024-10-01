---
title: About OAuth app access restrictions
intro: 'Organizations can choose which {% data variables.product.prodname_oauth_apps %} have access to their repositories and other resources by enabling {% data variables.product.prodname_oauth_app %} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
  - /organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_oauth_app %} restrictions'
---

## About {% data variables.product.prodname_oauth_app %} access restrictions

{% data reusables.apps.oauth-app-access-restrictions %}

{% ifversion limit-app-access-requests %}
{% data reusables.organizations.restricted-app-access-requests %}{% endif %}

Even if you restrict {% data variables.product.prodname_oauth_apps %} access in your organization, users can still authorize internal {% data variables.product.prodname_oauth_apps %} apps and use them to access data from the organization. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/internal-oauth-apps)."

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tip**: When an organization has not set up {% data variables.product.prodname_oauth_app %} access restrictions, any {% data variables.product.prodname_oauth_app %} authorized by an organization member can also access the organization's private resources.

{% endtip %}

{% ifversion fpt %}
To further protect your organization's resources, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes security features like SAML single sign-on. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## Setting up {% data variables.product.prodname_oauth_app %} access restrictions

When an organization owner sets up {% data variables.product.prodname_oauth_app %} access restrictions for the first time:

* **Applications that are owned by the organization** are automatically given access to the organization's resources.
* **{% data variables.product.prodname_oauth_apps %}** immediately lose access to the organization's resources.
* **SSH keys created before February 2014** immediately lose access to the organization's resources (this includes user and deploy keys).
* **SSH keys created by {% data variables.product.prodname_oauth_apps %} during or after February 2014** immediately lose access to the organization's resources.
* **Hook deliveries from private organization repositories** will no longer be sent to unapproved {% data variables.product.prodname_oauth_apps %}.
* **API access** to private organization resources is not available for unapproved {% data variables.product.prodname_oauth_apps %}. In addition, there are no privileged create, update, or delete actions on public organization resources.
* **Hooks created by users and hooks created before May 2014** will not be affected.
* **Private forks of organization-owned repositories** are subject to the organization's access restrictions.

## Resolving SSH access failures

When an SSH key created before February 2014 loses access to an organization with {% data variables.product.prodname_oauth_app %} access restrictions enabled, subsequent SSH access attempts will fail. Users will encounter an error message directing them to a URL where they can approve the key or upload a trusted key in its place.

## Webhooks

When an {% data variables.product.prodname_oauth_app %} is granted access to the organization after restrictions are enabled, any pre-existing webhooks created by that {% data variables.product.prodname_oauth_app %} will resume dispatching.

When an organization removes access from a previously-approved {% data variables.product.prodname_oauth_app %}, any pre-existing webhooks created by that application will no longer be dispatched (these hooks will be disabled, but not deleted).

## Re-enabling access restrictions

If an organization disables {% data variables.product.prodname_oauth_app %} access application restrictions, and later re-enables them, previously approved {% data variables.product.prodname_oauth_app %} are automatically granted access to the organization's resources.

## Further reading

* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)"
* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization)"
* "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-github-apps-installed-in-your-organization)"
* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps)"
* "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)"
