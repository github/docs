---
title: Просмотр уязвимостей безопасности в базе данных рекомендаций GitHub
intro: The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 0a44242676db751aaead576535d3ba14426c9ad6
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116048"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-security-vulnerabilities"></a>Об уязвимостях системы безопасности

{% data reusables.repositories.a-vulnerability-is %}

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>О {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} содержит список известных уязвимостей системы безопасности, разделенным на две категории: проверенные в {% data variables.product.company_short %} и непроверенные рекомендации.

{% data reusables.repositories.tracks-vulnerabilities %}

### <a name="about--data-variablesproductcompany_short--reviewed-advisories"></a>О рекомендациях, проверенных в {% data variables.product.company_short %}

Проверенные в {% data variables.product.company_short %} рекомендации — это уязвимости системы безопасности, которые были сопоставлены с пакетами, отслеживаемыми графом зависимостей {% data variables.product.company_short %}.

Мы тщательно проверяем каждую рекомендацию на допустимость. Каждая рекомендация, проверенная в {% data variables.product.company_short %}, содержит полное описание и информацию об экосистеме и пакете.

Если вы включите {% data variables.product.prodname_dependabot_alerts %} для своих репозиториев, вы будете автоматически получать уведомления, когда новые рекомендации, проверенные в {% data variables.product.company_short %}, повлияют на пакеты, от которых вы зависите. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### <a name="about-unreviewed-advisories"></a>О непроверенных рекомендациях

Непроверенные рекомендации — это уязвимости в системе безопасности, которые мы автоматически публикуем в {% data variables.product.prodname_advisory_database %} непосредственно из веб-канала Национальной базы данных уязвимостей. 

{% data variables.product.prodname_dependabot %} не создает {% data variables.product.prodname_dependabot_alerts %} для непроверенных рекомендаций, так как этот тип рекомендаций не проверяется на допустимость или полноту.

## <a name="about-security-advisories"></a>О рекомендациях по безопасности

Каждая рекомендация по безопасности содержит информацию об уязвимости, которая может включать описание, серьезность, затронутый пакет, экосистему пакетов, затронутые версии и версии с исправлениями, влияние и дополнительную информацию, такую ​​как ссылки, обходные решения и кредиты. Кроме того, рекомендации из списка Национальной базы данных уязвимостей содержат ссылку на запись CVE, где вы можете прочитать более подробную информацию об уязвимости, ее оценках CVSS и качественном уровне серьезности. Дополнительные сведения см. в [Национальной базе данных уязвимостей](https://nvd.nist.gov/) Национального института стандартов и технологий.

Уровень серьезности — это один из четырех возможных уровней, определенных в [Общей системе оценки уязвимостей (CVSS), раздел 5](https://www.first.org/cvss/specification-document).
- Низкий
- Средний или умеренный
- Высокий
- Критически важно

{% data variables.product.prodname_advisory_database %} использует уровни CVSS, описанные выше. Если {% data variables.product.company_short %} получает CVE, {% data variables.product.prodname_advisory_database %} использует CVSS версии 3.1. Если CVE импортирован, {% data variables.product.prodname_advisory_database %} поддерживает обе версии CVSS 3.0 и 3.1.

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Доступ к рекомендации в {% data variables.product.prodname_advisory_database %}

1. Перейдите к https://github.com/advisories.
2. При необходимости используйте любое из раскрывающихся меню, чтобы отфильтровать список.
  ![Раскрывающиеся фильтры](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Совет**. Вы можете использовать боковую панель слева, чтобы просмотреть проверенные в {% data variables.product.company_short %} и непроверенные рекомендации по отдельности.

   {% endtip %}
3. Щелкните любую рекомендацию, чтобы просмотреть подробности.

{% note %}

База данных также доступна с помощью API GraphQL. Дополнительные сведения см. в статье [Событие веб-перехватчика `security_advisory`](/webhooks/event-payloads/#security_advisory).

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Редактирование рекомендации в {% data variables.product.prodname_advisory_database %}
Вы можете предложить улучшения для любой рекомендации в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Редактирование рекомендаций по безопасности в {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>Поиск в {% data variables.product.prodname_advisory_database %}

Вы можете выполнять поиск в базе данных и использовать квалификаторы, чтобы сузить область поиска. Например, вы можете искать рекомендации, созданные в определенную дату, в определенной экосистеме или в определенной библиотеке.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор  | Пример |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) будет отображать проверенные в {% data variables.product.company_short %} рекомендации. |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) будет отображать непроверенные рекомендации. |
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

## <a name="viewing-your-vulnerable-repositories"></a>Просмотр ваших уязвимых репозиториев

Для любой проверенной в {% data variables.product.company_short %} рекомендации в {% data variables.product.prodname_advisory_database %} вы можете увидеть, какие из ваших репозиториев подвержены этой уязвимости. Чтобы увидеть уязвимый репозиторий, у вас должен быть доступ к {% data variables.product.prodname_dependabot_alerts %} для этого репозитория. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Перейдите к https://github.com/advisories.
2. Щелкните рекомендацию.
3. В верхней части страницы рекомендаций щелкните **Оповещения Dependabot**.
   ![Оповещения Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. При желании для фильтрации списка используйте строку поиска или раскрывающиеся меню. Раскрывающееся меню "Организация" позволяет фильтровать {% data variables.product.prodname_dependabot_alerts %} для каждого владельца (организации или пользователя).
   ![Панель поиска и раскрывающиеся меню для фильтрации оповещений](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Чтобы получить дополнительные сведения об уязвимости и рекомендации по устранению уязвимого репозитория, щелкните имя репозитория.

## <a name="further-reading"></a>Дополнительные материалы

- [Определение "уязвимости"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability), данное MITRE
