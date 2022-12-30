---
title: Просмотр сведений об использовании GitHub Packages
intro: 'Можно просмотреть сведения о потреблении хранилища и передаче данных для {% data variables.product.prodname_registry %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060445'
---
## Просмотр сведений о потреблении {% data variables.product.prodname_registry %} для личной учетной записи

Любой пользователь может просматривать данные о потреблении {% data variables.product.prodname_registry %} для своей личной учетной записи.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Просмотр сведений о потреблении {% data variables.product.prodname_registry %} для организации

Владельцы организации и менеджеры по выставлению счетов могут просматривать сведения о потреблении {% data variables.product.prodname_registry %} для организации. Если организация управляется корпоративной учетной записью, просматривать сведения о потреблении {% data variables.product.prodname_registry %} на странице выставления счетов организации могут только ее владельцы.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Просмотр сведений о потреблении {% data variables.product.prodname_registry %} для корпоративной учетной записи

Владельцы предприятия и менеджеры по выставлению счетов могут просматривать сведения о потреблении {% data variables.product.prodname_registry %} для корпоративной учетной записи.

{% note %}

**Примечание.** Сведения о выставлении счетов для корпоративных учетных записей обобщают только потребление данных хранилища для каждой организации. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. В разделе {% data variables.product.prodname_registry %} просмотрите сведения о потреблении передачи данных каждой организацией в корпоративной учетной записи.
  ![Сведения об использовании передачи данных](/assets/images/help/billing/packages-data-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
