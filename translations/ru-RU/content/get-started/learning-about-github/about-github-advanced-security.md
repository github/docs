---
title: Сведения о GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} обеспечивает клиентам доступ к дополнительным функциям безопасности в рамках лицензии {% data variables.product.prodname_advanced_security %}{% ifversion fpt or ghec %} Кроме того, эти функции включены для общедоступных репозиториев в {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: 49a58dd78c906982c8c8b9702d55cd11662cb12e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159184'
---
## Сведения о {% data variables.product.prodname_GH_advanced_security %}

В {% data variables.product.prodname_dotcom %} есть множество функций, которые помогают улучшать и поддерживать качество кода. Некоторые из них, такие как граф зависимостей и {% data variables.product.prodname_dependabot_alerts %}{% endif %}, включены во все планы{% ifversion not ghae %}. Другим функциям безопасности требуется лицензия {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} для запуска в репозиториях, кроме общедоступных репозиториев в {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes or ghec %}Сведения о покупке лицензии {% data variables.product.prodname_GH_advanced_security %} см. в статье "[Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)". {% elsif ghae %}Плата за {% data variables.product.prodname_GH_advanced_security %} в {% data variables.product.prodname_ghe_managed %} на этапе бета-версии не взимается.{% elsif fpt %}Чтобы приобрести лицензию {% data variables.product.prodname_GH_advanced_security %}, необходимо использовать {% data variables.product.prodname_enterprise %}. Сведения об обновлении до {%data variables.product.prodname_enterprise %} с {% data variables.product.prodname_GH_advanced_security %} см. в статьях "[Продукты GitHub](/get-started/learning-about-github/githubs-products)" и "[Сведения о выставлении счетов за {% данных variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}

## Сведения о функциях {% data variables.product.prodname_GH_advanced_security %}

Лицензия {% data variables.product.prodname_GH_advanced_security %} предоставляет следующие дополнительные возможности:

- **{% data variables.product.prodname_code_scanning_capc %}** — поиск потенциальных уязвимостей системы безопасности и ошибок кодирования в коде. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}**  — обнаружение секретов, например ключей и маркеров, которые были извлечены в репозиторий.{% ifversion secret-scanning-push-protection %} Если включена защита от отправки, также обнаруживает секреты при их отправке в репозиторий. Дополнительные сведения см. в статьях "[Сведения о {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)" и "[Защита от отправки с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".{% else %} Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)."{% endif %}

- **Проверка зависимостей** — отображение полного влияния изменений на зависимости и просмотр сведений об уязвимых версиях до слияния запроса на вытягивание. Дополнительные сведения см. в статье "[Сведения о проверке зависимостей](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Обзор системы безопасности** — просмотр конфигурации и оповещений системы безопасности для организации и выявление репозиториев с наибольшим риском. Дополнительные сведения см. в разделе [Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview).
{% endif %}

{% ifversion fpt or ghec %} В таблице ниже приведены сведения о доступности функций {% data variables.product.prodname_GH_advanced_security %} для общедоступных и частных репозиториев.

|                   | Общедоступный репозиторий           | Частный репозиторий без {% data variables.product.prodname_advanced_security %} | Частный репозиторий с {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Проверка кода     | Да                         | Нет                                           | Да                                        |
| Сканирование секретов   | Да **(только ограниченная функциональность)** | Нет                                           | Да                                       |
| Просмотр зависимостей | Да                         | Нет                                           | Да                                       |
{% endif %}

Сведения о функциях {% data variables.product.prodname_advanced_security %}, которые находятся в разработке, см. в статье "[Общедоступная стратегия развития{% data variables.product.prodname_dotcom %} ](https://github.com/github/roadmap)". Общие сведения обо всех функциях безопасности см. в статье "[Функции безопасности {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion fpt or ghec %} Функции {% data variables.product.prodname_GH_advanced_security %} включены для всех общедоступных репозиториев на сайте {% data variables.product.prodname_dotcom_the_website %}. Организации, использующие {% data variables.product.prodname_ghe_cloud %} с {% data variables.product.prodname_advanced_security %} могут дополнительно включить эти функции для частных и внутренних репозиториев. {% ifversion fpt %} Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Развертывание GitHub Advanced Security на предприятии

Общие необходимые сведения о планировании развертывания {% data variables.product.prodname_GH_advanced_security %}, а также сведения о проверке этапов выпуска см. в статье "[Внедрение {% data variables.product.prodname_GH_advanced_security %} в большом масштабе](/code-security/adopting-github-advanced-security-at-scale)".

{% endif %}

{% ifversion not fpt %}
## Включение функций {% data variables.product.prodname_advanced_security %}

{%- ifversion ghes %} Администратор сайта должен включить {% data variables.product.prodname_advanced_security %} для {% data variables.location.product_location %}, прежде чем вы сможете использовать эти функции. Дополнительные сведения см. в статье "[Настройка функций Advanced Security](/admin/configuration/configuring-advanced-security-features)".

После настройки системы вы можете включать и отключать эти функции на уровне организации или репозитория.

{%- elsif ghec %} Для общедоступных репозиториев эти функции постоянно включены и могут быть отключены только в том случае, если вы измените видимость проекта так, чтобы код больше не был общедоступным.

Если вы используете другие репозитории, и у вас есть лицензия для учетной записи предприятия, вы можете включать и отключать эти функции на уровне организации или репозитория.

{%- elsif ghae %} Вы можете включать и отключать эти функции на уровне организации или репозитория.
{%- endif %} Дополнительные сведения см. в статьях "[Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" и "[Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% ifversion ghec or ghes %} Если у вас есть учетная запись предприятия, на странице лицензии предприятия отображается использование лицензии для всего предприятия. Дополнительные сведения см. в разделе "[Просмотр данных об использовании {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## Сведения о начальных рабочих процессах для {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

Дополнительные сведения о начальных рабочих процессах см. в статье "[Настройка {% data variables.product.prodname_code_scanning %} с помощью начальных рабочих процессов](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)" и "[Использование начальных рабочих процессов](/actions/using-workflows/using-starter-workflows)".

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Дополнительные материалы

- "[Применение политик для {% data variables.product.prodname_advanced_security %} на предприятии](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %} {% endif %}
