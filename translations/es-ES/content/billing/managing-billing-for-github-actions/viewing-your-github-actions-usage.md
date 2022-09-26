---
title: Consulta de su utilización de Acciones de GitHub
intro: 'Puedes ver los detalles de tu uso de minutos y almacenamiento para {% data variables.product.prodname_actions %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065174'
---
También puedes ver los minutos de ejecución facturables para los jobs en una ejecución de flujo de trabajo individual. Para más información, vea "[Visualización del tiempo de ejecución del trabajo](/actions/managing-workflow-runs/viewing-job-execution-time)".

## Visualizar el uso de {% data variables.product.prodname_actions %} para tu cuenta personal

Cualquiera puede ver el uso de {% data variables.product.prodname_actions %} para su cuenta personal.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Visualizar el uso de {% data variables.product.prodname_actions %} para tu organización

Los propietarios de la organización y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_actions %} para una organización. Para organizaciones que gestione una cuenta empresarial, únicamente los propietarios de éstas pueden ver el uso de {% data variables.product.prodname_actions %} en la página de facturación de la misma.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Visualizar el uso de {% data variables.product.prodname_actions %} para tu cuenta empresarial

Los propietarios de empresa y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_actions %} para una cuenta empresarial.

{% note %}

**Nota**: Los detalles de facturación para las cuentas empresariales no resumen el uso de los minutos para cada sistema operativo. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "{% data variables.product.prodname_actions %}", visualiza los detalles de uso para transferencia de datos de cada organización en tu cuenta empresarial.
  ![Detalles del uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
