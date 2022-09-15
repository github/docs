---
title: Conectar uma assinatura do Azure à sua empresa
intro: 'Você pode usar o Contrato Enterprise da Microsoft para habilitar e pagar pelo uso do {% data variables.product.prodname_actions %}, do {% data variables.product.prodname_registry %} e dos {% data variables.product.prodname_github_codespaces %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110879'
---
## Sobre as assinaturas do Azure e {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) e "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% note %}

**Observação:** se sua conta corporativa estiver em um Contrato Enterprise da Microsoft, conectar uma assinatura do Azure é a única maneira de usar {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %} além dos valores incluídos ou usar {% data variables.product.prodname_codespaces %} de alguma forma.

{% endnote %}

Após conectar a uma assinatura do Azure, você também poderá gerenciar seus limites de gastos.

- "[Gerenciando seu limite de gastos do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[Gerenciando seu limite de gastos do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[Como gerenciar o limite de gastos dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"

## Conectar a sua assinatura do Azure à sua conta corporativa

Para conectar sua assinatura do Azure, você deve ter permissões de proprietário na assinatura.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. Em "Informações de Pagamento", clique em **Adicionar Assinatura do Azure**.
1. Para entrar na sua conta da Microsoft, siga as instruções.
1. Revise a instrução de "Permissões solicitadas". Se você concordar com os termos, clique em **Aceitar**.
1. Em "Selecione uma assinatura", selecione o ID de Assinatura do Azure que você deseja conectar à sua empresa.

   {% note %}

   **Observação:** a Validação de Permissão de Assinatura do {% data variables.product.company_short %} solicita o acesso somente leitura para exibir a lista de assinaturas disponíveis. Para selecionar uma assinatura do Azure, você deve ter permissões de proprietário na assinatura. Se o inquilino padrão não tiver as permissões corretas, você deverá especificar o ID de um inquilino diferente. Para obter mais informações, confira [Plataforma de identidade da Microsoft e fluxo de código de autorização do OAuth 2.0](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) no Microsoft Docs.

   {% endnote %}
1. Clique em **Conectar**.

## Desconectar a sua assinatura do Azure da sua conta corporativa

Após desconectar a sua assinatura Azure da conta corporativa, seu uso não poderá mais exceder os valores incluídos no seu plano.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. Em "Assinatura do Azure", à direita da ID da assinatura que deseja desconectar, clique em **{% octicon "trash" aria-label="The trash icon" %}** .
1. Leia o prompt e clique em **Remover**.
