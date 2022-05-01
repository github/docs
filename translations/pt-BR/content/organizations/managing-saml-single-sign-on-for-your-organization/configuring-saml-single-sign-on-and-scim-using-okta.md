---
title: Configurar SCIM e o logon único SAML usando o Okta
intro: 'Você pode usar o logon único (SSO) da Linguagem de Markup da Declaração de Segurança (SAML) e o Sistema de Gerenciamento de Identidades de Domínio Cruzado (SCIM) com o Okta para gerenciar automaticamente o acesso à sua organização em {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configurar SAML & SCIM com Okta
---

## Sobre SAML e SCIM com Okta

Você pode controlar o acesso à sua organização em {% data variables.product.product_location %} e outros aplicativos da web a partir de uma interface central, configurando a organização para usar SAML SSO e o SCIM com Okta, um provedor de identidade (IdP).

{% data reusables.saml.ghec-only %}

O SAML SSO controla e protege o acesso a recursos da organização, como repositórios, problemas e pull requests. O SCIM adiciona, gerencia e remove automaticamente o acesso dos integrantes à sua organização em {% data variables.product.product_location %} quando você fizer alterações no Okta. For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" and "[About SCIM for organizations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)."

Após ativar o SCIM, os seguintes recursos de provisionamento estarão disponíveis para qualquer usuário ao qual você atribuir seu aplicativo do {% data variables.product.prodname_ghe_cloud %} no Okta.

| Funcionalidade                        | Descrição                                                                                                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fazer push de novos usuários          | Ao criar um novo usuário no Okta, o usuário receberá um e-mail para ingressar na sua organização em {% data variables.product.product_location %}.                            |
| Fazer push de desativações de usuário | Ao desativar um usuário no Okta, ele removerá o usuário da sua organização em {% data variables.product.product_location %}.                                                  |
| Fazer push das atualização de perfil  | Ao atualizar o perfil de um usuário no Okta, ele irá atualizar os metadados para a associação do usuário na sua organização em {% data variables.product.product_location %}. |
| Reativar usuários                     | Ao reativar um usuário no Okta, ele enviará um convite por e-mail para o usuário voltar a participar da sua organização em {% data variables.product.product_location %}.     |

Como alternativa, você pode configurar o SAML SSO para uma empresa usando o Okta. O SCIM para contas corporativas só está disponível com Usuários Corporativos Gerenciados. Para obter mais informações, consulte "[Configurando o logon único SAML para a sua empresa usand oo Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" e "[Configuring o provisionamento do SCIM para Usuários Corporativos Gerenciados com o Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)."

## Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilitar e testar o SAML SSO no {% data variables.product.prodname_dotcom %} usando a URL de logon, a URL do emissor e os certificados públicos da aba "Como configurar o SAML 2.0". Para obter mais informações, consulte "[Habilitar e testar logon único de SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)".

## Configurar provisionamento de acesso com SCIM em Okta

{% data reusables.scim.dedicated-configuration-account %}

1. Sign into {% data variables.product.prodname_dotcom_the_website %} using an account that is an organization owner and is ideally used only for SCIM configuration.
1. To create an active SAML session for your organization, navigate to `https://github.com/orgs/ORGANIZATION-NAME/sso`. Para obter mais informações, consulte "[Sobre a autenticação com logon único SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".
1. Navigate to Okta.
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Click **Authenticate with {% data variables.product.prodname_ghe_cloud %} - Organization**.
1. À direita do nome da sua organização, clique em **Conceder**.

  ![Botão "Conceder" para autorizar a integração do SCIM do Okta para acessar a organização](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. Clique em **Autorizar o OktaOAN**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## Leia mais

- "[Configurar o logon único SAML para a sua conta corporativa usando o Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"
- [Compreender o SAML](https://developer.okta.com/docs/concepts/saml/) na documentação do Okta
- [Entender o SCIM](https://developer.okta.com/docs/concepts/scim/) na documentação do Okta
