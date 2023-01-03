---
title: Problembehandlung bei der Erkennung von anfälligen Abhängigkeiten
intro: 'Wenn die Abhängigkeitsinformationen, die vom {% data variables.product.product_name %} gemeldet werden, nicht deinen Erwartungen entsprechen, kannst du einige Punkte in Betracht ziehen und verschiedene Aspekte überprüfen.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106533'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## Warum scheinen einige Abhängigkeiten zu fehlen?

{% data variables.product.prodname_dotcom %} generiert und zeigt Abhängigkeitsdaten anders an als andere Tools. Wenn du also ein anderes Tool zur Identifizierung von Abhängigkeiten verwendet hast, werden dir höchstwahrscheinlich andere Ergebnisse angezeigt. Beachten Sie Folgendes:

*   {% data variables.product.prodname_advisory_database %} ist eine der Datenquellen, die {% data variables.product.prodname_dotcom %} verwendet, um anfällige Abhängigkeiten zu identifizieren{% ifversion GH-advisory-db-supports-malware %} und Malware{% endif %}. Es handelt sich um eine kostenlose, kuratierte Datenbank mit Sicherheitsempfehlungen für gängige Paketökosysteme auf {% data variables.product.prodname_dotcom %}. Sie enthält sowohl Daten, die direkt an {% data variables.product.prodname_dotcom %} von {% data variables.product.prodname_security_advisories %} gemeldet werden, als auch Daten aus offiziellen Feeds und Communityquellen. Diese Daten werden von {% data variables.product.prodname_dotcom %} überprüft und kuratiert, um sicherzustellen, dass keine falschen oder nicht handlungsrelevanten Informationen an die Entwicklercommunity weitergegeben werden. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   Der Abhängigkeitsgraph analysiert alle bekannten Paketmanifestdateien im Repository eines Benutzers. Für npm wird zum Beispiel die Datei _package-lock.json_ geparst. Es wird ein Graph mit allen Abhängigkeiten des Repositorys und den öffentlichen Abhängigkeiten erstellt. Dies geschieht, wenn du das Abhängigkeitsdiagramm aktivierst und eine Person in den Standardbranch pusht und Änderungen an einem unterstützten Manifestformat vornimmt. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) und [Problembehandlung beim Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph).
*   {% data variables.product.prodname_dependabot %} scannt jeden Push in den Standardbranch, der eine Manifestdatei enthält. Wenn ein neuer Hinweis hinzugefügt wird, werden alle vorhandenen Repositorys überprüft und eine Warnung für jedes betroffene Repository erstellt. {% data variables.product.prodname_dependabot_alerts %} werden auf Repositoryebene zusammengefasst, anstatt eine Meldung pro Hinweis zu erstellen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).
*   {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %} werden ausgelöst, wenn du eine Meldung über eine anfällige Abhängigkeit in deinem Repository empfängst. Sofern möglich, erstellt {% data variables.product.prodname_dependabot %} einen Pull Request in deinem Repository, um die anfällige Abhängigkeit auf die niedrigste sichere Version zu aktualisieren, die zur Vermeidung der Sicherheitslücke benötigt wird. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) und [Behandeln von {% data variables.product.prodname_dependabot %}-Fehlern](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors).
  
    {% endif %}{% data variables.product.prodname_dependabot %} überprüft die Repositorys nicht nach einem bestimmten Zeitplan, sondern nur bei Änderungen. Eine Überprüfung wird zum Beispiel ausgelöst, wenn eine neue Abhängigkeit hinzugefügt wird ({% data variables.product.prodname_dotcom %} überprüft dies bei jedem Push) oder wenn ein neuer Hinweis zur Datenbank{% ifversion ghes or ghae %} hinzugefügt und mit {% data variables.location.product_location %}{% endif %} synchronisiert wird. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies).

## Beziehen sich {% data variables.product.prodname_dependabot_alerts %} nur auf unsichere Abhängigkeiten in Manifesten und Sperrdateien?

{% data variables.product.prodname_dependabot_alerts %} informieren dich über Abhängigkeiten, die du aktualisieren solltest, einschließlich transitiver Abhängigkeiten, bei denen die Version aus einem Manifest oder einer Sperrdatei ermittelt werden kann. {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %} schlägt nur dann eine Änderung vor, wenn {% data variables.product.prodname_dependabot %} die Abhängigkeit direkt korrigieren kann, d. h. in diesen Fällen:
* Direkte Abhängigkeiten sind explizit in einem Manifest oder einer Sperrdatei definiert
* Transitive Abhängigkeiten sind in einer Sperrdatei{% endif %} definiert

**Überprüfung**: Liegt das nicht entschärfte Sicherheitsrisiko für eine Komponente vor, die weder im Manifest noch in der Sperrdatei des Repositorys angegeben ist?

## Warum erhalte ich für manche Ökosysteme keine {% data variables.product.prodname_dependabot_alerts %}?

{% data variables.product.prodname_dependabot_alerts %} werden für mehrere Ökosysteme unterstützt, in denen wir hochwertige, handlungsrelevante Daten bereitstellen können. Kuratierte Hinweise in der {% data variables.product.prodname_advisory_database %}, im Abhängigkeitsdiagramm, {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %}-Sicherheitsupdates, {% endif %}und {% data variables.product.prodname_dependabot_alerts %} werden für verschiedene Ökosysteme bereitgestellt, darunter Maven in Java, npm und Yarn in JavaScript, NuGet in .NET, pip in Python, RubyGems in Ruby und Composer in PHP. Im Laufe der Zeit werden wir Unterstützung für weitere Ökosysteme hinzufügen. Eine Übersicht über die von uns unterstützten Paketökosysteme findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).

Hinweise können auch für andere Ökosysteme vorhanden sein. Die Informationen in einem nicht überprüften Sicherheitshinweis werden von den Verantwortlichen für ein bestimmtes Repository bereitgestellt. Diese Daten werden nicht von {% data variables.product.prodname_dotcom %} zusammengestellt. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Überprüfung**: Betrifft das nicht entschärfte Sicherheitsrisiko ein nicht unterstütztes Ökosystem?

## Generiert {% data variables.product.prodname_dependabot %} Warnungen für Sicherheitsrisiken, die schon seit vielen Jahren bekannt sind?

Die {% data variables.product.prodname_advisory_database %} wurde im November 2019 eingeführt und zunächst mit Hinweisen zu Sicherheitsrisiken für die unterstützten Ökosysteme (ab 2017) aufgefüllt. Beim Hinzufügen von CVEs in die Datenbank werden vorrangig neuere CVEs und CVEs aufgenommen, die neuere Softwareversionen betreffen.

Es sind einige Informationen über ältere Sicherheitsrisiken verfügbar, vor allem, wenn diese CVEs stark verbreitet sind. Allerdings sind einige alte Sicherheitsrisiken nicht in der {% data variables.product.prodname_advisory_database %} enthalten. Wenn du möchtest, dass ein bestimmtes altes Sicherheitsrisiko in die Datenbank aufgenommen wird, kontaktiere den {% data variables.contact.contact_support %}. 

**Überprüfung**: Liegt das Veröffentlichungsdatum für das nicht entschärfte Sicherheitsrisiko in der National Vulnerability Database vor dem Jahr 2017?

## Warum verwendet {% data variables.product.prodname_advisory_database %} eine Teilmenge der veröffentlichten Sicherheitsrisikodaten?

Einige Tools von Drittanbietern verwenden nicht kuratierte CVE-Daten, d. h. sie wurden nicht durch eine Person geprüft oder gefiltert. Das bedeutet, dass CVEs mit Fehlern in Bezug auf Kennzeichnung oder Schweregrad oder anderen Qualitätsproblemen häufiger Warnungen auslösen, mehr falsch-positive und weniger nützliche Warnungen liefern.

Da {% data variables.product.prodname_dependabot %} kuratierte Daten in der {% data variables.product.prodname_advisory_database %} verwendet, ist der Umfang der Warnungen vielleicht geringer, aber die Warnungen, die du erhältst, sind genau und relevant.

{% ifversion fpt or ghec %}
## Wird für jede unsichere Abhängigkeit eine eigene Warnung generiert?

Wenn eine Abhängigkeit mehrere Sicherheitsrisiken aufweist, wird für jedes Sicherheitsrisiko eine Warnung auf Empfehlungs- und Manifestebene generiert.

![Screenshot der Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“ mit zwei Warnungen aus demselben Paket mit unterschiedlichen Manifesten.](/assets/images/help/repository/dependabot-alerts-view.png)

Die alten {% data variables.product.prodname_dependabot_alerts %} wurden in einer einzigen aggregierten Meldung mit allen Sicherheitsrisiken für dieselbe Abhängigkeit zusammengefasst. Wenn du auf einen Link zu einer älteren {% data variables.product.prodname_dependabot %}-Warnung klickst, wirst du auf die Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“ umgeleitet, die gefiltert wird, um Sicherheitsrisiken für dieses abhängige Paket und Manifest anzuzeigen.

![Screenshot der Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“ mit gefilterten Warnungen beim Navigieren zu einer alten {% data variables.product.prodname_dependabot %}-Warnung.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

Die Anzahl von {% data variables.product.prodname_dependabot_alerts %} in {% data variables.product.prodname_dotcom %} zeigt eine Gesamtsumme der Warnungen an. Diese gibt die Anzahl von Sicherheitsrisiken an, nicht die Anzahl von Abhängigkeiten.

**Überprüfung**: Wenn eine Diskrepanz bei den angezeigten Gesamtsummen vorliegt, stelle sicher, dass du nicht die Anzahl von Warnungen mit der Anzahl von Abhängigkeiten vergleichst. Vergewissere dich auch, dass alle Warnmeldungen und nicht nur eine Teilmenge der gefilterten Warnmeldungen angezeigt werden.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Kann Dependabot bestimmte Abhängigkeiten ignorieren?

Du kannst {% data variables.product.prodname_dependabot %} so konfigurieren, dass bestimmte Abhängigkeiten in der Konfigurationsdatei ignoriert werden, wodurch Sicherheits- und Versionsupdates für diese Abhängigkeiten verhindert werden. Wenn du nur Sicherheitsupdates verwenden möchtest, musst du das Standardverhalten mit einer Konfigurationsdatei außer Kraft setzen. Weitere Informationen findest du unter [Überschreiben des Standardverhaltens mit einer Konfigurationsdatei](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file). Anhand dieser kannst du verhindern, dass Versionsupdates aktiviert werden. Informationen zum Ignorieren von Abhängigkeiten findest du unter „[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore).“ {% endif %}

## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
- [Problembehandlung beim Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph){% ifversion fpt or ghec or ghes %}
- [Problembehandlung bei {% data variables.product.prodname_dependabot %}-Fehlern](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors){% endif %}
