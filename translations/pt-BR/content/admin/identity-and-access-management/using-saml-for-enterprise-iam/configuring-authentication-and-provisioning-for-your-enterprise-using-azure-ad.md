---
title: Configurar a autenticação e provisionamento para sua empresa usando o Azure AD
shortTitle: Configure with Azure AD
intro: 'Você pode usar um locatário no Azure AD (Azure Active Directory) como um IdP (provedor de identidade) para gerenciar de modo centralizado a autenticação e o provisionamento de usuários de {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
ms.openlocfilehash: 10b6fdaa2014836e7a709bc94920dea6331ed030
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107506'
---
## Sobre autenticação e provisionamento de usuário com Azure AD

O Azure Active Directory (Azure AD) é um serviço da Microsoft que permite gerenciar centralmente as contas de usuários e acessar aplicativos da web. Para obter mais informações, confira [O que é o Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) no Microsoft Docs.

Para gerenciar identidade e acesso para {% data variables.product.product_name %}, você pode usar um inquilino no Azure AD como um IdP de SAML para autenticação. Você também pode configurar o Azure AD para fornecer contas automaticamente e acessar a associação com o SCIM, o que permite criar usuários do {% data variables.product.product_name %} e gerenciar os membros da equipe e da organização por meio do locatário do Azure AD.

{% data reusables.scim.ghes-beta-note %}

Depois de habilitar o SSO de SAML e o SCIM para o {% data variables.product.product_name %} usando o Azure AD, você poderá realizar as ações a seguir no locatário do Azure AD.

* Atribuir o aplicativo do {% data variables.product.product_name %} no Azure AD a uma conta de usuário para criar e permitir acesso automaticamente a uma conta de usuário correspondente no {% data variables.product.product_name %}.
* Desatribuir o aplicativo do {% data variables.product.product_name %} de uma conta de usuário no Azure AD para desativar a conta de usuário correspondente no {% data variables.product.product_name %}.
* Atribuir o aplicativo do {% data variables.product.product_name %} a um grupo do IdP no Azure AD para criar e permitir acesso conceder a contas de usuário no {% data variables.product.product_name %} a todos os membros do grupo do IdP. Além disso, o grupo do IdP está disponível no {% data variables.product.product_name %} para conexão com uma equipe e a organização principal.
* Desatribuir o aplicativo do {% data variables.product.product_name %} de um grupo do IdP para desativar as contas de usuário do {% data variables.product.product_name %} de todos os usuários do IdP que tinham acesso somente por meio desse grupo do IdP e remover os usuários da organização principal. O grupo IdP será desconectado de qualquer equipe em {% data variables.product.product_name %}.

Para obter mais informações de como gerenciar a identidade e o acesso da empresa em {% data variables.location.product_location %}, confira "[Como gerenciar a identidade e o acesso da empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)". Para obter mais informações sobre como sincronizar equipes com grupos de IdP, confira "[Como sincronizar uma equipe com um grupo de provedores de identidade](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)".

## Pré-requisitos

- Para configurar o provisionamento de autenticação e usuário para {% data variables.product.product_name %} usando o Azure AD, você deve ter uma conta do Azure AD e um inquilino. Para obter mais informações, confira o [site do Azure AD](https://azure.microsoft.com/free/active-directory) e o [Guia de Início Rápido: Criar um locatário do Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) no Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.assert-the-administrator-attribute %} Para obter mais informações sobre como incluir o atributo `administrator` na declaração SAML do Azure AD, confira [Como personalizar declarações emitidas no token SAML para aplicativos empresariais](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) no Microsoft Docs.

- {% data reusables.saml.create-a-machine-user %}

## Configurar autenticação e provisionamento de usuário com Azure AD

No locatário do Azure AD, adicione o aplicativo do {% data variables.product.product_name %} e configure o provisionamento.

{% ifversion ghae %}

1. No Azure AD, adicione {% data variables.enterprise.ae_azure_ad_app_link %} ao locatário e configure o logon único. Para obter mais informações, confira [Tutorial: integração do SSO (logon único) do Azure Active Directory ao {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) no Microsoft Docs.

1. No {% data variables.product.product_name %}, insira os detalhes do locatário do Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Se você já configurou SSO de SAML para {% data variables.location.product_location %} usando outro IdP e quer usar o Azure AD, edite a configuração. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilitar provisionamento do usuário em {% data variables.product.product_name %} e configurar provisionamento do usuário no Azure AD. Para obter mais informações, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% elsif scim-for-ghes %}

1. No locatário do Azure AD, na barra lateral esquerda, clique em **Provisionamento**.

1. Em "URL do locatário", digite a URL completa do ponto de extremidade do SCIM em {% data variables.location.product_location %}. Para obter mais informações, confira "[SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls)" na documentação da API REST.

1. Em "Token Secreto", digite o {% data variables.product.pat_v1 %} que você criou na etapa 4 de "[Como configurar o provisionamento de usuários com o SCIM na empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

1. Para garantir uma conexão bem-sucedida do Azure AD com a {% data variables.location.product_location %}, clique em **Testar conectividade**.

1. Depois de garantir uma conexão bem-sucedida, na parte superior da página, clique em **Salvar**.

{% endif %}
