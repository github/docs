---
title: Como configurar o OIDC para usuários empresariais gerenciados
shortTitle: OIDC for managed users
intro: 'Você pode gerenciar automaticamente o acesso à conta empresarial no {% data variables.product.prodname_dotcom %} configurando o SSO (logon único) do OIDC (OpenID Connect) e habilitar o suporte para a CAP (política de acesso condicional) do IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: d52626ad035d957a7908e07e81d12824b9601ee5
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147061775'
---
{% data reusables.enterprise-accounts.oidc-beta-notice %}

## Sobre o OIDC para usuários empresariais gerenciados

Com {% data variables.product.prodname_emus %}, sua empresa usa o IdP (provedor de identidade) para autenticar todos os membros. Você pode usar o OIDC (OpenID Connect) para gerenciar a autenticação do {% data variables.product.prodname_emu_enterprise %}. A habilitação do SSO do OIDC é um processo de configuração de um clique com certificados gerenciados pelo {% data variables.product.prodname_dotcom %} e pelo IdP.

{% data reusables.enterprise-accounts.emu-cap-validates %} Para obter mais informações, confira "[Sobre o suporte à política de acesso condicional do IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)".

Você pode ajustar o tempo de vida de uma sessão e a frequência em que um {% data variables.product.prodname_managed_user %} precisa ser reautenticado no IdP alterando a propriedade de política de tempo de vida dos tokens de ID emitidos para o {% data variables.product.prodname_dotcom %} pelo IdP. O tempo de vida padrão é de uma hora. Para obter mais informações, confira "[Tempos de vida de token configuráveis na plataforma de identidade da Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes)" na documentação do Azure AD.

Se você usa o SSO do SAML para autenticação no momento, mas gostaria de usar o OIDC e se beneficiar do suporte ao CAP, siga o caminho da migração. Para obter mais informações, confira "[Como migrar do SAML para o OICD](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)". 

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Suporte do provedor de identidade

O suporte ao OIDC está em versão beta pública e disponível para clientes que usam o Azure AD (Azure Active Directory). 

Cada locatário do Azure AD pode dar suporte a apenas uma integração do OIDC com {% data variables.product.prodname_emus %}. Se você quiser conectar o Azure AD a mais de uma empresa no {% data variables.product.prodname_dotcom %}, use o SAML. Para saber mais, confira "[Como configurar o logon único do SAML para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## Como configurar o OIDC para usuários empresariais gerenciados

1. Entre no {% data variables.product.prodname_dotcom_the_website %} como o usuário de instalação para sua nova empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Selecione **Exigir logon único do OIDC**.  
   ![Captura de tela mostrando a caixa de seleção "Exigir logon único do OIDC"](/assets/images/help/enterprises/require-oidc.png)
1. Para continuar a instalação e ser redirecionado ao Azure AD, clique em **Salvar**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## Habilitando provisionamento

Depois que você habilitar o SSO do OIDC, habilite o provisionamento. Para obter mais informações, confira "[Como configurar o provisionamento do SCIM para os usuários gerenciados corporativos](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".
