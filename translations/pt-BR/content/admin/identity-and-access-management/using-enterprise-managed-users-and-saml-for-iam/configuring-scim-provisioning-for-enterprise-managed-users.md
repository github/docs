---
title: Configurando o provisionamento de SCIM para usuários gerenciados pela empresa
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145094949"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>Sobre o provisionamento para {% data variables.product.prodname_emus %}

Você deve configurar o provisionamento para {% data variables.product.prodname_emus %} a fim de criar, gerenciar e desativar contas de usuário para os integrantes da sua empresa. Ao configurar o provisionamento para {% data variables.product.prodname_emus %}, os usuários atribuídos ao aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu provedor de identidade serão provisionados como novas contas de usuário em {% data variables.product.prodname_dotcom %} por meio do SCIM e os usuários serão adicionados à sua empresa. 

Quando você atualiza as informações associadas à identidade de um usuário no IdP, seu IdP atualiza a conta do usuário em GitHub.com. Quando você cancelar a atribuição do usuário do aplicativo de {% data variables.product.prodname_emu_idp_application %} ou desativar a conta de um usuário no seu IdP, este irá comunicar-se com {% data variables.product.prodname_dotcom %} para invalidar qualquer sessão do SAML e desabilitar a conta do integrante. As informações da conta desativada serão mantidas e seu nome de usuário será alterado para hash do seu nome de usuário original com o código curto anexado. Se você reatribuir um usuário para o aplicativo {% data variables.product.prodname_emu_idp_application %} ou reativar sua conta no seu IdP, a conta de {% data variables.product.prodname_managed_user %} em {% data variables.product.prodname_dotcom %} será reativada e o nome de usuário restaurado.

Os grupos no seu IdP podem ser usados para gerenciar a participação de equipe nas organizações de sua empresa, permitindo que você configure o acesso e as permissões do repositório por meio do seu IdP. Para obter mais informações, confira "[Como gerenciar associações à equipe com grupos de provedores de identidade](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

## <a name="prerequisites"></a>Pré-requisitos

Antes de configurar o provisionamento para {% data variables.product.prodname_emus %}, você deverá configurar o logon único SAML. Para obter mais informações, confira "[Como configurar o logon único do SAML para os Usuários Gerenciados Corporativos](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## <a name="creating-a-personal-access-token"></a>Criando um token de acesso pessoal

Para configurar o provisionamento para o {% data variables.product.prodname_emu_enterprise %}, você precisa ter um token de acesso pessoal com o escopo **admin:enterprise** que pertença ao usuário da instalação.

{% warning %}

**Aviso:** se o token vencer ou um usuário provisionado criar o token, o provisionamento do SCIM poderá parar de funcionar inesperadamente. Certifique-se de criar o token enquanto estiver conectado como usuário de configuração e que o vencimento do token esteja definido como "Sem vencimento".

{% endwarning %}

1. Entre no {% data variables.product.prodname_dotcom_the_website %} como o usuário de instalação para sua nova empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. Em **Observação**, dê ao token um nome descritivo.
   ![Captura de tela que mostra o nome do token](/assets/images/help/enterprises/emu-pat-name.png)
1. Selecione o menu suspenso **Validade** e clique em **Sem data de validade**.
   ![Captura de tela que mostra a validade do token definida como sem validade](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Selecione o escopo **admin:enterprise**.
   ![Captura de tela que mostra o escopo admin:enterprise](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Clique em **Gerar token**.
   ![Botão Gerar token](/assets/images/help/settings/generate_token.png)
1. Para copiar o token para a área de transferência, clique no {% octicon "paste" aria-label="The copy icon" %}.
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens.png)
2. Para salvar o token para usar mais tarde, armazene o novo token de forma segura em um gerenciador de senhas.

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>Configurando provisionamento para {% data variables.product.prodname_emus %}

Depois de criar seu token de acesso pessoal e armazená-lo com segurança, você pode configurar o provisionamento no seu provedor de identidade.

{% data reusables.scim.emu-scim-rate-limit %}

Para configurar o Azure Active Directory para provisionar usuários no {% data variables.product.prodname_emu_enterprise %}, confira [Tutorial: Configurar o Usuário Gerenciado do GitHub Enterprise para provisionamento automático de usuário](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) na documentação do Azure AD.

Para configurar o Okta para provisionar usuários no {% data variables.product.prodname_emu_enterprise %}, confira "[Como configurar o provisionamento do SCIM para os Usuários Gerenciados Corporativos com o Okta](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)".

