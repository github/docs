---
title: Configurando o provisionamento do SCIM para usuários gerenciados pela empresa com Okta
shortTitle: Set up provisioning with Okta
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
ms.openlocfilehash: b8c086d1d91c1248fa5a0349bb6f8ef32c3bbdf0
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160709'
---
## Sobre o provisionamento com Okta

Você pode usar {% data variables.product.prodname_emus %} com o Okta como seu provedor de identidade para fornecer novas contas, gerenciar a associação da empresa e gerenciar as associações das equipes para as organizações na sua empresa. Para obter mais informações sobre o provisionamento dos {% data variables.product.prodname_emus %}, confira "[Como configurar o provisionamento do SCIM para usuários gerenciados corporativos](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".

Antes de configurar o provisionamento com o Okta, você deverá configurar o logon único SAML. Para obter mais informações, confira "[Como configurar o logon único do SAML para os Usuários Gerenciados Corporativos](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".

Para configurar o provisionamento com o Okta, defina o nome da sua empresa no aplicativo {% data variables.product.prodname_emu_idp_application %} e insira o {% data variables.product.pat_generic %} do usuário da instalação. Em seguida, você poderá começar a provisionar usuários no Okta.

## Recursos compatíveis

{% data variables.product.prodname_emus %} é compatível com muitas funcionalidades no Okta.

| Recurso | Descrição |
| --- | --- |
| Fazer push de novos usuários | Os usuários atribuídos ao aplicativo de {% data variables.product.prodname_emu_idp_application %} no Okta são automaticamente criados na empresa em {% data variables.product.product_name %}. |
| Fazer push da atualização do perfil | As atualizações feitas no perfil do usuário no Okta serão enviadas por push para {% data variables.product.product_name %}. |
| Grupos de Push | Os grupos no Okta atribuídos ao aplicativo de {% data variables.product.prodname_emu_idp_application %} como os Grupos Push são criados automaticamente na empresa em {% data variables.product.product_name %}. |
| Fazer push de desativações de usuário | Cancelar a atribuição do usuário do aplicativo de {% data variables.product.prodname_emu_idp_application %} no Okta irá desabilitar o usuário em {% data variables.product.product_name %}. O usuário não poderá efetuar o login, mas as informações do usuário serão mantidas. |
| Reativar usuários | Os Usuários do Okta cujas contas do Okta são reativadas e atribuídas de volta ao aplicativo de {% data variables.product.prodname_emu_idp_application %} serão habilitados. |

{% note %}

**Observação:** os {% data variables.product.prodname_emus %} não dão suporte a modificações em nomes de usuário.

{% endnote %}

## Configurando o nome da sua empresa

Após a criação do {% data variables.enterprise.prodname_emu_enterprise %}, você poderá começar a configurar o provisionamento definindo o nome da sua empresa no Okta.

1. Acesse o seu aplicativo de{% data variables.product.prodname_emu_idp_application %} no Okta.
1. Clique na guia **Logon**.
1. Para fazer alterações, clique em **Editar**.
1. Em "Configurações Avançadas de Login", na caixa de texto "Nome da empresa", digite o nome da sua empresa. Por exemplo, se você acessar sua empresa em `https://github.com/enterprises/octoinc`, o nome da empresa será "octoinc".
![Captura de tela do campo Nome da Empresa no Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Para salvar o nome da empresa, clique em **Salvar**.

## Configurando o provisionamento

Após definir o nome da sua empresa, você poderá prosseguir para definir as configurações de provisionamento.

Para configurar o provisionamento, o usuário da instalação com o nome de usuário **@<em>SHORT-CODE</em>_admin** precisará fornecer um {% data variables.product.pat_v1 %} com o escopo **admin:enterprise**. Para obter mais informações sobre como criar um token, confira "[Como criar um {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)".

1. Acesse o seu aplicativo de{% data variables.product.prodname_emu_idp_application %} no Okta.
1. Clique o **provisionamento** guia.
1. No menu de configurações, clique em **Integração**.
1. Para fazer alterações, clique em **Editar**.
1. Selecione **Habilitar integração de API**.
1. No campo "Token de API", insira o {% data variables.product.pat_v1 %} com o escopo **admin:enterprise** pertencente ao usuário da instalação.
![Captura de tela que mostra o campo Token de API no Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Clique em **Testar Credenciais da API**. Se o teste for bem sucedido, será exibida uma mensagem de verificação na parte superior da tela.
1. Para salvar o token, clique em **Salvar**.
1. No menu de configurações, clique em **No Aplicativo**.
![Captura de tela que mostra o item de menu No Aplicativo no Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. À direita de "Provisionamento no Aplicativo", para permitir que as alterações sejam feitas, clique em **Editar**.
1. Selecione **Habilitar** para **Criar Usuários**, **Atualizar Atributos de Usuário** e **Desativar Usuários**.
![Captura de tela que mostra as opções de provisionamento no Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Para concluir a configuração do provisionamento, clique em **Salvar**.

## Atribuindo usuários e grupos

Depois de configurar o SSO do SAML e o provisionamento, você poderá provisionar novos usuários no {% data variables.product.prodname_dotcom_the_website %} atribuindo usuários ou grupos ao aplicativo {% data variables.product.prodname_emu_idp_application %}. 

{% data reusables.scim.emu-scim-rate-limit %}

Você também pode gerenciar automaticamente a associação à organização atribuindo grupos à guia "Grupos de Push" no Okta. Quando o grupo for provisionado com sucesso, ele estará disponível para conectar-se a equipes das organizações da empresa. Para obter mais informações sobre como gerenciar equipes, confira "[Como gerenciar associações à equipe com grupos de provedores de identidade](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

Ao atribuir aos usuários, você poderá usar o atributo "Funções" no aplicativo de {% data variables.product.prodname_emu_idp_application %} para definir a função de um usuário na sua empresa em {% data variables.product.product_name %}. Para obter mais informações sobre funções, confira "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)".

![Captura de tela que mostra as opções da função para o usuário provisionado do Okta](/assets/images/help/enterprises/okta-emu-user-role.png)

## Desprovisionar usuários e grupos

Para remover um usuário ou grupo de {% data variables.product.product_name %}, remova o usuário ou o grupo da guia "Atribuições" e da guia "Grupos de push" no Okta. Para usuários, verifique se o usuário foi removido de todos os grupos na guia "Grupos de Push".


