---
title: Configurar SCIM e o logon único SAML usando o Okta
intro: 'Você pode usar o SSO (logon único) do SAML (Security Assertion Markup Language) e o SCIM (System for Cross-domain Identity Management) com o Okta para gerenciar automaticamente o acesso à sua organização no {% data variables.location.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: c1b6ab48122c97cb1f805399430cc181ed3f30d1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192734'
---
## Sobre SAML e SCIM com Okta

Você pode controlar o acesso à sua organização no {% data variables.location.product_location %} e outros aplicativos Web em uma interface central, configurando a organização para usar SSO e SCIM SAML com Okta, um provedor de identidade (IdP).

{% data reusables.saml.ghec-only %}

O SAML SSO controla e protege o acesso a recursos da organização, como repositórios, problemas e pull requests. O SCIM adiciona, gerencia e remove automaticamente o acesso de membros à sua organização no {% data variables.location.product_location %} quando você faz alterações no Okta. Para obter mais informações, confira "[Sobre gerenciamento de identidade e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" e "[Sobre o SCIM em organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

Após ativar o SCIM, os seguintes recursos de provisionamento estarão disponíveis para qualquer usuário ao qual você atribuir seu aplicativo do {% data variables.product.prodname_ghe_cloud %} no Okta.

| Recurso | Descrição |
| --- | --- |
| Fazer push de novos usuários | Quando você cria um novo usuário no Okta, o usuário recebe um email para ingressar na sua organização no {% data variables.location.product_location %}. |
| Fazer push de desativações de usuário | Quando você desativa um usuário no Okta, o Okta remove o usuário de sua organização no {% data variables.location.product_location %}. |
| Fazer push das atualização de perfil | Quando você atualiza o perfil de um usuário no Okta, o Okta atualiza os metadados da associação do usuário em sua organização no {% data variables.location.product_location %}. |
| Reativar usuários | Quando você reativa um usuário no Okta, o Okta envia um convite por email para que o usuário retorne à sua organização no {% data variables.location.product_location %}. |

Como alternativa, você pode configurar o SAML SSO para uma empresa usando o Okta. O SCIM para contas corporativas só está disponível com Usuários Corporativos Gerenciados. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa usando o Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" e "[Como configurar o provisionamento do SCIM para os Usuários Gerenciados Corporativos com o Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)".

## Configurar o SAML no Okta

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {% data reusables.saml.okta-add-ghec-org-integration %}
1. Preencha o formulário, fornecendo o nome da sua organização no {% data variables.product.prodname_dotcom %} e um nome exclusivo para seu aplicativo OAuth App Integration.
{% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
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
