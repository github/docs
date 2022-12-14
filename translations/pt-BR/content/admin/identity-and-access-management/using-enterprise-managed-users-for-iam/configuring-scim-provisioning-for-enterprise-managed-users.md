---
title: Configurando o provisionamento de SCIM para usuários gerenciados pela empresa
shortTitle: Provisioning managed users
intro: Você pode configurar seu provedor de identidade para fornecer novos usuários e gerenciar seus integrantes na sua empresa e equipes.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3cf1f917f0bfd0e02a1b712958f8d72a041b7281
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160693'
---
## Sobre o provisionamento para {% data variables.product.prodname_emus %}

Você deve configurar o provisionamento para {% data variables.product.prodname_emus %} a fim de criar, gerenciar e desativar contas de usuário para os integrantes da sua empresa. 

Depois que você configurar o provisionamento para o {% data variables.product.prodname_emus %}, os usuários atribuídos ao aplicativo {% data variables.product.prodname_emu_idp_application %} no provedor de identidade serão provisionados como novos {% data variables.enterprise.prodname_managed_users %} no {% data variables.product.prodname_dotcom %} por meio do SCIM, e os {% data variables.enterprise.prodname_managed_users %} serão adicionados à sua empresa. Se você atribuir um grupo ao aplicativo, todos os usuários do grupo serão provisionados como novos {% data variables.enterprise.prodname_managed_users %}.

Quando você atualiza as informações associadas à identidade de um usuário no IdP, o IdP atualiza a conta do usuário no {% data variables.product.prodname_dotcom_the_website %}. Quando você cancela a atribuição do usuário do aplicativo ao {% data variables.product.prodname_emu_idp_application %} ou desativa a conta de um usuário no IdP, o IdP se comunica com o {% data variables.product.prodname_dotcom %} para invalidar as sessões e desabilitar a conta do membro. As informações da conta desativada serão mantidas e seu nome de usuário será alterado para hash do seu nome de usuário original com o código curto anexado. Se você transferir um usuário para o aplicativo {% data variables.product.prodname_emu_idp_application %} ou reativar a conta dele no IdP, a conta do {% data variables.enterprise.prodname_managed_user %} no {% data variables.product.prodname_dotcom %} será reativada e o nome de usuário restaurado.

Os grupos no seu IdP podem ser usados para gerenciar a participação de equipe nas organizações de sua empresa, permitindo que você configure o acesso e as permissões do repositório por meio do seu IdP. Para obter mais informações, confira "[Como gerenciar associações à equipe com grupos de provedores de identidade](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

## Pré-requisitos

Para configurar o provisionamento de {% data variables.product.prodname_emus %}, você precisa configurar o logon único do SAML{% ifversion oidc-for-emu %} ou do OIDC{% endif %}. {% ifversion oidc-for-emu %}

- Para obter mais informações sobre como configurar o OIDC, confira "[Como configurar o OIDC para usuários empresariais gerenciados](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"
- {% endif %}Para obter mais informações, confira "[Como configurar o logon único do SAML para usuários empresariais gerenciados](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## Como criar um {% data variables.product.pat_generic %}

Para configurar o provisionamento para o {% data variables.enterprise.prodname_emu_enterprise %}, você precisa ter um{% data variables.product.pat_v1 %} com o escopo **admin:enterprise** que pertença ao usuário da instalação.

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

## Configurando provisionamento para {% data variables.product.prodname_emus %}

Depois de criar seu {% data variables.product.pat_generic %} e armazená-lo com segurança, você pode configurar o provisionamento no provedor de identidade. 

{% data reusables.scim.emu-scim-rate-limit %}

Para configurar o provisionamento, clique no link apropriado na tabela abaixo.

| Provedor de identidade | Método SSO | Mais informações | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | [Tutorial: como configurar o GitHub Enterprise Managed User (OIDC) para provisionamento automático de usuários](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) na documentação do Azure AD |{% endif %} | Azure AD | SAML | [Tutorial: como configurar o GitHub Enterprise Managed User para provisionamento automático de usuários](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) na documentação do Azure AD | | Okta | SAML | [Como configurar o provisionamento do SCIM para usuários empresariais gerenciados com o Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |

{% note %}

**Observação:** o Azure AD não dá suporte ao provisionamento de grupos aninhados. Para obter mais informações, confira [Como funciona o Provisionamento de Aplicativo no Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping).

{% endnote %}
