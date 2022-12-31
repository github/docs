---
title: Fazendo o download dos códigos de recuperação do logon único SAML da conta corporativa
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145094953"
---
Caso seu IdP esteja indisponível, você pode usar um código de recuperação para efetuar o login e acessar seu negócio em {% data variables.product.product_location %}. Para obter mais informações, confira "[Como acessar sua conta corporativa se o seu provedor de identidade não estiver disponível](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Se você não salvou seus códigos de recuperação ao configurar SAML SSO, você ainda poderá acessá-los nas configurações da sua empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Em "Exigir autenticação SAML", clique em **Salvar os códigos de recuperação**.
![Captura de tela do botão usado para testar a configuração do SAML antes da imposição](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Para salvar os códigos de recuperação, clique em **Baixar**, **Imprimir** ou **Copiar**.
![Captura de tela dos botões usados para baixar, imprimir ou copiar os códigos de recuperação](/assets/images/help/saml/saml_recovery_code_options.png)
