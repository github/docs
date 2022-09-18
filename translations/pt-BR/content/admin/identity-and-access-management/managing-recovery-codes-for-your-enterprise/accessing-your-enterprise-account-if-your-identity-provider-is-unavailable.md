---
title: Acessando a conta corporativa se seu provedor de identidade estiver indisponível
shortTitle: Access your enterprise account
intro: 'Você pode entrar no {% data variables.product.product_name %}, mesmo que o provedor de identidade não esteja disponível ignorando o SSO (logon único) do SAML com um código de recuperação.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578801'
---
Você pode usar um código de recuperação para acessar a conta empresarial quando um erro de configuração de autenticação ou um problema com o IdP (provedor de identidade) impede o uso do SSO do SAML. 

Para acessar a conta corporativa desta forma, você deve ter baixado e armazenado previamente os códigos de recuperação da sua empresa. Para obter mais informações, confira "[Como baixar os códigos de recuperação de logon único da conta empresarial](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)".

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Observação:** se as suas empresas usarem {% data variables.product.prodname_emus %}, você precisará entrar como o usuário de configuração para usar um código de recuperação.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
