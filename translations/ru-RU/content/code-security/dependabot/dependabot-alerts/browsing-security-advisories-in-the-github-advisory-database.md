---
title: Просмотр рекомендаций по безопасности в базе данных рекомендаций по GitHub
intro: Вы можете просмотреть {% data variables.product.prodname_advisory_database %}, чтобы найти рекомендации по рискам безопасности в проектах с открытым кодом, размещенных в {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 64196cbee6accd1818bff420447dbdbcc8f65c8b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148093644"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## О {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} содержит список известных уязвимостей системы безопасности {% ifversion GH-advisory-db-supports-malware %}и вредоносных программ{% endif %}, разделенный на две категории: проверенные в {% data variables.product.company_short %} и непроверенные рекомендации.

{% data reusables.repositories.tracks-vulnerabilities %}

## Сведения о типах рекомендаций по безопасности

{% data reusables.advisory-database.beta-malware-advisories %}

Каждая из рекомендаций в {% data variables.product.prodname_advisory_database %} предназначена для уязвимости в проектах с открытым кодом{% ifversion GH-advisory-db-supports-malware %} или вредоносных программ с открытым кодом{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} Уязвимости в коде обычно создаются случайно и устраняются вскоре после обнаружения. Необходимо обновить код, чтобы использовать исправленную версию зависимости, как только она станет доступной.

{% ifversion GH-advisory-db-supports-malware %}

Вредоносные программы, с другой стороны, — это код для намеренного выполнения нежелательных или вредных функций. Вредоносная программа может быть нацелена на оборудование, программное обеспечение, конфиденциальные данные или пользователей любого приложения, использующего вредоносные программы. Необходимо удалить вредоносную программу из проекта и найти альтернативу, более безопасную замену зависимости.

{% endif %}

### Рекомендации, проверенные в {% data variables.product.company_short %}

Рекомендации, проверенные в {% data variables.product.company_short %}, связаны с уязвимостями системы безопасности{% ifversion GH-advisory-db-supports-malware %} или вредоносными программами{% endif %} и предназначены для пакетов в экосистемах, которые мы поддерживаем. Мы внимательно проверяем все рекомендации и следим, чтобы они содержали полное описание, а также информацию об экосистеме и пакете.

Как правило, мы называем поддерживаемые экосистемы по имени реестра пакетов соответствующего языка программирования программного обеспечения. Мы проверяем рекомендации, если они предназначены для уязвимости в пакете, который поступает из поддерживаемого реестра.

- Composer (реестр: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (реестр: https://hex.pm/){% endif %}
- Go (реестр: https://pkg.go.dev/) {%- ifversion fpt или ghec или ghes > 3.6 или ghae > 3.6 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (реестр: https://repo.maven.apache.org/maven2)
- npm (реестр: https://www.npmjs.com/)
- NuGet (реестр: https://www.nuget.org/)
- pip (реестр: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub (реестр: https://pub.dev/packages/registry){% endif %}
- RubyGems (реестр: https://rubygems.org/)
- Rust (реестр: https://crates.io/)

Если вы хотите предложить новую экосистему, которую нам стоит поддерживать, откройте [проблему](https://github.com/github/advisory-database/issues) для обсуждения.

Если вы включите {% data variables.product.prodname_dependabot_alerts %} для своих репозиториев, вы будете автоматически получать уведомления, когда новые рекомендации, проверенные в {% data variables.product.company_short %}, сообщат об уязвимости{% ifversion GH-advisory-db-supports-malware %} или вредоносной программе{% endif %} для пакета, который вы используете. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Непроверенные рекомендации

Непроверенные рекомендации — это уязвимости в системе безопасности, которые мы автоматически публикуем в {% data variables.product.prodname_advisory_database %} непосредственно из веб-канала Национальной базы данных уязвимостей. 

{% data variables.product.prodname_dependabot %} не создает {% data variables.product.prodname_dependabot_alerts %} для непроверенных рекомендаций, так как этот тип рекомендаций не проверяется на допустимость или полноту.

## Сведения об информации в рекомендациях по безопасности

Каждая рекомендация по безопасности содержит информацию об уязвимости{% ifversion GH-advisory-db-supports-malware %} или вредоносной программе,{% endif %} которая может включать описание, серьезность, затронутый пакет, экосистему пакетов, затронутые версии и версии с исправлениями, влияние и дополнительную информацию, такую ​​как ссылки, обходные решения и кредиты. Кроме того, рекомендации из списка Национальной базы данных уязвимостей содержат ссылку на запись CVE, где вы можете прочитать более подробную информацию об уязвимости, ее оценках CVSS и качественном уровне серьезности. Дополнительные сведения см. в [Национальной базе данных уязвимостей](https://nvd.nist.gov/) Национального института стандартов и технологий.

Уровень серьезности — это один из четырех возможных уровней, определенных в [Общей системе оценки уязвимостей (CVSS), раздел 5](https://www.first.org/cvss/specification-document).
- Низкий
- Средний или умеренный
- Высокий
- Критически важно

{% data variables.product.prodname_advisory_database %} использует уровни CVSS, описанные выше. Если {% data variables.product.company_short %} получает CVE, {% data variables.product.prodname_advisory_database %} использует CVSS версии 3.1. Если CVE импортирован, {% data variables.product.prodname_advisory_database %} поддерживает обе версии CVSS 3.0 и 3.1.

{% data reusables.repositories.github-security-lab %}

## Доступ к рекомендации в {% data variables.product.prodname_advisory_database %}

1. Перейдите к https://github.com/advisories.
2. При необходимости используйте любое из раскрывающихся меню, чтобы отфильтровать список.
  ![Раскрывающиеся фильтры](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Совет**. Вы можете использовать боковую панель слева, чтобы просмотреть проверенные в {% data variables.product.company_short %} и непроверенные рекомендации по отдельности.

   {% endtip %}
3. Щелкните рекомендацию, чтобы просмотреть подробные сведения. По умолчанию вы увидите рекомендации по уязвимостям системы безопасности, проверенные {% data variables.product.company_short %}. {% ifversion GH-advisory-db-supports-malware %} Чтобы отобразить рекомендации по вредоносным программам, используйте `type:malware` в строке поиска.{% endif %}


{% note %}

База данных также доступна с помощью API GraphQL. {% ifversion GH-advisory-db-supports-malware %} По умолчанию запросы возвращают {% data variables.product.company_short %}— проверенные рекомендации по работе с уязвимостями системы безопасности, если только не указано `type:malware`.{% endif %} Дополнительные сведения см. в разделе "Событие веб-перехватчика [`security_advisory`](/webhooks/event-payloads/#security_advisory)".

{% endnote %}

## Редактирование рекомендации в {% data variables.product.prodname_advisory_database %}
Вы можете предложить улучшения для любой рекомендации в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Редактирование рекомендаций по безопасности в {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

## Поиск в {% data variables.product.prodname_advisory_database %}

Вы можете выполнять поиск в базе данных и использовать квалификаторы, чтобы сузить область поиска. Например, вы можете искать рекомендации, созданные в определенную дату, в определенной экосистеме или в определенной библиотеке.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор  | Пример |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed): рекомендации по уязвимостям системы безопасности, проверенные {% data variables.product.company_short %}. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) будет отображать проверенные в {% data variables.product.company_short %} рекомендации для вредоносных программ. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) будет отображать непроверенные рекомендации. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) покажет рекомендацию с этим идентификатором {% data variables.product.prodname_advisory_database %}. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) покажет рекомендацию с этим идентификационным номером CVE. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) покажет только рекомендации, касающиеся пакетов NPM. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) будут отображаться только рекомендации с высоким уровнем серьезности. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) покажет только рекомендации, касающиеся библиотеки lodash. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) покажет только рекомендации с этим номером CWE. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) покажет только рекомендации, зачисленные на учетную запись пользователя "octocat". |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) сначала отсортирует самые старые рекомендации. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) сначала отсортирует самые новые рекомендации. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) будет сортировать по наиболее давним обновлениям. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) будет сортировать по самым последним обновлениям. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) покажет только те рекомендации, которые были отозваны. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) покажет рекомендации, созданные в эту дату. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) покажет только рекомендации, обновленные в эту дату. |

## Просмотр ваших уязвимых репозиториев

Для любой проверенной в {% data variables.product.company_short %} рекомендации в {% data variables.product.prodname_advisory_database %} вы можете увидеть, какие из ваших репозиториев подвержены этой уязвимости{% ifversion GH-advisory-db-supports-malware %} или вредоносной программе{% endif %}. Чтобы увидеть уязвимый репозиторий, у вас должен быть доступ к {% data variables.product.prodname_dependabot_alerts %} для этого репозитория. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Перейдите к https://github.com/advisories.
2. Щелкните рекомендацию.
3. В верхней части страницы рекомендаций щелкните **Оповещения Dependabot**.
   ![Оповещения Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. При желании для фильтрации списка используйте строку поиска или раскрывающиеся меню. Раскрывающееся меню "Организация" позволяет фильтровать {% data variables.product.prodname_dependabot_alerts %} для каждого владельца (организации или пользователя).
   ![Панель поиска и раскрывающиеся меню для фильтрации оповещений](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Чтобы получить дополнительные сведения о рекомендации по исправлению уязвимого репозитория, щелкните имя репозитория.

{% ifversion security-advisories-ghes-ghae %}
## Доступ к локальной базе данных рекомендаций по {% данных variables.location.product_location %}

Если администратор сайта включил {% данных variables.product.prodname_github_connect %} для {% данных variables.location.product_location %}, вы также можете просматривать проверенные рекомендации локально. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

Вы можете использовать локальную базу данных рекомендаций, чтобы проверить, добавлена ли определенная уязвимость безопасности и, следовательно, будете ли вы получать оповещения об уязвимых зависимостях. Вы также можете просмотреть все уязвимые репозитории. 

1. Перейдите к `https://HOSTNAME/advisories`.
2. При необходимости используйте любое из раскрывающихся меню, чтобы отфильтровать список.
  ![Раскрывающиеся фильтры](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **Примечание.** В список включаются только проверенные рекомендации. Непроверенные рекомендации можно просмотреть в {% data variables.product.prodname_advisory_database %} в {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье [Доступ к рекомендациям в базе данных рекомендаций GitHub](#accessing-an-advisory-in-the-github-advisory-database). 

   {% endnote %}
3. Щелкните рекомендацию, чтобы просмотреть подробные сведения. {% ifversion GH-advisory-db-supports-malware %} По умолчанию вы увидите {% data variables.product.company_short %}— проверенные рекомендации по работе с уязвимостями системы безопасности. Чтобы просмотреть рекомендации по вредоносным программам, укажите `type:malware` в строке поиска.{% endif %}

Вы также можете предлагать улучшения для включения в рекомендации непосредственно из локальной базы данных рекомендаций. Дополнительные сведения см. в разделе "[Изменение рекомендаций из {% данных variables.location.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Просмотр уязвимых репозиториев для {% данных variables.location.product_location %}

{% data reusables.repositories.enable-security-alerts %}

В локальной базе данных рекомендаций можно просмотреть репозитории, на которые влияют уязвимости системы безопасности{% ifversion GH-advisory-db-supports-malware %} и вредоносные программы{% endif %}. Чтобы увидеть уязвимый репозиторий, у вас должен быть доступ к {% data variables.product.prodname_dependabot_alerts %} для этого репозитория. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Перейдите к `https://HOSTNAME/advisories`.
2. Щелкните рекомендацию.
3. В верхней части страницы рекомендаций щелкните **Оповещения Dependabot**.
   ![Оповещения Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. При желании для фильтрации списка используйте строку поиска или раскрывающиеся меню. Раскрывающееся меню "Организация" позволяет фильтровать {% data variables.product.prodname_dependabot_alerts %} для каждого владельца (организации или пользователя).
   ![Панель поиска и раскрывающиеся меню для фильтрации оповещений](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Чтобы получить дополнительные сведения о рекомендации по исправлению уязвимого репозитория, щелкните имя репозитория.

{% endif %}

## Дополнительные материалы

- [Определение "уязвимости"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability), данное MITRE
