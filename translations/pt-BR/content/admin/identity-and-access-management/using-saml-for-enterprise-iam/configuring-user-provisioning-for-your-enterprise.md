---
title: Configurar o provisionamento do usuário para a sua empresa
shortTitle: Configurar provisionamento do usuário
intro: 'Você pode configurar o Sistema para Gerenciamento de Identidades entre Domínios (SCIM) para sua empresa, que automaticamente fornece contas de usuário em {% data variables.product.product_location %} quando você atribuir o aplicativo para {% data variables.product.product_location %} a um usuário no seu provedor de identidade (IdP).'
permissions: 'Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.'
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
---

## Sobre provisionamento de usuários para sua empresa

{% data reusables.saml.ae-uses-saml-sso %} Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

Você pode configurar o provisionamento do usuário com SCIM para criar ou suspender contas de usuário automaticamente e conceder acesso para {% data variables.product.product_name %} ao atribuir ou desatribuir o aplicativo no seu IdP. Para obter mais informações sobre SCIM, consulte [Sistema para Gerenciamento de Identidade de Domínio: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) no site IETF.

Se você não configurar o provisionamento de usuários com o SCIM, seu IdP não irá comunicar-se com {% data variables.product.product_name %} automaticamente quando você atribuir ou desatribuir o aplicativo ao usuário. Sem o SCIM, {% data variables.product.product_name %} cria uma conta de usuário usando o SAML Just-in-Time (JIT) provisionando pela primeira vez que alguém acessa {% data variables.product.product_name %} efetua o login autenticando por meio do seu IdP.

A configuração do provisionamento permite que o seu IdP se comunique com {% data variables.product.product_location %} quando você atribuir ou cancela a atribuição do aplicativo para {% data variables.product.product_name %} a um usuário no seu IdP. Ao atribuir o aplicativo, seu IdP pedirá que {% data variables.product.product_location %} crie uma conta e enviar um e-mail de integração para o usuário. Ao desatribuir o aplicativo, o seu IdP irá comunicar-se com {% data variables.product.product_name %} para invalidar quaisquer sessões de SAML e desabilitar a conta do integrante.

Para configurar o provisionamento para o seu negócio, você deve habilitar o provisionamento em {% data variables.product.product_name %} e, em seguida, instalar e configurar um aplicativo de provisionamento no seu IdP.

O aplicativo de provisionamento no seu IdP comunica-se com {% data variables.product.product_name %} através da nossa API de SCIM para empresas. Para obter mais informações, consulte "[Administração do GitHub Enterprise](/rest/reference/enterprise-admin#scim)" na documentação da API REST de {% data variables.product.prodname_dotcom %}.

## Provedores de identidade compatíveis

Os seguintes IdPs são compatíveis com SSO com {% data variables.product.prodname_ghe_managed %}:

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Para IdPs compatíveis com o mapeamento de equipe, você pode atribuir ou desatribuir o aplicativo de {% data variables.product.product_name %} para grupos de usuários do seu IdP. Estes grupos são disponibilizados para os proprietários da organização e mantenedores de equipe em {% data variables.product.product_location %} para mapear para equipes de {% data variables.product.product_name %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Pré-requisitos

Para prover e desprover automaticamente o acesso a {% data variables.product.product_location %} a partir do seu IdP, primeiro você deve configurar o SSO de SAML ao inicializar {% data variables.product.product_name %}. Para obter mais informações, consulte "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Você deve ter acesso administrativo no seu IdP para configurar o aplicativo para o provisionamento do usuário para {% data variables.product.product_name %}.

## Habilitar provisionamento de usuários para a sua empresa

1. Enquanto estiver conectado {% data variables.product.product_location %} como proprietário de uma empresa, crie um token de acesso pessoal com **admin:enterprise** escopo. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."
  {% note %}

  **Atenção**:
    - Para criar o token de acesso pessoal, recomendamos usar a conta para o primeiro proprietário da empresa criado durante a inicialização. Para obter mais informações, consulte "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Você precisará deste token de acesso pessoal para configurar o aplicativo para o SCIM no seu IdP. Armazene o token com segurança em um gerenciador de senhas até que você precise do token novamente posteriormente nestas instruções.

  {% endnote %}
  {% warning %}

  **Aviso**: Se a conta de usuário para o dono da empresa que cria o token de acesso pessoal está desativada ou desprovisionada, seu IdP não vai mais provisionar e desprovisionar contas de usuário a sua empresa automaticamente. Outro proprietário da empresa deve criar um novo token de acesso pessoal e reconfigurar o provisionamento no IdP.

  {% endwarning %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Em "Provisionamento do Usuário do SCIM", selecione **Exigir o provisionamento do usuário do SCIM**. ![Caixa de seleção para "Exigir o provisionamento do usuário do SCIM" nas configurações de segurança das empresas](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Clique em **Salvar**. ![Salvar botão em "Exigir o provisionamento do usuário SCIM" nas configurações de segurança da empresa](/assets/images/help/enterprises/settings-scim-save.png)
1. Configurar provisionamento de usuário no aplicativo para {% data variables.product.product_name %} no seu IdP.

  Os seguintes IdPs fornecem documentação sobre configuração de provisionamento para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

  | IdP      | Mais informações                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
  |:-------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | Azure AD | [Tutorial: Configurar {% data variables.product.prodname_ghe_managed %} para provisionamento automático do usuário](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) na documentação da Microsoft. Para configurar o Azure AD para {% data variables.product.prodname_ghe_managed %}, consulte "[Configurando a autenticação e provisionamento para sua empresa usando o Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
  | Okta     | (beta) Para configurar o Okta para {% data variables.product.prodname_ghe_managed %}, consulte "[Configurando a autenticação e provisionamento para sua empresa usando o Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)".                                                                                                                                                                                                                                                       |

  O aplicativo no seu IdP exige dois valores para provisionar ou desprovisionar contas de usuário em {% data variables.product.product_location %}.

  | Valor              | Outros nomes                           | Descrição                                                                                                        | Exemplo                                                            |
  |:------------------ |:-------------------------------------- |:---------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------ |
  | URL                | URL do inquilino                       | URL para a API de provisionamento SCIM para a sua empresa em {% data variables.product.prodname_ghe_managed %} | <nobr>`{% data variables.product.api_url_pre %}/scim/v2</nobr>` |
  | Segredo partilhado | Token de acesso pessoal, token secreto | Token para aplicativo no seu IdP para executar tarefas de provisionamento em nome do proprietário de uma empresa | Token de acesso pessoal que você criou no passo 1                  |
