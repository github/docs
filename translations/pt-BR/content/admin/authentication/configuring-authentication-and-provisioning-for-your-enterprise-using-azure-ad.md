---
title: Configurar a autenticação e provisionamento para sua empresa usando o Azure AD
shortTitle: Configurar com Azure AD
intro: Você pode usar um inquilino no Azure Active Directory (Azure AD) como um provedor de identidade (IdP) para gerenciar centralizadamente autenticação e provisionamento de usuário para {% data variables.product.product_location %}.
permissions: Os proprietários das empresas podem configurar a autenticação e o provisionamento de uma empresa em {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### Sobre autenticação e provisionamento de usuário com Azure AD

O Azure Active Directory (Azure AD) é um serviço da Microsoft que permite gerenciar centralmente as contas de usuários e acessar aplicativos da web. Para obter mais informações, consulte [O que é Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) na documentação da Microsoft.

Para gerenciar identidade e acesso para {% data variables.product.product_name %}, você pode usar um inquilino no Azure AD como um IdP de SAML para autenticação. Você também pode configurar o Azure AD para fornecer automaticamente contas e acesso com o SCIM. Esta configuração permite atribuir ou desatribuir o aplicativo de {% data variables.product.prodname_ghe_managed %} para uma conta de usuário no seu inquilino do Azure AD para automaticamente criar conceder acesso ou desativar uma conta de usuário correspondente em {% data variables.product.product_name %}.

Para obter mais informações sobre gerenciamento de identidade e acesso para a sua empresa em {% data variables.product.product_location %}, consulte "[Gerenciar identidade e acesso da sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)".

### Pré-requisitos

Para configurar o provisionamento de autenticação e usuário para {% data variables.product.product_name %} usando o Azure AD, você deve ter uma conta do Azure AD e um inquilino. Para obter mais informações, consulte o [site do Azure AD](https://azure.microsoft.com/free/active-directory) e o [Início rápido: Crie um inquilino do Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) na documentação da Microsoft.

{% data reusables.saml.assert-the-administrator-attribute %} Para mais informações sobre a inclusão do atributo do `administrador` na solicitação do SAML do Azure AD, consulte [Como personalizar solicitações emitidas no token SAML para aplicativos corporativos](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) na documentação da Microsoft.

{% data reusables.saml.create-a-machine-user %}

### Configurar autenticação e provisionamento de usuário com Azure AD

{% if currentVersion == "github-ae@latest" %}

1. No Azure AD, adicione {% data variables.product.ae_azure_ad_app_link %} ao seu inquilino e configure logon único. Para obter mais informações, consulte o [Tutorial: integração do logon único (SSO) do Azure Active Directory com {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) na documentação da Microsoft.

1. Em {% data variables.product.prodname_ghe_managed %}, insira os detalhes para o seu inquilino do Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Se você já configurou SSO de SAML para {% data variables.product.product_location %} usando outro IdP e você deseja usar o Azure AD, você pode editar a sua configuração. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilitar provisionamento do usuário em {% data variables.product.product_name %} e configurar provisionamento do usuário no Azure AD. Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% endif %}
