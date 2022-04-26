---
title: Configurar a autenticação e provisionamento para sua empresa usando o Azure AD
shortTitle: Configurar com Azure AD
intro: 'Você pode usar um inquilino no Azure Active Directory (Azure AD) como um provedor de identidade (IdP) para gerenciar centralizadamente autenticação e provisionamento de usuário para {% data variables.product.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
---

## Sobre autenticação e provisionamento de usuário com Azure AD

O Azure Active Directory (Azure AD) é um serviço da Microsoft que permite gerenciar centralmente as contas de usuários e acessar aplicativos da web. Para obter mais informações, consulte [O que é Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) na documentação da Microsoft.

Para gerenciar identidade e acesso para {% data variables.product.product_name %}, você pode usar um inquilino no Azure AD como um IdP de SAML para autenticação. Você também pode configurar o Azure AD para fornecer contas automaticamente e acessar a associação com o SCIM, que permite criar usuários de {% data variables.product.prodname_ghe_managed %} e gerenciar os membros da equipe e da organização do seu inquilino do Azure AD.

Após habilitar o SAML SSO e SCIM durante {% data variables.product.prodname_ghe_managed %} usando Azure AD, você pode realizar o seguinte no seu inquilino do Azure AD.

* Atribua o aplicativo de {% data variables.product.prodname_ghe_managed %} no Azure AD a uma conta de usuário para criar e conceder acesso automaticamente a uma conta de usuário correspondente em {% data variables.product.product_name %}.
* Desatribua o aplicativo de {% data variables.product.prodname_ghe_managed %} para uma conta de usuário no Azure AD para desabilitar a conta de usuário correspondente em {% data variables.product.product_name %}.
* Atribua o aplicativo {% data variables.product.prodname_ghe_managed %} a um grupo IdP no Azure AD para criar automaticamente e conceder acesso a contas de usuário em {% data variables.product.product_name %} para todos os integrantes do grupo IdP. Além disso, o grupo IdP está disponível em {% data variables.product.prodname_ghe_managed %} para conexão com uma equipe e sua organização principal.
* Desatribua o aplicativo de {% data variables.product.prodname_ghe_managed %} de um grupo de IdP para desativar as contas de usuário de {% data variables.product.product_name %} de todos os usuários de IdP que tiveram acesso somente através desse grupo de IdP e remova os usuários da organização principal. O grupo IdP será desconectado de qualquer equipe em {% data variables.product.product_name %}.

Para obter mais informações sobre gerenciamento de identidade e acesso para a sua empresa em {% data variables.product.product_location %}, consulte "[Gerenciar identidade e acesso da sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)". Para obter mais informações sobre como sincronizar equipes com grupos de IdP, consulte "[Sincronizar uma equipe com um grupo de provedores de identidade](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)".

## Pré-requisitos

Para configurar o provisionamento de autenticação e usuário para {% data variables.product.product_name %} usando o Azure AD, você deve ter uma conta do Azure AD e um inquilino. Para obter mais informações, consulte o [site do Azure AD](https://azure.microsoft.com/free/active-directory) e o [Início rápido: Crie um inquilino do Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) na documentação da Microsoft.

{% data reusables.saml.assert-the-administrator-attribute %} Para mais informações sobre a inclusão do atributo do `administrador` na solicitação do SAML do Azure AD, consulte [Como personalizar solicitações emitidas no token SAML para aplicativos corporativos](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) na documentação da Microsoft.

{% data reusables.saml.create-a-machine-user %}

## Configurar autenticação e provisionamento de usuário com Azure AD

{% ifversion ghae %}

1. No Azure AD, adicione {% data variables.product.ae_azure_ad_app_link %} ao seu inquilino e configure logon único. Para obter mais informações, consulte o [Tutorial: integração do logon único (SSO) do Azure Active Directory com {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) na documentação da Microsoft.

1. Em {% data variables.product.prodname_ghe_managed %}, insira os detalhes para o seu inquilino do Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Se você já configurou SSO de SAML para {% data variables.product.product_location %} usando outro IdP e você deseja usar o Azure AD, você pode editar a sua configuração. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilitar provisionamento do usuário em {% data variables.product.product_name %} e configurar provisionamento do usuário no Azure AD. Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% endif %}
