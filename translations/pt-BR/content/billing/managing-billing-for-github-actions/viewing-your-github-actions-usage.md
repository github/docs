---
title: Exibindo o uso de GitHub Actions
intro: 'Você pode visualizar detalhes do seu uso de minutos e armazenamento para {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: View your Actions usage
ms.openlocfilehash: a41da21abe606b0de11bf7cf7e1b8be6f4e2edbe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065167'
---
Você também pode visualizar os minutos de execução do trabalho faturáveis para uma execução de fluxo de trabalho individual. Para obter mais informações, confira "[Como ver o tempo de execução do trabalho](/actions/managing-workflow-runs/viewing-job-execution-time)".

## Exibir o uso de {% data variables.product.prodname_actions %} da sua conta pessoal

Qualquer pessoa pode exibir o uso de {% data variables.product.prodname_actions %} da própria conta pessoal.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Visualizando o uso de {% data variables.product.prodname_actions %} para a sua organização

Os proprietários da organização e gerentes de faturamento podem ver o uso do {% data variables.product.prodname_actions %} para uma organização. Para organizações gerenciadas por uma conta corporativa, somente os proprietários da organização podem visualizar o uso do {% data variables.product.prodname_actions %} na página de cobrança da organização.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Visualizando o uso de {% data variables.product.prodname_actions %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem visualizar o uso de {% data variables.product.prodname_actions %} para uma conta corporativa.

{% note %}

**Observação:** os detalhes de cobrança para contas corporativas não resumem os minutos de uso para cada sistema operacional. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Em "{% data variables.product.prodname_actions %}", veja os detalhes do uso de transferência de dados por cada organização em sua conta corporativa.
  ![Detalhes do uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
