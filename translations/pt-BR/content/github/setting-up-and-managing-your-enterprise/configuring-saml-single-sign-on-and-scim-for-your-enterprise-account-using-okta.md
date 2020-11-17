---
title: Configurar o logon único SAML e o SCIM para a sua conta corporativa usando o Okta
intro: 'Você pode usar o logon único (SSO) da Linguagem de Markup da Declaração de Segurança (SAML) e o Sistema de Gerenciamento de Identidades de Domínio Cruzado (SCIM) com o Okta para gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
versions:
  free-pro-team: '*'
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

### Sobre SAML e SCIM com Okta

Você pode controlar o acesso à conta corporativa no {% data variables.product.product_name %} e em outros aplicativos web, a partir de uma interface central, configurando a conta corporativa para usar SAML SSO e SCIM com Okta, um provedor de identidade (IdP).

O SAML SSO controla e protege o acesso a recursos da conta corporativa, como, por exemplo, organizações, repositórios, problemas e pull requests. O SCIM adiciona, gerencia e remove automaticamente o acesso dos membros a organizações que pertencem à sua conta corporativa ao fazer alterações no Okta. Para obter mais informações, consulte "[Aplicar as configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)".

Após ativar o SCIM, os seguintes recursos de provisionamento estarão disponíveis para qualquer usuário ao qual você atribuir seu aplicativo do {% data variables.product.prodname_ghe_cloud %} no Okta.

| Funcionalidade                        | Descrição                                                                                                                                                                                                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fazer push de novos usuários          | Os novos usuários criados no Okta terão acesso aos recursos da conta corporativa e, opcionalmente, poderão ser convidados automaticamente para qualquer uma das organizações que pertencem à conta corporativa                                                                         |
| Fazer push de desativações de usuário | Desativar um usuário no Okta irá revogar o acesso do usuário aos recursos da conta corporativa e removê-lo de todas as organizações que pertencem a essa conta                                                                                                                         |
| Fazer push das atualização de perfil  | As atualizações feitas no perfil do usuário no Okta serão enviadas para os metadados da conta corporativa do usuário                                                                                                                                                                   |
| Reativar usuários                     | Reativar o usuário no Okta permitirá o acesso do usuário à conta corporativa e, opcionalmente, enviará convites por e-mail para que o usuário para juntar-se novamente a qualquer uma das organizações pertencentes à conta corporativa da qual o usuário era anteriormente integrante |

### Pré-requisitos

{% data reusables.saml.use-classic-ui %}

### Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. Clique em "{% data variables.product.prodname_ghe_cloud %} - Contas corporativas".
1. Clique em **Salvar**.
1. Opcionalmente, à direita do "Etiqueta do aplicativo", digite um nome descritivo para o aplicativo. ![Campo da etiqueta do aplicativo](/assets/images/help/saml/okta-application-label.png)
1. À direita da "Empresas de {% data variables.product.prodname_dotcom %}", digite o nome da conta corporativa. Por exemplo, se a URL da conta corporativa for `https://github.com/enterprises/octo-corp`, digite `octo-corp`. ![Campo GitHub Enterprises](/assets/images/help/saml/okta-github-enterprises.png)
1. Clique em **Cpncluído**.

### Habilitar e e testar o SAML SSO

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. À direita das configurações, clique em **Editar**.
1. Em "Atributos de SAML configurados", à direita de "grupos", use o menu suspenso e selecione **Correspondências de regex**.
1. À direita do menu suspenso, digite `.*.*`.
1. Clique em **Salvar**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilite o SAML para a conta corporativa usando as informações nas instruções de configuração. Para obter mais informações, consulte "[Aplicar as configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

### Criar grupos no Okta

1. No Okta, crie um grupo para corresponder a cada organização pertencente à conta corporativa. O nome de cada grupo deve corresponder ao nome da conta da organização (não ao nome de exibição da organização). Por exemplo, se a URL da organização for `https://github.com/octo-org`, nomeie o grupo `octo-org`.
1. Atribua o aplicativo que você criou para a sua conta corporativa a cada grupo. {% data variables.product.prodname_dotcom %} receberá todos os `grupos` de dados para cada usuário.
1. Adicione usuários a grupos baseados nas organizações às quais você deseja que os usuários pertençam.

### Configurar o provisionamento do usuário com SCIM no Okta

{% data reusables.scim.enterprise-account-scim %}

Para configurar o provisionamento de usuário com SCIM no Okta, você deverá autorizar um aplicativo OAuth para criar um token que o Okta pode usar para efetuar a autenticação no {% data variables.product.product_name %} em seu nome. O aplicativo okta-oauth é criado pelo Okta em parceria com {% data variables.product.prodname_dotcom %}.

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Clique em **Efetuar a autenticação com Github Enterprise Cloud - Contas corporativas**. ![Botão para efetuar a autenticação com {% data variables.product.prodname_dotcom %}](/assets/images/help/business-accounts/authenticate-with-github-button.png)
1. À direita do nome da conta corporativa, clique em **Conceder**.
1. Clique em **Autorizar okta-oauth**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}
1. No nome do aplicativo, clique em **Grupos de push**. ![Aba de Grupos Push](/assets/images/help/business-accounts/okta-push-groups-tab.png)
1. Use o menu suspenso **Grupos de push** e selecione **Encontrar grupos por nome**. ![Menu suspenso de Grupos de Push](/assets/images/help/business-accounts/okta-push-groups-drop-down.png)
1. Adicione um grupo de push para cada organização na sua conta corporativa para a qual você deseja habilitar o provisionamento de usuários.
   - Em "GRUPOS DE PUSH POR NOME", pesquise um grupo que corresponde a uma organização que pertence à sua conta corporativa e, em seguida, clique no grupo nos resultados da pesquisa.
   - À direita do nome do grupo, no menu suspenso "Corresponder resultados & ação de push", verifique se a opção **Criar Grupo** está selecionada. ![Corresponder o menu suspenso de resultados à opção de Criar Grupo selecionada](/assets/images/help/saml/create-group-okta.png)
   - Clique em **Salvar**.
   - Repita o procedimento para cada organização.
1. No nome do seu aplicativo, clique em **Atribuições**. ![Aba de atribuições](/assets/images/help/business-accounts/okta-assignments-tab.png)
1. Se você vir **Provisões de usuários**, usuários que eram integrantes de um grupo do Okta antes de você adicionar um grupo de push para esse grupo, não foram fornecidos. Para enviar os dados do SCIM para {% data variables.product.product_name %} para esses usuários, clique em **Provisionar usuários**.

### Habilitar o SAML usando o provisionamento de usuário

Depois de habilitar o provisionamento e desprovisionamento do SCIM, você pode habilitar, opcionalmente, o provisionamento e desprovisionamento do usuário de SAML.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Em "Provisionamento de usuários de SAML", selecione **Habilitar provisionamento de usuário de SAML**. ![Caixa de seleção que habilita o provisionamento do usuário com SAML](/assets/images/help/business-accounts/user-provisioning.png)
1. Clique em **Salvar**.
1. Opcionalmente, habilite o desprovisionamento do usuário de SAML.
   - Selecione **Habilitar o desprovisionamento do usuário de SAML** e, em seguida, clique em **Salvar**. ![Caixa de seleção que habilita o desprovisionamento de usuário com SAML](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - Leia o aviso e clique em **Habilitar o desprovisionamento de SAML**. ![Botão para habilitar o desaprovisionamento de usuários de SAML](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
