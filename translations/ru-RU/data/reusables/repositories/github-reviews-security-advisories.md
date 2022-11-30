---
ms.openlocfilehash: af93e8779411bd193314c306cc7c1a3c100e83c7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455696"
---
{% data variables.product.prodname_dotcom %} проверяет каждую опубликованную рекомендацию по безопасности, добавляет ее в {% data variables.product.prodname_advisory_database %} и может использовать ее для отправки {% data variables.product.prodname_dependabot_alerts %} в затронутые репозитории. Если рекомендация по безопасности поступает из вилки, мы отправим оповещение только в том случае, если пакет принадлежит вилке и опубликован под уникальным именем в общедоступном реестре пакетов. Этот процесс может занять до 72 часов, и с {% data variables.product.prodname_dotcom %} может поступить запрос дополнительных сведений.

Дополнительные сведения об {% data variables.product.prodname_dependabot_alerts %} см. в разделах [Сведения об {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies) и [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-dependabot-security-updates). Дополнительные сведения об {% data variables.product.prodname_advisory_database %} см. в разделе [Обзор советов по безопасности в {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database).
