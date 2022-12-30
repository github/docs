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
ms.openlocfilehash: c0291aab00df0139b0b54eda8ec34b6e20deb19f
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192678'
---
## Sobre autenticação e provisionamento de usuário com Azure AD

O Azure Active Directory (Azure AD) é um serviço da Microsoft que permite gerenciar centralmente as contas de usuários e acessar aplicativos da web. Para obter mais informações, confira [O que é o Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) no Microsoft Docs.

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

Depois de habilitar o SSO de SAML e o SCIM para o {% data variables.product.product_name %} usando o Azure AD, você poderá realizar as ações a seguir no locatário do Azure AD.

* Atribuir o aplicativo do {% data variables.product.product_name %} no Azure AD a uma conta de usuário para criar e permitir acesso automaticamente a uma conta de usuário correspondente no {% data variables.product.product_name %}.
* Desatribuir o aplicativo do {% data variables.product.product_name %} de uma conta de usuário no Azure AD para desativar a conta de usuário correspondente no {% data variables.product.product_name %}.
* Atribuir o aplicativo do {% data variables.product.product_name %} a um grupo do IdP no Azure AD para criar e permitir acesso conceder a contas de usuário no {% data variables.product.product_name %} a todos os membros do grupo do IdP. Além disso, o grupo do IdP está disponível no {% data variables.product.product_name %} para conexão com uma equipe e a organização principal.
* Desatribuir o aplicativo do {% data variables.product.product_name %} de um grupo do IdP para desativar as contas de usuário do {% data variables.product.product_name %} de todos os usuários do IdP que tinham acesso somente por meio desse grupo do IdP e remover os usuários da organização principal. O grupo IdP será desconectado de qualquer equipe em {% data variables.product.product_name %}.

Para obter mais informações de como gerenciar a identidade e o acesso da empresa em {% data variables.location.product_location %}, confira "[Como gerenciar a identidade e o acesso da empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)".

## Pré-requisitos

- Para configurar o provisionamento de autenticação e usuário para {% data variables.product.product_name %} usando o Azure AD, você deve ter uma conta do Azure AD e um inquilino. Para obter mais informações, confira o [site do Azure AD](https://azure.microsoft.com/free/active-directory) e o [Guia de Início Rápido: Criar um locatário do Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) no Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Configurar autenticação e provisionamento de usuário com Azure AD

{% ifversion ghae %}

No locatário do Azure AD, adicione o aplicativo do {% data variables.product.product_name %} e configure o provisionamento.

1. No Azure AD, adicione {% data variables.enterprise.ae_azure_ad_app_link %} ao locatário e configure o logon único. Para obter mais informações, confira [Tutorial: integração do SSO (logon único) do Azure Active Directory ao {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) no Microsoft Docs.

1. No {% data variables.product.product_name %}, insira os detalhes do locatário do Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Se você já configurou SSO de SAML para {% data variables.location.product_location %} usando outro IdP e quer usar o Azure AD, edite a configuração. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilitar provisionamento do usuário em {% data variables.product.product_name %} e configurar provisionamento do usuário no Azure AD. Para obter mais informações, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% elsif scim-for-ghes %}

1. Configurar SSO SAML para {% data variables.location.product_location %}. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)".
1. Configure o provisionamento de usuários com SCIM para sua instância. Para obter mais informações, confira "[Como configurar o provisionamento de usuários com o SCIM na empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)".

{% endif %}

## Como gerenciar proprietários corporativos 

As etapas para tornar uma pessoa proprietária de empresa dependem de você usar apenas SAML ou também SCIM. Para obter mais informações sobre proprietários de empresas, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

Se você configurou o provisionamento, para conceder a propriedade corporativa do usuário em {% data variables.product.product_name %}, atribua a função de proprietário da empresa ao usuário no Azure AD.

Se você não configurou o provisionamento, para conceder a propriedade corporativa ao usuário em {% data variables.product.product_name %}, inclua o atributo `administrator` na declaração SAML para a conta de usuário no IdP, com o valor de `true`. Para obter mais informações sobre como incluir o atributo `administrator` na declaração SAML do Azure AD, confira [Como personalizar declarações emitidas no token SAML para aplicativos empresariais](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) no Microsoft Docs.
