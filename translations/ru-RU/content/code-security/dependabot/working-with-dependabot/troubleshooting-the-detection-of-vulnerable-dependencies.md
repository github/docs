---
title: Устранение неполадок обнаружения уязвимых зависимостей
intro: 'Если сообщаемые {% data variables.product.product_name %} сведения о зависимостях не соответствуют вашим ожиданиям, нужно учитывать несколько факторов, а также проверить различные аспекты.'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
ms.openlocfilehash: 78ab86bf3314717a1f79b858496c4eb9fa323819
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106536'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## Почему я не вижу здесь некоторых зависимостей?

{% data variables.product.prodname_dotcom %} создает и отображает данные о зависимостях не так, как многие другие средства. Это означает, что вы почти наверняка увидите отличные от ожидаемых результаты, если ранее использовали другое средство для выявления зависимостей. Рассмотрим следующий пример.

*   {% data variables.product.prodname_advisory_database %} — это один из источников данных, которые используются в {% data variables.product.prodname_dotcom %} для выявления уязвимых зависимостей{% ifversion GH-advisory-db-supports-malware %} и вредоносных программ{% endif %}. Это бесплатная курируемая база данных с рекомендациями по безопасности для популярных экосистем пакетов на платформе {% data variables.product.prodname_dotcom %}. В нее включается информация, переданная непосредственно в {% data variables.product.prodname_dotcom %} из {% data variables.product.prodname_security_advisories %}, а также полученная из официальных веб-каналов и источников сообщества. Эти данные проверяются и курируются в {% data variables.product.prodname_dotcom %}, чтобы исключить передачу разработчикам ложных сведений или информации без конкретных действий. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   Граф зависимостей анализирует все известные файлы манифеста пакета в репозитории пользователя. Например, при использовании npm он будет анализировать файл _package-lock.json_. Он создает граф всех зависимостей внутри репозитория и общедоступных зависимых объектов. Это действие выполняется при включении графа зависимостей и при отправке любым пользователем изменений в ветвь по умолчанию, содержащих фиксации с изменениями манифеста в поддерживаемом формате. Дополнительную информацию можно найти в статьях [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) и [Устранение неполадок с графом зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph).
*   {% data variables.product.prodname_dependabot %} сканирует все отправки в ветвь по умолчанию, которые содержат файл манифеста. При добавлении новой рекомендации выполняется проверка всех существующих репозиториев и создается оповещение для каждого затронутого репозитория. {% data variables.product.prodname_dependabot_alerts %} агрегируются на уровне репозитория, без создания отдельного оповещения о каждой рекомендации. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
*   {% ifversion fpt или ghec или ghes %} {% данных variables.product.prodname_dependabot_security_updates %} активируются при получении оповещения об уязвимой зависимости в репозитории. При наличии возможности {% data variables.product.prodname_dependabot %} автоматически создает запрос на вытягивание для этого репозитория, чтобы обновить уязвимую зависимость до минимально возможной безопасной версии, в которой устранена обнаруженная уязвимость. Дополнительную информацию можно найти в статьях [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) и [Устранение ошибок в {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors).
  
    {% endif %} {% data variables.product.prodname_dependabot %} не использует расписания для проверки репозиториев, а выполняет его только при каких-либо изменениях. Например, проверка запускается при добавлении новой зависимости ({% данных variables.product.prodname_dotcom %} проверяет это при каждой отправке) или при добавлении в базу данных новых рекомендаций{% ifversion ghes или ghae %} и синхронизации с {% данных variables.location.product_location %}{% endif %}. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)".

## {% data variables.product.prodname_dependabot_alerts %} относятся только к небезопасным зависимостям в манифестах и файлах блокировки?

{% data variables.product.prodname_dependabot_alerts %} предоставляют вам рекомендации по обновлению зависимостей, включая транзитивные зависимости, для которых можно определить версию по манифесту или файлу блокировки. {% ifversion fpt или ghec или ghes %} {% данных variables.product.prodname_dependabot_security_updates %} предлагают только изменение, в котором {% данных variables.product.prodname_dependabot %} может напрямую "исправить" зависимость, то есть, если они:
* прямые зависимости явным образом определены в файле манифеста или блокировки;
* транзитивные зависимости объявлены в файле блокировки.{% endif %}

**Проверьте:** относится ли необнаруженная уязвимость к компоненту, который не указан в манифесте или файле блокировки репозитория?

## Почему я не получаю {% data variables.product.prodname_dependabot_alerts %} для некоторых экосистем?

{% data variables.product.prodname_dependabot_alerts %} поддерживаются только для определенного набора экосистем, по которым мы можем предоставлять высококачественные данные с конкретными рекомендациями по действиям. Курируемые рекомендации в {% data variables.product.prodname_advisory_database %}, граф зависимостей, обновления безопасности {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %}, {% endif %}and  {% data variables.product.prodname_dependabot_alerts %} предоставляются для нескольких экосистем, включая Maven для Java, npm и Yarn для JavaScript, NuGet для .NET, pip для Python, RubyGems для Ruby и Composer для PHP. Постепенно мы будем добавлять поддержку для дополнительных экосистем. Обзор поддерживаемых экосистем пакетов можно найти в статье [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).

Стоит отметить, что рекомендации по безопасности могут существовать для других экосистем. Сведения в непроверенных рекомендациях по безопасности предоставляются ответственными за конкретные репозитории лицами. Эти данные не курируются {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Проверьте:** относится ли необнаруженная уязвимость к неподдерживаемой экосистеме?

## Создает ли {% data variables.product.prodname_dependabot %} оповещения об уязвимостях, которые известны уже много лет?

{% data variables.product.prodname_advisory_database %} создана в ноябре 2019 года и изначально была заполнена всей существующей информацией о рекомендациях по рискам безопасности для поддерживаемых экосистем, начиная с 2017 года. В процессе добавления CVE в базу данных мы отдаем приоритет курированию новых CVE и тех CVE, которые влияют на новые версии программного обеспечения.

Есть и некоторая информация о старых уязвимостях, особенно о самых распространенных, но существуют и не включенные в {% data variables.product.prodname_advisory_database %} давно известные уязвимости. Если вы хотите включить в эту базу данных конкретную старую уязвимость, обратитесь к {% data variables.contact.contact_support %}. 

**Проверьте**: имеет ли необнаруженная уязвимость дату публикации ранее 2017 года в национальной базе данных уязвимостей?

## Почему {% data variables.product.prodname_advisory_database %} использует только подмножество опубликованных данных об уязвимостях?

Некоторые сторонние средства используют некурированные данные CVE, которые не проверяются и не фильтруются человеком. Это означает, что CVE могут содержать неверные теги, неправильный уровень серьезности или другие проблемы с качеством, которые повышают частоту, шумность оповещений и снижают их полезность.

Так как {% data variables.product.prodname_dependabot %} использует только курированные данные из {% data variables.product.prodname_advisory_database %}, вы будете получать меньше оповещений, но зато все они будут точными и релевантными.

{% ifversion fpt or ghec %}
## Создает ли каждая небезопасная зависимость отдельное оповещение?

Если зависимость имеет несколько уязвимостей, создается одно оповещение для каждой уязвимости на уровне рекомендаций и манифеста.

![Снимок экрана: вкладка {% data variables.product.prodname_dependabot_alerts %} с двумя оповещениями для разных манифестов в одном пакете.](/assets/images/help/repository/dependabot-alerts-view.png)

Ранее {% data variables.product.prodname_dependabot_alerts %} группировались в единое агрегированное оповещение с информацией о всех уязвимостях для одной зависимости. При переходе по ссылке из старого оповещения {% data variables.product.prodname_dependabot %} вы попадете на вкладку {% data variables.product.prodname_dependabot_alerts %} с фильтром для отображения уязвимостей по конкретному пакету и манифесту.

![Снимок экрана: вкладка {% data variables.product.prodname_dependabot_alerts %} с отфильтрованными оповещениями, которая открывается при переходе из старого оповещения {% data variables.product.prodname_dependabot %}.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

Количество оповещений {% data variables.product.prodname_dependabot_alerts %} в {% data variables.product.prodname_dotcom %} обозначает общее количество оповещений, то есть количество уязвимостей, а не уязвимых зависимостей.

**Проверьте**: если обнаружено несоответствие в итоговых значениях, убедитесь, что вы не сравниваете номера оповещений с номерами зависимостей. Кроме того, убедитесь, что вы просматриваете все оповещения, а не отфильтрованное подмножество оповещений.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Может ли Dependabot игнорировать определенные зависимости?

Вы можете настроить {% data variables.product.prodname_dependabot %} для игнорирования определенных зависимостей в файле конфигурации, что заблокирует для них обновления безопасности и версий. Если вы хотите использовать только обновления для системы безопасности, необходимо переопределить поведение по умолчанию с помощью файла конфигурации. Дополнительные сведения о блокировке активации обновления версий см. в разделе [Переопределение поведения по умолчанию с помощью файла конфигурации](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file). Сведения об игнорировании зависимостей см. в разделе [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore). {% endif %}

## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
- "[Устранение неполадок графа зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"{% ifversion fpt или ghec или ghes %}
- [Устранение ошибок {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors){% endif %}
