---
title: Instalar aplicativos na organização
intro: 'É possível instalar aplicativos do {% data variables.product.prodname_marketplace %} para usar em sua organização.'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install app organization
ms.openlocfilehash: bf64ee38839197262852d07c024c72a0742d0e6e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095669'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

Se você escolheu um plano pago, a assinatura do app será paga na data de cobrança atual de sua organização e com a forma de pagamento vigente.

{% data reusables.marketplace.free-trials %}

## Instalar um {% data variables.product.prodname_github_app %} em sua organização

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. Se o aplicativo exigir acesso nos repositórios, decida se deseja permitir acesso ao aplicativo em todos os seus repositórios ou em repositórios específicos e selecione **Todos os repositórios** ou **Somente repositórios selecionados**.
  ![Botões de opção usados para instalar um aplicativo em todos os repositórios ou em repositórios específicos](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png) {% data reusables.marketplace.select-installation-repos %} {% data reusables.marketplace.review-app-perms-install %}

## Instalar um {% data variables.product.prodname_oauth_app %} em sua organização

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. Revise as informações sobre o acesso do aplicativo à sua conta pessoal, às organizações e aos dados e clique em **Autorizar aplicativo**.

## Leitura adicional

- "[Como atualizar a forma de pagamento da sua organização](/articles/updating-your-organization-s-payment-method)"
- "[Como instalar um aplicativo na sua conta pessoal](/articles/installing-an-app-in-your-personal-account)"
