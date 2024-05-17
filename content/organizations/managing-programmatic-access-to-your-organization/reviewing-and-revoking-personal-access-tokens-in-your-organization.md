---
title: Reviewing and revoking personal access tokens in your organization
intro: 'Organization owners can review the {% data variables.product.pat_v2 %}s that can access their organization. They can also revoke access of specific {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2
shortTitle: Review token access
---

{% data reusables.user-settings.pat-v2-org-opt-in %}

## About reviewing and revoking  {% data variables.product.pat_v2 %}s

Organization owners can view all {% data variables.product.pat_v2 %}s that can access resources owned by the organization. Organization owners can also revoke access by {% data variables.product.pat_v2 %}s. When a {% data variables.product.pat_v2 %} is revoked, SSH keys created by the token will continue to work and the token will still be able to read public resources within the organization.

When a token is revoked, the user who created the token will receive an email notification.

Organization owners can only view and revoke {% data variables.product.pat_v2 %}s, not {% data variables.product.pat_v1_plural %}. Unless the organization {% ifversion ghec or ghes %}or enterprise {% endif %}has restricted access by {% data variables.product.pat_v1_plural %}, any {% data variables.product.pat_v1 %} can access organization resources until the token expires. For more information about restricting access by {% data variables.product.pat_v1_plural %}, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)"{% ifversion ghec or ghes %} and "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)"{% endif %}.

{% ifversion ghec %} Organization owners can also view and revoke {% data variables.product.pat_v1_plural %} if their organization requires SAML single-sign on. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials)". For more information about using the REST API to do this, see "[List SAML SSO authorizations for an organization](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization)" and "[Remove a SAML SSO authorization for an organization](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization)."{% endif %}

{% ifversion pat-v2-org-admin-api %}

Organization owners can also use the REST API to review and revoke {% data variables.product.pat_v2 %}s. These endpoints can only be called by {% data variables.product.prodname_github_apps %}, and cannot be called with {% data variables.product.pat_generic_plural %} or {% data variables.product.prodname_oauth_apps %}. For more information, see "[AUTOTITLE](/rest/orgs/orgs#list-fine-grained-personal-access-tokens-with-access-to-organization-resources)."

{% endif %}

## Reviewing and revoking  {% data variables.product.pat_v2 %}s

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Active tokens**. Any {% data variables.product.pat_v2 %}s that can access your organization will be displayed.
1. Click the name of the token that you want review or revoke.
1. Review the access and permissions that the token has.
1. To revoke access by the token to the organization, click **Revoke**.

Alternatively, you can revoke multiple tokens at once:

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" %} {% data variables.product.pat_generic_caps %}s**, click **Active tokens**. Any {% data variables.product.pat_v2 %}s that can access your organization will be displayed.
{% data reusables.user-settings.patv2-filters %}
1. Select each token that you want to revoke.
1. Select the **tokens selected...** dropdown menu and click **Revoke...**.
