---
title: Включение автоматической синхронизации пользовательских лицензий в вашей организации
intro: 'Вы можете управлять использованием лицензий в средах {% данных variables.product.prodname_enterprise %} путем автоматической синхронизации пользовательских лицензий с {% данных variables.location.product_location %} с {% данных variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: 38bac4b212045482b497b741bff583a2245a753b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099028'
---
## Сведения об автоматической синхронизации лицензий

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} Дополнительные сведения см. в разделе "[Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)".

Если вы включите автоматическую синхронизацию пользовательских лицензий для своей организации, {% data variables.product.prodname_github_connect %} автоматически синхронизирует использование лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %} еженедельно. {% ifversion ghes > 3.4 %} Вы также можете в любое время синхронизировать данные лицензии, не используя режим автоматической еженедельной синхронизации, вручную запуская задание синхронизации лицензий. Дополнительные сведения см. в разделе "[Активация задания синхронизации лицензий](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)".{% endif %}

При использовании нескольких экземпляров данных {% data variables.product.prodname_ghe_server %} можно включить автоматическую синхронизацию лицензий между каждым экземпляром и одной организацией или корпоративной учетной записью в {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

Вы также можете вручную передать информацию о пользовательских лицензиях {% data variables.product.prodname_ghe_server %} в {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе "[Синхронизация использования лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Включение синхронизации лицензий

Перед включением синхронизации лицензий для {% данных variables.location.product_location %}необходимо включить {% данных variables.product.prodname_github_connect %}. Дополнительные сведения см. в статье "[Управление {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. В разделе "Сервер может синхронизировать количество и использование пользовательских лицензий" откройте раскрывающееся меню и выберите **Включено**.
  ![Раскрывающееся меню для включения автоматической синхронизации пользовательских лицензий](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
