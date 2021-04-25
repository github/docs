---
title: About OAuth App access restrictions
intro: 'Organizations can choose which {% data variables.product.prodname_oauth_app %}s have access to their repositories and other resources by enabling {% data variables.product.prodname_oauth_app %} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

When {% data variables.product.prodname_oauth_app %} access restrictions are enabled, organization members cannot authorize {% data variables.product.prodname_oauth_app %} access to organization resources. Organization members can request owner approval for {% data variables.product.prodname_oauth_app %}s they'd like to use, and organization owners receive a notification of pending requests.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tip**: When an organization has not set up {% data variables.product.prodname_oauth_app %} access restrictions, any {% data variables.product.prodname_oauth_app %} authorized by an organization member can also access the organization's private resources.

{% endtip %}

### Setting up {% data variables.product.prodname_oauth_app %} access restrictions

When an organization owner sets up {% data variables.product.prodname_oauth_app %} access restrictions for the first time:

- **Applications that are owned by the organization** are automatically given access to the organization's resources.
- **{% data variables.product.prodname_oauth_app %}s** immediately lose access to the organization's resources.
- **SSH keys created before February 2014** immediately lose access to the organization's resources (this includes user and deploy keys).
- **SSH keys created by {% data variables.product.prodname_oauth_app %}s during or after February 2014** immediately lose access to the organization's resources.
- **Hook deliveries from private organization repositories** will no longer be sent to unapproved {% data variables.product.prodname_oauth_app %}s.
- **API access** to private organization resources is not available for unapproved {% data variables.product.prodname_oauth_app %}s. In addition, there are no privileged create, update, or delete actions on public organization resources.
- **Hooks created by users and hooks created before May 2014** will not be affected.
- **Private forks of organization-owned repositories** are subject to the organization's access restrictions.

### Resolving SSH access failures

When an SSH key created before February 2014 loses access to an organization with {% data variables.product.prodname_oauth_app %} access restrictions enabled, subsequent SSH access attempts will fail. Users will encounter an error message directing them to a URL where they can approve the key or upload a trusted key in its place.

### Webhooks

When an {% data variables.product.prodname_oauth_app %} is granted access to the organization after restrictions are enabled, any pre-existing webhooks created by that {% data variables.product.prodname_oauth_app %} will resume dispatching.

When an organization removes access from a previously-approved {% data variables.product.prodname_oauth_app %}, any pre-existing webhooks created by that application will no longer be dispatched (these hooks will be disabled, but not deleted).

### Re-enabling access restrictions

If an organization disables {% data variables.product.prodname_oauth_app %} access application restrictions, and later re-enables them, previously approved {% data variables.product.prodname_oauth_app %} are automatically granted access to the organization's resources.

### Дополнительная литература

- "[Enabling {% data variables.product.prodname_oauth_app %} access restrictions for your organization](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Approving {% data variables.product.prodname_oauth_app %}s for your organization](/articles/approving-oauth-apps-for-your-organization)"
- "[Reviewing your organization's installed integrations](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Denying access to a previously approved {% data variables.product.prodname_oauth_app %} for your organization](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Disabling {% data variables.product.prodname_oauth_app %} access restrictions for your organization](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Requesting organization approval for {% data variables.product.prodname_oauth_app %}s](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Authorizing {% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps)"
