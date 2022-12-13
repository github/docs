---
title: Como configurar o provisionamento de usuários na empresa com o SCIM
shortTitle: Configure user provisioning
intro: 'Você pode configurar o SCIM (Sistema de Gerenciamento de Usuários entre Domínios) para a {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, que provisiona automaticamente as contas de usuário quando você atribui o aplicativo {% ifversion scim-for-ghes %}da instância{% elsif ghae %}do {% data variables.product.product_name %}{% endif %} a um usuário no IdP (provedor de identidade).'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c330d8e375522901d2738b581a897d42d30d628e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107874'
---
{% data reusables.scim.ghes-beta-note %}

## Sobre o provisionamento de usuários do {% data variables.product.product_name %}

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% endif %}

{% ifversion scim-for-ghes %} Se você usar o SSO (logon único) do SAML para {% data variables.location.product_location %}, você{% elsif ghae %}Você{% endif %} poderá configurar o SCIM para criar ou suspender automaticamente as contas de usuário e permitir acesso{% ifversion scim-for-ghes %} à instância{% elsif ghae %} do {% data variables.product.product_name %}{% endif %} ao atribuir ou desatribuir o aplicativo no IdP. Para obter mais informações sobre o SCIM, confira [Sistema de Gerenciamento de Usuários entre Domínios: protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) no site do IETF.

Se você não configurar o provisionamento de usuários com SCIM, seu IdP não se comunicará com {% data variables.product.product_name %} automaticamente quando você atribuir ou cancelar a atribuição do aplicativo a um usuário. Sem SCIM, {% data variables.product.product_name %} cria uma conta de usuário usando o provisionamento SAML Just-in-Time (JIT) na primeira vez que alguém navega para {% data variables.product.product_name %} e faz login autenticando por meio de seu IdP.

A configuração do provisionamento permite que o IdP se comunique com a {% data variables.location.product_location %} quando você atribui ou desatribui o aplicativo do {% data variables.product.product_name %} a um usuário no IdP. Ao atribuir o aplicativo, o IdP pedirá que a {% data variables.location.product_location %} crie uma conta e envie um email de integração ao usuário. Ao desatribuir o aplicativo, o seu IdP irá comunicar-se com {% data variables.product.product_name %} para invalidar quaisquer sessões de SAML e desabilitar a conta do integrante.

Para configurar o provisionamento para o seu negócio, você deve habilitar o provisionamento em {% data variables.product.product_name %} e, em seguida, instalar e configurar um aplicativo de provisionamento no seu IdP.

{% ifversion scim-for-ghes %}

O aplicativo de provisionamento no IdP se comunica com o {% data variables.product.product_name %} usando a API do SCIM. Para obter mais informações, confira "[SCIM](/rest/enterprise-admin/scim)" na documentação da API REST.

{% endif %}

## Sobre identidades e declarações

Depois que um administrador do IdP permite que uma pessoa acesse a {% data variables.location.product_location %}, o usuário pode se autenticar por meio do IdP para acessar o {% data variables.product.product_name %} usando o SSO de SAML.

Durante a autenticação, {% ifversion scim-for-ghes %}a instância{% elsif ghae %}o {% data variables.product.product_name %}{% endif %} tenta associar o usuário a uma identidade SAML. Por padrão, {% ifversion scim-for-ghes %}a instância{% elsif ghae %}o {% data variables.product.product_name %}{% endif %} compara a declaração `NameID` do IdP com o nome de usuário da conta. O {% data variables.product.product_name %} normaliza o valor de `NameID` para a comparação. Para obter mais informações sobre normalização de nome de usuário, confira "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)".

Se não houver nenhum nome de usuário correspondente na instância, a instância criará uma conta para o usuário. Se houver uma conta com um nome de usuário correspondente na instância, o usuário entrará na conta.{% ifversion scim-for-ghes %} O {% data variables.product.product_name %} compara a declaração do IdP com todas as contas na instância, independentemente se contas usam a autenticação interna ou já estão associadas a uma identidade SAML.{% endif %}

{% ifversion scim-for-ghes %}

Ao usar o SSO de SAML, um administrador do site pode configurar atributos de usuário personalizados para a instância. Um atributo de nome de usuário personalizado permitirá que a instância use um valor do IdP diferente de `NameID`. O {% data variables.product.product_name %} respeitará esse mapeamento quando o SCIM estiver configurado. Para obter mais informações sobre o mapeamento de atributos de usuário, confira "[Como configurar o logon único de SAML na empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)".

{% endif %}

Se o {% data variables.product.product_name %} identificar com êxito um usuário do IdP, mas os detalhes da conta, como endereço de email, nome ou sobrenome, não corresponderem, a instância atualizará os detalhes com os valores do IdP.

## Provedores de identidade compatíveis

Os IdPs a seguir dão suporte ao provisionamento de usuários com o SCIM para o {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

{% ifversion ghae %} Para IdPs compatíveis com o mapeamento de equipe, você pode atribuir ou desatribuir o aplicativo do {% data variables.product.product_name %} a grupos de usuários do IdP. Estes grupos são disponibilizados aos proprietários da organização e mantenedores de equipe em {% data variables.location.product_location %} a serem mapeados para as equipes do {% data variables.product.product_name %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
{% endif %}

## Pré-requisitos

{% ifversion ghae %}

- Você precisa configurar o SSO de SAML ao inicializar o {% data variables.product.product_name %}. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- Você precisa permitir a autenticação interna para usuários que não têm uma conta no IdP. Para obter mais informações, confira "[Como permitir a autenticação interna para usuários fora do seu provedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".

- O IdP precisa dar suporte à realização de chamadas do SCIM a um SP (provedor de serviços).

{% endif %}

- Você deve ter acesso administrativo no seu IdP para configurar o aplicativo para o provisionamento do usuário para {% data variables.product.product_name %}.

## Habilitar provisionamento de usuários para a sua empresa

{% ifversion scim-for-ghes %}

Para executar ações de provisionamento na instância, você criará uma conta de usuário de computador dedicada e a promoverá para proprietário corporativo.

Depois de habilitar o SCIM em uma instância do {% data variables.product.product_name %}, todas as contas de usuário serão suspensas. Se você permitir ao usuário acesso à instância do IdP e o usuário for autenticado com êxito, a conta do usuário não será suspensa.

{% endif %}

{%- ifversion ghae %}
1. Enquanto estiver conectado à {% data variables.location.product_location %} como um proprietário corporativo, crie um {% data variables.product.pat_v1 %} com o escopo **admin:enterprise**. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Observações**:
    - Para criar o {% data variables.product.pat_generic %}, recomendamos usar a conta do primeiro proprietário corporativo que foi criada durante a inicialização. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Você precisará desse {% data variables.product.pat_generic %} para configurar o aplicativo para o SCIM no IdP. Armazene o token com segurança em um gerenciador de senhas até que você precise do token novamente posteriormente nestas instruções.

  {% endnote %} {% warning %}

  **Aviso**: se a conta de usuário do proprietário corporativo que cria o {% data variables.product.pat_generic %} for desativada ou desprovisionada, o IdP não provisionará nem desprovisionará automaticamente as contas de usuário da empresa. Outro proprietário corporativo precisa criar um {% data variables.product.pat_generic %} e reconfigurar o provisionamento no IdP.

  {% endwarning %} {%- elsif scim-for-ghes %}
1. Crie uma conta de usuário de computador dedicada para executar ações de provisionamento na instância. Para obter mais informações, confira "[Como permitir a autenticação interna para usuários fora do seu provedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)".
1. Promova a conta de usuário dedicada a um proprietário corporativo. Para obter mais informações, confira "[Como convidar pessoas para gerenciar sua empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)".
1. Entre na instância como o novo proprietário corporativo.
1. Crie um {% data variables.product.pat_v1 %} com o escopo **admin:enterprise**. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

   {% note %}

   **Observação**: você precisará deste {% data variables.product.pat_generic %} para testar a configuração do SCIM e configurar o aplicativo para o SCIM no IdP. Armazene o token com segurança em um gerenciador de senhas até que você precise do token novamente posteriormente nestas instruções.

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar o SCIM, execute os comandos fornecidos pelo gerente de conta no {% data variables.contact.contact_enterprise_sales %}.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. Para validar se o SCIM está operacional, execute os comandos a seguir. Substitua _PAT DA ETAPA 3_ e _NOME DO HOST DA INSTÂNCIA_ por valores reais.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   O comando deve retornar uma matriz vazia.
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Provisionamento de Usuário do SCIM", selecione **Exigir provisionamento de usuário do SCIM**.
  ![Caixa de seleção usada para "Exigir provisionamento de usuário do SCIM" nas configurações de segurança da empresa](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Clique em **Salvar**.
  ![Botão Salvar em "Exigir provisionamento de usuário do SCIM" nas configurações de segurança da empresa](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %}
1. Configurar provisionamento de usuário no aplicativo para {% data variables.product.product_name %} no seu IdP.

  {%- ifversion ghae %} Os seguintes IdPs fornecem documentação sobre a configuração de provisionamento do {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.
  {%- elsif scim-for-ghes %} O {% data variables.product.company_short %} fornece documentação para configurar o provisionamento dos IdPs a seguir.{% endif %}

  | IdP | Mais informações |
  | :- | :- |
  | Azure AD | {% ifversion ghae %}[Tutorial: Configurar o {% data variables.product.prodname_ghe_managed %} para o provisionamento automático de usuários](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) no Microsoft Docs. {% endif %}Para configurar o Azure AD para o {% data variables.product.product_name %}, confira "[Como configurar a autenticação e o provisionamento da empresa usando o Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
| Okta | {% ifversion ghae %}(beta){% endif %} Para configurar o Okta para o {% data variables.product.product_name %}, confira "[Como configurar a autenticação e o provisionamento na empresa usando o Okta](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)". |

  O aplicativo no IdP exige dois valores para provisionar ou desprovisionar contas de usuário em {% data variables.location.product_location %}.

  | Valor | Outros nomes | Descrição | Exemplo |
  | :- | :- | :- | :- |
  | URL | URL do Locatário | URL para a API de provisionamento SCIM para a sua empresa em {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Segredo compartilhado | {% data variables.product.pat_generic_caps %}, token secreto | Token para aplicativo no seu IdP para executar tarefas de provisionamento em nome do proprietário de uma empresa | Os {% data variables.product.pat_generic_caps %} que você criou na etapa {% ifversion ghae %}1{% elsif scim-for-ghes %}4{% endif %} |
