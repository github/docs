---
title: Como configurar o provisionamento de usuários na empresa com o SCIM
shortTitle: Configure SCIM user provisioning
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
ms.openlocfilehash: ded93a01d14d1a5e26cdf35efed4f13afc832ca1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192662'
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

Se não houver uma conta existente com um nome de usuário correspondente na instância, o usuário não conseguirá entrar.{% ifversion scim-for-ghes %} Para fazer essa correspondência, o {% data variables.product.product_name %} compara a declaração SAML `NameId` do IdP com a declaração `username` para cada conta de usuário fornecida pelo SCIM na instância.{% endif %}

{% ifversion scim-for-ghes %}

{% note %}

**Nota**: durante a autenticação SAML, alguns ambientes podem usar um valor diferente de `NameID` como declaração de identificação exclusiva. Atualmente, se você usar o provisionamento SCIM, os mapeamentos customizados para atributos de usuário SAML não são suportados.

{% endnote %}

{% endif %}

Se {% data variables.product.product_name %} identifica com êxito um usuário do IdP, mas os detalhes da conta, como endereço de email, nome ou sobrenome não correspondem, a instância substitui os detalhes pelos valores do IdP. Qualquer endereço de email diferente do email principal fornecido pelo SCIM também será excluído da conta do usuário.

## Provedores de identidade compatíveis

{% ifversion ghes %}

Durante a versão beta privada, sua equipe de conta fornecerá a documentação para a configuração do SCIM para {% data variables.product.product_name %} em um IdP com suporte.

{% elsif ghae %}

Os IdPs a seguir dão suporte ao provisionamento de usuários com o SCIM para o {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

Para IdPs compatíveis com o mapeamento de equipe, você pode atribuir ou desatribuir o aplicativo de {% data variables.product.product_name %} para grupos de usuários do seu IdP. Estes grupos são disponibilizados aos proprietários da organização e mantenedores de equipe em {% data variables.location.product_location %} a serem mapeados para as equipes do {% data variables.product.product_name %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

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

Para executar ações de provisionamento em sua instância, você criará uma conta de usuário integrada e promoverá a conta a um proprietário de empresa.

Depois de habilitar o SCIM em uma instância do {% data variables.product.product_name %}, todas as contas de usuário serão suspensas. A conta de usuário interna continuará a executar ações de provisionamento. Depois de conceder a um usuário acesso à sua instância do IdP, o IdP se comunicará com a instância usando SCIM para cancelar a suspensão da conta do usuário.

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
1. Crie uma conta de usuário integrada para executar ações de provisionamento em sua instância. Para obter mais informações, confira "[Como permitir a autenticação interna para usuários fora do seu provedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)".
1. Promova a conta de usuário dedicada a um proprietário corporativo. Para obter mais informações, confira "[Como convidar pessoas para gerenciar sua empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)".
1. Entre na instância como o novo proprietário corporativo.
1. Crie um {% data variables.product.pat_v1 %} com o escopo **admin:enterprise**. Não especifique uma data de validade para o {% data variables.product.pat_v1 %}. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

   {% warning %}
   
   **Aviso**: certifique-se de não especificar uma data de validade para o {% data variables.product.pat_v1 %}. Se você especificar uma data de validade, o SCIM não funcionará mais após a data de validade.
   
   {% endwarning %} {% note %}

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
1. Configure o provisionamento de usuário no aplicativo para {% data variables.product.product_name %} em seu IdP. {% ifversion scim-for-ghes %} Para solicitar a documentação de um IdP com suporte, entre em contato com o gerenciador de contas no {% data variables.contact.contact_enterprise_sales %}. Se o IdP não tiver suporte, você deverá criar o aplicativo e configurar o SCIM manualmente. {% elsif ghae %}

  Os seguintes IdPs fornecem documentação sobre configuração de provisionamento para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

  | IdP | Mais informações |
  | :- | :- |
  | Azure AD | [Tutorial: configure {% data variables.product.prodname_ghe_managed %} para provisionamento automático de usuários](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) no Microsoft Docs. Para configurar o Azure AD para {% data variables.product.product_name %}, confira "[Como configurar autenticação e provisionamento para sua empresa usando o Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
  | Okta | (beta) Para configurar o Okta para {% data variables.product.product_name %}, confira "[Como configurar autenticação e provisionamento para sua empresa usando o Okta](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)". |

  O aplicativo no IdP exige dois valores para provisionar ou desprovisionar contas de usuário em {% data variables.location.product_location %}.

  | Valor | Outros nomes | Descrição | Exemplo |
  | :- | :- | :- | :- |
  | URL | URL do Locatário | URL para a API de provisionamento SCIM para sua empresa no {% data variables.product.product_name %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Segredo compartilhado | {% data variables.product.pat_generic_caps %}, token secreto | Token para aplicativo no seu IdP para executar tarefas de provisionamento em nome do proprietário de uma empresa | {% data variables.product.pat_generic_caps %} que você criou na etapa 1 |
  {%- endif %}
