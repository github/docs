---
title: Sobre a identidade e gestão de acesso para a sua empresa
shortTitle: Sobre identidade e gestão de acesso
intro: 'É possível usar o logon único SAML (SSO) e o Sistema de Gerenciamento de Identidade entre Domínios (SCIM) para gerenciar centralmente o acesso {% ifversion ghec %}a organizações pertencentes à sua empresa em {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% ifversion ghae %}para {% data variables.product.product_location %}{% endif %}.'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  ghec: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
---

## Sobre a identidade e gestão de acesso para a sua empresa

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} Para obter mais informações, consulte "[Configurando o logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Depois de habilitar o SSO do SAML, dependendo do IdP que você usar, você poderá habilitar as funcionalidades adicionais de gerenciamento de identidade e acesso. {% data reusables.scim.enterprise-account-scim %}

Se você usar o Azure AD como seu IDP, você poderá usar a sincronização de equipe para gerenciar a associação de equipe em cada organização. {% data reusables.identity-and-permissions.about-team-sync %} Para obter mais informações, consulte "[Gerenciar a sincronização de equipes para organizações na sua conta corporativa](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, consulte "[Alterando sua configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

## Sobre o {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

A configuração de {% data variables.product.prodname_emus %} para o logon único SAML e provisionamento de usuário envolve seguir um processo diferente do que você faria para uma empresa que não estivesse usando {% data variables.product.prodname_managed_users %}. Se a sua empresa usar {% data variables.product.prodname_emus %}, consute "[Configurando o logon único SAML para usuários gerenciados pela empresa](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## IdPs compatíveis

Nós testamos e oferecemos compatibilidade oficial os seguintes IdPs. Para o SSO do SAML, oferecemos suporte limitado a todos os provedores de identidade que implementam o padrão SAML 2.0. Para obter mais informações, consulte a [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

| IdP                                          |                              SAML                              |                   Sincronização de equipes                    |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Após configurar o aplicativo para {% data variables.product.product_name %} no seu IdP, você poderá conceder acesso a {% data variables.product.product_location %}, atribuindo o aplicativo a usuários e grupos no seu IdP. Para obter mais informações sobre o SAML SSO para {% data variables.product.product_name %}, consulte "[Configurar o logon único SAML para a sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Para aprender como configurar tanto o provisionamento de autenticação quanto o usuário para {% data variables.product.product_location %} com seu IdP específico, consulte "[Configurar autenticação e provisionamento com o seu provedor de identidade](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

{% endif %}

## Leia mais

- [Wiki de SAML](https://wiki.oasis-open.org/security) no site OASIS
- [Sistema para Gerenciamento de Identidade de entre Domínios: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) no site do IETF{% ifversion ghae %}
- [Restringindo o tráfego de rede para a sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}
