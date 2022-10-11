---
title: Consulta de su utilización de Paquetes de GitHub
intro: 'Puedes ver los detalles de uso de almacenamiento y transferencia de datos para {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: View your usage
ms.openlocfilehash: 98cce486487c5f8a3801852b6a2b4ce7fdeb210d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060446'
---
## Visualizar el uso de {% data variables.product.prodname_registry %} para tu cuenta personal

Cualquiera puede ver el uso de {% data variables.product.prodname_registry %} para su cuenta personal.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Visualizar el uso de {% data variables.product.prodname_registry %} para tu organización

Los propietarios de la organización y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_registry %} para una organización. Para organizaciones que gestione una cuenta empresarial, únicamente los propietarios de éstas pueden ver el uso de {% data variables.product.prodname_registry %} en la página de facturación de la misma.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Visualizar el uso de {% data variables.product.prodname_registry %} para tu cuenta empresarial

Los propietarios de empresas y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_registry %} para una cuenta empresarial.

{% note %}

**Nota:** Los detalles de facturación para cuentas empresariales solo resumen el uso de almacenamiento de datos por organización. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "{% data variables.product.prodname_registry %}", visualiza los detalles de uso de transferencia de datos para cada organización en tu cuenta empresarial.
  ![Detalles de uso de la transferencia de datos](/assets/images/help/billing/packages-data-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
