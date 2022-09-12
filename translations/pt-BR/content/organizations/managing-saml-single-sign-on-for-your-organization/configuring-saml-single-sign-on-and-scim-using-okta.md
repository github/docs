---
title: Configurar SCIM e o logon único SAML usando o Okta
intro: 'Você pode usar o SSO (logon único) do SAML (Security Assertion Markup Language) e o SCIM (Sistema de Gerenciamento de Usuários entre Domínios) com o Okta para gerenciar automaticamente o acesso à organização no {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: 3b1083e0ec9d792de9e9c1e83cd5b000e8261905
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065448'
---
## Sobre SAML e SCIM com Okta

Você pode controlar o acesso à sua organização em {% data variables.product.product_location %} e outros aplicativos da web a partir de uma interface central, configurando a organização para usar SAML SSO e o SCIM com Okta, um provedor de identidade (IdP).

{% data reusables.saml.ghec-only %}

O SAML SSO controla e protege o acesso a recursos da organização, como repositórios, problemas e pull requests. O SCIM adiciona, gerencia e remove automaticamente o acesso dos integrantes à sua organização em {% data variables.product.product_location %} quando você fizer alterações no Okta. Para obter mais informações, confira "[Sobre gerenciamento de identidade e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" e "[Sobre o SCIM em organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

Após ativar o SCIM, os seguintes recursos de provisionamento estarão disponíveis para qualquer usuário ao qual você atribuir seu aplicativo do {% data variables.product.prodname_ghe_cloud %} no Okta.

| Recurso | Descrição |
| --- | --- |
| Fazer push de novos usuários | Ao criar um novo usuário no Okta, o usuário receberá um e-mail para ingressar na sua organização em {% data variables.product.product_location %}. |
| Fazer push de desativações de usuário | Ao desativar um usuário no Okta, ele removerá o usuário da sua organização em {% data variables.product.product_location %}. |
| Fazer push das atualização de perfil | Ao atualizar o perfil de um usuário no Okta, ele irá atualizar os metadados para a associação do usuário na sua organização em {% data variables.product.product_location %}. |
| Reativar usuários | Ao reativar um usuário no Okta, ele enviará um convite por e-mail para o usuário voltar a participar da sua organização em {% data variables.product.product_location %}. |

Como alternativa, você pode configurar o SAML SSO para uma empresa usando o Okta. O SCIM para contas corporativas só está disponível com Usuários Corporativos Gerenciados. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa usando o Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" e "[Como configurar o provisionamento do SCIM para os Usuários Gerenciados Corporativos com o Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)".

## Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Habilitar e testar o SAML SSO no {% data variables.product.prodname_dotcom %} usando a URL de logon, a URL do emissor e os certificados públicos da aba "Como configurar o SAML 2.0". Para obter mais informações, confira "[Como habilitar e testar o logon único do SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)".

## Configurar provisionamento de acesso com SCIM em Okta

{% data reusables.scim.dedicated-configuration-account %}

1. Entre no {% data variables.product.prodname_dotcom_the_website %} usando uma conta que seja um proprietário da organização e seja usada apenas para a configuração do SCIM.
1. Para criar uma sessão do SAML ativa para sua organização, navegue até `https://github.com/orgs/ORGANIZATION-NAME/sso`. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".
1. Navegue até o Okta.
{% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.okta-applications-click-ghec-application-label %} {% data reusables.saml.okta-provisioning-tab %} {% data reusables.saml.okta-configure-api-integration %} {% data reusables.saml.okta-enable-api-integration %}
1. Clique em **Autenticar-se com o {% data variables.product.prodname_ghe_cloud %} – Organização**.
1. À direita do nome da sua organização, clique em **Conceder**.

  ![Botão "Conceder" para autorizar a integração do Okta e do SCIM para acesso à organização](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. Clique em **Autorizar o OktaOAN**.
{% data reusables.saml.okta-save-provisioning %} {% data reusables.saml.okta-edit-provisioning %}

## Leitura adicional

- "[Como configurar o logon único do SAML para a sua conta corporativa usando o Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"
- [Noções básicas sobre o SAML](https://developer.okta.com/docs/concepts/saml/) na documentação do Okta
- [Noções básicas sobre o SCIM](https://developer.okta.com/docs/concepts/scim/) na documentação do Okta
