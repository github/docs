---
title: Configurando o provisionamento do SCIM para usuários gerenciados pela empresa com Okta
shortTitle: Configurar provisionamento com Okta
intro: Você pode fornecer novos usuários e gerenciar os integrantes da sua empresa e das equipes usando o Okta como seu provedor de identidade.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

## Sobre o provisionamento com Okta

Você pode usar {% data variables.product.prodname_emus %} com o Okta como seu provedor de identidade para fornecer novas contas, gerenciar a associação da empresa e gerenciar as associações das equipes para as organizações na sua empresa. Para obter mais informações sobre provisionamento para {% data variables.product.prodname_emus %}, consulte "[Configurando provisionamento de SCIM para usuários corporativos gerenciados](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".

Antes de configurar o provisionamento com o Okta, você deverá configurar o logon único SAML. Para obter mais informações, consulte "[Configurando o logon único SAML para Usuários Gerenciados pela Empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."

Para configurar o provisionamento com o Okta, você deverá definir o nome da sua empresa no aplicativo {% data variables.product.prodname_emu_idp_application %} e inserir o token de acesso pessoal do seu usuário. Em seguida, você poderá começar a provisionar usuários no Okta.

## Funcionalidades compatíveis

{% data variables.product.prodname_emus %} é compatível com muitas funcionalidades no Okta.

| Funcionalidade                        | Descrição                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fazer push de novos usuários          | Os usuários atribuídos ao aplicativo de {% data variables.product.prodname_emu_idp_application %} no Okta são automaticamente criados na empresa em {% data variables.product.product_name %}.                                                                                  |
| Fazer push da atualização do perfil   | As atualizações feitas no perfil do usuário no Okta serão enviadas por push para {% data variables.product.product_name %}.                                                                                                                                                         |
| Grupos de Push                        | Os grupos no Okta atribuídos ao aplicativo de {% data variables.product.prodname_emu_idp_application %} como os Grupos Push são criados automaticamente na empresa em {% data variables.product.product_name %}.                                                                |
| Fazer push de desativações de usuário | Cancelar a atribuição do usuário do aplicativo de {% data variables.product.prodname_emu_idp_application %} no Okta irá desabilitar o usuário em {% data variables.product.product_name %}. O usuário não poderá efetuar o login, mas as informações do usuário serão mantidas. |
| Reativar usuários                     | Os Usuários do Okta cujas contas do Okta são reativadas e atribuídas de volta ao aplicativo de {% data variables.product.prodname_emu_idp_application %} serão habilitados.                                                                                                       |

{% note %}

**Observação:** {% data variables.product.prodname_emus %} não é compatível com modificações em nomes de usuário.

{% endnote %}

## Configurando o nome da sua empresa

Após a criação do seu {% data variables.product.prodname_emu_enterprise %}, você poderá começar a configurar o provisionamento definindo o nome da sua empresa no Okta.

1. Acesse o seu aplicativo de{% data variables.product.prodname_emu_idp_application %} no Okta.
1. Clique na aba **Login**.
1. Para fazer as alterações, clique em **Editar**.
1. Em "Configurações Avançadas de Login", na caixa de texto "Nome da empresa", digite o nome da sua empresa. Por exemplo, se você acessar sua empresa em `https://github.com/enterprises/octoinc`, o nome da sua empresa seria "octoinc". ![Captura de tela do campo nome da empresa no Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Para salvar o nome da empresa, clique em **Salvar**.

## Configurando o provisionamento

Após definir o nome da sua empresa, você poderá prosseguir para definir as configurações de provisionamento.

Para configurar o provisionamento, o usuário configurado com o nome de usuário **@<em>SHORT-CODE</em>_admin** deverá fornecer um token de acesso pessoal com o escopo **admin:enterprise**. Para obter mais informações sobre como criar um novo token, consulte "[Criar um token de acesso pessoal](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)."

1. Acesse o seu aplicativo de{% data variables.product.prodname_emu_idp_application %} no Okta.
1. Clique na aba **Orovisionamento**.
1. No menu de configurações, clique em **Integração**.
1. Para fazer as alterações, clique em **Editar**.
1. Selecione **Habilitar a integração da API**.
1. No campo "API do Token" insira o token de acesso pessoal com o escopo de administração **admin:enterprise** pertencente ao usuário configurado. ![Captura de tela que mostra o campo do token da API no Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Clique em **Testar as credenciais da API**. Se o teste for bem sucedido, será exibida uma mensagem de verificação na parte superior da tela.
1. Para salvar o token, clique em **Salvar**.
1. No menu de configurações, clique em **Ao aplicativo**. ![Captura de tela que mostra o item de menu "Ao aplicativo" no Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. À direita do "Provisionamento para o aplicativo", para permitir alterações a serem feitas, clique em **Editar**.
1. Selecione **Habilitar** para **Criar usuários**, **Atualizar atributos do usuário** e **Desativar Usuários**. ![Captura de tela que mostra as opções de provisionamento no Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Para concluir a configuração do provisionamento, clique em **Salvar**.

## Atribuindo usuários e grupos

Depois de configurar o SAML SSO e o provisionamento, você poderá fornecer novos usuários no {% data variables.product.prodname_dotcom_the_website %} atribuindo usuários ao aplicativo de {% data variables.product.prodname_emu_idp_application %}.

{% data reusables.scim.emu-scim-rate-limit %}

Você também pode gerenciar automaticamente a associação da organização ao atribuir grupos ao aplicativo e adicioná-los à aba "Grupos de Push" no Okta. Quando o grupo for provisionado com sucesso, ele estará disponível para conectar-se a equipes das organizações da empresa. Para obter mais informações sobre gerenciamento de equipes, consulte "[Gerenciando associações de equipe com grupos de provedores de identidade](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

Ao atribuir aos usuários, você poderá usar o atributo "Funções" no aplicativo de {% data variables.product.prodname_emu_idp_application %} para definir a função de um usuário na sua empresa em {% data variables.product.product_name %}. Para obter mais informações sobre funções, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)".

![Captura de tela que mostra as opções da função para o usuário provisionado do Okta](/assets/images/help/enterprises/okta-emu-user-role.png)
