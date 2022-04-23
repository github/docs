---
title: Integrantes
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Esta API só está disponível para os integrantes autenticados da organização da equipe. Os tokens de acesso do OAuth exigem o escopo `read:org` [](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

{% ifversion fpt or ghes or ghec %}
{% note %}

**Observação:** Quando você tiver configurado a sincronização da equipe para uma equipe com o provedor de identidade (IdP) da sua organização, você receberá uma mensagem de erro se tentar usar a API para fazer alterações na associação da equipe. Se você tiver acesso para administrar a associação do grupo em seu IdP, você pode administrar a associação da equipe do GitHub através do seu provedor de identidade, que adiciona e remove automaticamente os integrantes da equipe em uma organização. Para obter mais informações, consulte "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipes entre seu provedor de identidade e o GitHub</a>".

{% endnote %}

{% endif %}
