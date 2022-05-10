---
title: Sincronização de equipes
intro: 'The Team synchronization API allows you to manage connections between {% data variables.product.product_name %} teams and external identity provider (IdP) groups.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Team synchronization API

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe. O token que você usa para efetuar a autenticação também deverá ser autorizado para uso com o provedor de IdP (SSO). Para obter mais informações, consulte "<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">Autorizando um token de acesso pessoal para uso com uma organização de logon único SAML</a>".

Você pode gerenciar os integrantes da equipe do GitHub através do seu IdP com a sincronização de equipe. A sincronização de equipe deve estar habilitada para usar a API de sincronização de equipe. Para obter mais informações, consulte "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipes entre seu provedor de identidade e o GitHub</a>".

{% note %}

**Observação:** A API de sincronização de equipe não pode ser usada com {% data variables.product.prodname_emus %}. Para saber mais sobre como gerenciar um {% data variables.product.prodname_emu_org %}, consulte "[API de grupos externos](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
