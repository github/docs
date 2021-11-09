---
title: Equipes
intro: 'Com a API de Equipes, você pode criar e gerenciar equipes na sua organização {% data variables.product.product_name %}.'
redirect_from:
  - /v3/teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Esta API só está disponível para os integrantes autenticados da [organização](/rest/reference/orgs) da equipe. Os tokens de acesso do OAuth exigem o escopo `read:org` [](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% data variables.product.prodname_dotcom %}  gera o `slug` da equipe a partir do `nome` da equipe.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Discussões

A API de discussões de equipe permite que você obtenha, crie, edite e exclua postagens de discussão na página de uma equipe. Você pode usar discussões da equipe para ter conversas que não são específicas para um repositório ou projeto. Qualquer integrante da [organização](/rest/reference/orgs) da equipe pode criar e ler posts de discussão públicos. Para obter mais informações, consulte "[Sobre discussões de equipe](//organizations/collaborating-with-your-team/about-team-discussions/)". Para aprender mais sobre comentários em uma publicação de discussão, consulte [a API de comentários de discussão em equipe](/rest/reference/teams#discussion-comments). Esta API só está disponível para os integrantes autenticados da organização da equipe.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentários da discussão

A API de comentários de discussão em equipe permite que você obtenha, crie, edite e exclua comentários de discussão em um post de [discussão de equipe](/rest/reference/teams#discussions). Qualquer integrante da organização da [organização](/rest/reference/orgs) da equipe pode criar e ler comentários em uma discussão pública. Para obter mais informações, consulte "[Sobre discussões de equipe](/organizations/collaborating-with-your-team/about-team-discussions/)". Esta API só está disponível para os integrantes autenticados da organização da equipe.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussion-comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Integrantes

Esta API só está disponível para os integrantes autenticados da organização da equipe. Os tokens de acesso do OAuth exigem o escopo `read:org` [](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

{% ifversion fpt or ghes or ghec %}
{% note %}

**Observação:** Quando você tiver configurado a sincronização da equipe para uma equipe com o provedor de identidade (IdP) da sua organização, você receberá uma mensagem de erro se tentar usar a API para fazer alterações na associação da equipe. Se você tiver acesso para administrar a associação do grupo em seu IdP, você pode administrar a associação da equipe do GitHub através do seu provedor de identidade, que adiciona e remove automaticamente os integrantes da equipe em uma organização. Para obter mais informações, consulte "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipes entre seu provedor de identidade e o GitHub</a>".

{% endnote %}

{% endif %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion ghec %}
## External groups

The external groups API allows you to view the external identity provider groups that are available to your organization and manage the connection between external groups and teams in your organization.

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe.

{% note %}

**Notas:**

- The external groups API is only available for organizations that are part of a enterprise using {% data variables.product.prodname_emus %}. For more information, see "[About Enterprise Managed Users](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
- If your organization uses team synchronization, you can use the Team Synchronization API. For more information, see "[Team synchronization API](#team-synchronization)."

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'external-groups' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Sincronização de equipes

A API de Sincronização da Equipe permite que você gerencie as conexões entre equipes de {% data variables.product.product_name %} e grupos de provedor de identidade externo (IdP). Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe. O token que você usa para efetuar a autenticação também deverá ser autorizado para uso com o provedor de IdP (SSO). Para obter mais informações, consulte "<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">Autorizando um token de acesso pessoal para uso com uma organização de logon único SAML</a>".

Você pode gerenciar os integrantes da equipe do GitHub através do seu IdP com a sincronização de equipe. A sincronização de equipe deve estar habilitada para usar a API de sincronização de equipe. Para obter mais informações, consulte "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipes entre seu provedor de identidade e o GitHub</a>".

{% note %}

**Observação:** A API de sincronização de equipe não pode ser usada com {% data variables.product.prodname_emus %}. To learn more about managing an {% data variables.product.prodname_emu_org %}, see "[External groups API](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'team-sync' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
