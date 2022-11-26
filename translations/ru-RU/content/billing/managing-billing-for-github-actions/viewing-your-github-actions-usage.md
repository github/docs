---
title: Просмотр сведений об использовании GitHub Actions
intro: 'Вы можете просмотреть сведения об использовании минут и хранилища для {% data variables.product.prodname_actions %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065173'
---
Вы также можете просмотреть оплачиваемые минуты выполнения задания для отдельного экземпляра рабочего процесса. Дополнительные сведения см. в разделе "[Просмотр времени выполнения задания](/actions/managing-workflow-runs/viewing-job-execution-time)".

## Просмотр сведений об использовании {% data variables.product.prodname_actions %} для личной учетной записи

Любой человек может просматривать данные об использовании {% data variables.product.prodname_actions %} для своей личной учетной записи.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Просмотр сведений об использовании {% data variables.product.prodname_actions %} для организации

Ответственные по отделу и менеджеры по выставлению счетов могут просматривать сведения об использовании {% data variables.product.prodname_actions %} в организации. Если организация управляется корпоративной учетной записью, просматривать сведения об использовании {% data variables.product.prodname_actions %} на странице выставления счетов организации могут только ответственные по организации.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Просмотр сведений об использовании {% data variables.product.prodname_actions %} для корпоративной учетной записи

Ответственные по предприятию и менеджеры по выставлению счетов могут просматривать сведения об использовании {% data variables.product.prodname_actions %} для корпоративной учетной записи.

{% note %}

**Примечание.** В сведениях о выставлении счетов для корпоративных учетных записей минуты использования для каждой операционной системы не суммируются. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. В разделе {% data variables.product.prodname_actions %} просмотрите сведения об использовании передачи данных каждой организацией в корпоративной учетной записи.
  ![Сведения об использовании минут](/assets/images/help/billing/actions-minutes-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
