---
title: Configurar autenticação e provisionamento para sua empresa usando o Okta
shortTitle: Configurar com Okta
intro: 'Você pode usar o Okta como um provedor de identidade (IdP) para gerenciar centralmente o provisionamento de autenticação e usuário para {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
---

{% data reusables.saml.okta-ae-sso-beta %}

## Sobre SAML e SCIM com Okta

Você pode usar Okta como um Provedor de Identidade (IdP) para {% data variables.product.prodname_ghe_managed %}, o que permite aos usuários do Okta efetuem o login em {% data variables.product.prodname_ghe_managed %} usando suas credenciais do Okta.

Para usar Okta como seu IdP para {% data variables.product.prodname_ghe_managed %}, você pode adicionar o aplicativo {% data variables.product.prodname_ghe_managed %} ao Okta, configurar o Okta como seu IdP em {% data variables.product.prodname_ghe_managed %} e fornecer acesso aos seus usuários e grupos da Okta.

Os recursos de provisionamento a seguir estão disponíveis para todos os usuários do Okta que você atribuir ao seu aplicativo de {% data variables.product.prodname_ghe_managed %}.

| Funcionalidade                        | Descrição                                                                                                                                                                        |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fazer push de novos usuários          | Ao criar um novo usuário no Okta, o usuário é adicionado a {% data variables.product.prodname_ghe_managed %}.                                                                  |
| Fazer push de desativações de usuário | Ao desativar um usuário no Okta, ele irá suspender o usuário da sua empresa em {% data variables.product.prodname_ghe_managed %}.                                              |
| Fazer push das atualização de perfil  | Ao atualizar o perfil de um usuário no Okta, ele irá atualizar os metadados para a associação de usuários na sua empresa em {% data variables.product.prodname_ghe_managed %}. |
| Reativar usuários                     | Ao reativar um usuário no Okta, ele cancelará a suspensão do usuário na sua empresa em {% data variables.product.prodname_ghe_managed %}.                                      |

## Adicionar o aplicativo {% data variables.product.prodname_ghe_managed %} no Okta

{% data reusables.saml.okta-ae-applications-menu %}
1. Clique **para navegar pelo catálogo do aplicativo**

  !["Navegar pelo Catálogo do aplicativo"](/assets/images/help/saml/okta-ae-browse-app-catalog.png)

1. No campo de busca, digite "GitHub AE" e, em seguida, clique em **GitHub AE** nos resultados.

  !["Resultado da pesquisa"](/assets/images/help/saml/okta-ae-search.png)

1. Clique em **Salvar**.

  !["Adicionar aplicativo GitHub AE"](/assets/images/help/saml/okta-ae-add-github-ae.png)

1. Para "URL de base", digite a URL da empresa em {% data variables.product.prodname_ghe_managed %}.

  !["Configurar a URL base"](/assets/images/help/saml/okta-ae-configure-base-url.png)

1. Clique em **Cpncluído**.

## Habilitando o SAML SSO para {% data variables.product.prodname_ghe_managed %}

Para habilitar o logon único (SSO) para {% data variables.product.prodname_ghe_managed %}, você deverá configurar {% data variables.product.prodname_ghe_managed %} para usar a URL de login, a URL do expedidor e o certificado público fornecido pelo Okta. Você pode encontrar esses detalhes no aplicativo "GitHub AE".

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
1. Clique em **Iniciar sessão em**.

  ![Guia de iniciar sessão](/assets/images/help/saml/okta-ae-sign-on-tab.png)

1. Clique **Ver instruções de configuração**.

  ![Guia de iniciar sessão](/assets/images/help/saml/okta-ae-view-setup-instructions.png)

1. Anote os detalhes da "URL de início de sessão", "Emissor" e "Certificado público".
1. Use os detalhes para habilitar o SAML SSO para a sua empresa em {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% note %}

**Observação:** Para testar sua configuração do SAML de {% data variables.product.prodname_ghe_managed %}, a sua conta de usuário do Okta deverá ser atribuída ao aplicativo de {% data variables.product.prodname_ghe_managed %}.

{% endnote %}

## Habilitando a integração da API

O aplicativo "GitHub AE" no Okta usa a API de {% data variables.product.product_name %} para interagir com a sua empresa para SCIM e SSO. Este procedimento explica como habilitar e testar o acesso à API, configurando o Okta com um token de acesso pessoal para {% data variables.product.prodname_ghe_managed %}.

1. Em {% data variables.product.prodname_ghe_managed %}, gere um token de acesso pessoal com o escopo `admin:enterprise`. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. Clique em **Configurar a Integração da API**.

1. Selecione **Habilitar a integração da API**.

  ![Habilitar a integração da API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. Para "Token da API", digite o token de acesso pessoal de {% data variables.product.prodname_ghe_managed %} que você gerou anteriormente.

1. Clique em **Testar as credenciais da API**.

{% note %}

**Observação:** Se você vir `Error authenticating: No results for users returned`, confirme que você habilitou o SSO para {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Habilitando o SAML SSO para {% data variables.product.prodname_ghe_managed %}](#enabling-saml-sso-for-github-ae)".

{% endnote %}

## Definindo as configurações de provisionamento do SCIM

Este procedimento demonstra como definir as configurações do SCIM para o provisionamento do Okta. Essas configurações definem quais recursos serão usados ao provisionar automaticamente as contas de usuário do Okta para {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. Em "Configurações", clique em **Para aplicativo**.

  ![Configurações "Para o aplicativo"](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. À direita do "Provisionamento para o App", clique em **Editar**.
1. À direita de "Criar usuários", selecione **Habilitar**.
1. À direita de "Atualizar Atributos do Usuário", selecione **Habilitar**.
1. À direita de "Desativar Usuários", selecione **Habilitar**.
1. Clique em **Salvar**.

## Permitir que usuários e grupos do Okta acessem {% data variables.product.prodname_ghe_managed %}

Você pode fornecer acesso a {% data variables.product.product_name %} para os usuários individuais do Okta, ou para grupos inteiros.

### Provisionando acesso para usuários do Okta

Antes que seus usuários do Okta possam usar suas credenciais para efetuar o login em {% data variables.product.prodname_ghe_managed %}, você deverá atribuir os usuários ao aplicativo "GitHub AE" no Okta.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. Clique **Atribuições**.

  ![Aba de atribuições](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Selecione o menu suspenso de atribuição e clique em **Atribuir às pessoas**.

  ![Botão "Atribuir a pessoas"](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. À direita da conta de usuário obrigatória, clique em **Atribuir**.

  ![Lista de usuários](/assets/images/help/saml/okta-ae-assign-user.png)

1. À direita de "Função", clique em uma função para o usuário e, em seguida, clique em **Salvar e voltar**.

  ![Seleção de função](/assets/images/help/saml/okta-ae-assign-role.png)

1. Clique em **Cpncluído**.

### Provisionando acesso para grupos do Okta

Você pode mapear o seu grupo do Okta para uma equipe em {% data variables.product.prodname_ghe_managed %}. Os integrantes do grupo do Okta irão tornar-se automaticamente integrantes da equipe de {% data variables.product.prodname_ghe_managed %} mapeada. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Leia mais

- [Compreender o SAML](https://developer.okta.com/docs/concepts/saml/) na documentação do Okta.
- [Entender o SCIM](https://developer.okta.com/docs/concepts/scim/) na documentação do Okta.
