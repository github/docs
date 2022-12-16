---
title: Configurar o provisionamento do usuário para a sua empresa
shortTitle: Configure user provisioning
intro: Você pode configurar o Sistema para Gerenciamento de Identidades entre Domínios (SCIM) para sua empresa, que automaticamente fornece contas de usuário em {% data variables.product.product_location %} quando você atribuir o aplicativo para {% data variables.product.product_location %} a um usuário no seu provedor de identidade (IdP).
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c76cf3a3245b272fc61db68470e7a34796a89e42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093958"
---
## Sobre provisionamento de usuários para sua empresa

{% data reusables.saml.ae-uses-saml-sso %} Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

Você pode configurar o provisionamento de usuário com SCIM para criar ou suspender automaticamente contas de usuário e conceder acesso para {% data variables.product.product_name %} ao atribuir ou cancelar a atribuição do aplicativo em seu IdP. Para obter mais informações sobre o SCIM, confira [Sistema de Gerenciamento de Usuários entre Domínios: protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) no site do IETF.

Se você não configurar o provisionamento de usuários com SCIM, seu IdP não se comunicará com {% data variables.product.product_name %} automaticamente quando você atribuir ou cancelar a atribuição do aplicativo a um usuário. Sem SCIM, {% data variables.product.product_name %} cria uma conta de usuário usando o provisionamento SAML Just-in-Time (JIT) na primeira vez que alguém navega para {% data variables.product.product_name %} e faz login autenticando por meio de seu IdP.

A configuração do provisionamento permite que o seu IdP se comunique com {% data variables.product.product_location %} quando você atribuir ou cancela a atribuição do aplicativo para {% data variables.product.product_name %} a um usuário no seu IdP. Ao atribuir o aplicativo, seu IdP pedirá que {% data variables.product.product_location %} crie uma conta e enviar um e-mail de integração para o usuário. Ao desatribuir o aplicativo, o seu IdP irá comunicar-se com {% data variables.product.product_name %} para invalidar quaisquer sessões de SAML e desabilitar a conta do integrante.

Para configurar o provisionamento para o seu negócio, você deve habilitar o provisionamento em {% data variables.product.product_name %} e, em seguida, instalar e configurar um aplicativo de provisionamento no seu IdP.

O aplicativo de provisionamento no seu IdP comunica-se com {% data variables.product.product_name %} através da nossa API de SCIM para empresas. Para obter mais informações, confira "[Administração do GitHub Enterprise](/rest/reference/enterprise-admin#scim)" na documentação da API REST do {% data variables.product.prodname_dotcom %}.

## Provedores de identidade compatíveis

Os seguintes IdPs são compatíveis com SSO com {% data variables.product.prodname_ghe_managed %}:

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Para IdPs compatíveis com o mapeamento de equipe, você pode atribuir ou desatribuir o aplicativo de {% data variables.product.product_name %} para grupos de usuários do seu IdP. Estes grupos são disponibilizados para os proprietários da organização e mantenedores de equipe em {% data variables.product.product_location %} para mapear para equipes de {% data variables.product.product_name %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Pré-requisitos

Para prover e desprover automaticamente o acesso a {% data variables.product.product_location %} a partir do seu IdP, primeiro você deve configurar o SSO de SAML ao inicializar {% data variables.product.product_name %}. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Você deve ter acesso administrativo no seu IdP para configurar o aplicativo para o provisionamento do usuário para {% data variables.product.product_name %}.

## Habilitar provisionamento de usuários para a sua empresa

1. Enquanto estiver conectado ao {% data variables.product.product_location %} como um proprietário da empresa, crie um token de acesso pessoal com o escopo **admin:enterprise**. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Observações**:
    - Para criar o token de acesso pessoal, recomendamos usar a conta para o primeiro proprietário da empresa criado durante a inicialização. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Você precisará deste token de acesso pessoal para configurar o aplicativo para o SCIM no seu IdP. Armazene o token com segurança em um gerenciador de senhas até que você precise do token novamente posteriormente nestas instruções.

  {% endnote %} {% warning %}

  **Aviso**: se a conta de usuário do proprietário da empresa que cria o token de acesso pessoal for desativada ou desprovisionada, o IdP não provisionará nem desprovisionará automaticamente as contas de usuário da sua empresa. Outro proprietário da empresa deve criar um novo token de acesso pessoal e reconfigurar o provisionamento no IdP.

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Provisionamento de Usuário do SCIM", selecione **Exigir provisionamento de usuário do SCIM**.
  ![Caixa de seleção usada para "Exigir provisionamento de usuário do SCIM" nas configurações de segurança da empresa](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Clique em **Salvar**.
  ![Botão Salvar em "Exigir provisionamento de usuário do SCIM" nas configurações de segurança da empresa](/assets/images/help/enterprises/settings-scim-save.png)
1. Configurar provisionamento de usuário no aplicativo para {% data variables.product.product_name %} no seu IdP.

  Os seguintes IdPs fornecem documentação sobre configuração de provisionamento para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

  | IdP | Mais informações |
  | :- | :- |
  | Azure AD | [Tutorial: Configurar o {% data variables.product.prodname_ghe_managed %} para o provisionamento automático de usuário](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) no Microsoft Docs. Para configurar o Azure AD para o {% data variables.product.prodname_ghe_managed %}, confira "[Como configurar a autenticação e o provisionamento para sua empresa usando o Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)".|
| Okta | (beta) Para configurar o Okta para o {% data variables.product.prodname_ghe_managed %}, confira "[Como configurar a autenticação e o provisionamento para sua empresa usando o Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)".|

  O aplicativo no seu IdP exige dois valores para provisionar ou desprovisionar contas de usuário em {% data variables.product.product_location %}.

  | Valor | Outros nomes | Descrição | Exemplo |
  | :- | :- | :- | :- |
  | URL | URL do Locatário | URL para a API de provisionamento SCIM para a sua empresa em {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Segredo compartilhado | Token de acesso pessoal, token secreto | Token para aplicativo no seu IdP para executar tarefas de provisionamento em nome do proprietário de uma empresa | Token de acesso pessoal que você criou no passo 1 |
