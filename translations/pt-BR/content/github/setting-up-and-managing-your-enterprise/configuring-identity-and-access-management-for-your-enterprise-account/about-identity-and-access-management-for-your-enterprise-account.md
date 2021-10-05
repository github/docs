---
title: Sobre a identidade e gestão de acesso para a sua conta corporativa
intro: 'Você pode gerenciar centralmente o acesso aos recursos da sua empresa, associação da organização da equipe usando seu provedor de identidade (IdP).'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  fpt: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
shortTitle: IAM para a sua empresa
---

## Sobre a identidade e gestão de acesso para a sua conta corporativa

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

Depois de habilitar o SSO do SAML, dependendo do IdP que você usar, você poderá habilitar as funcionalidades adicionais de gerenciamento de identidade e acesso. {% data reusables.scim.enterprise-account-scim %}

Se você usar o Azure AD como seu IDP, você poderá usar a sincronização de equipe para gerenciar a associação de equipe em cada organização. {% data reusables.identity-and-permissions.about-team-sync %} Para obter mais informações, consulte "[Gerenciar a sincronização de equipes para organizações na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)".

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## IdPs compatíveis

Nós testamos e oferecemos compatibilidade oficial os seguintes IdPs. Para o SSO do SAML, oferecemos suporte limitado a todos os provedores de identidade que implementam o padrão SAML 2.0. Para obter mais informações, consulte a [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

| IdP                                          |                              SAML                              |                   Sincronização de equipes                    |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

