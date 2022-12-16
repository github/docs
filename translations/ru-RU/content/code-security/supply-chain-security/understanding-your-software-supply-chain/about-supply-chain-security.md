---
title: Сведения о безопасности цепочки поставок
intro: '{% data variables.product.product_name %} помогает защитить цепочку поставок, от понимания зависимостей в вашей среде до знания об уязвимостях в этих зависимостях{% ifversion fpt or ghec or ghes %}, а также их исправления{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: d0f743db7d1f5a054a3eb8c7b4dbf81052aca50f
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181239'
---
## Сведения о безопасности цепочки поставок на GitHub

Благодаря все возрастающему использованию открытого кода большинство проектов опирается на сотни зависимостей с открытым кодом. Это создает проблему безопасности: что, если зависимости, которые вы используете, имеют уязвимости? Вы можете подвергнуть пользователей риску атаки через цепочку поставок. Одной из самых важных вещей, которые вы можете применить для защиты цепочки поставок, является исправление уязвимых зависимостей{% ifversion GH-advisory-db-supports-malware %} и замена вредоносных программ{% endif %}.

Вы добавляете зависимости непосредственно в цепочку поставок, когда указываете их в файле манифеста или файле блокировки. Зависимости также могут быть включены транзитивно, то есть, даже если вы не указываете конкретную зависимость, но ваша зависимость использует ее, вы также зависите от этой зависимости.

{% data variables.product.product_name %} предлагает ряд функций, которые помогут вам понять зависимости в вашей среде{% ifversion ghae %} и узнать об уязвимостях в этих зависимостях{% endif %}{% ifversion fpt or ghec or ghes %}, знать об уязвимостях в этих зависимостях и исправлять их{% endif %}. 

В {% data variables.product.product_name %} существуют следующие возможности цепочки поставок.
- **Граф зависимостей**
- **Проверка зависимостей**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}** {% endif %}

Граф зависимостей занимает центральное место в обеспечении безопасности цепочки поставок. Граф зависимостей определяет все вышестоящие зависимости и общедоступные нижестоящие зависимости репозитория или пакета. Вы можете просматривать зависимости вашего репозитория и некоторые их свойства, такие как сведения об уязвимостях, на графе зависимостей репозитория. 

Другие возможности цепочки поставок в {% data variables.product.prodname_dotcom %} зависят от сведений, предоставляемых графом зависимостей.

- Проверка зависимостей использует граф зависимостей для определения изменений зависимостей и помогает понять влияние этих изменений на безопасность при проверке запросов на вытягивание.
- {% data variables.product.prodname_dependabot %} сопоставляет данные о зависимостях, предоставленные графом зависимостей, со списком рекомендаций, опубликованным в {% data variables.product.prodname_advisory_database %}, сканирует ваши зависимости и создает {% data variables.product.prodname_dependabot_alerts %} при обнаружении потенциальной уязвимости{% ifversion GH-advisory-db-supports-malware %} или вредоносной программы{% endif %}.
{% ifversion fpt or ghec or ghes %}- {% data variables.product.prodname_dependabot_security_updates %} использует граф зависимостей и {% data variables.product.prodname_dependabot_alerts %} для обновления зависимостей с известными уязвимостями в репозитории.

{% data variables.product.prodname_dependabot_version_updates %} не используют граф зависимостей и вместо него полагаются на семантическое управление версиями зависимостей. {% data variables.product.prodname_dependabot_version_updates %} помогают поддерживать ваши зависимости в актуальном состоянии, даже если в них нет уязвимостей.
{% endif %}

{% ifversion fpt or ghec or ghes %} Рекомендации по обеспечению безопасности сквозной цепочки поставок, включая защиту личных учетных записей, кода и процессов сборки, см. в разделе [Защита сквозной цепочки поставок](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview).
{% endif %}

## Обзор возможностей

### Что такое граф зависимостей

Чтобы создать граф зависимостей, {% data variables.product.company_short %} просматривает явные зависимости репозитория, объявленные в файлах манифеста и блокировки. Если этот параметр включен, граф зависимостей автоматически анализирует все известные файлы манифеста пакетов в репозитории и использует их для построения графа с известными именами и версиями зависимостей.

- Граф зависимостей содержит сведения о ваших _прямых_ и _транзитивных_ зависимостях. 
- Граф зависимостей автоматически обновляется, когда вы отправляете в {% data variables.product.company_short %} фиксацию, которая изменяет или добавляет поддерживаемый файл манифеста или блокировки в ветвь по умолчанию, а также когда кто-либо отправляет в репозиторий изменение одной из ваших зависимостей.
- Чтобы просмотреть граф зависимостей, откройте главную страницу репозитория в {% data variables.product.product_name %} и перейдите на вкладку **Аналитика**.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Дополнительные сведения о графе зависимостей см. в разделе [Сведения о графе зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

### Что такое проверка зависимостей

Проверка зависимостей помогает рецензентам и участникам разобраться в изменениях зависимостей и понять их влияние на безопасность в каждом запросе на вытягивание. 

- Проверка зависимостей сообщает, какие зависимости были добавлены, удалены или обновлены в запросе на вытягивание. Вы можете использовать даты выпуска, популярность зависимостей и сведения об уязвимостях, чтобы решить, следует ли принять изменение.
- Чтобы просмотреть проверку зависимостей для запроса на вытягивание, откройте расширенный инструмент сравнения на вкладке **Измененные файлы**.

Дополнительные сведения о проверке зависимостей см. в разделе [Сведения о проверке зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

### Что такое Dependabot

{% data variables.product.prodname_dependabot %} обеспечивает актуальность зависимостей, информируя вас об уязвимостях системы безопасности в зависимостях{% ifversion fpt or ghec or ghes %}, и автоматически открывает запросы на вытягивание для обновления зависимостей до следующей доступной безопасной версии при активации оповещения {% data variables.product.prodname_dependabot %} или до последней версии при публикации выпуска{% else %}, чтобы можно было обновить эту зависимость{% endif %}.

{% ifversion fpt or ghec or ghes %} Термин "{% data variables.product.prodname_dependabot %}" охватывает следующие функции:
- {% data variables.product.prodname_dependabot_alerts %} — отображаемые уведомления на вкладке **Безопасность** для репозитория и в графе зависимостей репозитория. Оповещение содержит ссылку на затронутый файл в проекте, а также сведения об исправленной версии.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %} — инициированные обновления ваших зависимостей до безопасной версии при срабатывании оповещения.
   - {% data variables.product.prodname_dependabot_version_updates %} — запланированные обновления до последней версии для поддержания ваших зависимостей в актуальном состоянии.

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dependabot_security_updates %} и {% data variables.product.prodname_dependabot_version_updates %} не используют {% data variables.product.prodname_actions %} при выполнении в {% data variables.product.product_name %}. Однако запросы на вытягивание, открытые {% data variables.product.prodname_dependabot %}, могут активировать рабочие процессы, выполняющие действия. Дополнительные сведения см. в разделе [Автоматизация {% data variables.product.prodname_dependabot %} с помощью {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions).

{% elsif ghes %}

{% data variables.product.prodname_dependabot_security_updates %} и {% data variables.product.prodname_dependabot_version_updates %} требуют выполнения {% data variables.product.prodname_actions %} в {% data variables.product.product_name %}. {% data variables.product.prodname_dependabot_alerts %} не требуется {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% elsif ghae %}

{% data variables.product.prodname_actions %} не требуется для выполнения {% data variables.product.prodname_dependabot_alerts %} в {% data variables.product.product_name %}.

{% endif %}

{% ifversion dependabot-actions-support %}

{% data reusables.dependabot.dependabot-actions-support %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

{% endif %}

#### Что такое оповещения Dependabot

{% data variables.product.prodname_dependabot_alerts %} выделяют репозитории, затронутые недавно обнаруженной уязвимостью, на основе графа зависимостей и {% data variables.product.prodname_advisory_database %}, где содержатся рекомендации по всем известным уязвимостям{% ifversion GH-advisory-db-supports-malware %} и вредоносным программам{% endif %}. 

- {% data variables.product.prodname_dependabot %} выполняет сканирование для обнаружения небезопасных зависимостей и отправляет {% data variables.product.prodname_dependabot_alerts %}, когда происходит следующее. {% ifversion fpt or ghec %}
   - В {% data variables.product.prodname_advisory_database %} добавляется новая рекомендация.{% else %}
   - Новые данные рекомендаций синхронизируются с {% data variables.location.product_location %} каждый час из {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - Изменяется граф зависимостей для репозитория. 
- {% data variables.product.prodname_dependabot_alerts %} отображаются {% ifversion fpt or ghec or ghes %} на вкладке **Безопасность** для репозитория и{% endif %} в графе зависимостей репозитория. Оповещение содержит {% ifversion fpt or ghec or ghes %}ссылку на затронутый файл в проекте, а также {% endif %}сведения об исправленной версии.

Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes %}
#### Что такое обновления Dependabot

Существует два типа {% data variables.product.prodname_dependabot_updates %}: обновления _системы безопасности_ и обновления _версий_ {% data variables.product.prodname_dependabot %}. {% data variables.product.prodname_dependabot %} создает автоматические запросы на вытягивание для обновления ваших зависимостей в обоих случаях, но есть несколько различий.

{% data variables.product.prodname_dependabot_security_updates %}:
 - активируются оповещением {% data variables.product.prodname_dependabot %};
 - обновляют зависимости до минимальной версии, которая устраняет известную уязвимость;
 - поддерживаются для экосистем, поддерживаемых графом зависимостей.
 - файл конфигурации не является обязательным, но его можно использовать для переопределения поведения по умолчанию.
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - файл конфигурации является обязательным;
 - запускаются по настроенному вами расписанию;
 - обновляют зависимости до последней версии, которая соответствует конфигурации;
 - поддерживаются для другой группы экосистем.

Дополнительные сведения об {% data variables.product.prodname_dependabot_updates %} см. в разделах [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) и [Сведения об {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates).
{% endif %}

## Доступность функций

{% ifversion fpt or ghec %}

Общедоступные репозитории:
- **Граф зависимостей** — включен по умолчанию и его нельзя отключить.
- **Проверка зависимостей** — включена по умолчанию и ее нельзя отключить.
- **{% data variables.product.prodname_dependabot_alerts %}**  — не включены по умолчанию. {% data variables.product.prodname_dotcom %} обнаруживает небезопасные зависимости и отображает сведения в графе зависимостей, но не создает {% data variables.product.prodname_dependabot_alerts %} по умолчанию. Владельцы репозитория или пользователи с правами администратора могут включить {% data variables.product.prodname_dependabot_alerts %}. 
  Вы также можете включить или отключить оповещения Dependabot для всех репозиториев, принадлежащих вашей учетной записи пользователя или организации. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для учетной записи пользователя](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) или [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

Частные репозитории
- **Граф зависимостей** — не включен по умолчанию. Эту возможность могут включать администраторы репозитория. Дополнительные сведения см. в разделе [Изучение зависимостей репозитория](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository).
{% ifversion fpt %}
- **Проверка зависимостей** — доступна в частных репозиториях, принадлежащих организациям, которые используют {% data variables.product.prodname_ghe_cloud %} и имеют лицензию на {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Проверка зависимостей** — доступна в частных репозиториях, принадлежащих организациям, при наличии лицензии на {% data variables.product.prodname_GH_advanced_security %} и включении графа зависимостей. Дополнительные сведения см. в разделах [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) и [Изучение зависимостей репозитория](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository). {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**  — не включены по умолчанию. Владельцы частных репозиториев или пользователи с правами администратора могут включить {% data variables.product.prodname_dependabot_alerts %} путем включения графа зависимостей и {% data variables.product.prodname_dependabot_alerts %} для своих репозиториев.
  Вы также можете включить или отключить оповещения Dependabot для всех репозиториев, принадлежащих вашей учетной записи пользователя или организации. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для учетной записи пользователя](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) или [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

Репозиторий любого типа
- **{% data variables.product.prodname_dependabot_security_updates %}**  — не включены по умолчанию. Вы можете включить {% data variables.product.prodname_dependabot_security_updates %} для любого репозитория, использующего {% data variables.product.prodname_dependabot_alerts %} и граф зависимостей. Сведения о включении обновлений системы безопасности см. в разделе [Настройка {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
- **{% data variables.product.prodname_dependabot_version_updates %}**  — не включены по умолчанию. Включать {% data variables.product.prodname_dependabot_version_updates %} могут пользователи с разрешениями на запись в репозитории. Сведения о включении обновлений версии см. в разделе [Настройка {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).
{% endif %}

{% ifversion ghes or ghae %}
- **Граф зависимостей** и **{% data variables.product.prodname_dependabot_alerts %}**  — не включены по умолчанию. Обе возможности настраиваются на уровне предприятия владельцем предприятия. Дополнительные сведения см. в разделах {% ifversion ghes %} [Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) и {% endif %} [Включение {% data variables.product.prodname_dependabot %} для предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
- **Проверка зависимостей** доступна, если граф зависимостей включен для {% data variables.location.product_location %} и {% data variables.product.prodname_advanced_security %} включен для организации или репозитория. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}**  — не включены по умолчанию. Вы можете включить {% data variables.product.prodname_dependabot_security_updates %} для любого репозитория, использующего {% data variables.product.prodname_dependabot_alerts %} и граф зависимостей. Сведения о включении обновлений системы безопасности см. в разделе [Настройка {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
- **{% data variables.product.prodname_dependabot_version_updates %}**  — не включены по умолчанию. Включать {% data variables.product.prodname_dependabot_version_updates %} могут пользователи с разрешениями на запись в репозитории. Сведения о включении обновлений версии см. в разделе [Настройка {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).
{% endif %}
