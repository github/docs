---
title: Просмотр использования лицензий для GitHub Enterprise
intro: 'Вы можете просмотреть сведения об использовании лицензий для вашего предприятия на {% ifversion ghec %}{% данных variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 993380cfa7c539ea31ffad9eccc0ce00a70ebe62
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097930'
---
## Сведения об использовании лицензий для {% data variables.product.prodname_enterprise %}

Использование лицензий для {% данных variables.product.product_name %} можно просмотреть на {% данных variables.location.product_location %}.

Если вы применяете {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_ghe_server %} и синхронизируете использование лицензий между продуктами, можно просмотреть использование лицензий для {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения о синхронизации лицензий см. в статье "[Синхронизация использования лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% ifversion ghes %}

Дополнительные сведения о просмотре данных об использовании лицензий на {% data variables.product.prodname_dotcom_the_website %} и об определении времени последней синхронизации лицензий см. в статье "[Просмотр сведений об использовании лицензий для {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" в документации по {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

Также можно воспользоваться REST API, чтобы вернуть данные об используемых лицензиях и состояние задания синхронизации лицензий. Дополнительные сведения см. в статье "[Администрирование GitHub Enterprise](/enterprise-cloud@latest/rest/enterprise-admin/license)" в документации по REST API.

Дополнительные сведения о данных лицензий, связанных с вашей корпоративной учетной записью, и о том, как рассчитать количество используемых рабочих мест пользователей, см. в статье [Устранение неполадок с использованием лицензий для GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).


## Просмотр использования лицензии на {% ifversion ghec %}{% данных variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}

Вы можете просмотреть сведения об использовании лицензий для предприятия и загрузить файл с подробными сведениями о лицензии. Если в этом отчете не отображается ожидаемое количество лицензий, возможно, назначенный подписчику адрес электронной почты подписки {% data variables.product.prodname_vs %} и адрес электронной почты {% data variables.product.prodname_dotcom_the_website %} не совпадают. Дополнительные сведения см. в статье [Устранение неполадок с использованием лицензий для GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. На боковой панели слева щелкните **Корпоративное лицензирование**.
  ![Вкладка "Корпоративное лицензирование" на боковой панели параметров корпоративной учетной записи](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Просмотрите текущую лицензию {% data variables.product.prodname_enterprise %}, а также активированные и доступные пользовательские лицензии.
    - Чтобы скачать отчет об используемых лицензиях в виде CSV-файла, справа в верхнем углу щелкните {% octicon "download" aria-label="The download icon" %}. Дополнительные сведения о проверке данных в этом отчете см. в статье [Устранение неполадок с использованием лицензий для GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).
    - Если ваша лицензия включает {% data variables.product.prodname_GH_advanced_security %}, вы можете просмотреть общее использование рабочих мест. Дополнительные сведения см. в разделе "[Просмотр данных об использовании {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Просмотрите текущую лицензию {% data variables.product.prodname_enterprise %}, а также активированные и доступные пользовательские лицензии.{% ifversion ghes %}
    - Чтобы скачать отчет об используемых лицензиях в виде JSON-файла, справа в верхнем углу в разделе "Быстрые ссылки" выберите элемент **Экспортировать сведения об использовании лицензий**. Дополнительные сведения о проверке данных в этом отчете см. в статье [Устранение неполадок с использованием лицензий для GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).
    - Если ваша лицензия включает {% data variables.product.prodname_GH_advanced_security %}, вы можете просмотреть общее использование рабочих мест, а также разбивку по пользователям, выполнившим фиксацию, в отдельных организациях. Дополнительные сведения см. в разделе "[Управление функцией{% data variables.product.prodname_GH_advanced_security %} для предприятия](/admin/advanced-security)".{% endif %}

{% endif %} {% ifversion ghec %}
## Просмотр даты последней синхронизации лицензий

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. На боковой панели слева щелкните **Корпоративное лицензирование**.
  ![Вкладка "Корпоративное лицензирование" на боковой панели параметров корпоративной учетной записи](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Чтобы определить, когда выполнялась последняя синхронизация лицензий, в разделе "Экземпляры Enterprise Server" найдите метки времени рядом с отправленными или синхронизированными событиями использования.
   - Запись "Сведения об использовании сервера отправлены" означает, что сведения об использовании лицензий между средами были обновлены вручную при отправке файла лицензии {% data variables.product.prodname_ghe_server %}.
   - Запись "Сведения об использовании сервера {% data variables.product.prodname_github_connect %} синхронизированы" означает, что сведения об использовании лицензий между средами были обновлены автоматически.
   - Запись "Сведения об использовании сервера {% data variables.product.prodname_github_connect %} не синхронизировано" означает, что настройка {% data variables.product.prodname_github_connect %} выполнена, но успешное обновление сведений об использовании лицензий между средами никогда не было выполнено.

{% endif %}
