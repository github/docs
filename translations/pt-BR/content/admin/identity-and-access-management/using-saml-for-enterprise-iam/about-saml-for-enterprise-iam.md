---
title: Sobre o SAML para IAM corporativo
shortTitle: Sobre SAML para IAM
intro: 'Você pode usar o logon único do SAML (SSO) {% ifversion ghae %}e o Sistema para Gerenciamento de Identidades de Domínio entre Domínios (SCIM) {% endif %}para gerenciar centralmente o acesso {% ifversion ghec %} às organizações pertencentes à sua empresa em {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}a {% data variables.product.product_location %}{% elsif ghae %}a {% data variables.product.product_location %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
---

## Sobre o SAML SSO para {% ifversion ghec or ghae %}sua empresa em {% endif %}{% ifversion ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Se os integrantes da sua empresa gerenciarem suas próprias contas de usuários em {% data variables.product.product_location %}, você pode configurar a autenticação SAML como uma restrição de acesso adicional para sua empresa ou organização. {% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.about-saml-enterprise-accounts %} Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Como alternativa, você pode fornecer e gerenciar as contas dos integrantes da empresa com {% data variables.product.prodname_emus %}. Para ajudar você a determinar se o SAML SSO ou {% data variables.product.prodname_emus %} é melhor para sua empresa, consulte "[Sobre autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)".

{% data reusables.enterprise-accounts.about-recovery-codes %} Para obter mais informações, consulte "[Gerenciar a códigos de recuperação para a sua empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

Depois de habilitar o SSO do SAML, dependendo do IdP que você usar, você poderá habilitar as funcionalidades adicionais de gerenciamento de identidade e acesso.

Se você usar o Azure AD como seu IDP, você poderá usar a sincronização de equipe para gerenciar a associação de equipe em cada organização. {% data reusables.identity-and-permissions.about-team-sync %} Para obter mais informações, consulte "[Gerenciar a sincronização de equipes para organizações na sua conta corporativa](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

{% note %}

**Observação:** Você não pode usar o SCIM no nível corporativo, a menos que sua empresa esteja habilitada para {% data variables.product.prodname_emus %}.

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, consulte "[Alterando sua configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

{% elsif ghes %}

O SAML SSO permite que as pessoas efetuem a autenticação e acessem {% data variables.product.product_location %} por meio de um sistema externo para gerenciamento de identidades.

O SAML é um padrão de autenticação e autorização baseado em XML. Ao configurar o SAML para {% data variables.product.product_location %}, o sistema externo para autenticação é chamado de provedor de identidade (IdP). Sua instância atua como um provedor de serviço (SP) do SAML. Para obter mais informações sobre o padrão do SAML, consulte [Linguagem de markup de declaração de segurança](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) na Wikipédia.

Para obter mais informações sobre a configuração do SAML SSO em {% data variables.product.product_name %}, consulte "[Configurando o logon único SAML para a sua empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Após configurar o aplicativo para {% data variables.product.product_name %} no seu provedor de identidade (IdP), você poderá fornecer acesso ao {% data variables.product.product_location %}, atribuindo o aplicativo a usuários e grupos no seu IdP. Para obter mais informações sobre o SAML SSO para {% data variables.product.product_name %}, consulte "[Configurar o logon único SAML para a sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Para aprender como configurar tanto o provisionamento de autenticação quanto o usuário para {% data variables.product.product_location %} com seu IdP específico, consulte "[Configurar autenticação e provisionamento com o seu provedor de identidade](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

{% endif %}

## IdPs compatíveis

{% ifversion ghec %}

Nós testamos e oferecemos compatibilidade oficial os seguintes IdPs. Para o SSO do SAML, oferecemos suporte limitado a todos os provedores de identidade que implementam o padrão SAML 2.0. Para obter mais informações, consulte a [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

| IdP                                          |                              SAML                              |                   Sincronização de equipes                    |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

Se oseu IdP oferecer suporte a declarações criptografadas, você poderá configurar asserções criptografadas no {% data variables.product.product_name %} para aumentar a segurança durante o processo de autenticação.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

Os seguintes IdPs são oficialmente compatíveis com a integração a {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## Mapeando equipes de {% data variables.product.prodname_ghe_managed %} com grupos do Okta

Se você usar o Okta como seu IdP, você poderá mapear seus grupos Okta para as equipes em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

{% endif %}

## Leia mais

- [Wiki de SAML](https://wiki.oasis-open.org/security) no site OASIS
- [Sistema para Gerenciamento de Identidade de entre Domínios: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) no site do IETF{% ifversion ghae %}
- [Restringindo o tráfego de rede para a sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}
