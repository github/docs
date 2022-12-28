---
title: Сведения о базе данных рекомендаций GitHub
intro: '{% data variables.product.prodname_advisory_database %} содержит список известных уязвимостей системы безопасности {% ifversion GH-advisory-db-supports-malware %}и вредоносных программ{% endif %}, разделенный на две категории: проверенные в {% data variables.product.company_short %} и непроверенные рекомендации.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159080'
---
## О {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Рекомендации по безопасности публикуются в виде JSON-файлов в формате уязвимости с открытым кодом (OSV). Дополнительные сведения о формате OSV см. в разделе Формат [уязвимостей с открытым кодом](https://ossf.github.io/osv-schema/).

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
- Go (реестр: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
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

## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)
- [Определение "уязвимости"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability), данное MITRE
