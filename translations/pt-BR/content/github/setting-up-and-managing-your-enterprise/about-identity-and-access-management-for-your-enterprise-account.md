---
title: Sobre a identidade e gestão de acesso para a sua conta corporativa
intro: 'Você pode gerenciar centralmente o acesso aos recursos da sua empresa, associação da organização da equipe usando seu provedor de identidade (IdP).'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - enterprise
---

### Sobre a identidade e gestão de acesso para a sua conta corporativa

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} Para obter mais informações, consulte "[Habilitar o login único SAML para organizações na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

Depois de habilitar o SSO do SAML, dependendo do IdP que você usar, você poderá habilitar as funcionalidades adicionais de gerenciamento de identidade e acesso.

{% data reusables.saml.about-user-provisioning-enterprise-account %} Para obter mais informações, consulte "[Sobre o provisionamento do usuário para organizações na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)".

Se você usar o Azure AD como seu IDP, você poderá usar a sincronização de equipe para gerenciar a associação de equipe em cada organização. {% data reusables.identity-and-permissions.about-team-sync %} Para obter mais informações, consulte "[Gerenciar a sincronização de equipes para organizações na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)".

### IdPs compatíveis

Nós testamos e oferecemos compatibilidade oficial os seguintes IdPs. Para o SSO do SAML, oferecemos suporte limitado a todos os provedores de identidade que implementam o padrão SAML 2.0. Para obter mais informações, consulte a [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

| IdP                                          |                              SAML                              |                                                                                      Provisionamento de usuários                                                                                       |                   Sincronização de equipes                    |
| -------------------------------------------- |:--------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                                                                                                                                                                        |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label= "The check icon" %} [<sup>Beta</sup>](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account) |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |

