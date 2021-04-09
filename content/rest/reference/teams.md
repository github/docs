---
title: Teams
redirect_from:
  - /v3/teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

This API is only available to authenticated members of the team's [organization](/rest/reference/orgs). OAuth access tokens require the `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% data variables.product.prodname_dotcom %}  generates the team's `slug` from the team `name`.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Discussions

The team discussions API allows you to get, create, edit, and delete discussion posts on a team's page. You can use team discussions to have conversations that are not specific to a repository or project. Any member of the team's [organization](/rest/reference/orgs) can create and read public discussion posts. For more details, see "[About team discussions](//organizations/collaborating-with-your-team/about-team-discussions/)." To learn more about commenting on a discussion post, see the [team discussion comments API](/rest/reference/teams#discussion-comments). This API is only available to authenticated members of the team's organization.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Discussion comments

The team discussion comments API allows you to get, create, edit, and delete discussion comments on a [team discussion](/rest/reference/teams#discussions) post. Any member of the team's [organization](/rest/reference/orgs) can create and read comments on a public discussion. For more details, see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions/)." This API is only available to authenticated members of the team's organization.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussion-comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Members

This API is only available to authenticated members of the team's organization. OAuth access tokens require the `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
{% note %}

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Synchronizing teams between your identity provider and GitHub</a>."

{% endnote %}

{% endif %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
## Team synchronization

The Team Synchronization API allows you to manage connections between {% data variables.product.product_name %} teams and external identity provider (IdP) groups. To use this API, the authenticated user must be a team maintainer or an owner of the organization associated with the team. The token you use to authenticate will also need to be authorized for use with your IdP (SSO) provider. For more information, see "<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">Authorizing a personal access token for use with a SAML single sign-on organization</a>."

You can manage GitHub team members through your IdP with team synchronization. Team synchronization must be enabled to use the Team Synchronization API. For more information, see "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Synchronizing teams between your identity provider and GitHub</a>."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'team-sync' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
