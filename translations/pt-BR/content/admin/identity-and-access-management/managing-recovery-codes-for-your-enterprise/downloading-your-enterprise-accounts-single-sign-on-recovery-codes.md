---
title: Como fazer o download dos códigos de recuperação de logon único da conta empresarial
shortTitle: Download recovery codes
intro: 'Para garantir que você possa acessar o {% data variables.product.product_name %} se o IdP (provedor de identidade) não estiver disponível, faça o download dos códigos de recuperação do SSO (logon único) do SAML da conta empresarial.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 82f44654b18a36d2fb29797fe8b6e0426785522b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147063591'
---
Caso seu IdP esteja indisponível, você pode usar um código de recuperação para efetuar o login e acessar seu negócio em {% data variables.product.product_location %}. Para obter mais informações, confira "[Como acessar sua conta corporativa se o seu provedor de identidade não estiver disponível](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Se você não salvou os códigos de recuperação quando configurou o SSO do SAML, ainda poderá acessá-los nas configurações da empresa.



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Em{% ifversion oidc-for-emu %} either{% endif %} "Exigir a autenticação do SAML"{% ifversion oidc-for-emu %} ou Exigir a autenticação do OIDC"{% endif %}, clique em **Salvar os códigos de recuperação**.{% ifversion oidc-for-emu %} {% note %}
  
  **Observação:** o SSO do OIDC só está disponível para {% data variables.product.prodname_emus %}. Para obter mais informações, confira "[Sobre os Usuários Gerenciados Corporativos](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".
  
  {% endnote %}{% endif %}
  
  ![Captura de tela do botão usado para testar a configuração do SAML antes da imposição](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Para salvar os códigos de recuperação, clique em **Baixar**, **Imprimir** ou **Copiar**.
  ![Captura de tela dos botões usados para baixar, imprimir ou copiar os códigos de recuperação](/assets/images/help/saml/saml_recovery_code_options.png)
