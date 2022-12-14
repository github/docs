---
title: Экспорт статистики сервера
shortTitle: Export Server Statistics
intro: 'Для анализа использования {% data variables.product.prodname_ghe_server %} с течением времени вы можете использовать собственные инструменты, скачав метрики {% data variables.product.prodname_server_statistics %} в CSV-файле или файле JSON.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 9c949a52389e913a1af2908db279b5eff1879cff
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098380'
---
Можно скачать данные {% data variables.product.prodname_server_statistics %} сроком до последних 365 дней в файл CSV или JSON. Эти данные, которые включают статистические метрики о репозиториях, проблемах и запросах на вытягивание, могут помочь определить потребности вашей организации, понять, как работает ваша команда, и показать ценность использования {% data variables.product.prodname_ghe_server %}. 

Перед загрузкой этих данных необходимо включить {% data variables.product.prodname_server_statistics %}. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_server_statistics %} для предприятия](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise). 

Чтобы просмотреть метрики, доступные для скачивания, см. раздел [Сведения о {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics).

Чтобы скачать эти метрики, необходимо быть владельцем предприятия или организации на {% data variables.product.prodname_ghe_cloud %}.
  - Если {% данных variables.location.product_location %} подключены к корпоративной учетной записи на {% данных variables.product.prodname_ghe_cloud %}, см. раздел "[Скачивание метрик из корпоративной учетной записи](#downloading-metrics-from-your-enterprise-account)".
  - Если {% данных variables.location.product_location %} подключены к организации на {% данных variables.product.prodname_ghe_cloud %}, см. раздел "[Скачивание метрик из организации](#downloading-metrics-from-your-organization)".

Дополнительные сведения о {% data variables.product.prodname_github_connect %} см. в разделе [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

## Скачивание метрик из корпоративной учетной записи

1. В правом верхнем углу {% data variables.product.prodname_ghe_cloud %} щелкните фотографию профиля, а затем — **Ваши предприятия**.
  ![Раскрывающееся меню с параметром "Ваши предприятия"](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. Рядом с нужной корпоративной учетной записью щелкните **Параметры**.
  ![Кнопка "Параметры" рядом с учетной записью администратора Enterprise](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. Слева щелкните **GitHub Connect**.
  ![Параметр GitHub Connect в корпоративной учетной записи администратора](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Скачивание метрик из организации

1. В правом верхнем углу {% data variables.product.prodname_ghe_cloud %} щелкните фотографию профиля, а затем — **Ваши организации**.
  ![Раскрывающееся меню с параметром "Ваши организации"](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. В списке организаций рядом с организацией, подключенной к {% данных variables.location.product_location %}, щелкните **"Параметры**".
  ![Кнопка "Параметры" рядом с организацией {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. Слева щелкните **GitHub Connect**.
  ![Параметр GitHub Connect на левой боковой панели параметров учетной записи организации](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
