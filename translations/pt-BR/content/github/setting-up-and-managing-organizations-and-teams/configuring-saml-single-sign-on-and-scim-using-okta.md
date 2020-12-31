---
title: Configurar SCIM e o logon único SAML usando o Okta
intro: 'Você pode usar o logon único (SSO) da Linguagem de Markup da Declaração de Segurança (SAML) e o Sistema de Gerenciamento de Identidades de Domínio Cruzado (SCIM) com o Okta para gerenciar automaticamente o acesso à sua organização em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Os proprietários da organização podem configurar o SAML SSO e os SCIM usando o Okta para uma organização.
versions:
  free-pro-team: '*'
---

### Sobre SAML e SCIM com Okta

Você pode controlar o acesso à organização do {% data variables.product.prodname_dotcom %} e outros aplicativos da web a partir de uma interface central, configurando a organização para usar SAML SSO e SCIM com Okta, um provedor de identidade (IdP).

O SAML SSO controla e protege o acesso a recursos da organização, como repositórios, problemas e pull requests. O SCIM adiciona, gerencia e remove automaticamente o acesso dos integrantes à sua organização do {% data variables.product.prodname_dotcom %} quando você fizer alterações no Okta. Para obter mais informações, consulte "[Sobre a identidade e gerenciamento de acesso com logon único SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)" e "[Sobre SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

Após ativar o SCIM, os seguintes recursos de provisionamento estarão disponíveis para qualquer usuário ao qual você atribuir seu aplicativo do {% data variables.product.prodname_ghe_cloud %} no Okta.

| Funcionalidade                        | Descrição                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fazer push de novos usuários          | Ao criar um novo usuário no Okta, ele receberá um e-mail para juntar-se à sua organização do {% data variables.product.prodname_dotcom %}.                                 |
| Fazer push de desativações de usuário | Ao desativar um usuário no Okta, este removerá o usuário da sua organização de {% data variables.product.prodname_dotcom %}.                                               |
| Fazer push das atualização de perfil  | Ao atualizar o perfil de um usuário no Okta, este atualizará os metadados para a associação do usuário na sua organização de {% data variables.product.prodname_dotcom %}. |
| Reativar usuários                     | Ao reativar um usuário no Okta, este enviará um convite por e-mail para o usuário juntar-se novamente à sua organização de {% data variables.product.prodname_dotcom %}.   |

### Pré-requisitos

{% data reusables.saml.use-classic-ui %}

### Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
4. À direita do "Github Enterprise Cloud - Organização", clique em **Adicionar**. ![Clicar em "Adicionar" para o aplicativo {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/saml/okta-add-ghec-application.png)

5. No campo **Organização do GitHub**, digite o nome da sua organização de {% data variables.product.prodname_dotcom %}. Por exemplo, se a URL da sua organização for https://github.com/octo-org, o nome da organização será `octo-org`. ![Digite o nome da organização do GitHub](/assets/images/help/saml/okta-github-organization-name.png)

6. Clique em **Cpncluído**.

### Habilitar e e testar o SAML SSO

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
6. Habilitar e testar o SAML SSO no {% data variables.product.prodname_dotcom %} usando a URL de logon, a URL do emissor e os certificados públicos da aba "Como configurar o SAML 2.0". Para obter mais informações, consulte "[Habilitar e testar logon único de SAML para sua organização](/github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization)".

### Configurar provisionamento de acesso com SCIM em Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}


6. Clique em **Efetuar a autenticação com Github Enterprise Cloud - Organização**. ![Botão "Efetuar a autenticação com Github Enterprise Cloud - Organização" para o aplicativo Okta](/assets/images/help/saml/okta-authenticate-with-ghec-organization.png)

7. À direita do nome da sua organização, clique em **Conceder**. ![Botão "Conceder" para autorizar a integração do SCIM do Okta para acessar a organização](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **Observação**: Se você não vir a sua organização na lista, acesse `https://github.com/orgs/ORGANIZATION-NAME/sso` no seu navegador e efetue a autenticação com sua organização por meio do SAML SSO usando sua conta de administrador no IdP. Por exemplo, se o nome da sua organização for `octo-org`, a URL seria `https://github.com/orgs/octo-org/sso`. Para obter mais informações, consulte "[Sobre a autenticação com logon único SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}
1. Clique em **Autorizar o OktaOAN**. ![Botão "Autorizar o OktaOAN" para autorizar a integração do SCIM do Okta para acessar a organização](/assets/images/help/saml/okta-scim-integration-authorize-oktaoan.png)
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

### Leia mais

- "[Configurar o logon único SAML e SCIM para a sua conta corporativa usando o Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)"
- "[Gerenciar a sincronização de equipe para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- [Compreender o SAML](https://developer.okta.com/docs/concepts/saml/) na documentação do Okta
- [Entender o SCIM](https://developer.okta.com/docs/concepts/scim/) na documentação do Okta
