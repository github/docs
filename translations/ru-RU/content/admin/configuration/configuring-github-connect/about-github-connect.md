---
title: Сведения о GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} улучшает возможности {% data variables.product.product_name %} за счет предоставления доступа к дополнительным функциям и рабочим процессам, которые зависят от возможностей {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160819'
---
## Сведения о {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_github_connect %} улучшает {% data variables.product.product_name %}, позволяя {% data variables.location.product_location %} использовать преимущества {% data variables.product.prodname_dotcom_the_website %} ограниченными способами. После включения {% data variables.product.prodname_github_connect %} вы можете включить дополнительные функции и рабочие процессы, зависящие от {% data variables.product.prodname_dotcom_the_website %}, такие как {% data variables.product.prodname_dependabot_alerts %} для уязвимостей системы безопасности, которые отслеживаются в {% data variables.product.prodname_advisory_database %}.

{% data variables.product.prodname_github_connect %} не открывает {% data variables.location.product_location %} в общедоступном Интернете. Никакие закрытые данные вашего предприятия не предоставляются пользователям {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_github_connect %} передает только ограниченные данные, необходимые для отдельных функций, которые вы решили включить. Если вы не включите синхронизацию лицензий, {% data variables.product.prodname_github_connect %} не передает никакие персональные данные. Дополнительные сведения о том, какие данные передаются {% data variables.product.prodname_github_connect %}, см. в разделе [Передача данных для {% data variables.product.prodname_github_connect %}](#data-transmission-for-github-connect).

Включение {% data variables.product.prodname_github_connect %} не позволит пользователям {% data variables.product.prodname_dotcom_the_website %} вносить изменения в {% data variables.product.product_name %}.

Чтобы включить {% data variables.product.prodname_github_connect %}, настройте подключение между {% data variables.location.product_location %} и учетной записью организации или предприятия в {% data variables.product.prodname_dotcom_the_website %}, использующим {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %} Дополнительные сведения см. в разделе [Управление {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).

После включения {% data variables.product.prodname_github_connect %} вы сможете включить такие функции, как {% ifversion ghes %}автоматическая синхронизация пользовательских лицензий и {% endif %}{% data variables.product.prodname_dependabot_alerts %}. Дополнительные сведения обо всех доступных функциях см. в разделе [Функции {% data variables.product.prodname_github_connect %}](#github-connect-features).

## Функции {% data variables.product.prodname_github_connect %}

После настройки подключения между {% data variables.location.product_location %} и {% data variables.product.prodname_ghe_cloud %} можно включить отдельные функции {% data variables.product.prodname_github_connect %} для вашего предприятия.

| функций Описание | Дополнительные сведения | ------- | ----------- | ---------------- | {% ifversion ghes %} Автоматическая синхронизация лицензий пользователей | Управление использованием лицензий в развертываниях {% data variables.product.prodname_enterprise %} путем автоматической синхронизации пользовательских лицензий из {% data variables.location.product_location %} с {% data variables.product.prodname_ghe_cloud %}. | [Включение автоматической синхронизации пользовательских лицензий для предприятия](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | Разрешение пользователям находить и устранять уязвимости в зависимостях кода. | [Включение {% data variables.product.prodname_dependabot %} для предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise){% endif %} Действия {% data variables.product.prodname_dotcom_the_website %} | Разрешение пользователям использовать действия из {% data variables.product.prodname_dotcom_the_website %} в файлах рабочего процесса. | [Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect){% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Анализ собственных статистических данных из GitHub Enterprise Server и помощь в улучшении продуктов GitHub. | ["Включение {% data variables.product.prodname_server_statistics %} для предприятия](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise){% endif %} Унифицированный поиск | Разрешить пользователям включать репозитории в {% data variables.product.prodname_dotcom_the_website %} в результаты поиска при поиске из {% data variables.location.product_location %}. | [Единый вклад "Включение {% data variables.enterprise.prodname_unified_search %} для предприятия](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" | Разрешить пользователям включать анонимные счетчики вкладов для работы над {% data variables.location.product_location %} в графы вкладов в {% data variables.product.prodname_dotcom_the_website %}. | ["Включение {% data variables.enterprise.prodname_unified_contributions %} для предприятия](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)"

## Передача данных для {% data variables.product.prodname_github_connect %} 

Когда используется {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_ghe_cloud %} хранит запись с информацией о подключении. При включении отдельных компонентов {% data variables.product.prodname_github_connect %} передаются дополнительные данные.

{% note %}

**Примечание.** Никакие репозитории, проблемы или запросы на вытягивание никогда не передаются {% data variables.product.prodname_github_connect %} из {% data variables.product.product_name %} в {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

### Передача данных при использовании {% data variables.product.prodname_github_connect %}

Когда вы включаете {% data variables.product.prodname_github_connect %} или определенные функции {% data variables.product.prodname_github_connect %} запись в {% data variables.product.prodname_ghe_cloud %} сохраняет следующие сведения о подключении.
{% ifversion ghes %}
- Часть открытого ключа вашей лицензии {% data variables.product.prodname_ghe_server %}
- Хэш вашей лицензии {% data variables.product.prodname_ghe_server %}
- Имя клиента в вашей лицензии {% data variables.product.prodname_ghe_server %}
- Версия {% data variables.location.product_location_enterprise %}{% endif %}
- Имя узла {% data variables.location.product_location %}
- Учетная запись организации или предприятия в {% data variables.product.prodname_ghe_cloud %}, подключенная к {% data variables.location.product_location %}
- Маркер проверки подлинности, используемый {% data variables.location.product_location %} для отправки запросов к {% data variables.product.prodname_ghe_cloud %}
- Если протокол TLS включен и настроен в {% data variables.location.product_location %}{% ifversion ghes %}
- Функции {% data variables.product.prodname_github_connect %}, включенные в {% data variables.location.product_location %}, а также дата и время включения{% endif %}
- Порог бездействия для вашего предприятия
- Число бездействующих пользователей для вашего предприятия
- Количество рабочих мест, потребляющих лицензии, не включающее заблокированных пользователей

{% data variables.product.prodname_github_connect %} синхронизирует указанные выше данные подключения между {% data variables.location.product_location %} и {% data variables.product.prodname_ghe_cloud %} еженедельно, начиная с дня и приблизительного времени включения {% data variables.product.prodname_github_connect %}.

### Передача данных отдельными компонентами {% data variables.product.prodname_github_connect %}

Дополнительные данные передаются при включении отдельных функций {% data variables.product.prodname_github_connect %}.

Функция | Данные | Каким путем идет поток данных? | Где используются данные? | ------- | ---- | --------- | ------ |{% ifversion ghes %} Автоматическая синхронизация пользовательских лицензий | Идентификатор и адрес электронной почты каждого пользователя {% data variables.product.product_name %} | Из {% data variables.product.product_name %} в {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | Оповещения об уязвимостях | Из {% data variables.product.prodname_dotcom_the_website %} в {% data variables.product.product_name %} | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | Зависимости и метаданные для каждого репозитория зависимостей<br><br>Если зависимость хранится в частном репозитории в {% data variables.product.prodname_dotcom_the_website %}, данные передаются только в том случае, если {% data variables.product.prodname_dependabot %} настроен и авторизован для доступа к репозиторию. | Из {% data variables.product.prodname_dotcom_the_website %} в {% data variables.product.product_name %} | {% data variables.product.product_name %} {% endif %} Действия {% data variables.product.prodname_dotcom_the_website %} | Имя действия, действие (файл YAML из {% data variables.product.prodname_marketplace %}) | Из {% data variables.product.prodname_dotcom_the_website %} в {% data variables.product.product_name %}<br><br>{% data variables.product.product_name %} передает данные в {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Агрегатные метрики о том, как вы используете {% data variables.product.prodname_ghe_server %}. Полный список метрик см. в статье [{% data variables.product.prodname_server_statistics %}: общие сведения](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected). | Из {% data variables.product.product_name %} в {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %}{% endif %} Унифицированный поиск | Условия поиска, результаты поиска | Из {% data variables.product.prodname_dotcom_the_website %} в {% data variables.product.product_name %}<br><br>Из {% data variables.product.product_name %} в {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} | Единые вклады | Количество вкладов | Из {% data variables.product.product_name %} в {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## Дополнительные материалы

- Раздел [Корпоративные учетные записи](/graphql/guides/managing-enterprise-accounts) в документации API GraphQL
