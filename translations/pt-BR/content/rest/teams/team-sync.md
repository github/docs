---
title: Sincronização de equipes
intro: 'A API de sincronização de equipe permite que você gerencie as conexões entre as equipes de {% data variables.product.product_name %} e os grupos de provedor de identidade externo (IdP).'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## Sobre a API de sincronização da equipe

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe. O token que você usa para efetuar a autenticação também deverá ser autorizado para uso com o provedor de IdP (SSO). Para obter mais informações, consulte "[Autorizando um token de acesso pessoal para uso com uma organização de logon único SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

Você pode gerenciar os integrantes da equipe do GitHub através do seu IdP com a sincronização de equipe. A sincronização de equipe deve estar habilitada para usar a API de sincronização de equipe. Para obter mais informações, consulte "[Sincronizar equipes entre seu provedor de identidade e o GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% note %}

**Observação:** A API de sincronização de equipe não pode ser usada com {% data variables.product.prodname_emus %}. Para saber mais sobre como gerenciar um {% data variables.product.prodname_emu_org %}, consulte "[API de grupos externos](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
