---
title: Geheimnisüberprüfungsmuster
intro: 'Listen der unterstützten Geheimnisse und der Partner, mit denen {% data variables.product.company_short %} zusammenarbeitet, um betrügerische Verwendung von versehentlich committeten Geheimnissen zu verhindern'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184504'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## Informationen zu {% data variables.product.prodname_secret_scanning %}-Mustern

{% data variables.product.product_name %} verfügt über diese Arten von {% data variables.product.prodname_secret_scanning %}-Mustern:

1. **Partnermuster:** Werden verwendet, um potenzielle Geheimnisse in allen öffentlichen Repositorys zu erkennen. Ausführliche Informationen findest du unter [Unterstützte Geheimnisse für Partnermuster](#supported-secrets-for-partner-patterns).
2. **Erweiterte Sicherheitsmuster:** Werden verwendet, um potenzielle Geheimnisse in Repositorys mit aktiviertem Feature „{% data variables.product.prodname_secret_scanning %}“ zu erkennen. {% ifversion ghec %} Ausführliche Informationen findest du unter [Unterstützte Geheimnisse für erweiterte Sicherheit](#supported-secrets-for-advanced-security).{% endif %}{% ifversion secret-scanning-push-protection %}
3. **Pushschutzmuster:** Diese Muster werden verwendet, um potenzielle Geheimnisse in Repositorys mit dem zum Pushschutz aktivierten Feature „{% data variables.product.prodname_secret_scanning %}“ zu erkennen. Ausführliche Informationen findest du unter [Unterstützte Geheimnisse für den Pushschutz](#supported-secrets-for-push-protection).{% endif %}

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_GH_advanced_security %} verwenden, können {% data variables.product.prodname_secret_scanning_GHAS %} für ihre Repositorys aktivieren. Ausführliche Informationen zu diesen Mustern findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Unterstützte Geheimnisse für Partnermuster

{% data variables.product.product_name %} überprüft derzeit öffentliche Repositorys auf Geheimnisse, die von den folgenden Dienstanbietern ausgegeben wurden, und benachrichtigt den entsprechenden Dienstanbieter, wenn ein Geheimnis in einem Commit erkannt wird. Weitere Informationen zu {% data variables.product.prodname_secret_scanning_partner %} findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns).

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## Unterstützte Geheimnisse{% ifversion ghec %} für erweiterte Sicherheit{% endif %}

Wenn {% data variables.product.prodname_secret_scanning_GHAS %} aktiviert ist, sucht {% data variables.product.prodname_dotcom %} nach Geheimnissen, die von den folgenden Dienstanbietern veröffentlicht wurden. {% ifversion ghec %}Weitere Informationen zu {% data variables.product.prodname_secret_scanning_GHAS %} findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

Wenn du die REST-API für die Geheimnisüberprüfung verwendest, kannst du den Geheimnistyp (`Secret type`) verwenden, um Berichte für Geheimnisse von bestimmten Ausstellern zu erstellen. Weitere Informationen findest du unter [Geheimnisüberprüfung](/enterprise-cloud@latest/rest/secret-scanning).
 
{% ifversion ghes or ghae or ghec %} {% note %}

**Hinweis:** Du kannst außerdem benutzerdefinierte {% data variables.product.prodname_secret_scanning %}-Muster für dein Repository, deine Organisation oder dein Unternehmen definieren. Weitere Informationen findest du unter [Definieren von benutzerdefinierten Mustern für {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning).

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## Unterstützte Geheimnisse für den Pushschutz

{% data variables.product.prodname_secret_scanning_caps %} überprüft als Pushschutz derzeit Repositorys auf Geheimnisse, die von den folgenden Dienstanbietern ausgestellt wurden.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## Weiterführende Themen

- [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository)
- [Schützen deines Kontos und deiner Daten](/github/authenticating-to-github/keeping-your-account-and-data-secure) {%- ifversion fpt or ghec %}
- [{% data variables.product.prodname_secret_scanning_caps %}-Partnerprogramm](/developers/overview/secret-scanning-partner-program) {%- else %}
- [{% data variables.product.prodname_secret_scanning_caps %}-Partnerprogramm](/free-pro-team@latest/developers/overview/secret-scanning-partner-program) in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation {% endif %}
