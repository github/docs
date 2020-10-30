---
title: Equipes
redirect_from:
  - /v3/teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

This API is only available to authenticated members of the team's [organization](/v3/orgs). OAuth access tokens require the `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% data variables.product.prodname_dotcom %}  generates the team's `slug` from the team `name`.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Discussions

The team discussions API allows you to get, create, edit, and delete discussion posts on a team's page. You can use team discussions to have conversations that are not specific to a repository or project. Any member of the team's [organization](/v3/orgs) can create and read public discussion posts. The team discussions API allows you to get, create, edit, and delete discussion posts on a team's page. You can use team discussions to have conversations that are not specific to a repository or project. This API is only available to authenticated members of the team's organization.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Discussion comments

The team discussion comments API allows you to get, create, edit, and delete discussion comments on a [team discussion](/v3/teams/discussions) post. Any member of the team's [organization](/v3/orgs) can create and read comments on a public discussion. The team discussions API allows you to get, create, edit, and delete discussion posts on a team's page. This API is only available to authenticated members of the team's organization.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussion-comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Integrantes

This API is only available to authenticated members of the team's organization. OAuth access tokens require the `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

{% note %}

**Observação:** Quando você tiver configurado a sincronização da equipe para uma equipe com o provedor de identidade (IdP) da sua organização, você receberá uma mensagem de erro se tentar usar a API para fazer alterações na associação da equipe. Se você tiver acesso para administrar a associação do grupo em seu IdP, você pode administrar a associação da equipe do GitHub através do seu provedor de identidade, que adiciona e remove automaticamente os integrantes da equipe em uma organização. Para obter mais informações, consulte "<a href="/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipes entre seu provedor de identidade e o GitHub</a>".

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Team synchronization

The Team Synchronization API allows you to manage connections between {% data variables.product.product_name %} teams and external identity provider (IdP) groups. To use this API, the authenticated user must be a team maintainer or an owner of the organization associated with the team. The token you use to authenticate will also need to be authorized for use with your IdP (SSO) provider. Para obter mais informações, consulte "<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">Autorizando um token de acesso pessoal para uso com uma organização de logon único SAML</a>".

You can manage GitHub team members through your IdP with team synchronization. Team synchronization must be enabled to use the Team Synchronization API. Para obter mais informações, consulte "<a href="/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipes entre seu provedor de identidade e o GitHub</a>".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'team-sync' %}{% include rest_operation %}{% endif %}
{% endfor %}
