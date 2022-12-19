---
title: GitHub-Sicherheitsfeatures
intro: 'Eine Übersicht der Sicherheitsfeatures von {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: a1daa40bc175bc92b0ed681e053b3f87204c2a84
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109796'
---
## Informationen zu den Sicherheitsfeatures von {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} bietet Sicherheitsfeatures, mit denen Code und Geheimnisse in Repositorys und verschiedenen Organisationen geschützt werden können. {% data reusables.advanced-security.security-feature-availability %}

Die {% data variables.product.prodname_advisory_database %} enthält eine kuratierte Liste von Sicherheitsrisiken, die du anzeigen, durchsuchen und filtern kannst. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Verfügbar für alle Repositorys
### Sicherheitsrichtlinie

Hiermit vereinfachst du es deinen Benutzer*innen, in deinem Repository gefundene Sicherheitsrisiken vertraulich zu melden. Weitere Informationen findest du unter [Hinzufügen einer Sicherheitsrichtlinie zu deinem Repository](/code-security/getting-started/adding-a-security-policy-to-your-repository).

{% ifversion fpt or ghec %}
### Sicherheitsempfehlungen

Erörtere und behebe Sicherheitsrisiken im Code deines Repositorys auf private Weise. Du kannst dann eine Sicherheitsempfehlung veröffentlichen, um deine Community über die Sicherheitslücke zu informieren und den Communitymitgliedern zu empfehlen, ein Upgrade durchzuführen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories).

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} und Sicherheitsupdates

Du kannst Warnungen zu Abhängigkeiten mit bekannten Sicherheitsrisiken anzeigen, und entscheiden, ob Pull Requests automatisch generiert werden sollen, um diese Abhängigkeiten zu aktualisieren. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) und [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Zeige Warnungen zu Abhängigkeiten mit bekannten Sicherheitsrisiken an, und verwalte diese Warnungen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Versionsupdates für {% data variables.product.prodname_dependabot %}

Verwende {% data variables.product.prodname_dependabot %} zur automatisch Generierung von Pull Requests, um deine Abhängigkeiten auf dem neuesten Stand zu halten. Dadurch wird die Gefährdung von älteren Versionen durch Abhängigkeiten verringert. Die Verwendung neuer Versionen erleichtert das Anwenden von Patches, wenn Sicherheitsrisiken erkannt werden. Ebenfalls erleichtert es {% data variables.product.prodname_dependabot_security_updates %} das erfolgreiche Generieren von Pull Requests zum Upgraden anfälliger Abhängigkeiten. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates).
{% endif %}

### Abhängigkeitsdiagramm
Mit dem Abhängigkeitsdiagramm kannst du die Ökosysteme und Pakete erkunden, von denen dein Repository abhängig ist, sowie die Repositorys und Pakete, die von deinem Repository abhängen.

Du findest das Abhängigkeitsdiagramm auf der Registerkarte **Erkenntnisse** des Repositorys. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).

{% ifversion security-overview-displayed-alerts %}
### Sicherheitsübersicht

Mit der Sicherheitsübersicht kannst du Sicherheitskonfigurationen und Warnungen überprüfen, wodurch die am stärksten gefährdeten Repositorys und Organisationen identifiziert werden können. Weitere Informationen findest du unter [Informationen zur Sicherheitsübersicht](/code-security/security-overview/about-the-security-overview).

{% else %}
### Sicherheitsübersicht für Repositorys
Die Sicherheitsübersicht zeigt, welche Sicherheitsfeatures für das Repository aktiviert sind, und bietet die Möglichkeit, alle verfügbaren Sicherheitsfeatures zu konfigurieren, die derzeit nicht aktiviert sind.
{% endif %}

## Verfügbar mit {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %} Die folgenden {% data variables.product.prodname_GH_advanced_security %}-Features sind auf {% data variables.product.prodname_dotcom_the_website %} für öffentliche Repositorys kostenlos verfügbar. Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} nutzen, können den vollen Funktionsumfang in jedem ihrer Repositorys verwenden. Eine Liste der Features, die mit {% data variables.product.prodname_ghe_cloud %} verfügbar sind, findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %} Viele {% data variables.product.prodname_GH_advanced_security %}-Features sind auf {% data variables.product.prodname_dotcom_the_website %} für alle öffentlichen Repositorys kostenlos verfügbar. Organisationen mit einem Unternehmenskonto, das über eine {% data variables.product.prodname_GH_advanced_security %}-Lizenz verfügt, können die folgenden Features in allen ihren Repositorys verwenden. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} {% data variables.product.prodname_GH_advanced_security %}-Features sind für Unternehmen mit einer {% data variables.product.prodname_GH_advanced_security %}-Lizenz verfügbar. Die Features sind auf Repositorys beschränkt, die einer Organisation gehören. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} {% data variables.product.prodname_GH_advanced_security %}-Features sind für Repositorys verfügbar, die sich im Besitz einer Organisation befinden. {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Hiermit kannst du Sicherheitsrisiken und Fehler in neuem oder geänderten Code automatisch erkennen. Mögliche Probleme werden hervorgehoben und mit detaillierten Informationen angezeigt, damit du den Code korrigieren kannst, bevor er mit dem Standardbranch zusammengeführt wird. Weitere Informationen findest du unter [Informationen zu Codeüberprüfungen](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning).

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Dieses Feature erkennt automatisch kompromittierte Geheimnisse in allen öffentlichen Repositorys. {% data variables.product.company_short %} informiert den entsprechenden Dienstanbieter darüber, dass das Geheimnis kompromittiert wurde. Weitere Details zu unterstützten Geheimnissen und Dienstanbietern findest du unter [{% data variables.product.prodname_secret_scanning_caps %}-Muster](/code-security/secret-scanning/secret-scanning-patterns).
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} Nur mit einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügbar.
{% endif %}

Hiermit werden Token oder Anmeldeinformationen, die in ein Repository eingecheckt wurden, automatisch erkannt. Du kannst Warnungen für alle Geheimnisse anzeigen, die {% data variables.product.company_short %} in deinem Code findet, damit du weißt, welche Token oder Anmeldeinformationen als kompromittiert behandelt werden müssen. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security).
{% endif %}

### Abhängigkeitsüberprüfung

Zeige die vollständigen Auswirkungen von Änderungen an Abhängigkeiten an, und sieh dir Details zu anfälligen Versionen an, bevor du einen Pull Request zusammenführst. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/about-dependency-review).

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Sicherheitsübersicht für Organisationen{% ifversion ghes > 3.4 or ghae > 3.4 %}, Unternehmen{% endif %} und Teams

Überprüfe die Sicherheitskonfiguration und Warnungen für eine Organisation, und identifiziere die Repositorys mit dem größten Risiko. Weitere Informationen findest du unter [Informationen zur Sicherheitsübersicht](/code-security/security-overview/about-the-security-overview).
{% endif %}

## Weitere Informationsquellen
- [{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)
- [{% data variables.product.prodname_dotcom %} language support](/github/getting-started-with-github/github-language-support)
