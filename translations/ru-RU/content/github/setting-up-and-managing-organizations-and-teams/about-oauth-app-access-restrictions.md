---
title: About OAuth App access restrictions
intro: 'Organizations can choose which {{ site.data.variables.product.prodname_oauth_app }}s have access to their repositories and other resources by enabling {{ site.data.variables.product.prodname_oauth_app }} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
---

When {{ site.data.variables.product.prodname_oauth_app }} access restrictions are enabled, organization members cannot authorize {{ site.data.variables.product.prodname_oauth_app }} access to organization resources. Organization members can request owner approval for {{ site.data.variables.product.prodname_oauth_app }}s they'd like to use, and organization owners receive a notification of pending requests.

{{ site.data.reusables.organizations.oauth_app_restrictions_default }}

{% tip %}

**Tip**: When an organization has not set up {{ site.data.variables.product.prodname_oauth_app }} access restrictions, any {{ site.data.variables.product.prodname_oauth_app }} authorized by an organization member can also access the organization's private resources.

{% endtip %}

### Setting up {{ site.data.variables.product.prodname_oauth_app }} access restrictions

When an organization owner sets up {{ site.data.variables.product.prodname_oauth_app }} access restrictions for the first time:

- **Applications that are owned by the organization** are automatically given access to the organization's resources.
- **{{ site.data.variables.product.prodname_oauth_app }}s** immediately lose access to the organization's resources.
- **SSH keys created before February 2014** immediately lose access to the organization's resources (this includes user and deploy keys).
- **SSH keys created by {{ site.data.variables.product.prodname_oauth_app }}s during or after February 2014** immediately lose access to the organization's resources.
- **Hook deliveries from private organization repositories** will no longer be sent to unapproved {{ site.data.variables.product.prodname_oauth_app }}s.
- **API access** to private organization resources is not available for unapproved {{ site.data.variables.product.prodname_oauth_app }}s. In addition, there are no privileged create, update, or delete actions on public organization resources.
- **Hooks created by users and hooks created before May 2014** will not be affected.
- **Private forks of organization-owned repositories** are subject to the organization's access restrictions.

### Resolving SSH access failures

When an SSH key created before February 2014 loses access to an organization with {{ site.data.variables.product.prodname_oauth_app }} access restrictions enabled, subsequent SSH access attempts will fail. Users will encounter an error message directing them to a URL where they can approve the key or upload a trusted key in its place.

### Webhooks

When an {{ site.data.variables.product.prodname_oauth_app }} is granted access to the organization after restrictions are enabled, any pre-existing webhooks created by that {{ site.data.variables.product.prodname_oauth_app }} will resume dispatching.

When an organization removes access from a previously-approved {{ site.data.variables.product.prodname_oauth_app }}, any pre-existing webhooks created by that application will no longer be dispatched (these hooks will be disabled, but not deleted).

### Re-enabling access restrictions

If an organization disables {{ site.data.variables.product.prodname_oauth_app }} access application restrictions, and later re-enables them, previously approved {{ site.data.variables.product.prodname_oauth_app }} are automatically granted access to the organization's resources.

### Дополнительная литература

- "[Enabling {{ site.data.variables.product.prodname_oauth_app }} access restrictions for your organization](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Approving {{ site.data.variables.product.prodname_oauth_app }}s for your organization](/articles/approving-oauth-apps-for-your-organization)"
- "[Reviewing your organization's installed integrations](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Denying access to a previously approved {{ site.data.variables.product.prodname_oauth_app }} for your organization](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Disabling {{ site.data.variables.product.prodname_oauth_app }} access restrictions for your organization](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Requesting organization approval for {{ site.data.variables.product.prodname_oauth_app }}s](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Authorizing {{ site.data.variables.product.prodname_oauth_app }}s](/articles/authorizing-oauth-apps)"
