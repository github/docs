---
title: Configurar autenticação e provisionamento para sua empresa usando o Okta
shortTitle: Configure with Okta
intro: 'Você pode usar o Okta como um IdP (provedor de identidade) para gerenciar de modo centralizado o provisionamento de usuários e a autenticação para {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
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
ms.openlocfilehash: 62a1436fcedc4d90f767d0c612e70810132aff58
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192670'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Sobre autenticação e provisionamento de usuários com o Okta

Você pode usar Okta como um IdP (provedor de identidade) para {% data variables.product.product_name %}, o que permite que os usuários do Okta entrem no {% data variables.product.product_name %} usando as credenciais do Okta.

Para usar o Okta como o IdP do {% data variables.product.product_name %}, você pode adicionar o aplicativo {% data variables.product.product_name %} ao Okta, configurar o Okta como o IdP no {% data variables.product.product_name %} e permitir acesso aos usuários e grupos do Okta.

{% data reusables.saml.idp-saml-and-scim-explanation %}
- "[Como mapear grupos do Okta para as equipes](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)"

Depois de ativar o SCIM, os seguintes recursos de provisionamento estarão disponíveis para todos os usuários aos quais você atribuir seu aplicativo {% data variables.product.product_name %} no Okta.

{% data reusables.scim.ghes-beta-note %}

Os recursos de provisionamento a seguir estão disponíveis para todos os usuários do Okta que você atribuir ao aplicativo {% data variables.product.product_name %}.

| Recurso | Descrição |
| --- | --- |
| Fazer push de novos usuários | Quando um usuário é criado no Okta, ele é adicionado ao {% data variables.product.product_name %}. |
| Fazer push de desativações de usuário | Quando você desativar um usuário no Okta, ele será suspenso da empresa no {% data variables.product.product_name %}. |
| Fazer push das atualização de perfil | Ao atualizar o perfil de um usuário no Okta, serão atualizados os metadados da associação do usuário na empresa no {% data variables.product.product_name %}. |
| Reativar usuários | Quando você reativar um usuário no Okta, ele será suspenso da empresa no {% data variables.product.product_name %}. |

Para obter mais informações de como gerenciar a identidade e o acesso da empresa em {% data variables.location.product_location %}, confira "[Como gerenciar a identidade e o acesso da empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)".

## Pré-requisitos

- Para configurar a autenticação e o provisionamento de usuários no {% data variables.product.product_name %} usando o Okta, você precisa ter uma conta do Okta e um locatário.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Como adicionar o aplicativo {% data variables.product.product_name %} no Okta


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. No campo de pesquisa, digite "GitHub AE" e clique no **GitHub AE** nos resultados.

  !["Resultado da pesquisa"](/assets/images/help/saml/okta-ae-search.png)
1. Clique em **Adicionar**.

  !["Adicionar aplicativo do GitHub AE"](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. Em "URL base", digite a URL da empresa no {% data variables.product.product_name %}.

  !["Configurar a URL base"](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. Clique em **Concluído**.
{%- elsif scim-for-ghes %}
1. No campo de pesquisa, digite "GitHub Enterprise Server" e clique em **GitHub Enterprise Server** nos resultados.
1. Clique em **Adicionar**.
1. Em "URL base", digite a URL do {% data variables.location.product_location %}.
1. Clique em **Concluído**.
{% endif %}

## Como habilitar SSO de SAML para o {% data variables.product.product_name %}

Para habilitar o SSO (logon único) para o {% data variables.product.product_name %}, você precisará configurar o {% data variables.product.product_name %} para usar a URL de entrada, a URL do emissor e o certificado público fornecido pelo Okta. Veja esses detalhes no aplicativo Okta para o {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Anote os detalhes da "URL de início de sessão", "Emissor" e "Certificado público". 
1. Use os detalhes para habilitar o SSO de SAML para a empresa no {% data variables.product.product_name %}. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. Use os detalhes para habilitar o SSO de SAML para {% data variables.location.product_location %}. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
{%- endif %}

{% note %}

**Observação:** para testar a configuração do SAML no {% data variables.product.product_name %}, a conta de usuário do Okta precisa ser atribuída ao aplicativo {% data variables.product.product_name %}.

{% endnote %}

## Habilitando a integração da API

O aplicativo Okta usa a API REST para o {% data variables.product.product_name %} no provisionamento do SCIM. Você pode habilitar e testar o acesso à API configurando o Okta com um {% data variables.product.pat_generic %} para o {% data variables.product.product_name %}.

1. No {% data variables.product.product_name %}, gere um {% data variables.product.pat_v1 %} com o escopo `admin:enterprise`. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Clique em **Configurar Integração de API**.

1. Selecione **Habilitar integração de API**.

  ![Habilitar a integração da API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. Em "Token de API", digite o {% data variables.product.pat_generic %} do {% data variables.product.product_name %} que você já gerou.

1. Clique em **Testar Credenciais da API**. 

{% note %}

**Observação:** se `Error authenticating: No results for users returned` for exibido, confirme se você habilitou o SSO para o {% data variables.product.product_name %}. Para obter mais informações, confira "[Como habilitar o SSO de SAML para o {% data variables.product.product_name %}](#enabling-saml-sso-for-github-ae)".

{% endnote %}

## Definindo as configurações de provisionamento do SCIM

Este procedimento demonstra como definir as configurações do SCIM para o provisionamento do Okta. Essas configurações definem quais recursos serão usados ao provisionar automaticamente as contas de usuário do Okta para o {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Em "Configurações", clique em **No Aplicativo**.

  ![Configurações de "No Aplicativo"](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. À direita de "Provisionamento no Aplicativo", clique em **Editar**.
1. À direita de "Criar Usuários", selecione **Habilitar**.
1. À direita de "Atualizar Atributos do Usuário", selecione **Habilitar**.
1. À direita de "Desativar Usuários", selecione **Habilitar**.
1. Clique em **Salvar**.

## Permitir que usuários e grupos do Okta acessem o {% data variables.product.product_name %}

Você pode fornecer acesso a {% data variables.product.product_name %} para os usuários individuais do Okta, ou para grupos inteiros.

### Provisionando acesso para usuários do Okta

Para que os usuários do Okta possam usar as respectivas credenciais para entrar no {% data variables.product.product_name %}, você precisará atribuir os usuários ao aplicativo Okta para {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. Clique em **Atribuições**.

  ![Aba de atribuições](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Selecione o menu Atribuir menu suspenso e clique em **Atribuir a Pessoas**.

  ![Botão "Atribuir a Pessoas"](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. À direita da conta de usuário necessária, clique em **Atribuir**.

  ![Lista de usuários](/assets/images/help/saml/okta-ae-assign-user.png)

1. À direita de "Função", clique em uma função para o usuário e clique em **Salvar e voltar**.

  ![Seleção de função](/assets/images/help/saml/okta-ae-assign-role.png)

1. Clique em **Concluído**.

{% ifversion ghae %}
### Provisionando acesso para grupos do Okta

Você pode mapear o grupo do Okta para uma equipe no {% data variables.product.product_name %}. Os integrantes do grupo do Okta se tornarão membros da equipe do {% data variables.product.product_name %} mapeada. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
{% endif %}

## Leitura adicional

- [Noções básicas sobre o SAML](https://developer.okta.com/docs/concepts/saml/) na documentação do Okta
- [Noções básicas sobre o SCIM](https://developer.okta.com/docs/concepts/scim/) na documentação do Okta
