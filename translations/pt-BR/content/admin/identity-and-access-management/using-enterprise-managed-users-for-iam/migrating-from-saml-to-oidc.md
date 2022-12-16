---
title: Como migrar o SAML para o OIDC
shortTitle: Migrating from SAML to OIDC
intro: 'Se você estiver usando o SAML para autenticar membros no seu {% data variables.enterprise.prodname_emu_enterprise %}, migre para o OIDC (OpenID Connect) e aproveite o suporte à Política de Acesso Condicional do seu IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180042'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Sobre a migração do seu {% data variables.enterprise.prodname_emu_enterprise %} do SAML para o OIDC

Se o seu {% data variables.enterprise.prodname_emu_enterprise %} usa o SSO do SAML para autenticação no Azure AD (Azure Active Directory), você pode migrar para o OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

Quando você migra do SAML para o OIDC, os {% data variables.enterprise.prodname_managed_users %} e os grupos que foram provisionados anteriormente para o SAML, mas que não foram provisionados pelo aplicativo {% data variables.product.prodname_emu_idp_oidc_application %}, ficam com "(SAML)" acrescentado aos nomes de exibição deles.

Se você não estiver familiarizado com {% data variables.product.prodname_emus %} e ainda não configurou a autenticação para sua empresa, não será necessário migrar, pois você poderá configurar o logon único do OIDC imediatamente. Para obter mais informações, confira "[Como configurar o OIDC para os usuários empresariais gerenciados](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".

## Como migrar a empresa

{% note %}

**Observação:** para entrar como o usuário de configuração, você precisará de um código de recuperação. Se você ainda não tem os códigos de recuperação, acesse-os enquanto estiver conectado como proprietário da empresa. Para obter mais informações, confira "[Como baixar os códigos de recuperação de logon único da conta empresarial](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)".

{% endnote %}

1. Antes de iniciar a migração, entre no Azure e desabilite o provisionamento no aplicativo {% data variables.product.prodname_emu_idp_application %} existente.
1. Se você usar [políticas de local de rede de AC (Acesso Condicional)](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) no Azure AD e estiver usando uma lista de permissões de IP com sua conta corporativa ou qualquer uma das organizações pertencentes à conta corporativa em {% data variables.product.prodname_dotcom_the_website %}, desabilite as listas de permissões de IP. Para obter mais informações, confira "[Como impor configurações de segurança em sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" e "[Como gerenciar endereços IP permitidos para sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)".
1.  Entre no {% data variables.product.prodname_dotcom_the_website %} como o usuário de configuração da nova empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**. 
1. Quando for solicitado que você continue para o provedor de identidade, clique em **Usar um código de recuperação** e entre usando um dos códigos de recuperação da empresa.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Na parte inferior da página, ao lado de "Migrar para o logon único do OpenID Connect", clique em **Configurar com o Azure**.  
   {% warning %} 

   **Aviso:** a migração pode levar até uma hora e é importante que nenhum usuário seja provisionado durante a migração. Você pode confirmar se a migração ainda está em andamento retornando à página de configurações de segurança da empresa. Se a opção "Exigir autenticação do SAML" ainda estiver marcada, a migração ainda estará em andamento.

   {% endwarning %}

   ![Captura de tela mostrando o botão "Configurar com o Azure"](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Leia os dois avisos e clique para continuar.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. Em uma nova guia ou janela, conectado como o usuário de configuração no {% data variables.product.prodname_dotcom_the_website %}, crie um {% data variables.product.pat_v1 %} com o escopo **admin:enterprise** e **sem expiração** e copie-o para a área de transferência. Para obter mais informações sobre como criar um token, confira "[Como criar um {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)".
1. Nas configurações do aplicativo {% data variables.product.prodname_emu_idp_oidc_application %} no portal do Azure, em "URL do Locatário", digite `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, substituindo YOUR_ENTERPRISE pelo nome da sua conta empresarial.  
   
   Por exemplo, se a URL da conta empresarial for `https://github.com/enterprises/octo-corp`, o nome da conta empresarial será `octo-corp`.
1. Em "Token secreto", cole o {% data variables.product.pat_v1 %} com o escopo **admin:enterprise** criado anteriormente.
1. Para testar a configuração, clique em **Testar conectividade**.
1. Para salvar as alterações, na parte superior do formulário, clique em **Salvar**.
1. No portal do Azure, copie os usuários e os grupos do aplicativo {% data variables.product.prodname_emu_idp_application %} antigo para o novo aplicativo {% data variables.product.prodname_emu_idp_oidc_application %}.
1. Teste a configuração provisionando um só novo usuário.
1. Se o teste for bem-sucedido, inicie o provisionamento de todos os usuários clicando em **Iniciar provisionamento**.
