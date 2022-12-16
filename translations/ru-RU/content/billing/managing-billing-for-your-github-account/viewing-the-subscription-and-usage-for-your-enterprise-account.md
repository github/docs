---
title: Просмотр подписки и сведений об использовании для корпоративной учетной записи
intro: 'Текущую подписку {% ifversion ghec %}, {% endif %}license usage{% ifversion ghec %}, счета, журнал платежей и другие сведения о выставлении счетов{% endif %} для {% ifversion ghec %}ваша корпоративная учетная запись{% elsif ghes %}{% данных variables.location.product_location_enterprise %}{% endif %}.'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
ms.openlocfilehash: dace22c79b20b960fb6fd3e828a738b4b1adc8e3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098647'
---
## Сведения о выставлении счетов для корпоративных учетных записей

Общие сведения о {% ifversion ghec %}вашей подписке и платной{% elsif ghes %}использование лицензии{% endif %} для {% ifversion ghec %}ваши{% elsif ghes %}учетная запись предприятия {% endif %} для {% ifversion ghec %}{% данных variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}. {% ifversion ghec %} {% данных reusables.enterprise.create-an-enterprise-account %} Дополнительные сведения см. в разделе "[Создание корпоративной учетной записи](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)". {% endif %}

Для выставления счетов {% data variables.product.prodname_enterprise %} клиентам{% ifversion ghes %}, которые используют как {% data variables.product.prodname_ghe_cloud %}, так и {% data variables.product.prodname_ghe_server %}{% endif %}, каждый счет включает в себя сведения о выставленных счетах за службы для всех продуктов. Например, в дополнение к вашему использованию для {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} может быть использование для {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}. Может также присутствовать использование на {% data variables.product.prodname_dotcom_the_website %}, например {% endif %} платные лицензии в организациях за пределами вашей корпоративной учетной записи, пакеты данных для {% data variables.large_files.product_name_long %} или подписки на приложения в {% data variables.product.prodname_marketplace %}. Дополнительные сведения о счетах см. в разделе [Управление счетами для предприятия]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}.{% elsif ghes %} в документации {% data variables.product.prodname_dotcom_the_website %}.{% endif %}

{% ifversion ghec %}

Помимо владельцев предприятия, менеджеры по выставлению счетов могут просматривать подписку и использование для вашей корпоративной учетной записи. Дополнительные сведения см. в разделах [Роли на предприятии](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager) и [Приглашение людей для управления предприятием](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Дополнительные сведения см. в разделе [Подключение подписки Azure к предприятию](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).

{% endif %}

{% ifversion ghes %}

Если вы хотите просмотреть общие сведения о подписке и использовании для {% data variables.product.prodname_enterprise %} и всех связанных служб на {% data variables.product.prodname_dotcom_the_website %}, см. раздел [Просмотр подписки и сведений об использовании для корпоративной учетной записи](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) в документации {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

## Просмотр подписки и сведений об использовании для корпоративной учетной записи

Вы можете просмотреть подписку и использование для предприятия и скачать файл с подробными сведениями о лицензии.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. В разделе "Пользовательские лицензии" просмотрите общее количество лицензий, количество используемых лицензий и дату окончания срока действия подписки.
  {% ifversion ghec %}![Информация о лицензии и подписке в настройках выставления счетов для предприятия](/assets/images/help/business-accounts/billing-license-info.png){% else %} ![Информация о лицензии и подписке в настройках выставления счетов для предприятия](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. При необходимости для того, чтобы просмотреть сведения об использовании лицензии или загрузить файл {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} с информацией о лицензии{% ifversion ghec %}, справа от "Лицензии пользователя"{% endif %} щелкните **Просмотреть {% ifversion ghec %}сведения{% elsif ghes %}пользователей{% endif %}** или {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Экспортировать использование лицензии** {% endif %}.{% ifversion ghec %} ![Кнопка "Просмотреть сведения" и кнопка со значком загрузки справа от "Лицензии пользователя".](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. При необходимости для того, чтобы просмотреть сведения об использовании других функций, на левой боковой панели щелкните **Выставление счетов**.
  ![Вкладка выставления счетов на боковой панели настроек корпоративной учетной записи](/assets/images/help/business-accounts/settings-billing-tab.png) {% endif %}
